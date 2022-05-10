// Global

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("open")
    .setDescription("Open a loot box"),
  async execute(interaction, client) {
    await interaction.reply({
      content: `This command is in maintenance!`,
      ephemeral: true,
    });
  },
};
