const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

let embed, rf;
const commonFish = ["cod", "herring", "pufferfish", "salmon", "shrimp"];
const uncommonFish = ["butterfish", "clownfish", "duck", "penguin", "squid"];
const rareFish = ["crab", "orca", "otter", "shark", "whale"];
const epicFish = ["jellyfish", "octopus", "seahorse", "seal", "walrus"];
const mythicFish = ["coral", "crocodile", "flamingo", "manatee", "turtle"];
const legendaryFish = ["blobfish", "catfish", "dolphin", "mermaid", "starfish"];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("redeem")
    .setDescription("Redeem a gift code")
    .addStringOption((option) =>
      option
        .setName("code")
        .setDescription("The code to redeem")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const code = interaction.options.getString("code");

    const userProfile = await client.createUser(interaction.member);

    switch (code) {
      case "F15Hlaunch":
        if (!userProfile.F15Hlaunch) {
          embed = new MessageEmbed()
            .setTitle("Redeem successful!")
            .setDescription(
              `You got:\n\n- 250 Fish Coins\n- 5 random common fish\n- 3 random uncommon fish\n- 1 random rare fish`
            )
            .setColor("#ADD8E6")
            .setTimestamp();
          await interaction.reply({ embeds: [embed], ephemeral: true });

          for (let i = 0; i < 5; i++) {
            const random = Math.floor(Math.random() * 5);
            rf = commonFish[random];

            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { [rf]: (userProfile[rf] += 1) }
            );
          }
          for (let i = 0; i < 3; i++) {
            const random = Math.floor(Math.random() * 5);
            rf = uncommonFish[random];

            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { [rf]: (userProfile[rf] += 1) }
            );
          }
          for (let i = 0; i < 1; i++) {
            const random = Math.floor(Math.random() * 5);
            rf = rareFish[random];

            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { [rf]: (userProfile[rf] += 1) }
            );
          }
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { fishCoins: (userProfile.fishCoins += 250) }
          );

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { F15Hlaunch: (userProfile.F15Hlaunch = true) }
          );
        } else {
          await interaction.reply({
            content: `You have already claimed this code!`,
            ephemeral: true,
          });
        }
        break;
      case "ShqdowzIsPog":
        if (!userProfile.ShqdowzIsPog) {
          embed = new MessageEmbed()
            .setTitle("Redeem successful!")
            .setDescription(`You got:\n\n- 1 ⭐⭐⭐⭐⭐ Loot Box`)
            .setColor("#ADD8E6")
            .setTimestamp();
          await interaction.reply({ embeds: [embed], ephemeral: true });

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { s5LootBox: (userProfile.s5LootBox += 1) }
          );

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { ShqdowzIsPog: (userProfile.ShqdowzIsPog = true) }
          );
        } else {
          await interaction.reply({
            content: `You have already claimed this code!`,
            ephemeral: true,
          });
        }
        break;
      case "legendaryplz":
        if (!userProfile.legendaryplz) {
          embed = new MessageEmbed()
            .setTitle("Redeem successful!")
            .setDescription(`You got:\n\n- 1 random legendary fish`)
            .setColor("#ADD8E6")
            .setTimestamp();
          await interaction.reply({ embeds: [embed], ephemeral: true });

          const random = Math.floor(Math.random() * 5);
          rf = legendaryFish[random];

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { [rf]: (userProfile[rf] += 1) }
          );

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { legendaryplz: (userProfile.legendaryplz = true) }
          );
        } else {
          await interaction.reply({
            content: `You have already claimed this code!`,
            ephemeral: true,
          });
        }
        break;
      default:
        await interaction.reply({
          content:
            "Invalid code! The provided code either does not exist, has no uses left or has expired.",
          ephemeral: true,
        });
        break;
    }
  },
};
