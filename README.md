# Mon Discord Bot
<p align="center">
  <img src="images/discord.png" alt="discord_bot" style="width: 50%; height: auto;">
</p>

This project contains a Discord bot developed using discord.js and node-schedule for various functionalities.

## Features

- **Command Handling:** Reacts to specific commands like `!pool` to assign roles.
- **Daily Greetings:** Welcomes new members and sends daily messages to specific channels.
- **Task Scheduling:** Uses node-schedule to schedule actions at specific times.

## Main Files

- **`index.js` :** Entry point of the Discord bot. It initializes the Discord client, configures events, and handles scheduled tasks.
- **`commands.js` :** Contains functions to manage commands like `!pool` and daily greetings.
- **`scheduledTasks.js` :** Manages scheduled tasks such as resetting daily greetings and counting down to a specific date.
- **`.env` :** Configuration file for environment variables, including the Discord token.
- **`package.json` :** npm configuration file defining dependencies and scripts to start and test the bot.

## Installation

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

## Usage

To start the Discord bot, use the following command:
```bash
npm start
```

Ensure your bot is invited to your Discord server and has appropriate permissions to function correctly.

## Contributing

Contributions are welcome! If you want to improve or add features, please:

1. Fork the repository.
2. Create a branch for your changes (`git checkout -b feature-improvements`).
3. Commit your changes (`git commit -am 'Added new features'`).
4. Push to the branch (`git push origin feature-improvements`).
5. Create a new Pull Request.

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

© 2024 Your Name
