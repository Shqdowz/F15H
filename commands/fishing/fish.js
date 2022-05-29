const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");
const s = require("../../secrets");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fish")
    .setDescription("Fish with your fishing rod"),
  async execute(interaction, client) {
    // Initialization

    const userProfile = await client.createUser(interaction.member);

    const rod = `${userProfile.equippedRod}Rod`;

    let color, fishRarity, fishName;

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

    // Code

    if (fishRarityRandomizer <= s[rod].commonChance) {
      fishRarity = "common";
      fishName = commonFishNames[Math.floor(Math.random() * 5)];
      color = "#808080";
    } else if (fishRarityRandomizer <= s[rod].uncommonChance) {
      fishRarity = "uncommon";
      fishName = uncommonFishNames[Math.floor(Math.random() * 5)];
      color = "#00FF00";
    } else if (fishRarityRandomizer <= s[rod].rareChance) {
      fishRarity = "rare";
      fishName = rareFishNames[Math.floor(Math.random() * 5)];
      color = "#0000FF";
    } else if (fishRarityRandomizer <= s[rod].epicChance) {
      fishRarity = "epic";
      fishName = epicFishNames[Math.floor(Math.random() * 5)];
      color = "#800080";
    } else if (fishRarityRandomizer <= s[rod].mythicChance) {
      fishRarity = "mythic";
      fishName = mythicFishNames[Math.floor(Math.random() * 5)];
      color = "#FF0000";
    } else if (fishRarityRandomizer <= s[rod].legendaryChance) {
      fishRarity = "legendary";
      fishName = legendaryFishNames[Math.floor(Math.random() * 5)];
      color = "#FFFF00";
    }

    const xp = Math.ceil(Math.random() * 25);
    await User.findOneAndUpdate(
      { _id: userProfile._id },
      { experience: (userProfile.experience += xp) }
    );

    const totalFish = `total${fishName}`;

    await User.findOneAndUpdate(
      { _id: userProfile._id },
      { [totalFish]: (userProfile[totalFish] += 1) }
    );

    const fish = fishName.toLowerCase();

    await User.findOneAndUpdate(
      { _id: userProfile._id },
      { [fish]: (userProfile[fish] += 1) }
    );

    const embed = new MessageEmbed()
      .setTitle("Reeling it in...")
      .setDescription(
        `You caught:\n\n- 1 ${fishRarity} ${fishName}\n- ${xp} xp`
      )
      .setFooter({ text: `Performed by ${interaction.user.tag}` })
      .setColor(color)
      .setTimestamp();

    await interaction.reply({
      content: `${interaction.user}`,
      embeds: [embed],
    });

    const fishLevel = `${fish}Level`;

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
