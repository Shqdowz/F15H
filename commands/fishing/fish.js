// ✅ (except compacting)

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
    .setDescription("Fish with your fishing rod")
    .addStringOption((option) =>
      option.setName("rod").setDescription("The rod to use").setRequired(true)
    ),
  async execute(interaction, client) {
    if (cooldowns.includes(interaction.user.id)) {
      await interaction.reply({
        content: `You are currently on cooldown!`,
        ephemeral: true,
      });
    } else cooldowns.push(interaction.user.id);
    setTimeout(() => {
      cooldowns.shift(0);
    }, 4000);
    const rod = interaction.options.getString("rod").toLowerCase();

    const fishRarityRandomizer = Math.ceil(Math.random() * 1000);
    const fishSpecialtyRandomizer = Math.ceil(Math.random() * 100);
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

    const userProfile = await client.createUser(interaction.member);

    if (
      rod === "common" ||
      rod === "exquisite" ||
      rod === "precious" ||
      rod === "luxurious" ||
      rod === "divine"
    ) {
      switch (rod) {
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
          if (fishSpecialtyRandomizer > 93 && fishSpecialtyRandomizer <= 97) {
            fishSpecialty = "BRONZE ";
            color = "#CD7F32";
          } else if (
            fishSpecialtyRandomizer > 93 &&
            fishSpecialtyRandomizer <= 97
          ) {
            fishSpecialty = "SILVER ";
            color = "#C0C0C0";
          } else if (fishSpecialtyRandomizer > 97) {
            fishSpecialty = "GOLD ";
            color = "#FFD700";
          } else {
            fishSpecialty = "";
          }
          break;
        case "exquisite":
          if (userProfile.exquisiteRod === "Unlocked! 🔓") {
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
            if (fishSpecialtyRandomizer > 93 && fishSpecialtyRandomizer <= 97) {
              fishSpecialty = "BRONZE ";
              color = "#CD7F32";
            } else if (
              fishSpecialtyRandomizer > 93 &&
              fishSpecialtyRandomizer <= 97
            ) {
              fishSpecialty = "SILVER ";
              color = "#C0C0C0";
            } else if (fishSpecialtyRandomizer > 97) {
              fishSpecialty = "GOLD ";
              color = "#FFD700";
            } else {
              fishSpecialty = "";
            }
          } else {
            await interaction.reply({
              content: `You don't own this rod!`,
              ephemeral: true,
            });
          }
          break;
        case "precious":
          if (userProfile.preciousRod === "Unlocked! 🔓") {
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
            if (fishSpecialtyRandomizer > 93 && fishSpecialtyRandomizer <= 97) {
              fishSpecialty = "BRONZE ";
              color = "#CD7F32";
            } else if (
              fishSpecialtyRandomizer > 93 &&
              fishSpecialtyRandomizer <= 97
            ) {
              fishSpecialty = "SILVER ";
              color = "#C0C0C0";
            } else if (fishSpecialtyRandomizer > 97) {
              fishSpecialty = "GOLD ";
              color = "#FFD700";
            } else {
              fishSpecialty = "";
            }
          } else {
            await interaction.reply({
              content: `You don't own this rod!`,
              ephemeral: true,
            });
          }
          break;
        case "luxurious":
          if (userProfile.luxuriousRod === "Unlocked! 🔓") {
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
            if (fishSpecialtyRandomizer > 93 && fishSpecialtyRandomizer <= 97) {
              fishSpecialty = "BRONZE ";
              color = "#CD7F32";
            } else if (
              fishSpecialtyRandomizer > 93 &&
              fishSpecialtyRandomizer <= 97
            ) {
              fishSpecialty = "SILVER ";
              color = "#C0C0C0";
            } else if (fishSpecialtyRandomizer > 97) {
              fishSpecialty = "GOLD ";
              color = "#FFD700";
            } else {
              fishSpecialty = "";
            }
          } else {
            await interaction.reply({
              content: `You don't own this rod!`,
              ephemeral: true,
            });
          }
          break;
        case "divine":
          if (userProfile.divineRod === "Unlocked! 🔓") {
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
            if (fishSpecialtyRandomizer > 93 && fishSpecialtyRandomizer <= 97) {
              fishSpecialty = "BRONZE ";
              color = "#CD7F32";
            } else if (
              fishSpecialtyRandomizer > 93 &&
              fishSpecialtyRandomizer <= 97
            ) {
              fishSpecialty = "SILVER ";
              color = "#C0C0C0";
            } else if (fishSpecialtyRandomizer > 97) {
              fishSpecialty = "GOLD ";
              color = "#FFD700";
            } else {
              fishSpecialty = "";
            }
          } else {
            await interaction.reply({
              content: `You don't own this rod!`,
              ephemeral: true,
            });
          }
          break;
      }

      switch (rod) {
        case "common":
          hasRod = true;
          break;
        case "exquisite":
          if (userProfile.exquisiteRod) {
            hasRod = true;
          }
          break;
        case "precious":
          if (userProfile.preciousRod) {
            hasRod = true;
          }
          break;
        case "luxurious":
          if (userProfile.luxuriousRod) {
            hasRod = true;
          }
          break;
        case "divine":
          if (userProfile.divineRod) {
            hasRod = true;
          }
          break;
      }

      const xp = Math.ceil(Math.random() * 10);
      await User.findOneAndUpdate(
        { _id: userProfile._id },
        { experience: (userProfile.experience += xp) }
      );

      if (hasRod) {
        embed = new MessageEmbed()
          .setTitle("Reeling it in...")
          .setDescription(
            `You caught:\n\n- 1 ${fishSpecialty}${fishRarity} ${fishName}\n- ${xp} xp`
          )
          .setFooter({
            text: `Performed by ${interaction.user.tag}`,
          })
          .setColor(color)
          .setTimestamp();
        try {
          await interaction.reply({ embeds: [embed] });
        } catch (err) {}

        switch (fishName) {
          case "Cod":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { cod: (userProfile.cod += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzecod: (userProfile.bronzecod += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silvercod: (userProfile.silvercod += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldcod: (userProfile.goldcod += 1) }
                );
                break;
            }
            break;
          case "Herring":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { herring: (userProfile.herring += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzeherring: (userProfile.bronzeherring += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverherring: (userProfile.silverherring += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldherring: (userProfile.goldherring += 1) }
                );
                break;
            }
            break;
          case "Pufferfish":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { pufferfish: (userProfile.pufferfish += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzepufferfish: (userProfile.bronzepufferfish += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverpufferfish: (userProfile.silverpufferfish += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldpufferfish: (userProfile.goldpufferfish += 1) }
                );
                break;
            }
            break;
          case "Salmon":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { salmon: (userProfile.salmon += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzesalmon: (userProfile.bronzesalmon += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silversalmon: (userProfile.silversalmon += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldsalmon: (userProfile.goldsalmon += 1) }
                );
                break;
            }
            break;
          case "Shrimp":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { shrimp: (userProfile.shrimp += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzeshrimp: (userProfile.bronzeshrimp += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silvershrimp: (userProfile.silvershrimp += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldshrimp: (userProfile.goldshrimp += 1) }
                );
                break;
            }
            break;
          case "Butterfish":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { butterfish: (userProfile.butterfish += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzebutterfish: (userProfile.bronzebutterfish += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverbutterfish: (userProfile.silverbutterfish += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldbutterfish: (userProfile.goldbutterfish += 1) }
                );
                break;
            }
            break;
          case "Clownfish":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { clownfish: (userProfile.clownfish += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzeclownfish: (userProfile.bronzeclownfish += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverclownfish: (userProfile.silverclownfish += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldclownfish: (userProfile.goldclownfish += 1) }
                );
                break;
            }
            break;
          case "Duck":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { duck: (userProfile.duck += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzeduck: (userProfile.bronzeduck += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverduck: (userProfile.silverduck += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldduck: (userProfile.goldduck += 1) }
                );
                break;
            }
            break;
          case "Penguin":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { penguin: (userProfile.penguin += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzepenguin: (userProfile.bronzepenguin += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverpenguin: (userProfile.silverpenguin += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldpenguin: (userProfile.goldpenguin += 1) }
                );
                break;
            }
            break;
          case "Squid":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { squid: (userProfile.squid += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzesquid: (userProfile.bronzesquid += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silversquid: (userProfile.silversquid += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldsquid: (userProfile.goldsquid += 1) }
                );
                break;
            }
            break;
          case "Crab":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { crab: (userProfile.crab += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzecrab: (userProfile.bronzecrab += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silvercrab: (userProfile.silvercrab += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldcrab: (userProfile.goldcrab += 1) }
                );
                break;
            }
            break;
          case "Orca":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { orca: (userProfile.orca += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzeorca: (userProfile.bronzeorca += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverorca: (userProfile.silverorca += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldorca: (userProfile.goldorca += 1) }
                );
                break;
            }
            break;
          case "Otter":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { otter: (userProfile.otter += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzeotter: (userProfile.bronzeotter += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverotter: (userProfile.silverotter += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldotter: (userProfile.goldotter += 1) }
                );
                break;
            }
            break;
          case "Shark":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { shark: (userProfile.shark += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzeshark: (userProfile.bronzeshark += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silvershark: (userProfile.silvershark += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldshark: (userProfile.goldshark += 1) }
                );
                break;
            }
            break;
          case "Whale":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { whale: (userProfile.whale += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzewhale: (userProfile.bronzewhale += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverwhale: (userProfile.silverwhale += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldwhale: (userProfile.goldwhale += 1) }
                );
                break;
            }
            break;
          case "Jellyfish":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { jellyfish: (userProfile.jellyfish += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzejellyfish: (userProfile.bronzejellyfish += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverjellyfish: (userProfile.silverjellyfish += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldjellyfish: (userProfile.goldjellyfish += 1) }
                );
                break;
            }
            break;
          case "Octopus":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { octopus: (userProfile.octopus += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzeoctopus: (userProfile.bronzeoctopus += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silveroctopus: (userProfile.silveroctopus += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldoctopus: (userProfile.goldoctopus += 1) }
                );
                break;
            }
            break;
          case "Seahorse":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { seahorse: (userProfile.seahorse += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzeseahorse: (userProfile.bronzeseahorse += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverseahorse: (userProfile.silverseahorse += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldseahorse: (userProfile.goldseahorse += 1) }
                );
                break;
            }
            break;
          case "Seal":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { seal: (userProfile.seal += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzeseal: (userProfile.bronzeseal += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverseal: (userProfile.silverseal += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldseal: (userProfile.goldseal += 1) }
                );
                break;
            }
          case "Walrus":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { walrus: (userProfile.walrus += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzewalrus: (userProfile.bronzewalrus += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverwalrus: (userProfile.silverwalrus += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldwalrus: (userProfile.goldwalrus += 1) }
                );
                break;
            }
          case "Coral":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { coral: (userProfile.coral += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzecoral: (userProfile.bronzecoral += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silvercoral: (userProfile.silvercoral += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldcoral: (userProfile.goldcoral += 1) }
                );
                break;
            }
            break;
          case "Crocodile":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { crocodile: (userProfile.crocodile += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzecrocodile: (userProfile.bronzecrocodile += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silvercrocodile: (userProfile.silvercrocodile += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldcrocodile: (userProfile.goldcrocodile += 1) }
                );
                break;
            }
            break;
          case "Flamingo":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { flamingo: (userProfile.flamingo += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzeflamingo: (userProfile.bronzeflamingo += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverflamingo: (userProfile.silverflamingo += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldflamingo: (userProfile.goldflamingo += 1) }
                );
                break;
            }
            break;
          case "Manatee":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { manatee: (userProfile.manatee += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzemanatee: (userProfile.bronzemanatee += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silvermanatee: (userProfile.silvermanatee += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldmanatee: (userProfile.goldmanatee += 1) }
                );
                break;
            }
            break;
          case "Turtle":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { turtle: (userProfile.turtle += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzeturtle: (userProfile.bronzeturtle += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverturtle: (userProfile.silverturtle += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldturtle: (userProfile.goldturtle += 1) }
                );
                break;
            }
            break;
          case "Blobfish":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { blobfish: (userProfile.blobfish += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzeblobfish: (userProfile.bronzeblobfish += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverblobfish: (userProfile.silverblobfish += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldblobfish: (userProfile.goldblobfish += 1) }
                );
                break;
            }
            break;
          case "Catfish":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { catfish: (userProfile.catfish += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzecatfish: (userProfile.bronzecatfish += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silvercatfish: (userProfile.silvercatfish += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldcatfish: (userProfile.goldcatfish += 1) }
                );
                break;
            }
            break;
          case "Dolphin":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { dolphin: (userProfile.dolphin += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzedolphin: (userProfile.bronzedolphin += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverdolphin: (userProfile.silverdolphin += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { golddolphin: (userProfile.golddolphin += 1) }
                );
                break;
            }
            break;
          case "Mermaid":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { mermaid: (userProfile.mermaid += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzemermaid: (userProfile.bronzemermaid += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silvermermaid: (userProfile.silvermermaid += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldmermaid: (userProfile.goldmermaid += 1) }
                );
                break;
            }
            break;
          case "Starfish":
            switch (fishSpecialty) {
              case "":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { starfish: (userProfile.starfish += 1) }
                );
                break;
              case "BRONZE ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { bronzestarfish: (userProfile.bronzestarfish += 1) }
                );
                break;
              case "SILVER ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { silverstarfish: (userProfile.silverstarfish += 1) }
                );
                break;
              case "GOLD ":
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { goldstarfish: (userProfile.goldstarfish += 1) }
                );
                break;
            }
            break;
        }
      }
    } else {
      await interaction.reply({
        content:
          "That rod does not exist! Valid rods: `common, exquisite, precious, luxurious, divine`.",
        ephemeral: true,
      });
    }
  },
};
