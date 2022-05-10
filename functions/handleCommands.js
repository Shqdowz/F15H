const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("node:fs");

const clientId = "939481785060950087";
const guildId = "972088439015096340"; // F15H dev

module.exports = (client) => {
  client.handleCommands = async (commandFolders, path) => {
    client.commandArray = [];
    for (folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`${path}/${folder}`)
        .filter((file) => file.endsWith(".js"));
      for (const file of commandFiles) {
        const command = require(`../commands/${folder}/${file}`);
        client.commands.set(command.data.name, command);
        client.commandArray.push(command.data.toJSON());
        console.log(`Loaded ${folder}/${file}!`);
      }
    }

    const rest = new REST({ version: "9" }).setToken(process.env.token);

    (async () => {
      try {
        console.log(
          `--------------------------------------------------\nStarted refreshing application (/) commands...`
        );

        await rest.put(Routes.applicationCommands(clientId), {
          body: client.commandArray,
        });

        console.log("Successfully reloaded application (/) commands!");
      } catch (error) {
        console.error(error);
      }
    })();
  };
};
