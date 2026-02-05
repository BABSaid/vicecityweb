import { useState, useEffect } from 'react';

interface TwitchStream {
  user_login: string;
  viewer_count: number;
  thumbnail_url: string;
  title: string;
}

interface TwitchTokenResponse {
  access_token: string;
  expires_in: number;
}

interface LiveStatus {
  [username: string]: {
    isLive: boolean;
    viewers: number;
    thumbnail?: string;
    title?: string;
  };
}

// Configuration Twitch API
const TWITCH_CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID || 'YOUR_TWITCH_CLIENT_ID';
const TWITCH_CLIENT_SECRET = import.meta.env.VITE_TWITCH_CLIENT_SECRET || 'YOUR_TWITCH_CLIENT_SECRET';

let cachedToken: string | null = null;
let tokenExpiry: number = 0;

/**
 * Hook pour récupérer le statut live des streamers Twitch
 * @param usernames - Liste des noms d'utilisateurs Twitch à surveiller
 * @param refreshInterval - Intervalle de rafraîchissement en ms (défaut: 60000 = 1 minute)
 */
export function useTwitchLiveStatus(usernames: string[], refreshInterval = 60000) {
  const [liveStatus, setLiveStatus] = useState<LiveStatus>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (usernames.length === 0) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    async function getAccessToken(): Promise<string | null> {
      // Vérifier si on a un token en cache valide
      if (cachedToken && Date.now() < tokenExpiry) {
        return cachedToken;
      }

      try {
        const response = await fetch(
          `https://id.twitch.tv/oauth2/token?client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
          { method: 'POST' }
        );

        if (!response.ok) {
          throw new Error('Failed to get Twitch access token');
        }

        const data: TwitchTokenResponse = await response.json();
        cachedToken = data.access_token;
        tokenExpiry = Date.now() + (data.expires_in - 60) * 1000; // Expiration - 1 minute de sécurité

        return cachedToken;
      } catch (err) {
        console.error('Error getting Twitch token:', err);
        return null;
      }
    }

    async function fetchLiveStatus() {
      try {
        setError(null);

        const token = await getAccessToken();
        if (!token) {
          throw new Error('Unable to authenticate with Twitch API');
        }

        // Construire la requête pour tous les streamers
        const usernamesQuery = usernames.map(u => `user_login=${u.toLowerCase()}`).join('&');
        const response = await fetch(
          `https://api.twitch.tv/helix/streams?${usernamesQuery}`,
          {
            headers: {
              'Client-ID': TWITCH_CLIENT_ID,
              'Authorization': `Bearer ${token}`
            }
          }
        );

        if (!response.ok) {
          throw new Error(`Twitch API error: ${response.status}`);
        }

        const data = await response.json();
        const streams: TwitchStream[] = data.data || [];

        // Créer un objet avec le statut de chaque streamer
        const status: LiveStatus = {};
        
        // Initialiser tous les streamers comme offline
        usernames.forEach(username => {
          status[username.toLowerCase()] = {
            isLive: false,
            viewers: 0
          };
        });

        // Mettre à jour les streamers en live
        streams.forEach(stream => {
          status[stream.user_login.toLowerCase()] = {
            isLive: true,
            viewers: stream.viewer_count,
            thumbnail: stream.thumbnail_url.replace('{width}', '440').replace('{height}', '248'),
            title: stream.title
          };
        });

        if (isMounted) {
          setLiveStatus(status);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error fetching Twitch live status:', err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unknown error');
          setIsLoading(false);
        }
      }
    }

    // Fetch initial
    fetchLiveStatus();

    // Configurer le rafraîchissement automatique
    const interval = setInterval(fetchLiveStatus, refreshInterval);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [usernames.join(','), refreshInterval]);

  return { liveStatus, isLoading, error };
}