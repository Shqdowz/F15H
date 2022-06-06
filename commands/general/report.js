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
    // Option

    const bug = interaction.options.getString("bug");

    // Initialization (change on command)

    const guild = client.guilds.cache.get("937018874572972112");
    const channel = "967880628278292540";

    // Embed

    const embed = new MessageEmbed()
      .setTitle(
        `Bug report from ${interaction.user.tag} (${interaction.user.id})`
      )
      .setDescription(`${bug}`)
      .setFooter({ text: `✅ = will be looked into` })
      .setColor("#ADD8E6")
      .setTimestamp();

    // Code

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
