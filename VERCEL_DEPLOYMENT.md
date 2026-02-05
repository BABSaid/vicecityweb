# 🚀 Déployer sur Vercel - Guide Rapide

## 🎯 Configuration des Variables d'Environnement

### Étape 1 : Accéder aux Settings

1. Va sur https://vercel.com/dashboard
2. Clique sur ton projet **vicecityweb**
3. Clique sur l'onglet **"Settings"**
4. Dans le menu de gauche, clique sur **"Environment Variables"**

---

### Étape 2 : Ajouter les Clés Twitch

Ajoute ces 2 variables :

| **Variable Name** | **Value** | **Environment** |
|------------------|-----------|-----------------|
| `VITE_TWITCH_CLIENT_ID` | Ton Client ID Twitch | Production, Preview, Development |
| `VITE_TWITCH_CLIENT_SECRET` | Ton Client Secret Twitch | Production, Preview, Development |

**⚠️ Important :**
- Coche **tous les environnements** (Production, Preview, Development)
- Clique sur **"Save"** après chaque variable

---

### Étape 3 : Redéployer

Après avoir ajouté les variables :

1. Va dans l'onglet **"Deployments"**
2. Clique sur le dernier déploiement
3. Clique sur les 3 petits points (•••)
4. Clique sur **"Redeploy"**
5. Attends 1-2 minutes ⏱️

**✅ C'est fait !** Ton site détectera maintenant automatiquement les lives Twitch !

---

## 🔍 Vérifier que ça Marche

1. Va sur https://vicecityweb.vercel.app/#streamers
2. Ouvre la console du navigateur (F12)
3. Si un streamer est live, il apparaîtra dans la section "EN DIRECT MAINTENANT"
4. Le site se met à jour automatiquement toutes les 60 secondes

---

## 🐛 Dépannage

### Les variables ne fonctionnent pas ?
- Vérifie que tu as bien coché **tous les environnements**
- Vérifie qu'il n'y a pas d'espaces avant/après les valeurs
- Redéploie le site après l'ajout des variables

### Erreur dans les logs Vercel ?
1. Va dans **"Deployments"**
2. Clique sur le dernier déploiement
3. Regarde les **"Function Logs"**
4. Si tu vois "401 Unauthorized", tes clés Twitch sont incorrectes

---

## 📝 Commandes Utiles

### Forcer un nouveau déploiement depuis Git
```bash
git add .
git commit -m "Update config"
git push
```

Vercel redéploiera automatiquement ! 🚀

---

## 🎉 Résultat

Ton site détectera automatiquement :
- ✅ Quand un streamer lance un live
- ✅ Le nombre de viewers en temps réel
- ✅ Affichage dans "EN DIRECT MAINTENANT"
- ✅ Mise à jour automatique toutes les 60 secondes

---

🌴 **ViceCity RP** 🔥
