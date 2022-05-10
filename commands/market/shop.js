// ✅

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const embedObject = require("../../objects/embeds");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shop")
    .setDescription("Displays the shop"),
  async execute(interaction, client) {
    embedObject.shop.setFooter({
      text: `Requested by ${interaction.user.tag}`,
    });
    await interaction.reply({ embeds: [embedObject.shop] });
  },
};
