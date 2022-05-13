const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const embedObject = require("../../objects/embeds");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("(DEV) Send an embed")
    .addStringOption((option) =>
      option
        .setName("embed")
        .setDescription("The embed to send")
        .setRequired(true)
    )
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("The channel where to send the embed")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    if (interaction.user.id === "410448098326872064") {
      const embed = interaction.options.getString("embed").toLowerCase();
      const channel = interaction.options.getChannel("channel");

      try {
        await channel.send({ embeds: [embedObject[embed]] });
        embedObject.confirmation.setDescription(
          `Sent the \`${embed}\` embed to ${channel}!`
        );
        await interaction.reply({
          embeds: [embedObject.confirmation],
          ephemeral: true,
        });
      } catch (err) {
        interaction.reply({
          content: `That embed does not exist!`,
          ephemeral: true,
        });
      }
    } else {
      interaction.reply({
        content: `You are not allowed to use this command!`,
        ephemeral: true,
      });
    }
  },
};
