const { SlashCommandBuilder } = require("@discordjs/builders");
const User = require("../../schemas/user");

// Initialization (change on restart)

const legendaryFish = ["blobfish", "catfish", "dolphin", "mermaid", "starfish"];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("v")
    .setDescription("Verify that you aren't afk")
    .addStringOption((option) =>
      option
        .setName("code")
        .setDescription("The code to verify")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    // Option

    const code = interaction.options.getString("code");

    // Database

    const userProfile = await client.createUser(interaction.member);

    // Code

    if (userProfile.needVerify) {
      if (code == userProfile.verifyCode) {
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          {
            needVerify: (userProfile.needVerify = false),
            verifyCode: (userProfile.verifyCode = undefined),
            commandCounter: (userProfile.commandCounter = 0),
            wrongCodeCounter: (userProfile.wrongCodeCounter = 0),
          }
        );

        if (code == "69420") {
          const fish = legendaryFish[Math.floor(Math.random() * 5)];
          const fishName = fish.charAt(0).toUpperCase() + fish.slice(1);
          const totalFish = `total${fishName}`;
          const fishLevel = `${fish}Level`;

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            {
              [fish]: (userProfile[fish] += 1),
              [totalFish]: (userProfile[totalFish] += 1),
            }
          );

          if (userProfile[fishLevel] == 0) {
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { [fishLevel]: (userProfile[fishLevel] = 1) }
            );
          }

          await interaction.reply({
            content: `Verified! In addition, since your code was 69420, you were given a legendary fish!`,
            ephemeral: true,
          });
        } else {
          await interaction.reply({ content: `Verified!`, ephemeral: true });
        }
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
