Salut Figma 👋,

Voici les corrections à appliquer sur le site ViceCity RP pour que les streamers live s’affichent correctement et que le compteur EN LIGNE / HORS-LIGNE soit exact :

Hook useTwitchLiveStatus.ts

Normaliser tous les usernames renvoyés par l’API en lowercase avant de les stocker dans liveStatus.

Ajouter le calcul du nombre de streamers en ligne et hors-ligne dans le hook.

Conserver le rafraîchissement automatique toutes les 60 secondes.

Composant Streamers

Lors de l’affichage de chaque carte streamer, utiliser username.toLowerCase() pour accéder à liveStatus.

Afficher le badge LIVE si liveStatus[username.toLowerCase()].isLive === true.

Compteur EN LIGNE = nombre de streamers isLive === true.

Compteur HORS-LIGNE = nombre total de streamers - EN LIGNE.

Endpoint Vercel /api/twitch-status

Aucun changement côté endpoint, mais vérifier que le hook appelle bien /api/twitch-status avec les usernames exacts.

S’assurer que le JSON renvoyé est bien :

{
  "success": true,
  "liveStatus": {
    "username1": { "isLive": true/false, "viewers": 0, "thumbnail": "...", "title": "..." },
    ...
  },
  "timestamp": "..."
}

Page Streamers

Rafraîchir les données via le hook.

Mettre à jour dynamiquement les badges LIVE et le compteur EN LIGNE / HORS-LIGNE.

Tester avec plusieurs streamers, incluant inconnueontop, pour vérifier que tout est exact.

💡 But final :

Les streamers live s’affichent avec badge rouge.

Compteurs EN LIGNE / HORS-LIGNE exacts.

Toutes les usernames, même avec majuscules/minuscules, fonctionnent correctement.

Rafraîchissement automatique toutes les 60s.