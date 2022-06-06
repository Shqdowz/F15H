const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("news")
    .setDescription("View the latest news"),
  async execute(interaction) {
    const embed = new MessageEmbed()
      .setTitle(`The latest F15H news`)
      .addFields(
        {
          name: "25-5-2022",
          value:
            "F15H is now available to everyone! `/invite` the bot to your server :D",
        },
        {
          name: "29-5-2022",
          value: "Update v1.1 is live!",
        }
      )
      .setFooter({ text: `Reported at: 25-5-2022` })
      .setColor("#ADD8E6")
      .setTimestamp();

    await interaction.reply({
      content: `${interaction.user}`,
      embeds: [embed],
    });
  },
};
