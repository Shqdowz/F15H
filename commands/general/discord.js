const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("discord")
    .setDescription("Join the official F15H discord server"),
  async execute(interaction) {
    const embed = new MessageEmbed()
      .setTitle(`F15H discord server link`)
      .setDescription(
        `Click [here](https://discord.gg/qfnkjSzaK5) to join the official F15H discord server!`
      )
      .setFooter({ text: `Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    await interaction.reply({
      content: `${interaction.user}`,
      embeds: [embed],
    });
  },
};
