Objet : Correction affichage streamers live (Twitch) – ViceCity RP

Problème identifié :

La page Streamers ne détecte pas les lives.

Actuellement, le hook useTwitchLiveStatus.ts fait une requête directement depuis le navigateur vers l’API Twitch avec le Client Secret.

Twitch bloque ce type de requête côté client → erreur : invalid_client.

Même si les variables Vercel (VITE_TWITCH_CLIENT_ID / VITE_TWITCH_CLIENT_SECRET) sont configurées, le secret ne doit jamais sortir côté front.

Solution recommandée (sécurisée et efficace)

1️⃣ Créer un endpoint serverless sur Vercel

Exemple : /api/twitch-status

Fonctionnalités :

Récupérer le token OAuth via Client Credentials côté serveur.

Interroger l’API Helix Twitch pour obtenir le statut live des streamers.

Retourner uniquement les données nécessaires : live/offline, viewers, thumbnail, titre.

Sécurité : le Client Secret reste côté serveur, jamais exposé au navigateur.

2️⃣ Modifier le hook React (useTwitchLiveStatus.ts)

Supprimer toute requête directe vers Twitch depuis le front.

Appeler maintenant le endpoint serverless :

fetch(`/api/twitch-status?usernames=${usernames.join(',')}`)

3️⃣ Maintenir toutes les fonctionnalités existantes

Rafraîchissement automatique (intervalle configurable)

Filtres et barre de recherche

Cartes swipables / style actuel

Flow visuel simplifié
[React Front] --fetch--> [Vercel Serverless API] --OAuth--> [Twitch Helix API]
        ^                                                 |
        |<--------------- JSON status live ----------------|

Front récupère seulement les données live, pas le secret.

Flow sécurisé, compatible SPA Vite actuelle.

Résultat attendu après correction

Les streamers live s’affichent correctement.

Plus d’erreur invalid_client.

Sécurité renforcée : le Client Secret n’est jamais exposé.

La page reste responsive et maintient l’UX actuelle.