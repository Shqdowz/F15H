const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const f = require("../../objects/fish");

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
    // Option

    const fish = interaction.options.getString("fish").toLowerCase();

    // Code

    try {
      const embed = new MessageEmbed()
        .setTitle(f[fish].name)
        .addFields(
          {
            name: "General information",
            value: f[fish].description,
          },
          {
            name: "Levels/Requirements",
            value: `${f[fish].levelsRequirements}`,
          },
          {
            name: "Statistics (LVL 1)",
            value: `:heart: Health: ${f[fish].health}\n:dagger: Damage: ${f[fish].damage}\n:boom: Crit:\n- Rate: ${f[fish].critRate}%\n- Damage: ${f[fish].critDamage}%`,
          },
          {
            name: "Market",
            value: `Sell price: ${f[fish].sell} <:FishCoin:937423381756772364> Fish Coin(s)\nBuy price: Auction House exclusive\nTrading: ${f[fish].trade} every 24 hours`,
          }
        )
        .setFooter({ text: `Requested by ${interaction.user.tag}` })
        .setColor("#ADD8E6")
        .setTimestamp();
      await interaction.reply({
        content: `${interaction.user}`,
        embeds: [embed],
      });
    } catch (err) {
      await interaction.reply({
        content: "That fish does not exist! Valid fish: see your inventory.",
        ephemeral: true,
      });
      console.log(err);
    }
  },
};
