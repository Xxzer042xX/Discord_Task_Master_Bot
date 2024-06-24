const { sendMessage } = require('./commands'); // Importation de la fonction sendMessage depuis commands.js

// Création d'un ensemble pour suivre les membres salués aujourd'hui (si ce n'est pas déjà défini dans commands.js)
const greetedMembersToday = new Set();

// Fonction pour réinitialiser les salutations quotidiennes
function resetDailyGreetings() {
    // Vide l'ensemble des membres salués
    greetedMembersToday.clear();
    console.log('Réinitialisation des salutations quotidiennes.');
}

// Fonction pour gérer le décompte jusqu'au 19 août
function countdownToAugust19(client) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const targetDate = new Date(currentYear, 7, 19); // Août est le mois 7 en index 0

    // Si la date actuelle dépasse le 19 août, ciblez le 19 août de l'année suivante
    if (today > targetDate) {
        targetDate.setFullYear(currentYear + 1);
    }

    // Calcul de la différence en jours
    const diffTime = Math.abs(targetDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Construction et envoi du message
    const messageText = `Il reste ${diffDays} jours avant le 19 août ${targetDate.getFullYear()}.`;
    const eventLink = "https://discord.com/events/ID_DE_L_EVENEMENT";
    const message = `@everyone ${messageText} \n[Event Link](${eventLink})`; // Remplacez 'ID_DE_L_EVENEMENT' par l'ID réel de votre événement Discord

    // ID du canal cible
    const channelId = 'ID_DU_CANAL'; // Remplacez 'ID_DU_CANAL' par l'ID réel du canal cible
    sendMessage(client, channelId, message);
}

// Exportation des fonctions pour les utiliser dans d'autres fichiers
module.exports = {
    resetDailyGreetings,
    countdownToAugust19
};
