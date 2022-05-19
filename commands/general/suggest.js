const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("suggest")
    .setDescription("Suggest a feature for the bot")
    .addStringOption((option) =>
      option
        .setName("suggestion")
        .setDescription("The suggestion to send")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const suggestion = interaction.options.getString("suggestion");

    const guild = client.guilds.cache.get("937018874572972112");
    const channel = "967880555540664370";

    const embed = new MessageEmbed()
      .setTitle(
        `Suggestion from ${interaction.user.tag} (${interaction.user.id})`
      )
      .setDescription(`${suggestion}`)
      .setFooter({ text: `✅ = will be added` })
      .setColor("#ADD8E6")
      .setTimestamp();

    const reply = await guild.channels.cache.get(channel).send({
      embeds: [embed],
    });
    reply.react("✅");
    await interaction.reply({
      content: `Suggestion sent to the developers!`,
      ephemeral: true,
    });
  },
};
