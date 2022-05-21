const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("news")
    .setDescription("View the latest news"),
  async execute(interaction, client) {
    const embed = new MessageEmbed()
      .setTitle(`The latest F15H news`)
      .setDescription(
        `F15H closed beta has launched in the Tribe Gaming server!`
      )
      .setFooter({ text: `Reported at: 14-5-2022` })
      .setColor("#ADD8E6")
      .setTimestamp();

    await interaction.reply({
      content: `${interaction.user}`,
      embeds: [embed],
    });
  },
};
