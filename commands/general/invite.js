const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite the bot to your server"),
  async execute(interaction, client) {
    const embed = new MessageEmbed()
      .setTitle(`F15H bot invite link`)
      .setDescription(
        `Click [here](https://discord.com/api/oauth2/authorize?client_id=939481785060950087&permissions=388160&scope=bot%20applications.commands) to invite F15H to your server!`
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
