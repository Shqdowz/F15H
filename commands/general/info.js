// ✅

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fishObject = require("../../objects/fish");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Displays info about a fish")
    .addStringOption((option) =>
      option
        .setName("fish")
        .setDescription("The name of the fish")
        .setRequired(true)
    ),
  async execute(interaction) {
    const fish = interaction.options.getString("fish").toLowerCase();

    try {
      const embed = new MessageEmbed()
        .setTitle(fishObject[fish].name)
        .addFields(
          {
            name: "General information",
            value: fishObject[fish].description,
          },
          {
            name: "Statistics (LVL 1)",
            value: `:heart: Health: ${fishObject[fish].health}
              :dagger: Damage: ${fishObject[fish].damage}
              :boom: Crit:
              - Rate: ${fishObject[fish].critRate}%
              - Damage: ${fishObject[fish].critDamage}%`,
          },
          {
            name: "Market",
            value: `Sell price: ${fishObject[fish].sell} <:FishCoin:937423381756772364> Fish Coin
              Buy price: Auction House exclusive
              Trading: ${fishObject[fish].trade} every 6 hours`,
          }
        )
        .setFooter({
          text: `Requested by ${interaction.user.tag}`,
        })
        .setColor("#ADD8E6")
        .setTimestamp();
      await interaction.reply({ embeds: [embed] });
    } catch (err) {
      await interaction.reply({
        content: "That fish does not exist! Valid fish: `cod, ...`.",
        ephemeral: true,
      });
      console.log(err);
    }
  },
};
