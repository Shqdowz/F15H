const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const User = require("../../schemas/user");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lifetime")
    .setDescription("Displays your lifetime caught fish")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user of who to view the lifetime caught fish")
        .setRequired(false)
    ),
  async execute(interaction, client) {
    // Option

    let user = interaction.options.getUser("user")
      ? interaction.options.getUser("user")
      : interaction.user;

    // Initialization

    const userProfile = await client.createUser(user);

    const fishNames = [
      "Cod",
      "Herring",
      "Pufferfish",
      "Salmon",
      "Shrimp",
      "Butterfish",
      "Clownfish",
      "Duck",
      "Penguin",
      "Squid",
      "Crab",
      "Orca",
      "Otter",
      "Shark",
      "Whale",
      "Jellyfish",
      "Octopus",
      "Seahorse",
      "Seal",
      "Walrus",
      "Coral",
      "Crocodile",
      "Flamingo",
      "Manatee",
      "Turtle",
      "Blobfish",
      "Catfish",
      "Dolphin",
      "Mermaid",
      "Starfish",
    ];
    const fishArray = [];
    const hasEmoji = [
      "shrimp",
      "duck",
      "penguin",
      "squid",
      "crab",
      "otter",
      "shark",
      "whale",
      "octopus",
      "seal",
      "crocodile",
      "flamingo",
      "turtle",
      "dolphin",
    ];

    for (let i = 0; i < fishNames.length; i++) {
      const fish = fishNames[i];
      const totalFish = `total${fish}`;
      const fishName = fish.toLowerCase();

      if (userProfile[totalFish] >= 1) {
        if (hasEmoji.includes(fishName)) {
          fishArray.push(
            `『${userProfile[`${fishName}Level`]}』:${fishName}: ${fish}: ${
              userProfile[totalFish]
            }`
          );
        } else {
          fishArray.push(
            `『${userProfile[`${fishName}Level`]}』${fish}: ${
              userProfile[totalFish]
            }`
          );
        }
      } else {
        fishArray.push(`『?』???: ?`);
      }
    }

    const totalCommons =
      userProfile.totalCod +
      userProfile.totalHerring +
      userProfile.totalPufferfish +
      userProfile.totalSalmon +
      userProfile.totalShrimp;

    const totalUncommons =
      userProfile.totalButterfish +
      userProfile.totalClownfish +
      userProfile.totalDuck +
      userProfile.totalPenguin +
      userProfile.totalSquid;

    const totalRares =
      userProfile.totalCrab +
      userProfile.totalOrca +
      userProfile.totalOtter +
      userProfile.totalShark +
      userProfile.totalWhale;

    const totalEpics =
      userProfile.totalJellyfish +
      userProfile.totalOctopus +
      userProfile.totalSeahorse +
      userProfile.totalSeal +
      userProfile.totalWalrus;

    const totalMythics =
      userProfile.totalCoral +
      userProfile.totalCrocodile +
      userProfile.totalFlamingo +
      userProfile.totalManatee +
      userProfile.totalTurtle;

    const totalLegendaries =
      userProfile.totalBlobfish +
      userProfile.totalCatfish +
      userProfile.totalDolphin +
      userProfile.totalMermaid +
      userProfile.totalStarfish;

    const total =
      totalCommons +
      totalUncommons +
      totalRares +
      totalEpics +
      totalMythics +
      totalLegendaries;

    // Embed

    const lifetime = new MessageEmbed()
      .setTitle(`${user.tag}'s lifetime caught fish`)
      .addFields(
        {
          name: "Common Fish",
          value: `${fishArray[0]}\n${fishArray[1]}\n${fishArray[2]}\n${fishArray[3]}\n${fishArray[4]}`,
          inline: true,
        },
        {
          name: "Uncommon Fish",
          value: `${fishArray[5]}\n${fishArray[6]}\n${fishArray[7]}\n${fishArray[8]}\n${fishArray[9]}`,
          inline: true,
        },
        {
          name: "Rare Fish",
          value: `${fishArray[10]}\n${fishArray[11]}\n${fishArray[12]}\n${fishArray[13]}\n${fishArray[14]}`,
          inline: true,
        },
        {
          name: "Epic Fish",
          value: `${fishArray[15]}\n${fishArray[16]}\n${fishArray[17]}\n${fishArray[18]}\n${fishArray[19]}`,
          inline: true,
        },
        {
          name: "Mythic Fish",
          value: `${fishArray[20]}\n${fishArray[21]}\n${fishArray[22]}\n${fishArray[23]}\n${fishArray[24]}`,
          inline: true,
        },
        {
          name: "Legendary Fish",
          value: `${fishArray[25]}\n${fishArray[26]}\n${fishArray[27]}\n${fishArray[28]}\n${fishArray[29]}`,
          inline: true,
        },
        {
          name: "Totals",
          value: `Common: ${totalCommons}\nUncommon: ${totalUncommons}\nRare: ${totalRares}\nEpic: ${totalEpics}\nMythic: ${totalMythics}\nLegendary: ${totalLegendaries}\nFish: ${total}`,
        }
      )
      .setFooter({ text: `Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    // Code

    await interaction.reply({
      content: `${interaction.user}`,
      embeds: [lifetime],
    });
  },
};
