// ✅ (except #bug-reports & button handler)

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const embedObject = require("../../objects/embeds");
const rowObject = require("../../objects/rows");

let embed, row;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Displays the help page"),
  /*.addStringOption((option) =>
      option
        .setName("page")
        .setDescription("The page to view")
        .setRequired(false)
    )*/ async execute(interaction) {
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
        embeds: [embed],
        components: [row],
      });
    } else if (page >= 0 && page <= 7) {
      switch (page) {
        case "0":
          embedObject.homepage.setFooter({
            text: `Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.homepage;
          row = rowObject.homepage;
          break;
        case "1":
          embedObject.general.setFooter({
            text: `Page 1/7 - Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.general;
          row = rowObject.general;
          break;
        case "2":
          embedObject.fishing.setFooter({
            text: `Page 2/7 - Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.fishing;
          row = rowObject.fishing;
          break;
        case "3":
          embedObject.market.setFooter({
            text: `Page 3/7 - Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.market;
          row = rowObject.market;
          break;
        case "4":
          embedObject.economy.setFooter({
            text: `Page 4/7 - Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.economy;
          row = rowObject.economy;
          break;
        case "5":
          embedObject.battling.setFooter({
            text: `Page 5/7 - Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.battling;
          row = rowObject.battling;
          break;
        case "6":
          embedObject.lootBoxes.setFooter({
            text: `Page 6/7 - Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.lootBoxes;
          row = rowObject.lootBoxes;
          break;
        case "7":
          embedObject.user.setFooter({
            text: `Page 7/7 - Requested by ${interaction.user.tag}`,
          });
          embed = embedObject.user;
          row = rowObject.user;
          break;
      }
      await interaction.reply({
        embeds: [embed],
        components: [row],
      });
    } else if (
      page === "homepage" ||
      page === "general" ||
      page === "fishing" ||
      page === "market" ||
      page === "economy" ||
      page === "battling" ||
      page === "user"
    ) {
      switch (page) {
        case "homepage":
          embedObject.homepage.setFooter({
            text: `Requested by ${interaction.user.tag}`,
          });
          break;
        case "general":
          embedObject.general.setFooter({
            text: `Page 1/7 - Requested by ${interaction.user.tag}`,
          });
          break;
        case "fishing":
          embedObject.fishing.setFooter({
            text: `Page 2/7 - Requested by ${interaction.user.tag}`,
          });
          break;
        case "market":
          embedObject.market.setFooter({
            text: `Page 3/7 - Requested by ${interaction.user.tag}`,
          });
          break;
        case "economy":
          embedObject.economy.setFooter({
            text: `Page 4/7 - Requested by ${interaction.user.tag}`,
          });
          break;
        case "battling":
          embedObject.battling.setFooter({
            text: `Page 5/7 - Requested by ${interaction.user.tag}`,
          });
          break;
        case "user":
          embedObject.user.setFooter({
            text: `Page 7/7 - Requested by ${interaction.user.tag}`,
          });
          break;
      }

      embed = embedObject[page];
      row = rowObject[page];

      await interaction.reply({
        embeds: [embed],
        components: [row],
      });
    } else if (page === "loot boxes") {
      embedObject.lootBoxes.setFooter({
        text: `Requested by ${interaction.user.tag}`,
      });
      embed = embedObject.lootBoxes;
      row = rowObject.lootBoxes;

      await interaction.reply({
        embeds: [embed],
        components: [row],
      });
    } else {
      await interaction.reply({
        content:
          "That page does not exist! Valid pages: `1-7, general, fishing, market, economy, battling, loot boxes, user`.",
        ephemeral: true,
      });
    }

    const collector = interaction.channel.createMessageComponentCollector({
      componentType: "BUTTON",
    });

    collector.on("collect", async (i) => {
      if (i.user.id === interaction.user.id) {
        switch (i.customId) {
          case "toHomepage":
            embedObject.homepage.setFooter({
              text: `Requested by ${interaction.user.tag}`,
            });
            await i.update({
              embeds: [embedObject.homepage],
              components: [rowObject.homepage],
            });
            break;
          case "toGeneral":
            embedObject.general.setFooter({
              text: `Page 1/7 - Requested by ${interaction.user.tag}`,
            });
            await i.update({
              embeds: [embedObject.general],
              components: [rowObject.general],
            });
            break;
          case "toFishing":
            embedObject.fishing.setFooter({
              text: `Page 2/7 - Requested by ${interaction.user.tag}`,
            });
            await i.update({
              embeds: [embedObject.fishing],
              components: [rowObject.fishing],
            });
            break;
          case "toMarket":
            embedObject.market.setFooter({
              text: `Page 3/7 - Requested by ${interaction.user.tag}`,
            });
            await i.update({
              embeds: [embedObject.market],
              components: [rowObject.market],
            });
            break;
          case "toEconomy":
            embedObject.economy.setFooter({
              text: `Page 4/7 - Requested by ${interaction.user.tag}`,
            });
            await i.update({
              embeds: [embedObject.economy],
              components: [rowObject.economy],
            });
            break;
          case "toBattling":
            embedObject.battling.setFooter({
              text: `Page 5/7 - Requested by ${interaction.user.tag}`,
            });
            await i.update({
              embeds: [embedObject.battling],
              components: [rowObject.battling],
            });
            break;
          case "toLootBoxes":
            embedObject.lootBoxes.setFooter({
              text: `Page 6/7 - Requested by ${interaction.user.tag}`,
            });
            await i.update({
              embeds: [embedObject.lootBoxes],
              components: [rowObject.lootBoxes],
            });
            break;
          case "toUser":
            embedObject.user.setFooter({
              text: `Page 7/7 - Requested by ${interaction.user.tag}`,
            });
            await i.update({
              embeds: [embedObject.user],
              components: [rowObject.user],
            });
            break;
        }
      } else {
        i.reply({
          content: `These aren't your buttons!`,
          ephemeral: true,
        });
      }
    });
  },
};
