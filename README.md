# Mon Bot Discord

Ce projet contient un bot Discord développé en utilisant discord.js et node-schedule pour diverses fonctionnalités.

## Fonctionnalités

- **Gestion des Commandes :** Réagit aux commandes spécifiques comme `!piscine` pour attribuer des rôles.
- **Salutations Quotidiennes :** Accueille les nouveaux membres et envoie des messages quotidiens dans des canaux spécifiques.
- **Planification des Tâches :** Utilise node-schedule pour planifier des actions à des heures spécifiques.

## Fichiers Principaux

- **`index.js` :** Point d'entrée du bot Discord. Il initialise le client Discord, configure les événements et les tâches planifiées.
- **`commands.js` :** Contient les fonctions pour gérer les commandes comme `!piscine` et les salutations quotidiennes.
- **`scheduledTasks.js` :** Gère les tâches planifiées telles que la réinitialisation des salutations quotidiennes et le décompte jusqu'à une date spécifique.
- **`.env` :** Fichier de configuration pour les variables d'environnement, y compris le token Discord.
- **`package.json` :** Fichier de configuration npm définissant les dépendances et les scripts pour démarrer et tester le bot.

## Installation

1. **Clonez le Repository :**
   ```bash
   git clone https://github.com/votre-utilisateur/mon-bot-discord.git
   cd mon-bot-discord
   ```

2. **Installez les Dépendances :**
   ```bash
   npm install
   ```

3. **Configurez les Variables d'Environnement :**
   - Créez un fichier `.env` à la racine du projet.
   - Ajoutez votre token Discord dans le fichier `.env` :
     ```
     DISCORD_TOKEN=VotreTokenDiscord
     ```

## Utilisation

Pour démarrer le bot Discord, utilisez la commande suivante :
```bash
npm start
```

Assurez-vous que votre bot est invité sur votre serveur Discord et qu'il dispose des permissions appropriées pour fonctionner correctement.

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ou ajouter des fonctionnalités, veuillez :

1. Forkez le repository.
2. Créez une branche pour vos modifications (`git checkout -b ameliorations-fonctionnalites`).
3. Committez vos changements (`git commit -am 'Ajout de nouvelles fonctionnalités'`).
4. Pushez vers la branche (`git push origin ameliorations-fonctionnalites`).
5. Créez une nouvelle Pull Request.

## Licence

Ce projet est sous licence [ISC](https://opensource.org/licenses/ISC).

---

© 2024 Votre Nom
