// Importation des modules nécessaires
require('dotenv').config(); // Charge les variables d'environnement à partir d'un fichier .env
const { Client, GatewayIntentBits } = require('discord.js'); // Importation des classes Client et GatewayIntentBits de discord.js
const schedule = require('node-schedule'); // Importation de node-schedule pour planifier des tâches
const { handlePiscineCommand, handleDailyGreetings, sendMessage } = require('./commands'); // Importation des fonctions depuis commands.js
const { countdownToAugust19, resetDailyGreetings } = require('./scheduledTasks'); // Importation des fonctions depuis scheduledTasks.js

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
    const welcomeMessage = `Bienvenue ${member}! Assurez-vous de lire les [règles](<#1207071388305854577>). et d'accepter avec "!ok" ici`;
    await sendMessage(client, '1207071388305854578', welcomeMessage);
});

// Événement déclenché lorsqu'un message est créé
client.on('messageCreate', async (message) => {
    // Ignore les messages provenant des bots
    if (message.author.bot) return;

    // Vérifie si le message est la commande !piscine
    if (message.content === '!piscine') {
        await handlePiscineCommand(message);
    } else {
        // Gère les salutations quotidiennes
        await handleDailyGreetings(message);
    }
});

// Connexion du bot à Discord avec le token sécurisé
client.login(process.env.DISCORD_TOKEN).catch(error => console.error('Erreur lors de la connexion du bot:', error));
