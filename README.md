<p align="center">
  <img src="images/discord.png" alt="discord_bot" style="width: 50%; height: auto;">
</p>

<h1 align="center">The Discord Server Assistant Bot is a versatile tool designed to enhance the functionality of a server. Seamlessly integrated, it simplifies moderation, facilitates communication, offers entertainment, and optimizes server management.</h1>
<hr>
<br><br>

## Features

<br>

- **Command Handling:** Reacts to specific commands like `!pool` to assign roles.
- **Daily Greetings:** Welcomes new members and sends daily messages to specific channels.
- **Task Scheduling:** Uses node-schedule to schedule actions at specific times.
  
<br>

## Main Files

<br>

- **`index.js` :** Entry point of the Discord bot. It initializes the Discord client, configures events, and handles scheduled tasks.
- **`commands.js` :** Contains functions to manage commands like and daily greetings.
- **`scheduledTasks.js` :** Manages scheduled tasks such as resetting daily greetings and counting down to a specific date.
- **`.env` :** Configuration file for environment variables, including the Discord token.
- **`package.json` :** npm configuration file defining dependencies and scripts to start and test the bot.

<br>
  
## Installation

<br>

1. **Clone the Repository:**
   ```bash
   git clone git@github.com:Xxzer042xX/discord_bot.git
   cd discord_bot
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Environment Variables:**
   - Create a `.env` file at the root of the project.
   - Add your Discord token to the `.env` file:
     ```
     DISCORD_TOKEN=YourDiscordToken
     ```
<br>

## Usage

<br>

To start the Discord bot, use the following command:
```bash
npm start
```

Ensure your bot is invited to your Discord server and has appropriate permissions to function correctly.

<br>

## Contributing

<br>

Contributions are welcome! If you want to improve or add features, please:

1. Fork the repository.
2. Create a branch for your changes (`git checkout -b feature-improvements`).
3. Commit your changes (`git commit -am 'Added new features'`).
4. Push to the branch (`git push origin feature-improvements`).
5. Create a new Pull Request.

<br>

## License

<br>

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

© 2024 Your Name
