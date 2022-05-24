const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

let embed, color, fishRarity, fishName;

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

    const userProfile = await client.createUser(interaction.member);

    switch (userProfile.equippedRod) {
      case "common":
        if (fishRarityRandomizer <= 876) {
          fishRarity = "common";
          fishName = commonFishNames[Math.floor(Math.random() * 5)];
          color = "#808080";
        } else if (fishRarityRandomizer > 876 && fishRarityRandomizer <= 940) {
          fishRarity = "uncommon";
          fishName = uncommonFishNames[Math.floor(Math.random() * 5)];
          color = "#00FF00";
        } else if (fishRarityRandomizer > 940 && fishRarityRandomizer <= 972) {
          fishRarity = "rare";
          fishName = rareFishNames[Math.floor(Math.random() * 5)];
          color = "#0000FF";
        } else if (fishRarityRandomizer > 972 && fishRarityRandomizer <= 988) {
          fishRarity = "epic";
          fishName = epicFishNames[Math.floor(Math.random() * 5)];
          color = "#800080";
        } else if (fishRarityRandomizer > 988 && fishRarityRandomizer <= 996) {
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
        } else if (fishRarityRandomizer > 617 && fishRarityRandomizer <= 925) {
          fishRarity = "uncommon";
          fishName = uncommonFishNames[Math.floor(Math.random() * 5)];
          color = "#00FF00";
        } else if (fishRarityRandomizer > 925 && fishRarityRandomizer <= 965) {
          fishRarity = "rare";
          fishName = rareFishNames[Math.floor(Math.random() * 5)];
          color = "#0000FF";
        } else if (fishRarityRandomizer > 965 && fishRarityRandomizer <= 985) {
          fishRarity = "epic";
          fishName = epicFishNames[Math.floor(Math.random() * 5)];
          color = "#800080";
        } else if (fishRarityRandomizer > 985 && fishRarityRandomizer <= 995) {
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
        } else if (fishRarityRandomizer > 547 && fishRarityRandomizer <= 821) {
          fishRarity = "uncommon";
          fishName = uncommonFishNames[Math.floor(Math.random() * 5)];
          color = "#00FF00";
        } else if (fishRarityRandomizer > 821 && fishRarityRandomizer <= 958) {
          fishRarity = "rare";
          fishName = rareFishNames[Math.floor(Math.random() * 5)];
          color = "#0000FF";
        } else if (fishRarityRandomizer > 958 && fishRarityRandomizer <= 982) {
          fishRarity = "epic";
          fishName = epicFishNames[Math.floor(Math.random() * 5)];
          color = "#800080";
        } else if (fishRarityRandomizer > 982 && fishRarityRandomizer <= 994) {
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
        } else if (fishRarityRandomizer > 522 && fishRarityRandomizer <= 783) {
          fishRarity = "uncommon";
          fishName = uncommonFishNames[Math.floor(Math.random() * 5)];
          color = "#00FF00";
        } else if (fishRarityRandomizer > 783 && fishRarityRandomizer <= 914) {
          fishRarity = "rare";
          fishName = rareFishNames[Math.floor(Math.random() * 5)];
          color = "#0000FF";
        } else if (fishRarityRandomizer > 914 && fishRarityRandomizer <= 979) {
          fishRarity = "epic";
          fishName = epicFishNames[Math.floor(Math.random() * 5)];
          color = "#800080";
        } else if (fishRarityRandomizer > 979 && fishRarityRandomizer <= 993) {
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
        } else if (fishRarityRandomizer > 512 && fishRarityRandomizer <= 768) {
          fishRarity = "uncommon";
          fishName = uncommonFishNames[Math.floor(Math.random() * 5)];
          color = "#00FF00";
        } else if (fishRarityRandomizer > 768 && fishRarityRandomizer <= 896) {
          fishRarity = "rare";
          fishName = rareFishNames[Math.floor(Math.random() * 5)];
          color = "#0000FF";
        } else if (fishRarityRandomizer > 896 && fishRarityRandomizer <= 960) {
          fishRarity = "epic";
          fishName = epicFishNames[Math.floor(Math.random() * 5)];
          color = "#800080";
        } else if (fishRarityRandomizer > 960 && fishRarityRandomizer <= 992) {
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

    const xp = Math.ceil(Math.random() * 25);
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
        content: `${interaction.user}`,
        embeds: [embed],
      });
    } catch (err) {}

    fishName = await fishName.toLowerCase();
    const fishLevel = `${fishName}Level`;

    await User.findOneAndUpdate(
      { _id: userProfile._id },
      { [fishName]: (userProfile[fishName] += 1) }
    );

    fishName = (await fishName.charAt(0).toUpperCase()) + fishName.slice(1);
    const totalFish = `total${fishName}`;

    await User.findOneAndUpdate(
      { _id: userProfile._id },
      { [totalFish]: (userProfile[totalFish] += 1) }
    );

    if (userProfile[fishLevel] == 0) {
      const embed = new MessageEmbed()
        .setTitle("Fish level up!")
        .setDescription(
          `Congratulations ${interaction.user.tag}, you unlocked the ${fishName}, so it advanced to level 1!`
        )
        .setColor("#ADD8E6")
        .setTimestamp();

      await User.findOneAndUpdate(
        { _id: userProfile._id },
        { [fishLevel]: (userProfile[fishLevel] = 1) }
      );

      await interaction.channel.send({
        content: `${interaction.user}`,
        embeds: [embed],
      });
    }
  },
};
