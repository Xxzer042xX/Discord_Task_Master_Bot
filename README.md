<h1 align="center">🎉 DiscordTaskMasterBot 🎉</h1>
<hr>
<br>

<p align="center">
  <img src="images/discord.png" alt="discord_bot" style="width: 50%; height: auto;">
</p>

<p align="center">
  <strong>▶ Votre assistant polyvalent pour la gestion administrative sur Discord.◀</strong>
</p>
<br>
<p align="center">
  <strong>▶ Intégré de manière transparente, il simplifie la modération, facilite la communication et optimise votre serveur de manière efficace.◀</strong>
</p>

<br><br>

## 🛠️ Fonctionnalités Clés

---

⚫ **Exécution des Tâches Complexes :** 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Automatise efficacement les actions nécessaires à la gestion quotidienne de votre serveur.

⚫ **Modération Efficace :** 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Maintient l'ordre et la sécurité avec des outils sophistiqués de gestion des utilisateurs et de filtrage du contenu.

⚫ **Communication Facilitée :**  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Accueille les nouveaux membres, envoie des messages personnalisés et maintient une interaction dynamique.

⚫ **Optimisation Globale :**  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Utilise des stratégies intégrées pour améliorer l'efficacité opérationnelle et la convivialité de votre serveur.

<br>

## 📋 Prérequis
---

Avant d'installer et de personnaliser DiscordTaskMasterBot, assurez-vous de disposer des éléments suivants :

1. **Node.js et npm :** Assurez-vous que Node.js est installé sur votre système. Vous pouvez le télécharger depuis [nodejs.org](https://nodejs.org/).
   
2. **Compte Discord et Bot :** Créez un compte sur Discord et assurez-vous d'avoir créé une application de bot sur [Discord Developer Portal](https://discord.com/developers/applications).

<br>

## ⚙️ Installation
---

### Clonage du Répertoire

1. Clonez le dépôt depuis GitHub :

   ```bash
   git clone git@github.com:Xxzer042xX/discord_bot.git
   ```
2. Déplacez-vous à la racine du projet :

   ```bash
   cd discord_bot
   ```

<br>

### Installation des Dépendances

3. Installez les dépendances nécessaires :
   
   ```bash
   npm install
   ```

<br>

### Configuration des Variables d'Environnement

4. Créez un fichier `.env` à la racine du projet :

   ```bash
   touch .env
   ```

5. Ajoutez votre token Discord dans le fichier `.env` :
   
   ```env
   DISCORD_TOKEN=VotreTokenDiscord
   ```

<br>

## 🔧 Personnalisation
---

<details>
  <summary>1. <strong>Ajoute un rôle spécifique à l'utilisateur :</strong></summary>
  
  &nbsp;➡ Ouvrez le fichier `commands.js`
  
  - Personnalisez `'ID_DU_ROLE'` dans `'handlePiscineCommand'`
  - Personnalisez votre message de confirmation dans `handlePiscineCommand`
  - Personnalisez votre message d'erreur dans `handlePiscineCommand`
  <br><br>
  
  &nbsp;➡ Ouvrez le fichier `lol.js`
  
  - rgjrjgjrpg
  - rgjrg
  - rkkgh
</details>
   
<details>
  <summary>2. <strong>Gérer les salutations quotidiennes :</strong></summary>
  &nbsp;➡ Ouvrez le fichier commands.js
  
  - Personnalisez 'ID_DU_CANAL' dans 'handleDailyGreetings'
  - Personnalisez votre message dans 'handleDailyGreetings'
  - Remplacez 'ID_DU_CANAL_DE_BIENVENUE' dans handleDailyGreetings par l'ID du canal où vous souhaitez envoyer les messages de bienvenue.
</details>

3. **Messages :**
   - Personnalisez les messages dans les fonctions `handleCustomCommand`, `handleDailyGreetings`, et `countdownToAugust19` selon vos préférences.

4. **Nom de la Commande :**
   - Pour personnaliser le nom de la commande, ouvrez le fichier `index.js` et trouvez la fonction `handleCustomCommand`.
   - Modifiez `'!piscine'` par le nom de commande de votre choix, par exemple `'!moncommande'`.

<br>

## 🚀 Utilisation
---

### Démarrage du Bot

Pour lancer DiscordTaskMasterBot :

```bash
npm start
```

Assurez-vous que votre bot est invité sur votre serveur Discord et dispose des autorisations nécessaires pour fonctionner correctement.

<br>

## 🤝 Contribution
---

Vous pouvez contribuer au développement de DiscordTaskMasterBot en forquant le dépôt, créant une branche pour vos modifications, et soumettant une Pull Request.

1. Forkez le dépôt.
2. Créez une branche pour vos modifications (`git checkout -b feature-ameliorations`).
3. Commitez vos changements (`git commit -am 'Ajout de nouvelles fonctionnalités'`).
4. Poussez la branche (`git push origin feature-ameliorations`).
5. Créez une nouvelle Pull Request.

<br>

## 📜 Licence
---

Ce projet est sous licence [ISC](https://opensource.org/licenses/ISC).
