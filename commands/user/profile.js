const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("profile")
    .setDescription("Displays your profile")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user of who to view the profile")
        .setRequired(false)
    ),
  async execute(interaction, client) {
    let user = interaction.options.getUser("user")
      ? interaction.options.getUser("user")
      : interaction.user;
    const userProfile = await client.createUser(user);

    let embed = new MessageEmbed()
      .setTitle(`${user.tag}'s profile`)
      .addFields(
        {
          name: "Level",
          value: `${userProfile.level}`,
        },
        {
          name: "Experience",
          value: `${userProfile.experience}/${userProfile.neededExperience}`,
        },
        {
          name: "Prestige",
          value: `SOON!`,
        },
        {
          name: "Achievements unlocked",
          value: `SOON!`,
        },
        {
          name: "Is blacklisted",
          value: `${userProfile.isBlacklisted}`,
        }
      )
      .setFooter({ text: `Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();
    await interaction.reply({
      content: `${interaction.user}`,
      embeds: [embed],
    });
  },
};
