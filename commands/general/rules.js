const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules")
    .setDescription("Displays the bot rules"),
  async execute(interaction) {
    const embed = new MessageEmbed()
      .setTitle("F15H bot rules")
      .setDescription(
        `1. Do not exploit any bugs. /report them instead.\n2. Do not afk when fishing. This includes using macros.\n\n**__Disobeying a bot rule will result in a blacklist!__**`
      )
      .setFooter({ text: `Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};
