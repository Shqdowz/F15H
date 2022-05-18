const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("verify")
    .setDescription("Verify that you aren't afk")
    .addStringOption((option) =>
      option
        .setName("code")
        .setDescription("The code to verify")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const code = interaction.options.getString("code");

    const userProfile = await client.createUser(interaction.member);

    if (userProfile.needVerify) {
      if (code == userProfile.verifyCode) {
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { needVerify: (userProfile.needVerify = false) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { verifyCode: (userProfile.verifyCode = undefined) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { commandCounter: (userProfile.commandCounter = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { wrongCodeCounter: (userProfile.wrongCodeCounter = 0) }
        );

        await interaction.reply({ content: `Verified!`, ephemeral: true });
      } else {
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { wrongCodeCounter: (userProfile.wrongCodeCounter += 1) }
        );

        await interaction.reply({
          content: `Wrong code! /v (verify) your code to prove you aren't afk: \`${userProfile.verifyCode}\`.`,
          ephemeral: true,
        });
      }
    } else {
      await interaction.reply({
        content: `You currently do not need to verify!`,
        ephemeral: true,
      });
    }
  },
};
