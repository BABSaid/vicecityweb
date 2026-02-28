import { useState, useEffect, useMemo } from 'react';

interface LiveStatus {
  [username: string]: {
    isLive: boolean;
    viewers: number;
    thumbnail?: string;
    title?: string;
  };
}

interface TwitchStatusResponse {
  success: boolean;
  liveStatus: LiveStatus;
  timestamp: string;
}

interface UseTwitchLiveStatusReturn {
  liveStatus: LiveStatus;
  isLoading: boolean;
  error: string | null;
  onlineCount: number;
  offlineCount: number;
  totalCount: number;
}

/**
 * Hook pour récupérer le statut live des streamers Twitch
 * Utilise maintenant un endpoint serverless Vercel pour la sécurité
 * @param usernames - Liste des noms d'utilisateurs Twitch à surveiller
 * @param refreshInterval - Intervalle de rafraîchissement en ms (défaut: 60000 = 1 minute)
 */
export function useTwitchLiveStatus(usernames: string[], refreshInterval = 60000): UseTwitchLiveStatusReturn {
  const [liveStatus, setLiveStatus] = useState<LiveStatus>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (usernames.length === 0) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    async function fetchLiveStatus() {
      try {
        setError(null);

        // Appeler l'endpoint serverless Vercel au lieu de Twitch directement
        const usernamesParam = usernames.join(',');
        const response = await fetch(`/api/twitch-status?usernames=${encodeURIComponent(usernamesParam)}`);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
          throw new Error(errorData.error || `API error: ${response.status}`);
        }

        const data: TwitchStatusResponse = await response.json();

        if (!data.success) {
          throw new Error('API returned unsuccessful response');
        }

        // Normaliser tous les usernames en lowercase
        const normalizedLiveStatus: LiveStatus = {};
        Object.entries(data.liveStatus).forEach(([username, status]) => {
          normalizedLiveStatus[username.toLowerCase()] = status;
        });

        if (isMounted) {
          setLiveStatus(normalizedLiveStatus);
          setIsLoading(false);
        }

        console.log('✅ Twitch status updated successfully', {
          timestamp: data.timestamp,
          streamersCount: Object.keys(normalizedLiveStatus).length,
          liveCount: Object.values(normalizedLiveStatus).filter(s => s.isLive).length
        });

      } catch (err) {
        console.error('❌ Error fetching Twitch live status:', err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unknown error');
          setIsLoading(false);
        }
      }
    }

    // Fetch initial
    fetchLiveStatus();

    // Configurer le rafraîchissement automatique toutes les 60 secondes
    const interval = setInterval(fetchLiveStatus, refreshInterval);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [usernames.join(','), refreshInterval]);

  // Calculer les compteurs dynamiquement
  const onlineCount = useMemo(() => {
    return Object.values(liveStatus).filter(s => s.isLive).length;
  }, [liveStatus]);

  const offlineCount = useMemo(() => {
    return Object.values(liveStatus).filter(s => !s.isLive).length;
  }, [liveStatus]);

  const totalCount = useMemo(() => {
    return Object.keys(liveStatus).length;
  }, [liveStatus]);

  return { 
    liveStatus, 
    isLoading, 
    error,
    onlineCount,
    offlineCount,
    totalCount
  };
}