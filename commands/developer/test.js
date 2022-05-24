const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("(DEV) Test an output"),
  async execute(interaction, client) {
    const guildNames = client.guilds.cache.map((guild) => guild.name);
    interaction.reply({ content: `${guildNames}`, ephemeral: true });
  },
};
