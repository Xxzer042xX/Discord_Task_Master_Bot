<h1 align="center"> 🎉 Discord Task Master (Bot) 🎉 </h1>

<p align="center"> Votre assistant polyvalent pour la gestion administrative sur Discord.</p>

---

<p align="center"><img src="images/discord.png" alt="discord_bot" style="width: 50%; height: auto;"></p>
  

<br>

## 🛠️ Fonctionnalités Clés :
> [!NOTE]
> <p align="center"><strong>Simplifie la modération, facilite la communication, et optimise votre serveur de manière efficace.</strong></p>

---

<br><br>

<details>
  <summary>Attribution de rôle via commande</summary>
  <br>
  
  - **Description :** Permet de gérer l'accès aux canaux spécifiques ou aux fonctionnalités du serveur en attribuant des rôles aux utilisateurs via des commandes Discord.
  - **Avantages :** Facilite la gestion des autorisations et garantit une expérience utilisateur personnalisée et sécurisée.
</details>

<br>

<details>
  <summary>Accueil des nouveaux utilisateurs</summary>
  <br>
  
  - **Description :** Accueille automatiquement les nouveaux membres en les dirigeant vers les règles et conditions générales du serveur.
  - **Avantages :** Établit un environnement accueillant et bien géré dès l'arrivée des nouveaux membres, favorisant ainsi une intégration harmonieuse.
</details>

<br>

<details>
  <summary>Décompte pour un événement</summary>
  <br>
  
  - **Description :** Affiche un décompte jusqu'à une date et une heure spécifiques pour informer les membres de l'approche d'événements importants.
  - **Avantages :** Fournit une anticipation et une organisation efficace autour des événements communautaires ou des échéances importantes.
</details>

<br>

<details>
  <summary>Salutation quotidienne</summary>
  <br>
  
  - **Description :** Accueille les utilisateurs une fois par jour lors de leur première interaction, renforçant ainsi l'engagement et le sentiment de communauté.
  - **Avantages :** Maintient une interaction régulière et personnalisée avec les membres, augmentant ainsi l'activité et la fidélité au serveur.
</details>

<br>

<details>
  <summary>⚠️<s>Modération automatique</s> 🛠️</summary>
  <br>
  
  - **Description :** Filtrage automatique des contenus inappropriés, gestion des spams et des comportements indésirables pour maintenir un environnement sécurisé.
  - **Avantages :** Soulage les modérateurs en automatisant les tâches de gestion et en assurant une application cohérente des règles du serveur.
</details>

<br>

<details>
  <summary>⚠️<s>Systèmes de vote ou de sondage</s> 🛠️</summary>
  <br>
  
  - **Description :** Facilitation de l'organisation de votes ou de sondages parmi les membres pour des décisions communautaires.
  - **Avantages :** Encourage la participation et la démocratie au sein de la communauté, favorisant ainsi un sentiment d'appartenance et d'engagement.
</details>

<br>

<details>
  <summary>⚠️<s>Intégrations avec des services externes</s> 🛠️</summary>
  <br>
  
  - **Description :** Intégration avec d'autres bots ou services externes comme des bots musicaux, des systèmes de support client, etc.
  - **Avantages :** Enrichit l'expérience utilisateur en offrant des fonctionnalités supplémentaires et en connectant le serveur à d'autres plateformes populaires.
</details>

<br>

<details>
  <summary>⚠️<s>Analyse des données et rapports</s> 🛠️</summary>
  <br>
  
  - **Description :** Fourniture de statistiques sur l'activité du serveur, les niveaux de participation des membres, etc., pour une prise de décision informée.
  - **Avantages :** Aide à évaluer l'efficacité des stratégies de gestion et à ajuster les paramètres pour optimiser l'expérience utilisateur.
</details>

<br>

<details>
  <summary>⚠️<s>Personnalisation et réglages</s> 🛠️</summary>
  <br>
  
  - **Description :** Permet aux administrateurs de personnaliser les comportements du bot selon les besoins spécifiques du serveur.
  - **Avantages :** Offre une flexibilité maximale pour répondre aux exigences uniques de la communauté Discord et pour ajuster le fonctionnement du bot en fonction des retours des utilisateurs.
</details>

<br><br><br>


## 📋 Prérequis :

> [!WARNING]
> ⚠️ Avant de commencer, assurez-vous d'avoir les éléments suivants installés et configurés sur votre système :
---
<br><br>

### 1. Système d'Exploitation :

- Windows 10, macOS, ou Linux (Ubuntu/Debian recommandé).

<br><br>

### 2. Node.js et npm :

- **Vérifiez si Node.js et npm sont déjà installés :**
  
  ```bash
  node -v
  npm -v
  ```
<br>

