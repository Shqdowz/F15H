const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("loot")
    .setDescription("Displays Loot Box drop rates"),
  async execute(interaction, client) {
    // Embed

    const loot = new MessageEmbed()
      .setTitle("Loot Box drop rates")
      .addFields(
        {
          name: "⭐ Loot Box",
          value:
            "• 100 Fish Coins - 32%\n• 200 Fish Coins - 24%\n• 300 Fish Coins - 16%\n• 1 Fish Crystal - 12%\n• 2 Fish Crystals - 8%\n• 3 Fish Crystals - 4%\n• ⭐⭐ Loot Box - 4%",
          inline: true,
        },
        {
          name: "⭐⭐ Loot Box",
          value:
            "• 200 Fish Coins - 32%\n• 400 Fish Coins - 24%\n• 600 Fish Coins - 16%\n• 2 Fish Crystals - 12%\n• 4 Fish Crystals - 8%\n• 6 Fish Crystals - 4%\n• ⭐⭐⭐ Loot Box - 4%",
          inline: true,
        },
        {
          name: "⭐⭐⭐ Loot Box",
          value:
            "• 400 Fish Coins - 32%\n• 800 Fish Coins - 24%\n• 1200 Fish Coins - 16%\n• 4 Fish Crystal - 12%\n• 8 Fish Crystals - 8%\n• 12 Fish Crystals - 4%\n• ⭐⭐⭐⭐ Loot Box - 4%",
          inline: true,
        },
        {
          name: "⭐⭐⭐⭐ Loot Box",
          value:
            "• 800 Fish Coins - 32%\n• 1600 Fish Coins - 24%\n• 2400 Fish Coins - 16%\n• 8 Fish Crystal - 12%\n• 16 Fish Crystals - 8%\n• 24 Fish Crystals - 4%\n• ⭐⭐⭐⭐⭐ Loot Box - 4%",
          inline: true,
        },
        {
          name: "⭐⭐⭐⭐⭐ Loot Box",
          value:
            "• 1600 Fish Coins - 32%\n• 3200 Fish Coins - 24%\n• 4800 Fish Coins - 16%\n• 16 Fish Crystal - 12%\n• 32 Fish Crystals - 8%\n• 48 Fish Crystals - 4%\n• 2x ⭐⭐⭐⭐⭐ Loot Box - 4%",
          inline: true,
        }
      )
      .setFooter({ text: `Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    // Code

    await interaction.reply({
      content: `${interaction.user}`,
      embeds: [loot],
    });
  },
};
