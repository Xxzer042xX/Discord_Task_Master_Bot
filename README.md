<h1 align="center"> 🎉 DiscordTaskMasterBot 🎉 </h1>

<h2 align="center"> Votre assistant polyvalent pour la gestion administrative sur Discord. </h2>
<hr>

<p align="center"><img src="images/discord.png" alt="discord_bot" style="width: 50%; height: auto;"></p>
  
<br>

<p align="center"><strong> ▶ &nbsp;&nbsp; Simplifie la modération, facilite la communication, &nbsp;&nbsp; ◀ </strong></p>
<p align="center"><strong> ▶ &nbsp;&nbsp; et optimise votre serveur de manière efficace. &nbsp;&nbsp; ◀ </strong></p>

<br><br>

## 🛠️ Fonctionnalités Clés :
---

⚫ **Exécution des Tâches Complexes :**
  - Automatise efficacement les actions nécessaires à la gestion quotidienne de votre serveur.

⚫ **Modération Efficace :**
  - Maintient l'ordre et la sécurité avec des outils sophistiqués de gestion des utilisateurs et de filtrage du contenu.

⚫ **Communication Facilitée :**
  - Accueille les nouveaux membres, envoie des messages personnalisés et maintient une interaction dynamique.

⚫ **Optimisation Globale :**
  - Utilise des stratégies intégrées pour améliorer l'efficacité opérationnelle et la convivialité de votre serveur.

<br><br>

## 📋 Prérequis :

Avant de commencer, assurez-vous d'avoir les éléments suivants installés et configurés sur votre système :

1. **Système d'Exploitation**
   - Windows 10, macOS, ou Linux (Ubuntu/Debian recommandé).

2. **Node.js et npm**
   - Node.js est nécessaire pour exécuter DiscordTaskMasterBot. Voici comment vérifier et installer Node.js et npm :

   ### Vérification de Node.js et npm

   Ouvrez un terminal (ou Command Prompt sous Windows) et exécutez les commandes suivantes :

   ```bash
   node -v
   npm -v
   ```

   Si Node.js et npm sont déjà installés, ces commandes afficheront leurs versions respectives. Sinon, suivez les étapes ci-dessous pour les installer.

   ### Installation de Node.js et npm

   #### Sur Windows et macOS :

   - Téléchargez Node.js depuis [nodejs.org](https://nodejs.org/) et suivez les instructions d'installation. npm est généralement inclus dans l'installation de Node.js sur ces plateformes.

   #### Sur Linux (Ubuntu/Debian) :

   - Mettez à jour les paquets système avant l'installation :

     ```bash
     sudo apt update
     sudo apt upgrade -y
     ```

   - Installez Node.js et npm avec les commandes suivantes :

     ```bash
     sudo apt install nodejs npm
     ```

   - Vérifiez que Node.js et npm sont installés correctement en vérifiant les versions :

     ```bash
     node -v
     npm -v
     ```

3. **Compte Discord et Bot**
   - Créez un compte sur [Discord](https://discord.com) si vous n'en avez pas encore.
   - Créez une application de bot sur le [Discord Developer Portal](https://discord.com/developers/applications).

<br><br>

## ⚙️ Installation :

1. **Clonage du Répertoire**
   - Clonez le dépôt depuis GitHub en utilisant la commande suivante :

     ```bash
     git clone git@github.com:Xxzer042xX/discord_bot.git
     cd votre-repo
     ```

2. **Installation des Dépendances**
   - Installez les dépendances nécessaires pour votre bot Discord à l'aide de npm :

     ```bash
     npm install discord.js schedule dotenv
     ```

3. **Configuration des Variables d'Environnement**
   - Créez un fichier `.env` à la racine du projet pour stocker votre token Discord et d'autres configurations sensibles :

     ```bash
     touch .env
     ```

   - Ajoutez votre token Discord dans le fichier `.env` :

     ```env
     DISCORD_TOKEN=VotreTokenDiscord
     ```

4. **Structure du Projet**
   - Assurez-vous que votre structure de projet ressemble à ceci :

     ```
     ├── node_modules/
     ├── README.md
     ├── commande.js
     ├── index.js
     ├── package-lock.json
     ├── package.json
     ├── scheduledTask.js
     └── .env
     ```


<br><br>

## 🔧 Personnalisation :
---

DiscordTaskMasterBot est conçu pour être facilement personnalisable :

<details>
  <summary> 1. <strong> Ajouter un rôle spécifique à l'utilisateur :</strong></summary>

  <br>
  
  ➡ Ouvrez le fichier `commands.js`
  
  - Personnalisez `ID_DU_ROLE` dans `handlePiscineCommand`
  - Personnalisez votre message de confirmation dans `handlePiscineCommand`
  - Personnalisez votre message d'erreur dans `handlePiscineCommand`
  
  <br><br>
  
  ➡ Ouvrez le fichier `index.js`
  
  - Personnalisez la commande `!votrecommande` dans `handleCustomCommand` avec le nom de commande de votre choix pour attribuer le rôle.
</details>
   
<details>
  <summary> 2. <strong> Gérer les salutations quotidiennes :</strong></summary>

  <br>
  
  ➡ Ouvrez le fichier `commands.js`
  
  - Personnalisez `ID_DU_CANAL` dans `handleDailyGreetings`
  - Personnalisez `votre message` dans `handleDailyGreetings`
  - Remplacez `ID_DU_CANAL_DE_BIENVENUE` dans `handleDailyGreetings` par l'ID du canal où vous souhaitez envoyer les messages de bienvenue.
</details>

<details>
  <summary> 3. <strong> Messages :</strong></summary>

  <br>
  
  ➡ Ouvrez le fichier

</details>

<br><br>

## 🚀 Déploiement :

Pour déployer votre bot Discord, vous devez vous assurer que :

- Votre bot a été ajouté à votre serveur Discord via le [Discord Developer Portal](https://discord.com/developers/applications).
- Les permissions nécessaires sont accordées à votre bot sur votre serveur Discord.
- Votre bot est lancé en utilisant `node index.js` sur votre serveur.

<br><br>

## 🤝 Contribution :
---

Vous pouvez contribuer au développement de DiscordTaskMasterBot en forquant le dépôt, créant une branche pour vos modifications et soumettant une Pull Request.

### Comment Contribuer :

1. Forkez le dépôt.
2. Créez une branche pour vos modifications (`git checkout -b feature-ameliorations`).
3. Commitez vos changements (`git commit -am 'Ajout de nouvelles fonctionnalités'`).
4. Poussez la branche (`git push origin feature-ameliorations`).
5. Créez une nouvelle Pull Request.

<br><br>

## 🆘 Besoin d'Aide ?
---

Si vous rencontrez des problèmes lors de l'installation ou si vous avez des questions, n'hésitez pas à consulter la documentation de Discord.js et à poser des questions sur des forums de développeurs comme Stack Overflow.

Ce guide devrait vous aider à démarrer avec DiscordTaskMasterBot même si vous êtes débutant. Bonne chance !

<br><br>

## 📜 Licence
---

Ce projet est sous licence [ISC](https://opensource.org/licenses/ISC).

