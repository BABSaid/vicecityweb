# 🔥 Configuration de l'API Twitch pour ViceCity RP

## 📋 Guide Complet d'Installation

### Étape 1 : Créer une Application Twitch

1. **Connecte-toi** sur https://dev.twitch.tv/console
2. Clique sur **"Register Your Application"**
3. Remplis les informations :
   - **Name** : `ViceCity RP Website`
   - **OAuth Redirect URLs** : `http://localhost:3000` (pour le dev) et `https://vicecityweb.vercel.app` (pour la prod)
   - **Category** : `Website Integration`
4. Clique sur **"Create"**
5. Note bien ton **Client ID** et crée un **Client Secret**

---

### Étape 2 : Configurer les Variables d'Environnement sur Vercel

⚠️ **IMPORTANT** : Le site utilise maintenant un **endpoint serverless sécurisé** pour l'API Twitch.
Le Client Secret **NE DOIT JAMAIS** être exposé côté client.

#### Sur Vercel :

1. Va dans ton projet sur https://vercel.com
2. Clique sur **"Settings"** → **"Environment Variables"**
3. Ajoute ces 2 variables (**SANS** le préfixe `VITE_`) :
   - `TWITCH_CLIENT_ID` = ton Client ID
   - `TWITCH_CLIENT_SECRET` = ton Client Secret
4. **Important** : Ces variables sont utilisées par l'endpoint serverless `/api/twitch-status`
5. Redéploie ton site

---

### Étape 3 : Configuration Locale (Développement)

Pour tester en local, crée un fichier `.env` à la racine de ton projet :

```env
TWITCH_CLIENT_ID=ton_client_id_ici
TWITCH_CLIENT_SECRET=ton_client_secret_ici
```

⚠️ **N'oublie pas** d'ajouter `.env` dans ton `.gitignore` !

---

## ✅ Comment ça Marche ?

Le système utilise une architecture sécurisée en 3 couches :

1. **Frontend React** → Appelle `/api/twitch-status?usernames=...`
2. **Endpoint Serverless Vercel** → S'authentifie avec Twitch OAuth (côté serveur)
3. **API Twitch Helix** → Retourne le statut live des streamers

**Avantages** :
- ✅ **Sécurité renforcée** : Le Client Secret reste côté serveur
- ✅ **Détection automatique** : Le site vérifie toutes les 60 secondes si un streamer est en live
- ✅ **Affichage en temps réel** : Les streamers live apparaissent dans la section "EN DIRECT MAINTENANT"
- ✅ **Compteur de viewers** : Le nombre de spectateurs s'affiche automatiquement

---

## 🎯 Ajouter un Nouveau Streamer

Ouvre `/src/app/pages/StreamersPage.tsx` et ajoute un nouvel objet dans `streamersData` :

```typescript
{
  id: 5, // ← Numéro unique
  pseudo: "NOM_DU_STREAMER",
  platform: "twitch",
  isLive: false, // ← Sera mis à jour automatiquement
  viewers: 0, // ← Sera mis à jour automatiquement
  imageUrl: "https://i.imgur.com/URL_DE_L_IMAGE.png",
  profileUrl: "https://www.twitch.tv/nom_du_streamer",
  badges: ["STAFF"], // ou ["PARTNER"]
  category: "staff" // ou "partner"
}
```

---

## 🔧 Dépannage

### Le statut live ne se met pas à jour ?

1. **Vérifier les variables d'environnement sur Vercel** :
   - Va dans Settings → Environment Variables
   - Assure-toi que `TWITCH_CLIENT_ID` et `TWITCH_CLIENT_SECRET` sont définis
   - **Pas de préfixe `VITE_`** pour ces variables !

2. **Vérifier les logs Vercel** :
   - Va dans l'onglet "Functions" de ton projet Vercel
   - Clique sur `/api/twitch-status`
   - Regarde les logs pour détecter les erreurs

3. **Tester l'endpoint directement** :
   - Ouvre `https://vicecityweb.vercel.app/api/twitch-status?usernames=inconnuuontop`
   - Tu devrais voir une réponse JSON avec le statut live

### Erreur "invalid_client" ?

- ✅ **Résolu** : Le nouveau système utilise un endpoint serverless
- Le Client Secret n'est plus exposé côté client
- Vérifie que les variables sont bien configurées sur Vercel

### Le compteur de viewers n'apparaît pas ?

- Vérifie que les noms d'utilisateur Twitch sont corrects (sensible à la casse)
- Ouvre la console du navigateur (F12) pour voir les erreurs
- L'API Twitch peut avoir un délai de quelques secondes

---

## 📞 Besoin d'Aide ?

Si tu as des problèmes, vérifie :

1. ✅ Les variables d'environnement sur Vercel sont bien configurées
2. ✅ Les noms d'utilisateur Twitch sont exacts
3. ✅ L'endpoint `/api/twitch-status` répond correctement
4. ✅ Les logs Vercel ne montrent pas d'erreurs

---

🌴 **ViceCity RP - Miami Vice Style** 🔥