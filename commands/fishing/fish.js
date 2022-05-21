// Compacting

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

let embed,
  color = "ADD8E6",
  fishRarity,
  fishName,
  fishSpecialty,
  hasRod;
const cooldowns = [];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fish")
    .setDescription("Fish with your fishing rod"),
  async execute(interaction, client) {
    const fishRarityRandomizer = Math.ceil(Math.random() * 1000);
    const commonFishNames = [
      "Cod",
      "Herring",
      "Pufferfish",
      "Salmon",
      "Shrimp",
    ];
    const uncommonFishNames = [
      "Butterfish",
      "Clownfish",
      "Duck",
      "Penguin",
      "Squid",
    ];
    const rareFishNames = ["Crab", "Orca", "Otter", "Shark", "Whale"];
    const epicFishNames = [
      "Jellyfish",
      "Octopus",
      "Seahorse",
      "Seal",
      "Walrus",
    ];
    const mythicFishNames = [
      "Coral",
      "Crocodile",
      "Flamingo",
      "Manatee",
      "Turtle",
    ];
    const legendaryFishNames = [
      "Blobfish",
      "Catfish",
      "Dolphin",
      "Mermaid",
      "Starfish",
    ];

    if (cooldowns.includes(interaction.user.id)) {
      await interaction.reply({
        content: `You are currently on cooldown!`,
        ephemeral: true,
      });
    } else {
      cooldowns.push(interaction.user.id);
      setTimeout(() => {
        cooldowns.shift();
      }, 4000);

      const userProfile = await client.createUser(interaction.member);

      switch (userProfile.equippedRod) {
        case "common":
          if (fishRarityRandomizer <= 876) {
            fishRarity = "common";
            fishName = commonFishNames[Math.floor(Math.random() * 5)];
            color = "#808080";
          } else if (
            fishRarityRandomizer > 876 &&
            fishRarityRandomizer <= 940
          ) {
            fishRarity = "uncommon";
            fishName = uncommonFishNames[Math.floor(Math.random() * 5)];
            color = "#00FF00";
          } else if (
            fishRarityRandomizer > 940 &&
            fishRarityRandomizer <= 972
          ) {
            fishRarity = "rare";
            fishName = rareFishNames[Math.floor(Math.random() * 5)];
            color = "#0000FF";
          } else if (
            fishRarityRandomizer > 972 &&
            fishRarityRandomizer <= 988
          ) {
            fishRarity = "epic";
            fishName = epicFishNames[Math.floor(Math.random() * 5)];
            color = "#800080";
          } else if (
            fishRarityRandomizer > 988 &&
            fishRarityRandomizer <= 996
          ) {
            fishRarity = "mythic";
            fishName = mythicFishNames[Math.floor(Math.random() * 5)];
            color = "#FF0000";
          } else {
            fishRarity = "legendary";
            fishName = legendaryFishNames[Math.floor(Math.random() * 5)];
            color = "#FFFF00";
          }
          break;
        case "exquisite":
          if (fishRarityRandomizer <= 617) {
            fishRarity = "common";
            fishName = commonFishNames[Math.floor(Math.random() * 5)];
            color = "#808080";
          } else if (
            fishRarityRandomizer > 617 &&
            fishRarityRandomizer <= 925
          ) {
            fishRarity = "uncommon";
            fishName = uncommonFishNames[Math.floor(Math.random() * 5)];
            color = "#00FF00";
          } else if (
            fishRarityRandomizer > 925 &&
            fishRarityRandomizer <= 965
          ) {
            fishRarity = "rare";
            fishName = rareFishNames[Math.floor(Math.random() * 5)];
            color = "#0000FF";
          } else if (
            fishRarityRandomizer > 965 &&
            fishRarityRandomizer <= 985
          ) {
            fishRarity = "epic";
            fishName = epicFishNames[Math.floor(Math.random() * 5)];
            color = "#800080";
          } else if (
            fishRarityRandomizer > 985 &&
            fishRarityRandomizer <= 995
          ) {
            fishRarity = "mythic";
            fishName = mythicFishNames[Math.floor(Math.random() * 5)];
            color = "#FF0000";
          } else {
            fishRarity = "legendary";
            fishName = legendaryFishNames[Math.floor(Math.random() * 5)];
            color = "#FFFF00";
          }
          break;
        case "precious":
          if (fishRarityRandomizer <= 547) {
            fishRarity = "common";
            fishName = commonFishNames[Math.floor(Math.random() * 5)];
            color = "#808080";
          } else if (
            fishRarityRandomizer > 547 &&
            fishRarityRandomizer <= 821
          ) {
            fishRarity = "uncommon";
            fishName = uncommonFishNames[Math.floor(Math.random() * 5)];
            color = "#00FF00";
          } else if (
            fishRarityRandomizer > 821 &&
            fishRarityRandomizer <= 958
          ) {
            fishRarity = "rare";
            fishName = rareFishNames[Math.floor(Math.random() * 5)];
            color = "#0000FF";
          } else if (
            fishRarityRandomizer > 958 &&
            fishRarityRandomizer <= 982
          ) {
            fishRarity = "epic";
            fishName = epicFishNames[Math.floor(Math.random() * 5)];
            color = "#800080";
          } else if (
            fishRarityRandomizer > 982 &&
            fishRarityRandomizer <= 994
          ) {
            fishRarity = "mythic";
            fishName = mythicFishNames[Math.floor(Math.random() * 5)];
            color = "#FF0000";
          } else {
            fishRarity = "legendary";
            fishName = legendaryFishNames[Math.floor(Math.random() * 5)];
            color = "#FFFF00";
          }
          break;
        case "luxurious":
          if (fishRarityRandomizer <= 522) {
            fishRarity = "common";
            fishName = commonFishNames[Math.floor(Math.random() * 5)];
            color = "#808080";
          } else if (
            fishRarityRandomizer > 522 &&
            fishRarityRandomizer <= 783
          ) {
            fishRarity = "uncommon";
            fishName = uncommonFishNames[Math.floor(Math.random() * 5)];
            color = "#00FF00";
          } else if (
            fishRarityRandomizer > 783 &&
            fishRarityRandomizer <= 914
          ) {
            fishRarity = "rare";
            fishName = rareFishNames[Math.floor(Math.random() * 5)];
            color = "#0000FF";
          } else if (
            fishRarityRandomizer > 914 &&
            fishRarityRandomizer <= 979
          ) {
            fishRarity = "epic";
            fishName = epicFishNames[Math.floor(Math.random() * 5)];
            color = "#800080";
          } else if (
            fishRarityRandomizer > 979 &&
            fishRarityRandomizer <= 993
          ) {
            fishRarity = "mythic";
            fishName = mythicFishNames[Math.floor(Math.random() * 5)];
            color = "#FF0000";
          } else {
            fishRarity = "legendary";
            fishName = legendaryFishNames[Math.floor(Math.random() * 5)];
            color = "#FFFF00";
          }
          break;
        case "divine":
          if (fishRarityRandomizer <= 512) {
            fishRarity = "common";
            fishName = commonFishNames[Math.floor(Math.random() * 5)];
            color = "#808080";
          } else if (
            fishRarityRandomizer > 512 &&
            fishRarityRandomizer <= 768
          ) {
            fishRarity = "uncommon";
            fishName = uncommonFishNames[Math.floor(Math.random() * 5)];
            color = "#00FF00";
          } else if (
            fishRarityRandomizer > 768 &&
            fishRarityRandomizer <= 896
          ) {
            fishRarity = "rare";
            fishName = rareFishNames[Math.floor(Math.random() * 5)];
            color = "#0000FF";
          } else if (
            fishRarityRandomizer > 896 &&
            fishRarityRandomizer <= 960
          ) {
            fishRarity = "epic";
            fishName = epicFishNames[Math.floor(Math.random() * 5)];
            color = "#800080";
          } else if (
            fishRarityRandomizer > 960 &&
            fishRarityRandomizer <= 992
          ) {
            fishRarity = "mythic";
            fishName = mythicFishNames[Math.floor(Math.random() * 5)];
            color = "#FF0000";
          } else {
            fishRarity = "legendary";
            fishName = legendaryFishNames[Math.floor(Math.random() * 5)];
            color = "#FFFF00";
          }
          break;
      }

      const xp = Math.ceil(Math.random() * 20);
      await User.findOneAndUpdate(
        { _id: userProfile._id },
        { experience: (userProfile.experience += xp) }
      );

      embed = new MessageEmbed()
        .setTitle("Reeling it in...")
        .setDescription(
          `You caught:\n\n- 1 ${fishRarity} ${fishName}\n- ${xp} xp`
        )
        .setFooter({ text: `Performed by ${interaction.user.tag}` })
        .setColor(color)
        .setTimestamp();
      try {
        await interaction.reply({
          content: `<@${interaction.user.id}>`,
          embeds: [embed],
        });
      } catch (err) {}

      switch (fishName) {
        case "Cod":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { cod: (userProfile.cod += 1) }
          );
          break;
        case "Herring":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { herring: (userProfile.herring += 1) }
          );
          break;
        case "Pufferfish":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { pufferfish: (userProfile.pufferfish += 1) }
          );
          break;
        case "Salmon":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { salmon: (userProfile.salmon += 1) }
          );
          break;
        case "Shrimp":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { shrimp: (userProfile.shrimp += 1) }
          );
          break;
        case "Butterfish":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { butterfish: (userProfile.butterfish += 1) }
          );
          break;
        case "Clownfish":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { clownfish: (userProfile.clownfish += 1) }
          );
          break;
        case "Duck":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { duck: (userProfile.duck += 1) }
          );
          break;
        case "Penguin":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { penguin: (userProfile.penguin += 1) }
          );
          break;
        case "Squid":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { squid: (userProfile.squid += 1) }
          );
          break;
        case "Crab":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { crab: (userProfile.crab += 1) }
          );
          break;
        case "Orca":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { orca: (userProfile.orca += 1) }
          );
          break;
        case "Otter":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { otter: (userProfile.otter += 1) }
          );
          break;
        case "Shark":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { shark: (userProfile.shark += 1) }
          );
          break;
        case "Whale":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { whale: (userProfile.whale += 1) }
          );
          break;
        case "Jellyfish":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { jellyfish: (userProfile.jellyfish += 1) }
          );
          break;
        case "Octopus":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { octopus: (userProfile.octopus += 1) }
          );
          break;
        case "Seahorse":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { seahorse: (userProfile.seahorse += 1) }
          );
          break;
        case "Seal":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { seal: (userProfile.seal += 1) }
          );
          break;
        case "Walrus":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { walrus: (userProfile.walrus += 1) }
          );
          break;
        case "Coral":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { coral: (userProfile.coral += 1) }
          );
          break;
        case "Crocodile":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { crocodile: (userProfile.crocodile += 1) }
          );
          break;
        case "Flamingo":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { flamingo: (userProfile.flamingo += 1) }
          );
          break;
        case "Manatee":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { manatee: (userProfile.manatee += 1) }
          );
          break;
        case "Turtle":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { turtle: (userProfile.turtle += 1) }
          );
          break;
        case "Blobfish":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { blobfish: (userProfile.blobfish += 1) }
          );
          break;
        case "Catfish":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { catfish: (userProfile.catfish += 1) }
          );
          break;
        case "Dolphin":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { dolphin: (userProfile.dolphin += 1) }
          );
          break;
        case "Mermaid":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { mermaid: (userProfile.mermaid += 1) }
          );
          break;
        case "Starfish":
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { starfish: (userProfile.starfish += 1) }
          );
          break;
      }
    }
  },
};
