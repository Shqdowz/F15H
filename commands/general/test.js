const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Test an output"),
  async execute(interaction, client) {
    console.log(client.guilds.cache.map((guild) => guild.name));
  },
};
