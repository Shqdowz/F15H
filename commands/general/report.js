const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("report")
    .setDescription("Report a bug")
    .addStringOption((option) =>
      option
        .setName("bug")
        .setDescription("The bug to report")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const bug = interaction.options.getString("bug");

    const guild = client.guilds.cache.get("937018874572972112");
    const channel = "967880628278292540";

    const embed = new MessageEmbed()
      .setTitle(
        `Bug report from ${interaction.user.tag} (${interaction.user.id})`
      )
      .setDescription(`${bug}`)
      .setFooter({ text: `✅ = will be looked into` })
      .setColor("#ADD8E6")
      .setTimestamp();

    const reply = await guild.channels.cache.get(channel).send({
      embeds: [embed],
    });
    reply.react("✅");
    await interaction.reply({
      content: `Bug reported to the developers!`,
      ephemeral: true,
    });
  },
};
