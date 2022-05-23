// #bug-reports & button handler

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

let helpEmbed, helpRow;

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

    // Embeds & rows

    const homepage = new MessageEmbed()
      .setTitle("Help pages")
      .addFields(
        {
          name: "General - page 1",
          value: "`discord, help, info, invite, news, report, rules, suggest`",
          inline: true,
        },
        {
          name: "Fishing - page 2",
          value: "`equip, fish, inventory, leaderboard, lifetime, net, verify`",
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
          name: "Leaderboard",
          value: "`/leaderboard <category> [page]` - Displays the leaderboard.",
        },
        {
          name: "Lifetime",
          value: "`/lifetime [user]` - Displays your lifetime caught fish.",
        },
        {
          name: "Net (SOON!)",
          value: "`/net [net]` - Autofish with your fishing net.",
        },
        {
          name: "Verify",
          value: "`/v <code>` - Verify that you aren't afk.",
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

    // const homepage_ = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("nothing")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(true),
    //   new MessageButton()
    //     .setCustomId("general")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false)
    // );

    // const general_ = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("homepage")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false),
    //   new MessageButton()
    //     .setCustomId("fishing")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false)
    // );

    // const fishing_ = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("general")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false),
    //   new MessageButton()
    //     .setCustomId("market")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false)
    // );

    // const market_ = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("fishing")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false),
    //   new MessageButton()
    //     .setCustomId("economy")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false)
    // );

    // const economy_ = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("market")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false),
    //   new MessageButton()
    //     .setCustomId("battling")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false)
    // );

    // const battling_ = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("economy")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false),
    //   new MessageButton()
    //     .setCustomId("lootboxes")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false)
    // );

    // const lootboxes_ = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("battling")
    //     .setLabel("Previous page")
    //     .setEmoji("⬅️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false),
    //   new MessageButton()
    //     .setCustomId("user")
    //     .setLabel("Next page")
    //     .setEmoji("➡️")
    //     .setStyle("PRIMARY")
    //     .setDisabled(false)
    // );

    // const user_ = new MessageActionRow().addComponents(
    //   new MessageButton()
    //     .setCustomId("lootboxes")
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

    if (!page) {
      await interaction.reply({
        content: `${interaction.user}`,
        embeds: [homepage],
        // components: [homepage_],
      });
    } else {
      page = page.toLowerCase();

      switch (page) {
        case "0":
        case "homepage":
          helpEmbed = homepage;
          // helpRow = homepage_;
          break;
        case "1":
        case "general":
          helpEmbed = general;
          // helpRow = general_;
          break;
        case "2":
        case "fishing":
          helpEmbed = fishing;
          // helpRow = fishing_;
          break;
        case "3":
        case "market":
          helpEmbed = market;
          // helpRow = market_;
          break;
        case "4":
        case "economy":
          helpEmbed = economy;
          // helpRow = economy_;
          break;
        case "5":
        case "battling":
          helpEmbed = battling;
          // helpRow = battling_;
          break;
        case "6":
        case "loot boxes":
          helpEmbed = lootboxes;
          // helpRow = lootboxes_;
          break;
        case "7":
        case "user":
          helpEmbed = user;
          // helpRow = user_;
          break;
        default:
          helpEmbed = "none";
          // helpRow = "none";
          break;
      }

      try {
        await interaction.reply({
          content: `${interaction.user}`,
          embeds: [helpEmbed],
          // components: [helpRow],
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
    //       case "homepage":
    //         helpEmbed = homepage;
    //         helpRow = homepage_;
    //         break;
    //       case "general":
    //         helpEmbed = general;
    //         helpRow = general_;
    //         break;
    //       case "fishing":
    //         helpEmbed = fishing;
    //         helpRow = fishing_;
    //         break;
    //       case "market":
    //         helpEmbed = market;
    //         helpRow = market_;
    //         break;
    //       case "economy":
    //         helpEmbed = economy;
    //         helpRow = economy_;
    //         break;
    //       case "battling":
    //         helpEmbed = battling;
    //         helpRow = battling_;
    //         break;
    //       case "lootboxes":
    //         helpEmbed = lootboxes;
    //         helpRow = lootboxes_;
    //         break;
    //       case "user":
    //         helpEmbed = user;
    //         helpRow = user_;
    //         break;
    //     }

    //     await i.update({
    //       embeds: [helpEmbed],
    //       components: [helpRow],
    //     });
    //   } else {
    //     i.reply({
    //       content: `These aren't your buttons!`,
    //       ephemeral: true,
    //     });
    //   }
    // });
  },
};
