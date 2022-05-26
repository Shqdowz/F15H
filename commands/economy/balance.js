const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const User = require("../../schemas/user");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("balance")
    .setDescription("Displays your balance")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user of who to view the balance")
        .setRequired(false)
    ),
  async execute(interaction, client) {
    // Option

    let user = interaction.options.getUser("user")
      ? interaction.options.getUser("user")
      : interaction.user;

    // Initialization

    const userProfile = await client.createUser(user);

    // Embed

    const balance = new MessageEmbed()
      .setTitle(`${user.tag}'s balance`)
      .addFields(
        {
          name: "<:FishCoin:937423381756772364> Fish Coins",
          value: `${userProfile.fishCoins}`,
        },
        {
          name: "Fish Crystals",
          value: `${userProfile.fishCrystals}`,
        }
      )
      .setFooter({ text: `Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    // Code

    await interaction.reply({
      content: `${interaction.user}`,
      embeds: [balance],
    });
  },
};
