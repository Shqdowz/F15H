// Global

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("upgrade")
    .setDescription("Upgrade a fish")
    .addStringOption((option) =>
      option
        .setName("fish")
        .setDescription("The fish to upgrade")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const fish = interaction.options.getString("fish");
    await interaction.reply({
      content: `This command is currently in maintenance!`,
      ephemeral: true,
    });
  },
};
