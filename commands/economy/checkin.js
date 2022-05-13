// Global

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("checkin")
    .setDescription("Grants you daily rewards"),
  async execute(interaction, client) {
    await interaction.reply({
      content: `This command is currently in maintenance!`,
      ephemeral: true,
    });
  },
};
