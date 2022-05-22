// #bug-reports & button handler

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

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
    // Option

    let page = interaction.options.getString("page");

    // Embeds

    const homepage = new MessageEmbed()
      .setTitle("Help pages")
      .addFields(
        {
          name: "General - page 1",
          value:
            "`discord, help, info, invite, leaderboard, news, report, rules, suggest, verify`",
          inline: true,
        },
        {
          name: "Fishing - page 2",
          value: "`equip, fish, inventory, net`",
          inline: true,
        },
        {
          name: "Market - page 3",
          value: "`auctionhouse, buy, sell, shop, trade`",
          inline: true,
        },
        {
          name: "Economy - page 4",
          value: "`checkin, lottery, quests, redeem`",
          inline: true,
        },
        { name: "Battling - page 5", value: "`battle, upgrade`", inline: true },
        { name: "Loot Boxes - page 6", value: "`open`", inline: true },
        {
          name: "User - page 7",
          value: "`achievements, prestige, profile`",
          inline: true,
        }
      )
      .setFooter({ text: `Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    const general = new MessageEmbed()
      .setTitle("General")
      .addFields(
        {
          name: "Discord",
          value: "`/discord` - Join the official F15H discord server.",
        },
        {
          name: "Help",
          value: "`/help [page]` - Displays the help page.",
        },
        {
          name: "Info",
          value: "`/info <fish>` - Displays info about a fish.",
        },
        {
          name: "Invite (SOON!)",
          value: "`/invite` - Invite the bot to your server.",
        },
        {
          name: "Leaderboard",
          value: "`/leaderboard <category> [page]` - Displays the leaderboard.",
        },
        {
          name: "News",
          value: "`/news` - View the latest news.",
        },
        {
          name: "Report",
          value: "`/report <bug>` - Report a bug.",
        },
        {
          name: "Rules",
          value: "`/rules` - Displays the bot rules.",
        },
        {
          name: "Suggest",
          value: "`/suggest <suggestion>` - Suggest a feature for the bot.",
        },
        {
          name: "Verify",
          value: "`/v <code>` - Verify that you aren't afk.",
        },
        {
          name: "Wiki (SOON!)",
          value: "`/wiki <feature>` - View information about a certain feature",
        }
      )
      .setFooter({ text: `Page 1/7 | Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    const fishing = new MessageEmbed()
      .setTitle("Fishing")
      .addFields(
        {
          name: "Equip",
          value: "`/equip <rod>` - Equip one of your fishing rods.",
        },
        {
          name: "Fish",
          value: "`/fish` - Fish with your fishing rod.",
        },
        {
          name: "Inventory",
          value: "`/inventory [user] [page]` - Displays your inventory.",
        },
        {
          name: "Lifetime",
          value: "`/lifetime [user]` - Displays your lifetime caught fish.",
        },
        {
          name: "Net (SOON!)",
          value: "`/net [net]` - Autofish with your fishing net.",
        }
      )
      .setFooter({ text: `Page 2/7 | Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    const market = new MessageEmbed()
      .setTitle("Market")
      .addFields(
        {
          name: "Auction House (SOON!)",
          value: "`/auctionhouse [page]` - Displays the auction house.",
        },
        {
          name: "Buy",
          value: "`/buy <item> [amount]` - Buy items from the shop.",
        },
        {
          name: "Sell",
          value: "`/sell <type> [amount]` - Sell fish for Fish Coins.",
        },
        {
          name: "Shop",
          value: "`/shop` - Displays the shop.",
        },
        {
          name: "Trade (SOON!)",
          value:
            "`/trade <user> <fish> <amount> <fish> <amount>` - Trade fish with other users.",
        }
      )
      .setFooter({ text: `Page 3/7 | Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    const economy = new MessageEmbed()
      .setTitle("Economy")
      .addFields(
        {
          name: "Check-in (SOON!)",
          value: "`/checkin` - Grants you daily rewards.",
        },
        {
          name: "Lottery (SOON!)",
          value:
            "`/lottery [amount]` - Displays the current lottery/Bet money on the current lottery.",
        },
        {
          name: "Quests (SOON!)",
          value: "`/quests [user] [page]` - Displays your quests.",
        },
        {
          name: "Gift Codes",
          value: "`/redeem <code>` - Redeem a gift code.",
        }
      )
      .setFooter({ text: `Page 4/7 | Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    const battling = new MessageEmbed()
      .setTitle("Battling")
      .addFields(
        {
          name: "Battle (SOON!)",
          value:
            "`/battle <player>` - Battle against a user (or the bot for rewards).",
        },
        {
          name: "Upgrade",
          value: "`/upgrade <fish>` - Upgrade a fish.",
        }
      )
      .setFooter({ text: `Page 5/7 | Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    const lootboxes = new MessageEmbed()
      .setTitle("Loot Boxes")
      .addFields({
        name: "Open (SOON!)",
        value: "`/open <box>` - Open a loot box.",
      })
      .setFooter({ text: `Page 6/7 | Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    const user = new MessageEmbed()
      .setTitle("User")
      .addFields(
        {
          name: "Achievements (SOON!)",
          value: "`/achievements [user] [page]` - Displays your achievements.",
        },
        {
          name: "Prestige (SOON!)",
          value: "`/prestige` - Prestige for exclusive rewards.",
        },
        {
          name: "Profile",
          value: "`/profile [user]` - Displays your profile.",
        }
      )
      .setFooter({ text: `Page 7/7 | Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    // Code

    if (!page) {
      await interaction.reply({
        content: `${interaction.user}`,
        embeds: [homepage],
      });
    } else {
      page = page.toLowerCase();

      switch (page) {
        case "0":
        case "homepage":
          embed = homepage;
          break;
        case "1":
        case "general":
          embed = general;
          break;
        case "2":
        case "fishing":
          embed = fishing;
          break;
        case "3":
        case "market":
          embed = market;
          break;
        case "4":
        case "economy":
          embed = economy;
          break;
        case "5":
        case "battling":
          embed = battling;
          break;
        case "6":
        case "loot boxes":
          embed = lootboxes;
          break;
        case "7":
        case "user":
          embed = user;
          break;
        default:
          embed = "none";
          break;
      }

      try {
        await interaction.reply({
          content: `${interaction.user}`,
          embeds: [embed],
        });
      } catch (err) {
        await interaction.reply({
          content:
            "That page does not exist! Valid pages: `1-7, general, fishing, market, economy, battling, loot boxes, user`.",
          ephemeral: true,
        });
      }
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
