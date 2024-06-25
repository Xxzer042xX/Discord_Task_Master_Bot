<h1 align="center"> 🎉 DiscordTaskMasterBot 🎉 </h1>

<p align="center"> Votre assistant polyvalent pour la gestion administrative sur Discord.</p>

---

<p align="center"><img src="images/discord.png" alt="discord_bot" style="width: 50%; height: auto;"></p>
  

<br>

## 🛠️ Fonctionnalités Clés :

<p align="center"><strong> ▶ Simplifie la modération, facilite la communication, optimise votre serveur de manière efficace◀ </strong></p>

---

<br>

<details>
  <summary>Attribution de rôle via commande</summary>
  <br>
  
  - **Description :** Permet de gérer l'accès aux canaux spécifiques ou aux fonctionnalités du serveur en attribuant des rôles aux utilisateurs via des commandes Discord.
  - **Avantages :** Facilite la gestion des autorisations et garantit une expérience utilisateur personnalisée et sécurisée.
</details>

<details>
  <summary>Accueil des nouveaux utilisateurs</summary>
  <br>
  
  - **Description :** Accueille automatiquement les nouveaux membres en les dirigeant vers les règles et conditions générales du serveur.
  - **Avantages :** Établit un environnement accueillant et bien géré dès l'arrivée des nouveaux membres, favorisant ainsi une intégration harmonieuse.
</details>

<details>
  <summary>Décompte pour un événement</summary>
  <br>
  
  - **Description :** Affiche un décompte jusqu'à une date et une heure spécifiques pour informer les membres de l'approche d'événements importants.
  - **Avantages :** Fournit une anticipation et une organisation efficace autour des événements communautaires ou des échéances importantes.
</details>

<details>
  <summary>Salutation quotidienne</summary>
  <br>
  
  - **Description :** Accueille les utilisateurs une fois par jour lors de leur première interaction, renforçant ainsi l'engagement et le sentiment de communauté.
  - **Avantages :** Maintient une interaction régulière et personnalisée avec les membres, augmentant ainsi l'activité et la fidélité au serveur.
</details>

<details>
  <summary>⚠️<s>Modération automatique</s> 🛠️</summary>
  <br>
  
  - **Description :** Filtrage automatique des contenus inappropriés, gestion des spams et des comportements indésirables pour maintenir un environnement sécurisé.
  - **Avantages :** Soulage les modérateurs en automatisant les tâches de gestion et en assurant une application cohérente des règles du serveur.
</details>

<details>
  <summary>⚠️<s>Systèmes de vote ou de sondage</s> 🛠️</summary>
  <br>
  
  - **Description :** Facilitation de l'organisation de votes ou de sondages parmi les membres pour des décisions communautaires.
  - **Avantages :** Encourage la participation et la démocratie au sein de la communauté, favorisant ainsi un sentiment d'appartenance et d'engagement.
</details>

<details>
  <summary>⚠️<s>Intégrations avec des services externes</s> 🛠️</summary>
  <br>
  
  - **Description :** Intégration avec d'autres bots ou services externes comme des bots musicaux, des systèmes de support client, etc.
  - **Avantages :** Enrichit l'expérience utilisateur en offrant des fonctionnalités supplémentaires et en connectant le serveur à d'autres plateformes populaires.
</details>

<details>
  <summary>⚠️<s>Analyse des données et rapports</s> 🛠️</summary>
  <br>
  
  - **Description :** Fourniture de statistiques sur l'activité du serveur, les niveaux de participation des membres, etc., pour une prise de décision informée.
  - **Avantages :** Aide à évaluer l'efficacité des stratégies de gestion et à ajuster les paramètres pour optimiser l'expérience utilisateur.
</details>

<details>
  <summary>⚠️<s>Personnalisation et réglages</s> 🛠️</summary>
  <br>
  
  - **Description :** Permet aux administrateurs de personnaliser les comportements du bot selon les besoins spécifiques du serveur.
  - **Avantages :** Offre une flexibilité maximale pour répondre aux exigences uniques de la communauté Discord et pour ajuster le fonctionnement du bot en fonction des retours des utilisateurs.
</details>

<br><br>

## 📋 Prérequis :
---

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
<br>

## 🔧 Personnalisation :
> [!WARNING]
> ⚠️ Il est essentiel de personnaliser les ID des salons, les noms de commande et les rôles, afin que le Bot active ses fonctionnalités  : ⚠️
---

<br>

<details>
  <summary>⚠️ 1. Ajouter un rôle spécifique à l'utilisateur : 🛠️</summary>

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
  <summary>⚠️ <s>2. Gérer les salutations quotidiennes : 🛠️</s></summary>

  <br>
  
  ➡ Ouvrez le fichier `commands.js`
  
  - Personnalisez `ID_DU_CANAL` dans `handleDailyGreetings`
  - Personnalisez `votre message` dans `handleDailyGreetings`
  - Remplacez `ID_DU_CANAL_DE_BIENVENUE` dans `handleDailyGreetings` par l'ID du canal où vous souhaitez envoyer les messages de bienvenue.
</details>

<details>
  <summary>⚠️ <s>3. Messages : 🛠️</s></summary>

  <br>
  
  ➡ Ouvrez le fichier

</details>

<br><br>

## 🚀 Déploiement
---

Pour déployer votre bot Discord, suivez ces étapes :

1. **Ajout du Bot à Votre Serveur Discord**
   - Assurez-vous que votre bot a été ajouté à votre serveur Discord via le [Discord Developer Portal](https://discord.com/developers/applications).
   - Accordez-lui les permissions nécessaires sur votre serveur Discord.

2. **Lancement du Bot**
   - Pour lancer votre bot, vous pouvez utiliser la commande suivante dans votre terminal à la racine de votre projet :

     ```bash
     node index.js &
     ```

   - L'ajout de `&` à la fin de la commande permet à Node.js de lancer le processus en arrière-plan tout en laissant le terminal disponible pour d'autres commandes. Cependant, ce n'est pas une solution robuste pour la gestion à long terme.

> [!TIP]
>
> 3. **Exécution en Tâche de Fond avec PM2**
>  - PM2 est un gestionnaire de processus Node.js qui permet de démarrer, arrêter et gérer des applications Node.js de manière robuste.
>  - Pour installer PM2 globalement sur votre système, utilisez la commande suivante (cela nécessite npm installé) :
>
>    ```bash
>    npm install pm2 -g
>    ```
>  - Une fois PM2 installé, vous pouvez démarrer votre bot en tant que processus PM2 en utilisant la commande :
>    ```bash
>    pm2 start index.js --name "discord-bot"
>    ```
>  - Cela lancera votre bot Discord en arrière-plan sous le nom "discord-bot". Vous pouvez gérer ce processus avec des commandes telles que `pm2 restart`, `pm2 stop`, `pm2 delete`, etc.
>  - Pour plus de détails sur la configuration et les fonctionnalités de PM2, consultez la [documentation officielle de PM2](https://pm2.keymetrics.io/docs/).

> [!NOTE]
>  - Je recommande l'utilisation de PM2 pour le déploiement de votre bot Discord, car cela garantit une disponibilité continue et une gestion facile des processus Node.js. PM2 offre également des fonctionnalités telles que le redémarrage automatique en cas de panne, la surveillance des ressources, et plus encore.































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

