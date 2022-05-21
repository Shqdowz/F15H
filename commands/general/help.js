// #bug-reports & button handler

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const embedObject = require("../../objects/embeds");
const rowObject = require("../../objects/rows");

let embed, row;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Displays the help page")
    .addStringOption((option) =>
      option
        .setName("page")
        .setDescription("The page to view")
        .setRequired(false)
    ),
  async execute(interaction) {
    let page = interaction.options.getString("page");
    if (page) {
      page = page.toLowerCase();
    }
    if (!page) {
      embedObject.homepage.setFooter({
        text: `Requested by ${interaction.user.tag}`,
      });
      embed = embedObject.homepage;
      row = rowObject.homepage;
      await interaction.reply({
        content: `<@${interaction.user.id}>`,
        embeds: [embed],
        //components: [row],
      });
    } else if (
      (page >= 0 && page <= 7) ||
      page === "homepage" ||
      page === "general" ||
      page === "fishing" ||
      page === "market" ||
      page === "economy" ||
      page === "battling" ||
      page === "loot boxes" ||
      page === "user"
    ) {
      switch (page) {
        case "0":
        case "homepage":
          embedObject.homepage.setFooter({
            text: `Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.homepage;
          row = rowObject.homepage;
          break;
        case "1":
        case "general":
          embedObject.general.setFooter({
            text: `Page 1/7 | Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.general;
          row = rowObject.general;
          break;
        case "2":
        case "fishing":
          embedObject.fishing.setFooter({
            text: `Page 2/7 | Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.fishing;
          row = rowObject.fishing;
          break;
        case "3":
        case "market":
          embedObject.market.setFooter({
            text: `Page 3/7 | Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.market;
          row = rowObject.market;
          break;
        case "4":
        case "economy":
          embedObject.economy.setFooter({
            text: `Page 4/7 | Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.economy;
          row = rowObject.economy;
          break;
        case "5":
        case "battling":
          embedObject.battling.setFooter({
            text: `Page 5/7 | Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.battling;
          row = rowObject.battling;
          break;
        case "6":
        case "loot boxes":
          embedObject.lootboxes.setFooter({
            text: `Page 6/7 | Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.lootboxes;
          row = rowObject.lootboxes;
          break;
        case "7":
        case "user":
          embedObject.user.setFooter({
            text: `Page 7/7 | Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.user;
          row = rowObject.user;
          break;
      }
      await interaction.reply({
        content: `<@${interaction.user.id}>`,
        embeds: [embed],
        //components: [row],
      });
    } else {
      await interaction.reply({
        content:
          "That page does not exist! Valid pages: `1-7, general, fishing, market, economy, battling, loot boxes, user`.",
        ephemeral: true,
      });
    }

    // const collector = interaction.channel.createMessageComponentCollector({
    //   componentType: "BUTTON",
    // });

    // collector.on("collect", async (i) => {
    //   if (i.user.id == interaction.user.id) {
    //     switch (i.customId) {
    //       case "toHomepage":
    //         embedObject.homepage.setFooter({
    //           text: `Requested by ${interaction.user.tag}`,
    //         });
    //         try {
    //           await i.update({
    //             embeds: [embedObject.homepage],
    //             components: [rowObject.homepage],
    //           });
    //         } catch (err) {}
    //         break;
    //       case "toGeneral":
    //         embedObject.general.setFooter({
    //           text: `Page 1/7 | Requested by ${interaction.user.tag}`,
    //         });
    //         try {
    //           await i.update({
    //             embeds: [embedObject.general],
    //             components: [rowObject.general],
    //           });
    //         } catch (err) {}
    //         break;
    //       case "toFishing":
    //         embedObject.fishing.setFooter({
    //           text: `Page 2/7 | Requested by ${interaction.user.tag}`,
    //         });
    //         try {
    //           await i.update({
    //             embeds: [embedObject.fishing],
    //             components: [rowObject.fishing],
    //           });
    //         } catch (err) {}
    //         break;
    //       case "toMarket":
    //         embedObject.market.setFooter({
    //           text: `Page 3/7 | Requested by ${interaction.user.tag}`,
    //         });
    //         try {
    //           await i.update({
    //             embeds: [embedObject.market],
    //             components: [rowObject.market],
    //           });
    //         } catch (err) {}
    //         break;
    //       case "toEconomy":
    //         embedObject.economy.setFooter({
    //           text: `Page 4/7 | Requested by ${interaction.user.tag}`,
    //         });
    //         try {
    //           await i.update({
    //             embeds: [embedObject.economy],
    //             components: [rowObject.economy],
    //           });
    //         } catch (err) {}
    //         break;
    //       case "toBattling":
    //         embedObject.battling.setFooter({
    //           text: `Page 5/7 | Requested by ${interaction.user.tag}`,
    //         });
    //         try {
    //           await i.update({
    //             embeds: [embedObject.battling],
    //             components: [rowObject.battling],
    //           });
    //         } catch (err) {}
    //         break;
    //       case "toLootBoxes":
    //         embedObject.lootboxes.setFooter({
    //           text: `Page 6/7 | Requested by ${interaction.user.tag}`,
    //         });
    //         try {
    //           await i.update({
    //             embeds: [embedObject.lootboxes],
    //             components: [rowObject.lootboxes],
    //           });
    //         } catch (err) {}
    //         break;
    //       case "toUser":
    //         embedObject.user.setFooter({
    //           text: `Page 7/7 | Requested by ${interaction.user.tag}`,
    //         });
    //         try {
    //           await i.update({
    //             embeds: [embedObject.user],
    //             components: [rowObject.user],
    //           });
    //         } catch (err) {}
    //         break;
    //     }
    //   } else {
    //     try {
    //       i.reply({
    //         content: `These aren't your buttons!`,
    //         ephemeral: true,
    //       });
    //     } catch (err) {}
    //   }
    // });
  },
};
