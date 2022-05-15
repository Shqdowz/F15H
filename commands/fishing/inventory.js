// #bug-reports & button handler

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const User = require("../../schemas/user");
const rowObject = require("../../objects/rows");

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
    let user = interaction.options.getUser("user")
      ? interaction.options.getUser("user")
      : interaction.user;
    let page = interaction.options.getNumber("page");

    const userProfile = await client.createUser(user);

    const inventory1 = new MessageEmbed()
      .setTitle(`${user.tag}'s inventory`)
      .addFields(
        {
          name: "Common Fish",
          value: `Cod: ${userProfile.cod}\nHerring: ${userProfile.herring}\nPufferfish: ${userProfile.pufferfish}\nSalmon: ${userProfile.salmon}\nShrimp: ${userProfile.shrimp}`,
          inline: true,
        },
        {
          name: "Uncommon Fish",
          value: `Butterfish: ${userProfile.butterfish}\nClownfish: ${userProfile.clownfish}\nDuck: ${userProfile.duck}\nPenguin: ${userProfile.penguin}\nSquid: ${userProfile.squid}`,
          inline: true,
        },
        {
          name: "Rare Fish",
          value: `Crab: ${userProfile.crab}\nOrca: ${userProfile.orca}\nOtter: ${userProfile.otter}\nShark: ${userProfile.shark}\nWhale: ${userProfile.whale}`,
          inline: true,
        },
        {
          name: "Epic Fish",
          value: `Jellyfish: ${userProfile.jellyfish}\nOctopus: ${userProfile.octopus}\nSeahorse: ${userProfile.seahorse}\nSeal: ${userProfile.seal}\nWalrus: ${userProfile.walrus}`,
          inline: true,
        },
        {
          name: "Mythic Fish",
          value: `Coral: ${userProfile.coral}\nCrocodile: ${userProfile.crocodile}\nFlamingo: ${userProfile.flamingo}\nManatee: ${userProfile.manatee}\nTurtle: ${userProfile.turtle}`,
          inline: true,
        },
        {
          name: "Legendary Fish",
          value: `Blobfish: ${userProfile.blobfish}\nCatfish: ${userProfile.catfish}\nDolphin: ${userProfile.dolphin}\nMermaid: ${userProfile.mermaid}\nStarfish: ${userProfile.starfish}`,
          inline: true,
        }
      )
      .setFooter({
        text: `Page 1/2 - Requested by ${interaction.user.tag}`,
      })
      .setColor("#ADD8E6")
      .setTimestamp();

    const inventory2 = new MessageEmbed()
      .setTitle(`${interaction.user.tag}'s inventory`) // user
      .addFields(
        {
          name: "Currency",
          value: `<:FishCoin:937423381756772364> Fish Coins: ${userProfile.fishCoins}\nFish Crystals: ${userProfile.fishCrystals}`,
        },
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
      .setFooter({
        text: `Page 2/2 - Requested by ${interaction.user.tag}`,
      })
      .setColor("#ADD8E6")
      .setTimestamp();

    // const inventory1r = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("toNothing")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(true),
    //   new MessageButton()
    //     .setCustomId("toInventory2")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false)
    // );

    // const inventory2r = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("toInventory1")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false),
    //   new MessageButton()
    //     .setCustomId("toNothing")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(true)
    // );

    if (page === 1 || page === 2) {
      switch (page) {
        case 1:
          await interaction.reply({
            content: `<@${interaction.user.id}>`,
            embeds: [inventory1],
            //components: [inventory1r],
          });
          break;
        case 2:
          await interaction.reply({
            content: `<@${interaction.user.id}>`,
            embeds: [inventory2],
            //components: [inventory2r],
          });
          break;
      }
    } else if (!page) {
      await interaction.reply({
        content: `<@${interaction.user.id}>`,
        embeds: [inventory1],
        //components: [inventory1r],
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
    //       case "toInventory1":
    //         try {
    //           await i.update({
    //             embeds: [inventory1],
    //             components: [inventory1r],
    //           });
    //         } catch (err) {}
    //         break;
    //       case "toInventory2":
    //         try {
    //           await i.update({
    //             embeds: [inventory2],
    //             components: [inventory2r],
    //           });
    //         } catch (err) {}
    //         break;
    //     }
    //   } else {
    //     i.reply({
    //       content: `These aren't your buttons!`,
    //       ephemeral: true,
    //     });
    //   }
    // });
  },
};