- **Installation de Node.js et npm :**
  
  - **Sur macOS avec Homebrew :**
    ```bash
    brew install node
    ```
  - **Sur Linux (Ubuntu/Debian) :**
    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```
  - **Sur Windows :**

    Vous pouvez installer Node.js en téléchargeant l'installateur depuis [nodejs.org](https://nodejs.org/) et en suivant les instructions d'installation.

    <br><br>
    
### 3. Création d'un Compte Discord et d'une Application de Bot 

- **Créez un compte sur Discord :**
  - Si vous n'en avez pas encore, inscrivez-vous sur [discord.com/register](https://discord.com/register).

<br>

- **Créez une application de bot sur le Discord Developer Portal :**
   - Allez sur [Discord Developer Portal](https://discord.com/developers/applications).
   - Cliquez sur `New Application`.
   - Donnez un nom à votre application, puis cliquez sur `Create`.
   - Dans le menu de gauche, sélectionnez `Bot`.
   -  Cliquez sur `Add Bot`.
   - Configurez les permissions et copiez le token du bot pour une utilisation ultérieure dans votre application.

<br><br><br>

## ⚙️ Installation :

---

### 1. Clonage du Répertoire

- Placez-vous dans le répertoire où vous souhaitez cloner le dépôt et exécutez la commande suivante pour cloner le projet depuis GitHub :

  ```bash
  git clone git@github.com:Xxzer042xX/discord_bot.git
  ```
<br><br>

### 2. Installation des Dépendances

- Allez dans le répertoire fraîchement cloné (racine du projet) :

  ```bash
  cd discord_bot
  ```
<br><br>

- Installez les dépendances nécessaires pour votre bot Discord à l'aide de npm :
  ```bash
  # Cette commande npm installera les dépendances nécessaires et générera les fichiers package.json et package-lock.json
  
  npm install discord.js schedule dotenv
  ```

<br><br>

### 3. Configuration des Variables d'Environnement

- Créez un fichier `.env` à la racine du projet pour stocker votre token Discord et d'autres configurations sensibles :

  ```bash
  touch .env
  ```
<br><br>

- Ajoutez votre token Discord dans le fichier `.env` en utilisant `echo` :

  ```bash
  echo "DISCORD_TOKEN=VotreTokenDiscord" >> .env
  ```

  Remplacez `VotreTokenDiscord` par votre véritable token Discord.

  <br><br>

### 4. Structure du Projet

- Assurez-vous que votre structure de projet ressemble à ceci après avoir suivi les étapes :

  ```
  ├── node_modules/
  ├── README.md
  ├── commande.js
  ├── greetedMembers.js
  ├── images
  ├── index.js
  ├── package-lock.json
  ├── package.json
  ├── scheduledTask.js
  └── .env
  ```

<br><br><br>

## 🔧 Personnalisation :
> [!WARNING]
> <p align="center">⚠️ Il est essentiel de personnaliser les ID des salons, les noms de commande et les rôles, afin que le Bot active ses fonctionnalités ! ⚠️
---

<br><br>

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

<br><br><br>

## 🚀 Déploiement
---
<br><br>

- Pour déployer votre bot Discord, suivez ces étapes :

1. **Ajout du Bot à Votre Serveur Discord**
   - Assurez-vous que votre bot a été ajouté à votre serveur Discord via le [Discord Developer Portal](https://discord.com/developers/applications).
   - Accordez-lui les permissions nécessaires sur votre serveur Discord.

2. **Lancement du Bot**
   - Pour lancer votre bot, vous pouvez utiliser la commande suivante dans votre terminal à la racine de votre projet :

     ```bash
     node index.js &
     ```

   - L'ajout de `&` à la fin de la commande permet à Node.js de lancer le processus en arrière-plan tout en laissant le terminal disponible pour d'autres commandes. Cependant, ce n'est pas une solution robuste pour la gestion à long terme.

<br><br>

> [!TIP]
>
>  **Exécution en Tâche de Fond avec PM2**
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
>  - Pour plus de détails sur la configuration et les fonctionnalités de PM2, consultez la [documentation officielle de PM2](https://pm2.keymetrics.io/).

<br><br>

> [!NOTE]
>  - Je recommande l'utilisation de PM2 pour le déploiement de votre bot Discord, car cela garantit une disponibilité continue et une gestion facile des processus Node.js
> 
>  - PM2 offre également des fonctionnalités telles que le redémarrage automatique en cas de panne, la surveillance des ressources, et plus encore.

<br><br><br>

## 🤝 Contribution :
> [!NOTE]
> <p align="center">Contribuez au développement de DiscordTaskMasterBot. Rejoignez-nous et faites la différence !
---

<br>

<details>
  <summary>Comment Contribuer ? :</summary>
  
  1. Forkez le dépôt.
     ```bash
     git clone git@github.com:Xxzer042xX/discord_bot.git
     ```
  2. Créez une branche pour vos modifications
     ```bash
     git checkout -b feature-ameliorations
     ```
  3. Commitez vos changements
     ```bash
     git commit -am 'Ajout de nouvelles fonctionnalités'
     ```
  4. Poussez la branche
     ```bash
     git push origin feature-ameliorations
     ```
  5. Créez une nouvelle Pull Request.

</details>


<br><br><br>

## 🆘 Besoin d'Aide ?
---
<br>

<details>
  <summary>Si vous rencontrez des problèmes lors de l'installation ou si vous avez des questions, n'hésitez pas à consulter les ressources suivantes :</summary>
  <br>
  
  - [Documentation de Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)
    <br>
    
  - [Stack Overflow](https://stackoverflow.com/)
    <br>
    
  - Vous pouvez aussi me contacter par [email](mailto:your-email@example.com)
  
</details>
