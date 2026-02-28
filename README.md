# 🌴 VICECITY RP - Site Web Officiel

![ViceCity RP Banner](https://i.imgur.com/j1P4W4G.png)

Site web officiel du serveur FiveM **ViceCity RP** avec une esthétique **Miami Vice années 80** 🔥

**🌐 Site en ligne :** https://vicecityweb.vercel.app/

---

## 🎮 Rejoindre le Serveur

- **IP Serveur :** `51.210.246.253:2000`
- **Discord :** https://discord.gg/9wYw8GAQ7y

---

## ✨ Fonctionnalités

### ✅ Pages Complètes
- **🏠 Accueil** : Bannière d'accueil avec présentation du serveur
- **📜 Règlement** : 135 règles sous forme de cartes swipables (style Tinder)
- **🏢 Entreprises** : 4 entreprises (SASP Academy, BurgerShot, Benny's, Dynasti 8) avec modals détaillées
- **📺 Nos Streamers** : Détection automatique des lives Twitch en temps réel
- **⚖️ Code Pénal** : Redirection vers Google Doc externe

### 🔥 Système de Streamers en Direct
- ✅ **Détection automatique** des streamers en live via l'API Twitch
- ✅ **Mise à jour en temps réel** toutes les 60 secondes
- ✅ **Compteur de viewers** automatique
- ✅ **Design différencié** : Cartes larges pour les lives, style Polaroid pour offline

---

## 🚀 Installation & Configuration

### 1. Cloner le projet

```bash
git clone <ton-repo>
cd vicecity-website
```

### 2. Installer les dépendances

```bash
pnpm install
# ou
npm install
```

### 3. Configurer l'API Twitch

**📖 Suis le guide complet dans `TWITCH_SETUP.md`**

Résumé rapide :
1. Va sur https://dev.twitch.tv/console
2. Crée une application Twitch
3. Copie ton **Client ID** et **Client Secret**
4. Crée un fichier `.env` à la racine :

```env
VITE_TWITCH_CLIENT_ID=ton_client_id
VITE_TWITCH_CLIENT_SECRET=ton_client_secret
```

### 4. Lancer en local

```bash
pnpm run dev
# ou
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### 5. Build pour production

```bash
pnpm run build
# ou
npm run build
```

---

## 📦 Déploiement sur Vercel

### Méthode Simple (recommandée)

1. Va sur https://vercel.com
2. Connecte ton compte GitHub
3. Importe ton projet
4. Configure les **variables d'environnement** :
   - `VITE_TWITCH_CLIENT_ID`
   - `VITE_TWITCH_CLIENT_SECRET`
5. Clique sur **Deploy** 🚀

Le site sera automatiquement mis à jour à chaque push sur GitHub !

---

## 🎨 Stack Technique

- **Framework :** React 18 + Vite
- **Styling :** Tailwind CSS v4
- **UI Components :** Radix UI + Lucide Icons
- **Animations :** Motion (Framer Motion)
- **API :** Twitch Helix API
- **Hébergement :** Vercel
- **Design :** Miami Vice 80s aesthetic 🌴

---

## 📂 Structure du Projet

```
/src
  /app
    /components          # Composants réutilisables
      Header.tsx         # Barre de navigation
      Footer.tsx         # Pied de page
      HelpModal.tsx      # Modal d'aide (page streamers)
    /pages              # Pages principales
      HomePage.tsx       # Page d'accueil
      ReglementPage.tsx  # Page règlement (135 cartes)
      StreamersPage.tsx  # Page streamers avec API Twitch
      LegalPage.tsx      # Page entreprises
    /hooks              # Custom hooks
      useTwitchLiveStatus.ts  # Hook pour l'API Twitch
    App.tsx             # Routeur principal
  /styles
    theme.css           # Thème global
    fonts.css           # Imports de fonts

/public                 # Assets statiques
```

---

## 🎯 Ajouter un Nouveau Streamer

Ouvre `/src/app/pages/StreamersPage.tsx` et ajoute dans `streamersData` :

```typescript
{
  id: 5,
  pseudo: "NOM_STREAMER",
  platform: "twitch",
  isLive: false, // Sera mis à jour auto
  viewers: 0, // Sera mis à jour auto
  imageUrl: "https://i.imgur.com/XXXXX.png",
  profileUrl: "https://www.twitch.tv/nom_streamer",
  badges: ["STAFF"], // ou ["PARTNER"]
  category: "staff" // ou "partner"
}
```

Le système détectera automatiquement si le streamer est en live ! ✅

---

## 🛠️ Dépannage

### Les lives ne se détectent pas ?
- Vérifie que les clés API Twitch sont correctes
- Ouvre la console (F12) pour voir les erreurs
- Vérifie que les noms d'utilisateur sont exacts

### Erreur CORS en local ?
- C'est normal en développement
- Sur Vercel, tout fonctionnera parfaitement

---

## 📞 Support

Pour toute question ou problème :
- **Discord :** https://discord.gg/9wYw8GAQ7y
- **Serveur FiveM :** 51.210.246.253:2000

---

## 📝 Changelog

### v1.0.0 - Février 2026
- ✅ Page d'accueil complète
- ✅ Système de règlement (135 cartes swipables)
- ✅ Page Entreprises (4 entreprises avec modals)
- ✅ Page Streamers avec détection live Twitch automatique
- ✅ Intégration API Twitch en temps réel
- ✅ Design Miami Vice complet
- ✅ Responsive mobile/desktop

---

🌴 **ViceCity RP - NEXT-GEN US** 🔥

Développé avec 💜 pour la communauté ViceCity
