import type { VercelRequest, VercelResponse } from '@vercel/node';

interface TwitchTokenResponse {
  access_token: string;
  expires_in: number;
}

interface TwitchStream {
  user_login: string;
  viewer_count: number;
  thumbnail_url: string;
  title: string;
}

interface StreamsResponse {
  data: TwitchStream[];
}

// Cache du token OAuth pour éviter de le redemander à chaque requête
let cachedToken: string | null = null;
let tokenExpiry: number = 0;

/**
 * Endpoint serverless Vercel pour récupérer le statut live des streamers Twitch
 * Route: /api/twitch-status?usernames=username1,username2,username3
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers pour permettre les requêtes depuis le front
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Vérifier que la méthode est GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Récupérer les noms d'utilisateurs depuis la query string
    const { usernames } = req.query;

    if (!usernames || typeof usernames !== 'string') {
      return res.status(400).json({ 
        error: 'Missing or invalid usernames parameter',
        usage: '/api/twitch-status?usernames=username1,username2'
      });
    }

    const usernameList = usernames.split(',').map(u => u.trim().toLowerCase()).filter(Boolean);

    if (usernameList.length === 0) {
      return res.status(400).json({ error: 'No valid usernames provided' });
    }

    // Récupérer les variables d'environnement
    const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID;
    const TWITCH_CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;

    if (!TWITCH_CLIENT_ID || !TWITCH_CLIENT_SECRET) {
      console.error('❌ Missing Twitch credentials in environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error',
        details: 'Twitch API credentials not configured'
      });
    }

    // Fonction pour obtenir un token OAuth
    async function getAccessToken(): Promise<string> {
      // Vérifier si on a un token en cache valide
      if (cachedToken && Date.now() < tokenExpiry) {
        return cachedToken;
      }

      const tokenResponse = await fetch(
        `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
        { method: 'POST' }
      );

      if (!tokenResponse.ok) {
        const errorText = await tokenResponse.text();
        console.error('❌ Twitch Auth Error:', errorText);
        throw new Error(`Failed to authenticate with Twitch: ${tokenResponse.status}`);
      }

      const tokenData: TwitchTokenResponse = await tokenResponse.json();
      cachedToken = tokenData.access_token;
      tokenExpiry = Date.now() + (tokenData.expires_in - 60) * 1000; // Expiration - 1 minute de sécurité

      console.log('✅ Twitch token obtained successfully');
      return cachedToken;
    }

    // Obtenir le token d'accès
    const accessToken = await getAccessToken();

    // Construire la requête pour tous les streamers
    const usernamesQuery = usernameList.map(u => `user_login=${u}`).join('&');
    const streamsResponse = await fetch(
      `https://api.twitch.tv/helix/streams?${usernamesQuery}`,
      {
        headers: {
          'Client-ID': TWITCH_CLIENT_ID,
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );

    if (!streamsResponse.ok) {
      const errorText = await streamsResponse.text();
      console.error('❌ Twitch Streams API Error:', errorText);
      throw new Error(`Twitch API error: ${streamsResponse.status}`);
    }

    const streamsData: StreamsResponse = await streamsResponse.json();
    const streams = streamsData.data || [];

    // Créer un objet avec le statut de chaque streamer
    const liveStatus: Record<string, {
      isLive: boolean;
      viewers: number;
      thumbnail?: string;
      title?: string;
    }> = {};

    // Initialiser tous les streamers comme offline
    usernameList.forEach(username => {
      liveStatus[username] = {
        isLive: false,
        viewers: 0
      };
    });

    // Mettre à jour les streamers en live
    streams.forEach(stream => {
      liveStatus[stream.user_login.toLowerCase()] = {
        isLive: true,
        viewers: stream.viewer_count,
        thumbnail: stream.thumbnail_url.replace('{width}', '440').replace('{height}', '248'),
        title: stream.title
      };
    });

    // Retourner les données
    return res.status(200).json({
      success: true,
      liveStatus,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Error in twitch-status endpoint:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
