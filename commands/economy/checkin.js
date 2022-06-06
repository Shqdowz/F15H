const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

// Initialization (change on restart)

let rf, fishName;
const commonFish = ["cod", "herring", "pufferfish", "salmon", "shrimp"];
const uncommonFish = ["butterfish", "clownfish", "duck", "penguin", "squid"];
const rareFish = ["crab", "orca", "otter", "shark", "whale"];
const epicFish = ["jellyfish", "octopus", "seahorse", "seal", "walrus"];
const mythicFish = ["coral", "crocodile", "flamingo", "manatee", "turtle"];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("checkin")
    .setDescription("Grants you daily rewards"),
  async execute(interaction, client) {
    // Database

    const userProfile = await client.createUser(interaction.member);

    // Cooldown

    const secondsLeft =
      Math.round((userProfile.checkinCooldown - Date.now()) / 100) / 10;

    // const minutesLeft =
    //   Math.round((userProfile.checkinCooldown - Date.now()) / 6000) / 10;

    const hoursLeft =
      Math.round((userProfile.checkinCooldown - Date.now()) / 144000) / 10;

    if (secondsLeft >= 0) {
      await interaction.reply({
        content: `You are on cooldown for the \`checkin\` command! Please wait ${hoursLeft} more hours.`,
        ephemeral: true,
      });
    } else {
      // Initialization (change on command)

      let reward, amount;

      // Code

      if (Date.now() > userProfile.checkinCooldown + 10000) {
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { day: (userProfile.day = 1) }
        );
      }

      const cooldown = Date.now() + 60 * 24 * 24 * 1000;

      await User.findOneAndUpdate(
        { _id: userProfile._id },
        { checkinCooldown: (userProfile.checkinCooldown = cooldown) }
      );

      switch (userProfile.day) {
        case 1:
          reward = "random commons";
          amount = 5;
          break;
        case 2:
          reward = "experience";
          amount = 40;
          break;
        case 3:
          reward = "Fish Coins";
          amount = 8;
          break;
        case 4:
          reward = "Fish Crystal";
          amount = 1;
          break;
        case 5:
          reward = "random commons";
          amount = 10;
          break;
        case 6:
          reward = "⭐ Loot Box";
          amount = 1;
          break;
        case 7:
          reward = "random uncommons";
          amount = 4;
          break;
        case 8:
          reward = "experience";
          amount = 80;
          break;
        case 9:
          reward = "Fish Coins";
          amount = 26;
          break;
        case 10:
          reward = "Fish Crystals";
          amount = 2;
          break;
        case 11:
          reward = "random uncommons";
          amount = 8;
          break;
        case 12:
          reward = "⭐⭐ Loot Box";
          amount = 1;
          break;
        case 13:
          reward = "random rares";
          amount = 3;
          break;
        case 14:
          reward = "experience";
          amount = 160;
          break;
        case 15:
          reward = "Fish Coins";
          amount = 80;
          break;
        case 16:
          reward = "Fish Crystals";
          amount = 3;
          break;
        case 17:
          reward = "random rares";
          amount = 6;
          break;
        case 18:
          reward = "⭐⭐⭐ Loot Box";
          amount = 1;
          break;
        case 19:
          reward = "random epics";
          amount = 2;
          break;
        case 20:
          reward = "experience";
          amount = 320;
          break;
        case 21:
          reward = "Fish Coins";
          amount = 224;
          break;
        case 22:
          reward = "Fish Crystals";
          amount = 4;
          break;
        case 23:
          reward = "random epics";
          amount = 4;
          break;
        case 24:
          reward = "⭐⭐⭐⭐ Loot Box";
          amount = 1;
          break;
        case 25:
          reward = "random mythic";
          amount = 1;
          break;
        case 26:
          reward = "experience";
          amount = 640;
          break;
        case 27:
          reward = "Fish Coins";
          amount = 512;
          break;
        case 28:
          reward = "Fish Crystals";
          amount = 5;
          break;
        case 29:
          reward = "random mythics";
          amount = 2;
          break;
        case 30:
          reward = "⭐⭐⭐⭐⭐ Loot Box";
          amount = 1;
          break;
      }

      if (reward == "random commons") {
        for (let i = 0; i < amount; i++) {
          const random = Math.floor(Math.random() * 5);
          rf = commonFish[random];
          fishName = rf.charAt(0).toUpperCase() + rf.slice(1);

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            {
              [rf]: (userProfile[rf] += 1),
              [`total${fishName}`]: (userProfile[`total${fishName}`] += 1),
            }
          );

          if (userProfile[`${rf}Level`] == 0) {
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { [`${rf}Level`]: (userProfile[`${rf}Level`] = 1) }
            );
          }
        }
      } else if (reward == "random uncommons") {
        for (let i = 0; i < amount; i++) {
          const random = Math.floor(Math.random() * 5);
          rf = uncommonFish[random];
          fishName = rf.charAt(0).toUpperCase() + rf.slice(1);

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            {
              [rf]: (userProfile[rf] += 1),
              [`total${fishName}`]: (userProfile[`total${fishName}`] += 1),
            }
          );

          if (userProfile[`${rf}Level`] == 0) {
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { [`${rf}Level`]: (userProfile[`${rf}Level`] = 1) }
            );
          }
        }
      } else if (reward == "random rares") {
        for (let i = 0; i < amount; i++) {
          const random = Math.floor(Math.random() * 5);
          rf = rareFish[random];
          fishName = rf.charAt(0).toUpperCase() + rf.slice(1);

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            {
              [rf]: (userProfile[rf] += 1),
              [`total${fishName}`]: (userProfile[`total${fishName}`] += 1),
            }
          );

          if (userProfile[`${rf}Level`] == 0) {
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { [`${rf}Level`]: (userProfile[`${rf}Level`] = 1) }
            );
          }
        }
      } else if (reward == "random epics") {
        for (let i = 0; i < amount; i++) {
          const random = Math.floor(Math.random() * 5);
          rf = epicFish[random];
          fishName = rf.charAt(0).toUpperCase() + rf.slice(1);

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            {
              [rf]: (userProfile[rf] += 1),
              [`total${fishName}`]: (userProfile[`total${fishName}`] += 1),
            }
          );

          if (userProfile[`${rf}Level`] == 0) {
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { [`${rf}Level`]: (userProfile[`${rf}Level`] = 1) }
            );
          }
        }
      } else if (reward == "random mythic" || reward == "random mythics") {
        for (let i = 0; i < amount; i++) {
          const random = Math.floor(Math.random() * 5);
          rf = mythicFish[random];
          fishName = rf.charAt(0).toUpperCase() + rf.slice(1);

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            {
              [rf]: (userProfile[rf] += 1),
              [`total${fishName}`]: (userProfile[`total${fishName}`] += 1),
            }
          );

          if (userProfile[`${rf}Level`] == 0) {
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { [`${rf}Level`]: (userProfile[`${rf}Level`] = 1) }
            );
          }
        }
      } else if (reward == "Fish Coins") {
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
        reward == "⭐⭐⭐⭐⭐ Loot Box"
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
          case "⭐⭐⭐⭐⭐ Loot Box":
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { s5LootBox: (userProfile.s5LootBox += amount) }
            );
            break;
        }
      } else if (reward == "experience") {
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { experience: (userProfile.experience += amount) }
        );
      }

      const embed = new MessageEmbed()
        .setTitle(`Checked in!`)
        .addFields({
          name: `Day ${userProfile.day} rewards`,
          value: `${amount} ${reward}`,
        })
        .setFooter({ text: `Performed by ${interaction.user.tag}` })
        .setColor("#ADD8E6")
        .setTimestamp();

      await interaction.reply({
        content: `${interaction.user}`,
        embeds: [embed],
      });

      await User.findOneAndUpdate(
        { _id: userProfile._id },
        { day: (userProfile.day += 1) }
      );

      if (userProfile.day > 30) {
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { day: (userProfile.day = 1) }
        );
      }
    }
  },
};
