const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shop")
    .setDescription("Displays the shop"),
  async execute(interaction) {
    // Embed

    const shop = new MessageEmbed()
      .setTitle(`F15H shop`)
      .addFields(
        {
          name: "[1] Exquisite rod",
          value:
            "Cost: 2000 <:FishCoin:937423381756772364>\n- Greatly increases uncommon drop rate\n- Slightly increases rare, epic, mythic and legendary drop rates\n- Slightly decreases common drop rate",
        },
        {
          name: "[2] Precious rod",
          value:
            "Cost: 4000 <:FishCoin:937423381756772364>\n- Greatly increases rare drop rate\n- Slightly increases epic, mythic and legendary drop rates\n- Slightly decreases common and uncommon drop rates",
        },
        {
          name: "[3] Luxurious rod",
          value:
            "Cost: 8000 <:FishCoin:937423381756772364>\n- Greatly increases epic drop rate\n- Slightly increases mythic and legendary drop rates\n- Slightly decreases common, uncommon and rare drop rates",
        },
        {
          name: "[4] Divine rod",
          value:
            "Cost: 16000 <:FishCoin:937423381756772364>\n- Greatly increases mythic drop rate\n- Slightly increases legendary drop rate\n- Slightly decreases common, uncommon, rare and epic drop rates",
        }
      )
      .setFooter({ text: `Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    // Code

    await interaction.reply({
      content: `${interaction.user}`,
      embeds: [shop],
    });
  },
};
