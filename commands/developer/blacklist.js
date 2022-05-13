const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("blacklist")
    .setDescription("(DEV) Blacklist a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The userID to blacklist")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    if (interaction.user.id === "410448098326872064") {
      const user = interaction.options.getUser("user");

      const userProfile = await client.createUser(user);

      const embed = new MessageEmbed()
        .setTitle(`Blacklist successful!`)
        .setDescription(`Blacklisted user ${user} (${user.id})`)
        .setColor("#ADD8E6")
        .setTimestamp();

      await interaction.reply({
        embeds: [embed],
        ephemeral: true,
      });

      await User.findOneAndUpdate(
        { _id: userProfile._id },
        { isBlacklisted: (userProfile.isBlacklisted = true) }
      );
    } else {
      await interaction.reply({
        content: `You are not allowed to use this command!`,
        ephemeral: true,
      });
    }
  },
};
