// #bug-reports & button handler

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const User = require("../../schemas/user");
const rowObject = require("../../objects/rows");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("trophy")
    .setDescription("Displays your trophy hall")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user of who to view the trophy hall")
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

    const trophy1 = new MessageEmbed()
      .setTitle(`${user.tag}'s trophy hall`)
      .addFields(
        {
          name: "Cod",
          value: `Bronze: ${userProfile.bronzecod}\nSilver: ${userProfile.silvercod}\nGold: ${userProfile.goldcod}`,
          inline: true,
        },
        {
          name: "Herring",
          value: `Bronze: ${userProfile.bronzeherring}\nSilver: ${userProfile.silverherring}\nGold: ${userProfile.goldherring}`,
          inline: true,
        },
        {
          name: "Pufferfish",
          value: `Bronze: ${userProfile.bronzepufferfish}\nSilver: ${userProfile.silverpufferfish}\nGold: ${userProfile.goldpufferfish}`,
          inline: true,
        },
        {
          name: "Salmon",
          value: `Bronze: ${userProfile.bronzesalmon}\nSilver: ${userProfile.silversalmon}\nGold: ${userProfile.goldsalmon}`,
          inline: true,
        },
        {
          name: "Shrimp",
          value: `Bronze: ${userProfile.bronzeshrimp}\nSilver: ${userProfile.silvershrimp}\nGold: ${userProfile.goldshrimp}`,
          inline: true,
        }
      )
      .setFooter({
        text: `Page 1/6 - Requested by ${interaction.user.tag}`,
      })
      .setColor("#ADD8E6")
      .setTimestamp();

    const trophy2 = new MessageEmbed()
      .setTitle(`${user.tag}'s trophy hall`)
      .addFields(
        {
          name: "Butterfish",
          value: `Bronze: ${userProfile.bronzebutterfish}\nSilver: ${userProfile.silverbutterfish}\nGold: ${userProfile.goldbutterfish}`,
          inline: true,
        },
        {
          name: "Clownfish",
          value: `Bronze: ${userProfile.bronzeclownfish}\nSilver: ${userProfile.silverclownfish}\nGold: ${userProfile.goldclownfish}`,
          inline: true,
        },
        {
          name: "Duck",
          value: `Bronze: ${userProfile.bronzeduck}\nSilver: ${userProfile.silverduck}\nGold: ${userProfile.goldduck}`,
          inline: true,
        },
        {
          name: "Penguin",
          value: `Bronze: ${userProfile.bronzepenguin}\nSilver: ${userProfile.silverpenguin}\nGold: ${userProfile.goldpenguin}`,
          inline: true,
        },
        {
          name: "Squid",
          value: `Bronze: ${userProfile.bronzesquid}\nSilver: ${userProfile.silversquid}\nGold: ${userProfile.goldsquid}`,
          inline: true,
        }
      )
      .setFooter({
        text: `Page 2/6 - Requested by ${interaction.user.tag}`,
      })
      .setColor("#ADD8E6")
      .setTimestamp();

    const trophy3 = new MessageEmbed()
      .setTitle(`${user.tag}'s trophy hall`)
      .addFields(
        {
          name: "Crab",
          value: `Bronze: ${userProfile.bronzecrab}\nSilver: ${userProfile.silvercrab}\nGold: ${userProfile.goldcrab}`,
          inline: true,
        },
        {
          name: "Orca",
          value: `Bronze: ${userProfile.bronzeorca}\nSilver: ${userProfile.silverorca}\nGold: ${userProfile.goldorca}`,
          inline: true,
        },
        {
          name: "Otter",
          value: `Bronze: ${userProfile.bronzeotter}\nSilver: ${userProfile.silverotter}\nGold: ${userProfile.goldotter}`,
          inline: true,
        },
        {
          name: "Shark",
          value: `Bronze: ${userProfile.bronzeshark}\nSilver: ${userProfile.silvershark}\nGold: ${userProfile.goldshark}`,
          inline: true,
        },
        {
          name: "Whale",
          value: `Bronze: ${userProfile.bronzewhale}\nSilver: ${userProfile.silverwhale}\nGold: ${userProfile.goldwhale}`,
          inline: true,
        }
      )
      .setFooter({
        text: `Page 3/6 - Requested by ${interaction.user.tag}`,
      })
      .setColor("#ADD8E6")
      .setTimestamp();

    const trophy4 = new MessageEmbed()
      .setTitle(`${user.tag}'s trophy hall`)
      .addFields(
        {
          name: "Jellyfish",
          value: `Bronze: ${userProfile.bronzejellyfish}\nSilver: ${userProfile.silverjellyfish}\nGold: ${userProfile.goldjellyfish}`,
          inline: true,
        },
        {
          name: "Octopus",
          value: `Bronze: ${userProfile.bronzeoctopus}\nSilver: ${userProfile.silveroctopus}\nGold: ${userProfile.goldoctopus}`,
          inline: true,
        },
        {
          name: "Seahorse",
          value: `Bronze: ${userProfile.bronzeseahorse}\nSilver: ${userProfile.silverseahorse}\nGold: ${userProfile.goldseahorse}`,
          inline: true,
        },
        {
          name: "Seal",
          value: `Bronze: ${userProfile.bronzeseal}\nSilver: ${userProfile.silverseal}\nGold: ${userProfile.goldseal}`,
          inline: true,
        },
        {
          name: "Walrus",
          value: `Bronze: ${userProfile.bronzewalrus}\nSilver: ${userProfile.silverwalrus}\nGold: ${userProfile.goldwalrus}`,
          inline: true,
        }
      )
      .setFooter({
        text: `Page 4/6 - Requested by ${interaction.user.tag}`,
      })
      .setColor("#ADD8E6")
      .setTimestamp();

    const trophy5 = new MessageEmbed()
      .setTitle(`${user.tag}'s trophy hall`)
      .addFields(
        {
          name: "Coral",
          value: `Bronze: ${userProfile.bronzecoral}\nSilver: ${userProfile.silvercoral}\nGold: ${userProfile.goldcoral}`,
          inline: true,
        },
        {
          name: "Crocodile",
          value: `Bronze: ${userProfile.bronzecrocodile}\nSilver: ${userProfile.silvercrocodile}\nGold: ${userProfile.goldcrocodile}`,
          inline: true,
        },
        {
          name: "Flamingo",
          value: `Bronze: ${userProfile.bronzeflamingo}\nSilver: ${userProfile.silverflamingo}\nGold: ${userProfile.goldflamingo}`,
          inline: true,
        },
        {
          name: "Manatee",
          value: `Bronze: ${userProfile.bronzemanatee}\nSilver: ${userProfile.silvermanatee}\nGold: ${userProfile.goldmanatee}`,
          inline: true,
        },
        {
          name: "Turtle",
          value: `Bronze: ${userProfile.bronzeturtle}\nSilver: ${userProfile.silverturtle}\nGold: ${userProfile.goldturtle}`,
          inline: true,
        }
      )
      .setFooter({
        text: `Page 5/6 - Requested by ${interaction.user.tag}`,
      })
      .setColor("#ADD8E6")
      .setTimestamp();

    const trophy6 = new MessageEmbed()
      .setTitle(`${user.tag}'s trophy hall`)
      .addFields(
        {
          name: "Blobfish",
          value: `Bronze: ${userProfile.bronzeblobfish}\nSilver: ${userProfile.silverblobfish}\nGold: ${userProfile.goldblobfish}`,
          inline: true,
        },
        {
          name: "Catfish",
          value: `Bronze: ${userProfile.bronzecatfish}\nSilver: ${userProfile.silvercatfish}\nGold: ${userProfile.goldcatfish}`,
          inline: true,
        },
        {
          name: "Dolphin",
          value: `Bronze: ${userProfile.bronzedolphin}\nSilver: ${userProfile.silverdolphin}\nGold: ${userProfile.golddolphin}`,
          inline: true,
        },
        {
          name: "Mermaid",
          value: `Bronze: ${userProfile.bronzemermaid}\nSilver: ${userProfile.silvermermaid}\nGold: ${userProfile.goldmermaid}`,
          inline: true,
        },
        {
          name: "Starfish",
          value: `Bronze: ${userProfile.bronzestarfish}\nSilver: ${userProfile.silverstarfish}\nGold: ${userProfile.goldstarfish}`,
          inline: true,
        }
      )
      .setFooter({
        text: `Page 6/6 - Requested by ${interaction.user.tag}`,
      })
      .setColor("#ADD8E6")
      .setTimestamp();

    // const trophy1r = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("toNothing")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(true),
    //   new MessageButton()
    //     .setCustomId("toTrophy2")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false)
    // );

    // const trophy2r = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("toTrophy1")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false),
    //   new MessageButton()
    //     .setCustomId("toTrophy3")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false)
    // );

    // const trophy3r = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("toTrophy2")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false),
    //   new MessageButton()
    //     .setCustomId("toTrophy4")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false)
    // );

    // const trophy4r = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("toTrophy3")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false),
    //   new MessageButton()
    //     .setCustomId("toTrophy5")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false)
    // );

    // const trophy5r = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("toTrophy4")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false),
    //   new MessageButton()
    //     .setCustomId("toTrophy6")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false)
    // );

    // const trophy6r = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("toTrophy5")
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

    if (
      page === 1 ||
      page === 2 ||
      page === 3 ||
      page === 4 ||
      page === 5 ||
      page === 6
    ) {
      switch (page) {
        case 1:
          await interaction.reply({
            content: `<@${interaction.user.id}>`,
            embeds: [trophy1],
            //components: [trophy1r],
          });
          break;
        case 2:
          await interaction.reply({
            content: `<@${interaction.user.id}>`,
            embeds: [trophy2],
            //components: [trophy2r],
          });
          break;
        case 3:
          await interaction.reply({
            content: `<@${interaction.user.id}>`,
            embeds: [trophy3],
            //components: [trophy3r],
          });
          break;
        case 4:
          await interaction.reply({
            content: `<@${interaction.user.id}>`,
            embeds: [trophy4],
            //components: [trophy4r],
          });
          break;
        case 5:
          await interaction.reply({
            content: `<@${interaction.user.id}>`,
            embeds: [trophy5],
            //components: [trophy5r],
          });
          break;
        case 6:
          await interaction.reply({
            content: `<@${interaction.user.id}>`,
            embeds: [trophy6],
            //components: [trophy6r],
          });
          break;
      }
    } else if (!page) {
      await interaction.reply({
        content: `<@${interaction.user.id}>`,
        embeds: [trophy1],
        //components: [trophy1r],
      });
    } else {
      await interaction.reply({
        content: `That page does not exist! Valid pages: \`1-6\``,
        ephemeral: true,
      });
    }

    // const collector = interaction.channel.createMessageComponentCollector({
    //   componentType: "BUTTON",
    //   time: 60000,
    // });

    // collector.on("collect", async (i) => {
    //   if (i.user.id === interaction.user.id) {
    //     switch (i.customId) {
    //       case "toTrophy1":
    //         await i.update({
    //           embeds: [trophy1],
    //           components: [trophy1r],
    //         });
    //         break;
    //       case "toTrophy2":
    //         await i.update({
    //           embeds: [trophy2],
    //           components: [trophy2r],
    //         });
    //         break;
    //       case "toTrophy3":
    //         await i.update({
    //           embeds: [trophy3],
    //           components: [trophy3r],
    //         });
    //         break;
    //       case "toTrophy4":
    //         await i.update({
    //           embeds: [trophy4],
    //           components: [trophy4r],
    //         });
    //         break;
    //       case "toTrophy5":
    //         await i.update({
    //           embeds: [trophy5],
    //           components: [trophy5r],
    //         });
    //         break;
    //       case "toTrophy6":
    //         await i.update({
    //           embeds: [trophy6],
    //           components: [trophy6r],
    //         });
    //         break;
    //     }
    //   } else {
    //     i.reply({
    //       content: `These aren't your buttons!`,
    //       ephemeral: true,
    //     });
    //   }
    // });

    // collector.on("end", () => {
    //   interaction.editReply({
    //     content: `Command set to inactive.`,
    //     components: [rowObject.inactive],
    //   });
    // });
  },
};
