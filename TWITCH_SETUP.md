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

### Étape 2 : Configurer les Clés API

Ouvre le fichier `/src/app/hooks/useTwitchLiveStatus.ts` et remplace les valeurs :

```typescript
// Ligne 19-20
const TWITCH_CLIENT_ID = 'TON_CLIENT_ID_ICI'; // ← Colle ton Client ID
const TWITCH_CLIENT_SECRET = 'TON_CLIENT_SECRET_ICI'; // ← Colle ton Client Secret
```

---

### Étape 3 : Déployer sur Vercel (IMPORTANT)

⚠️ **NE METS PAS** tes clés API directement dans le code sur GitHub !

#### Sur Vercel :

1. Va dans ton projet sur https://vercel.com
2. Clique sur **"Settings"** → **"Environment Variables"**
3. Ajoute ces 2 variables :
   - `VITE_TWITCH_CLIENT_ID` = ton Client ID
   - `VITE_TWITCH_CLIENT_SECRET` = ton Client Secret
4. Redéploie ton site

---

### Étape 4 : Utiliser les Variables d'Environnement (Recommandé)

Pour sécuriser tes clés, modifie `/src/app/hooks/useTwitchLiveStatus.ts` :

```typescript
// Remplace lignes 19-20 par :
const TWITCH_CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID || 'YOUR_TWITCH_CLIENT_ID';
const TWITCH_CLIENT_SECRET = import.meta.env.VITE_TWITCH_CLIENT_SECRET || 'YOUR_TWITCH_CLIENT_SECRET';
```

Puis crée un fichier `.env` à la racine de ton projet :

```env
VITE_TWITCH_CLIENT_ID=ton_client_id_ici
VITE_TWITCH_CLIENT_SECRET=ton_client_secret_ici
```

⚠️ **N'oublie pas** d'ajouter `.env` dans ton `.gitignore` !

---

## ✅ Comment ça Marche ?

1. **Détection automatique** : Le site vérifie toutes les 60 secondes si un streamer est en live
2. **Affichage en temps réel** : Les streamers live apparaissent dans la section "EN DIRECT MAINTENANT"
3. **Compteur de viewers** : Le nombre de spectateurs s'affiche automatiquement

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
- Vérifie que tes clés API sont correctes
- Ouvre la console du navigateur (F12) pour voir les erreurs
- Vérifie que les noms d'utilisateur Twitch sont corrects (sensible à la casse)

### Erreur CORS ?
- C'est normal en développement local
- Sur Vercel, ça fonctionnera parfaitement

---

## 📞 Besoin d'Aide ?

Si tu as des problèmes, vérifie :
1. Les clés API sont bien configurées
2. Les noms d'utilisateur Twitch sont exacts
3. Les variables d'environnement sur Vercel sont définies

---

🌴 **ViceCity RP - Miami Vice Style** 🔥
