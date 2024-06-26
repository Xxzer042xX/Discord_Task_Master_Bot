// Import des modules nécessaires avec gestion des erreurs
try {
    require('dotenv').config(); // Charge les variables d'environnement à partir d'un fichier .env
    const { Client, GatewayIntentBits } = require('discord.js'); // Importation des classes Client et GatewayIntentBits de discord.js
    const schedule = require('node-schedule'); // Importation de node-schedule pour planifier des tâches
    const { handlePiscineCommand, handleDailyGreetings, sendMessage } = require('./commands'); // Importation des fonctions depuis commands.js
    const { countdownToAugust19, resetDailyGreetings } = require('./scheduledTasks'); // Importation des fonctions depuis scheduledTasks.js
    const { greetedMembersToday } = require('./greetedMembers'); // Importation de greetedMembersToday depuis greetedMembers.js
} catch (error) {
    console.error('Erreur lors de l\'importation des modules :', error);
    process.exit(1); // Arrêt du processus en cas d'erreur
}

// Création d'une instance de client Discord
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] // Spécifie les intentions nécessaires
});

// Événement déclenché lorsque le bot est prêt
client.once('ready', () => {
    console.log('Le bot est prêt.');

    // Planification de la réinitialisation des salutations quotidiennes à minuit
    schedule.scheduleJob('0 0 * * *', resetDailyGreetings);
    
    // Planification du décompte quotidien jusqu'au 19 août à 13:30
    schedule.scheduleJob('30 13 * * *', () => countdownToAugust19(client));
});

// Événement déclenché lorsqu'un nouveau membre rejoint la guilde
client.on('guildMemberAdd', async (member) => {
    const welcomeMessage = `Votre${member}message de bienvenue`;// Remplacez 'Votre message de bienvenue' par votre message souhaitez
    await sendMessage(client, 'ID_DU_CANAL_DE_BIENVENUE', welcomeMessage); // Remplacez 'ID_DU_CANAL_DE_BIENVENUE' par l'ID du canal de bienvenue
});

// Événement déclenché lorsqu'un message est créé
client.on('messageCreate', async (message) => {
    // Ignore les messages provenant des bots
    if (message.author.bot) return;

    // Vérifie si le message est la commande !votre_commande
    if (message.content === 'votre_commande') { //Remplacez  'votre_commande' par votre commande spécifique
        await handlePiscineCommand(message);
    } else {
        // Gère les salutations quotidiennes
        await handleDailyGreetings(message);
    }
});

// Connexion du bot à Discord avec le token sécurisé
client.login(process.env.DISCORD_TOKEN).catch(error => console.error('Erreur lors de la connexion du bot:', error));
