const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("open")
    .setDescription("Open a loot box")
    .addNumberOption((option) =>
      option
        .setName("stars")
        .setDescription("The amount of stars of the loot box to open")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    // Option

    let stars = interaction.options.getNumber("stars");

    // Database

    const userProfile = await client.createUser(interaction.member);

    // Initialization (change on command)

    let error, success, reward, amount;

    // Code

    switch (stars) {
      case 1:
        if (userProfile.s1LootBox > 0) {
          success = true;
          stars = "⭐";

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { s1LootBox: (userProfile.s1LootBox -= 1) }
          );

          const r = Math.ceil(Math.random() * 25);

          if (r <= 8) {
            reward = "Fish Coins";
            amount = 100;
          } else if (r <= 14) {
            reward = "Fish Coins";
            amount = 200;
          } else if (r <= 18) {
            reward = "Fish Coins";
            amount = 300;
          } else if (r <= 21) {
            reward = "Fish Crystal";
            amount = 1;
          } else if (r <= 23) {
            reward = "Fish Crystals";
            amount = 2;
          } else if (r == 24) {
            reward = "Fish Crystals";
            amount = 3;
          } else {
            reward = "⭐⭐ Loot Box";
            amount = 1;
          }
        } else {
          error = "!enough";
        }
        break;
      case 2:
        if (userProfile.s2LootBox > 0) {
          success = true;
          stars = "⭐⭐";

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { s2LootBox: (userProfile.s2LootBox -= 1) }
          );

          const r = Math.ceil(Math.random() * 25);

          if (r <= 8) {
            reward = "Fish Coins";
            amount = 200;
          } else if (r <= 14) {
            reward = "Fish Coins";
            amount = 400;
          } else if (r <= 18) {
            reward = "Fish Coins";
            amount = 600;
          } else if (r <= 21) {
            reward = "Fish Crystals";
            amount = 2;
          } else if (r <= 23) {
            reward = "Fish Crystals";
            amount = 4;
          } else if (r == 24) {
            reward = "Fish Crystals";
            amount = 6;
          } else {
            reward = "⭐⭐⭐ Loot Box";
            amount = 1;
          }
        } else {
          error = "!enough";
        }
        break;
      case 3:
        if (userProfile.s3LootBox > 0) {
          success = true;
          stars = "⭐⭐⭐";

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { s3LootBox: (userProfile.s3LootBox -= 1) }
          );

          const r = Math.ceil(Math.random() * 25);

          if (r <= 8) {
            reward = "Fish Coins";
            amount = 400;
          } else if (r <= 14) {
            reward = "Fish Coins";
            amount = 800;
          } else if (r <= 18) {
            reward = "Fish Coins";
            amount = 1200;
          } else if (r <= 21) {
            reward = "Fish Crystals";
            amount = 4;
          } else if (r <= 23) {
            reward = "Fish Crystals";
            amount = 8;
          } else if (r == 24) {
            reward = "Fish Crystals";
            amount = 12;
          } else {
            reward = "⭐⭐⭐⭐ Loot Box";
            amount = 1;
          }
        } else {
          error = "!enough";
        }
        break;
      case 4:
        if (userProfile.s4LootBox > 0) {
          success = true;
          stars = "⭐⭐⭐⭐";

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { s4LootBox: (userProfile.s4LootBox -= 1) }
          );

          const r = Math.ceil(Math.random() * 25);

          if (r <= 8) {
            reward = "Fish Coins";
            amount = 800;
          } else if (r <= 14) {
            reward = "Fish Coins";
            amount = 1600;
          } else if (r <= 18) {
            reward = "Fish Coins";
            amount = 2400;
          } else if (r <= 21) {
            reward = "Fish Crystals";
            amount = 8;
          } else if (r <= 23) {
            reward = "Fish Crystals";
            amount = 16;
          } else if (r == 24) {
            reward = "Fish Crystals";
            amount = 24;
          } else {
            reward = "⭐⭐⭐⭐⭐ Loot Box";
            amount = 1;
          }
        } else {
          error = "!enough";
        }
        break;
      case 5:
        if (userProfile.s5LootBox > 0) {
          success = true;
          stars = "⭐⭐⭐⭐⭐";

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { s5LootBox: (userProfile.s5LootBox -= 1) }
          );

          const r = Math.ceil(Math.random() * 25);

          if (r <= 8) {
            reward = "Fish Coins";
            amount = 1600;
          } else if (r <= 14) {
            reward = "Fish Coins";
            amount = 3200;
          } else if (r <= 18) {
            reward = "Fish Coins";
            amount = 4800;
          } else if (r <= 21) {
            reward = "Fish Crystals";
            amount = 16;
          } else if (r <= 23) {
            reward = "Fish Crystals";
            amount = 32;
          } else if (r == 24) {
            reward = "Fish Crystals";
            amount = 48;
          } else {
            reward = "⭐⭐⭐⭐⭐ Loot Boxes";
            amount = 2;
          }
        } else {
          error = "!enough";
        }
        break;
    }

    if (success) {
      const embed = new MessageEmbed()
        .setTitle(`Opened a ${stars} Loot Box!`)
        .setDescription(`You got:\n\n- ${amount} ${reward}`)
        .setFooter({ text: `Performed by ${interaction.user.tag}` })
        .setColor("#ADD8E6")
        .setTimestamp();

      await interaction.reply({
        content: `${interaction.user}`,
        embeds: [embed],
      });

      if (reward == "Fish Coins") {
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { fishCoins: (userProfile.fishCoins += amount) }
        );
      } else if (reward == "Fish Crystal" || reward == "Fish Crystals") {
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { fishCrystals: (userProfile.fishCrystals += amount) }
        );
      } else if (
        reward == "⭐ Loot Box" ||
        reward == "⭐⭐ Loot Box" ||
        reward == "⭐⭐⭐ Loot Box" ||
        reward == "⭐⭐⭐⭐ Loot Box" ||
        reward == "⭐⭐⭐⭐⭐ Loot Boxes"
      ) {
        switch (reward) {
          case "⭐ Loot Box":
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { s1LootBox: (userProfile.s1LootBox += amount) }
            );
            break;
          case "⭐⭐ Loot Box":
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { s2LootBox: (userProfile.s2LootBox += amount) }
            );
            break;
          case "⭐⭐⭐ Loot Box":
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { s3LootBox: (userProfile.s3LootBox += amount) }
            );
            break;
          case "⭐⭐⭐⭐ Loot Box":
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { s4LootBox: (userProfile.s4LootBox += amount) }
            );
            break;
          case "⭐⭐⭐⭐⭐ Loot Boxes":
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { s5LootBox: (userProfile.s5LootBox += amount) }
            );
            break;
        }
      }
    } else if (error == "!enough") {
      await interaction.reply({
        content: `You do not have any Loot Boxes of that type left!`,
        ephemeral: true,
      });
    }
  },
};
