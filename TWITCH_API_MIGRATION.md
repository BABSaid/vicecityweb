# 🔥 Migration API Twitch - Endpoint Serverless Sécurisé

## 📋 Résumé des Changements

Le système d'API Twitch a été **complètement refactorisé** pour résoudre l'erreur "invalid_client" et améliorer la sécurité.

### ❌ Ancien Système (Problématique)
- Le hook `useTwitchLiveStatus.ts` faisait des requêtes **directes** vers l'API Twitch depuis le navigateur
- Le **Client Secret** était exposé côté client (même via variables d'environnement `VITE_`)
- Twitch **bloque** ce type de requête → Erreur "invalid_client"
- **Risque de sécurité** : Le Client Secret pouvait être intercepté

### ✅ Nouveau Système (Sécurisé)
- **Endpoint serverless Vercel** : `/api/twitch-status.ts`
- Le Client Secret reste **côté serveur** uniquement
- Architecture en 3 couches :
  1. **Frontend** → Appelle `/api/twitch-status?usernames=...`
  2. **Serverless Vercel** → S'authentifie avec Twitch OAuth
  3. **API Twitch** → Retourne le statut live

---

## 📁 Fichiers Modifiés

### 1. `/api/twitch-status.ts` ✨ NOUVEAU
- Endpoint serverless Vercel
- Gère l'authentification OAuth avec Twitch
- Cache le token d'accès pour optimiser les performances
- Retourne uniquement les données nécessaires (live/offline, viewers, thumbnail, titre)

### 2. `/src/app/hooks/useTwitchLiveStatus.ts` 🔄 MODIFIÉ
- Ne fait plus de requêtes directes vers Twitch
- Appelle maintenant l'endpoint `/api/twitch-status`
- Conserve toutes les fonctionnalités (rafraîchissement automatique, gestion d'erreurs)

### 3. `/src/app/components/TwitchDebug.tsx` 🔄 MODIFIÉ
- Teste maintenant l'endpoint serverless au lieu de l'API Twitch directement
- Affiche l'architecture du système
- Guide de dépannage intégré

### 4. `/vercel.json` ✨ NOUVEAU
- Configuration Vercel pour les fonctions serverless
- Définition des routes et variables d'environnement

### 5. `/TWITCH_SETUP.md` 🔄 MODIFIÉ
- Documentation mise à jour avec le nouveau système
- Guide de configuration des variables d'environnement
- Section de dépannage actualisée

### 6. `package.json` 🔄 MODIFIÉ
- Ajout de `@vercel/node` pour les types TypeScript

---

## 🚀 Déploiement sur Vercel

### Étape 1 : Configurer les Variables d'Environnement

⚠️ **IMPORTANT** : Les noms des variables ont changé !

#### Anciennes variables (à supprimer) :
- ❌ `VITE_TWITCH_CLIENT_ID`
- ❌ `VITE_TWITCH_CLIENT_SECRET`

#### Nouvelles variables (à ajouter) :
- ✅ `TWITCH_CLIENT_ID`
- ✅ `TWITCH_CLIENT_SECRET`

**Comment faire sur Vercel :**

1. Va dans ton projet : https://vercel.com/dashboard
2. Clique sur **"Settings"** → **"Environment Variables"**
3. **Supprime** les anciennes variables avec le préfixe `VITE_`
4. **Ajoute** les nouvelles variables **SANS** le préfixe `VITE_` :
   ```
   TWITCH_CLIENT_ID = ton_client_id_ici
   TWITCH_CLIENT_SECRET = ton_client_secret_ici
   ```
5. Assure-toi de les activer pour **tous les environnements** (Production, Preview, Development)

### Étape 2 : Redéployer le Site

Après avoir configuré les variables :

1. Va dans l'onglet **"Deployments"**
2. Clique sur **"Redeploy"** sur le dernier déploiement
3. Attends la fin du build (environ 1-2 minutes)

### Étape 3 : Tester l'Endpoint

Une fois déployé, teste l'endpoint directement :

```
https://vicecityweb.vercel.app/api/twitch-status?usernames=inconnuuontop
```

**Réponse attendue :**
```json
{
  "success": true,
  "liveStatus": {
    "inconnuuontop": {
      "isLive": false,
      "viewers": 0
    }
  },
  "timestamp": "2025-02-XX..."
}
```

### Étape 4 : Tester la Page Streamers

1. Va sur : https://vicecityweb.vercel.app/#streamers
2. Vérifie que le compteur "API Twitch Active" s'affiche
3. Si un streamer est en live, il devrait apparaître dans "EN DIRECT MAINTENANT"

### Étape 5 : Utiliser la Page Debug (Optionnel)

Pour diagnostiquer des problèmes :

1. Va sur : https://vicecityweb.vercel.app/#debug
2. Clique sur "🧪 Test Serverless Endpoint"
3. Vérifie le résultat :
   - ✅ SUCCESS = Tout fonctionne
   - ❌ FAILED = Problème de configuration

---

## 🔧 Dépannage

### Erreur "invalid_client" persiste ?

**Solution :**
- Les **anciennes variables** `VITE_*` sont encore présentes
- **Supprime-les** sur Vercel
- **Redéploie** le site

### Erreur "Server configuration error" ?

**Solution :**
- Les **nouvelles variables** `TWITCH_CLIENT_ID` et `TWITCH_CLIENT_SECRET` ne sont pas configurées
- Vérifie dans **Settings → Environment Variables** sur Vercel
- Redéploie après avoir ajouté les variables

### L'endpoint retourne une erreur 500 ?

**Solutions possibles :**

1. **Vérifie les logs Vercel :**
   - Va dans l'onglet **"Functions"**
   - Clique sur `/api/twitch-status`
   - Regarde les logs d'erreur

2. **Vérifie les credentials Twitch :**
   - Va sur https://dev.twitch.tv/console
   - Vérifie que ton Client ID et Client Secret sont corrects
   - Régénère le Client Secret si nécessaire

3. **Teste localement :**
   - Crée un fichier `.env` avec les variables
   - Lance le serveur de développement
   - Teste l'endpoint

### Les streamers live ne s'affichent pas ?

**Vérifie :**

1. Les noms d'utilisateur Twitch sont corrects (sensible à la casse)
2. L'endpoint `/api/twitch-status` fonctionne (teste-le directement)
3. Les streamers sont réellement en live sur Twitch
4. Ouvre la console navigateur (F12) pour voir les erreurs

---

## 📊 Vérification Post-Déploiement

### ✅ Checklist

- [ ] Variables d'environnement configurées sur Vercel (sans préfixe `VITE_`)
- [ ] Anciennes variables `VITE_*` supprimées
- [ ] Site redéployé après la configuration
- [ ] Endpoint `/api/twitch-status` répond correctement
- [ ] Page `/#streamers` affiche "API Twitch Active"
- [ ] Page `/#debug` teste avec succès
- [ ] Aucune erreur dans les logs Vercel

### 📈 Tests Recommandés

1. **Test direct de l'endpoint :**
   ```
   https://vicecityweb.vercel.app/api/twitch-status?usernames=inconnuuontop,canrz_rl
   ```

2. **Test de la page Streamers :**
   - Vérifie le compteur en ligne/hors-ligne
   - Vérifie que les badges LIVE apparaissent si un streamer est en direct

3. **Test de rafraîchissement :**
   - Laisse la page ouverte 1-2 minutes
   - Vérifie que le statut se met à jour automatiquement

---

## 🎯 Avantages de la Nouvelle Architecture

### Sécurité
- ✅ Client Secret jamais exposé côté client
- ✅ Communication sécurisée serveur-à-serveur
- ✅ Pas de risque d'interception des credentials

### Performance
- ✅ Cache du token OAuth (évite les requêtes répétées)
- ✅ Endpoint optimisé pour plusieurs streamers en une seule requête
- ✅ Temps de réponse rapide

### Maintenabilité
- ✅ Code séparé (frontend / serverless)
- ✅ Logs centralisés sur Vercel
- ✅ Debugging facilité avec `/api/twitch-status` directement testable

### Scalabilité
- ✅ Supporte facilement l'ajout de nouveaux streamers
- ✅ Peut gérer des pics de trafic grâce à Vercel Serverless
- ✅ Prêt pour d'autres endpoints API si nécessaire

---

## 📞 Support

Si tu rencontres des problèmes après le déploiement :

1. **Vérifie les logs Vercel** (onglet Functions)
2. **Teste la page debug** : `/#debug`
3. **Consulte la documentation** : `/TWITCH_SETUP.md`

---

🌴 **ViceCity RP - API Twitch Sécurisée** 🔥

**Statut** : ✅ PRÊT POUR DÉPLOIEMENT
**Date** : Février 2025
**Version** : 2.0 (Serverless)
