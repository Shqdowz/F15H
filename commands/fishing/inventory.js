const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const User = require("../../schemas/user");

let inventoryEmbed, row;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("inventory")
    .setDescription("Displays your inventory")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user of who to view the inventory")
        .setRequired(false)
    )
    .addNumberOption((option) =>
      option
        .setName("page")
        .setDescription("The page to view")
        .setRequired(false)
    ),
  async execute(interaction, client) {
    // Options

    let user = interaction.options.getUser("user")
      ? interaction.options.getUser("user")
      : interaction.user;
    let page = interaction.options.getNumber("page");

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
              userProfile[fishName]
            }`
          );
        } else {
          fishArray.push(
            `『${userProfile[`${fishName}Level`]}』${fish}: ${
              userProfile[fishName]
            }`
          );
        }
      } else {
        fishArray.push(`『?』???: ?`);
      }
    }

    // Embeds & rows

    const inventory1 = new MessageEmbed()
      .setTitle(`${user.tag}'s inventory`)
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
        }
      )
      .setFooter({ text: `Page 1/2 | Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    const inventory2 = new MessageEmbed()
      .setTitle(`${user.tag}'s inventory`)
      .addFields(
        {
          name: "Fishing rods",
          value: `Common rod: Unlocked! 🔓\nExquisite rod: ${userProfile.exquisiteRod}\nPrecious rod: ${userProfile.preciousRod}\nLuxurious rod: ${userProfile.luxuriousRod}\nDivine rod: ${userProfile.divineRod}`,
        },
        {
          name: "Loot Boxes",
          value: `⭐: ${userProfile.s1LootBox}\n⭐⭐: ${userProfile.s2LootBox}\n⭐⭐⭐: ${userProfile.s3LootBox}\n⭐⭐⭐⭐: ${userProfile.s4LootBox}\n⭐⭐⭐⭐⭐: ${userProfile.s5LootBox}\n`,
          inline: true,
        }
      )
      .setFooter({ text: `Page 2/2 | Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    // const inventory1_ = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("nothing")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(true),
    //   new MessageButton()
    //     .setCustomId("inventory2")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false)
    // );

    // const inventory2_ = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("inventory1")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false),
    //   new MessageButton()
    //     .setCustomId("nothing")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(true)
    // );

    // Code

    if (page === 1 || page === 2) {
      switch (page) {
        case 1:
          embed = inventory1;
          //row = inventory1_;
          break;
        case 2:
          embed = inventory2;
          //row = inventory2_;
          break;
      }

      await interaction.reply({
        content: `${interaction.user}`,
        embeds: [embed],
        //components: [row],
      });
    } else if (!page) {
      await interaction.reply({
        content: `${interaction.user}`,
        embeds: [inventory1],
        //components: [inventory1_],
      });
    } else {
      await interaction.reply({
        content: `That page does not exist! Valid pages: 1, 2`,
        ephemeral: true,
      });
    }

    // const collector = interaction.channel.createMessageComponentCollector({
    //   componentType: "BUTTON",
    // });

    // collector.on("collect", async (i) => {
    //   if (i.user.id === interaction.user.id) {
    //     switch (i.customId) {
    //       case "inventory1":
    //         inventoryEmbed = inventory1;
    //         row = inventory1_;
    //         break;
    //       case "inventory2":
    //         inventoryEmbed = inventory2;
    //         row = inventory2_;
    //         break;
    //     }

    //     try {
    //       await i.update({
    //         content: `${interaction.user}`,
    //         embeds: [inventoryEmbed],
    //         components: [row],
    //       });
    //     } catch (err) {}
    //   } else {
    //     i.reply({
    //       content: `These aren't your buttons!`,
    //       ephemeral: true,
    //     });
    //   }
    // });
  },
};
