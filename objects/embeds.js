const { MessageEmbed } = require("discord.js");

module.exports = {
  // Help
  homepage: new MessageEmbed()
    .setTitle("Help pages")
    .addFields(
      {
        name: "General - page 1",
        value:
          "`help, discord, invite, info, leaderboard, suggest, report, news`",
        inline: true,
      },
      {
        name: "Fishing - page 2",
        value: "`fish, net, inventory, trophy`",
        inline: true,
      },
      {
        name: "Market - page 3",
        value: "`sell, buy, trade, shop, auctionhouse`",
        inline: true,
      },
      {
        name: "Economy - page 4",
        value: "`checkin, quests, redeem, lottery`",
        inline: true,
      },
      { name: "Battling - page 5", value: "`battle`", inline: true },
      { name: "Loot Boxes - page 6", value: "`open`", inline: true },
      {
        name: "User - page 7",
        value: "`profile, achievements, prestige`",
        inline: true,
      }
    )
    .setColor("#ADD8E6")
    .setTimestamp(),
  general: new MessageEmbed()
    .setTitle("General")
    .addFields(
      {
        name: "Help",
        value: "`/help [page]` - Displays the help page.",
      },
      {
        name: "Info",
        value: "`/info <fish>` - Displays info about a fish.",
      },
      {
        name: "Discord",
        value: "`/discord` - Join the official F15H discord server.",
      },
      {
        name: "Invite",
        value: "`/invite` - Invite the bot to your server.",
      },
      {
        name: "Leaderboard (SOON!)",
        value: "`/leaderboard <category> [page]` - Displays the leaderboard.",
      },
      {
        name: "Suggest",
        value: "`/suggest <suggestion>` - Suggest a feature for the bot.",
      },
      {
        name: "Report",
        value: "`/report <bug>` - Report a bug.",
      },
      {
        name: "News",
        value: "`/news` - View the latest news.",
      }
    )
    .setColor("#ADD8E6")
    .setTimestamp(),
  fishing: new MessageEmbed()
    .setTitle("Fishing")
    .addFields(
      {
        name: "Fish",
        value: "`/fish [rod]` - Fish with your fishing rod.",
      },
      {
        name: "Net (SOON!)",
        value: "`/net [net]` - Autofish with your fishing net.",
      },
      {
        name: "Inventory",
        value: "`/inventory [user] [page]` - Displays your inventory.",
      },
      {
        name: "Trophy Hall",
        value: "`/trophyhall [user] [page]` - Displays your trophy hall.",
      }
    )
    .setColor("#ADD8E6")
    .setTimestamp(),
  market: new MessageEmbed()
    .setTitle("Market")
    .addFields(
      {
        name: "Sell",
        value: "`/sell <type> [amount]` - Sell fish for Fish Coins.",
      },
      {
        name: "Buy",
        value: "`/buy <item> [amount]` - Buy items from the shop.",
      },
      {
        name: "Trade (SOON!)",
        value:
          "`/trade <user> <fish> <amount> <fish> <amount>` - Trade fish with other users.",
      },
      {
        name: "Shop",
        value: "`/shop` - Displays the shop.",
      },
      {
        name: "Auction House (SOON!)",
        value: "`/auctionhouse [page]` - Displays the auction house.",
      }
    )
    .setColor("#ADD8E6")
    .setTimestamp(),
  economy: new MessageEmbed()
    .setTitle("Economy")
    .addFields(
      {
        name: "Check-in",
        value: "`/checkin <type>` - Grants you daily rewards.",
      },
      {
        name: "Quests (SOON!)",
        value: "`/quests [user] [page]` - Displays your quests.",
      },
      {
        name: "Gift Codes",
        value: "`/redeem <code>` - Redeem a gift code.",
      },
      {
        name: "Lottery (SOON!)",
        value:
          "`/lottery [amount]` - Displays the current lottery/Bet money on the current lottery.",
      }
    )
    .setColor("#ADD8E6")
    .setTimestamp(),
  battling: new MessageEmbed()
    .setTitle("Battling")
    .addFields({
      name: "Battle (SOON!)",
      value:
        "`/battle <player>` - Battle against a user (or the bot for rewards).",
    })
    .setColor("#ADD8E6")
    .setTimestamp(),
  lootBoxes: new MessageEmbed()
    .setTitle("Loot Boxes")
    .addFields({
      name: "Open (SOON!)",
      value: "`/open <box>` - Open a loot box.",
    })
    .setColor("#ADD8E6")
    .setTimestamp(),
  user: new MessageEmbed()
    .setTitle("User")
    .addFields(
      {
        name: "Profile",
        value: "`/profile [user]` - Displays your profile.",
      },
      {
        name: "Achievements (SOON!)",
        value: "`/achievements [user] [page]` - Displays your achievements.",
      },
      {
        name: "Prestige (SOON!)",
        value: "`/prestige` - Prestige for exclusive rewards.",
      }
    )
    .setColor("#ADD8E6")
    .setTimestamp(),
  // Shop
  shop: new MessageEmbed()
    .setTitle(`F15H shop`)
    .addFields({
      name: "Fishing rods",
      value: `[1] Exquisite rod - 2000 <:FishCoin:937423381756772364>\n[2] Precious rod - 4000 <:FishCoin:937423381756772364>\n[3] Luxurious rod - 8000 <:FishCoin:937423381756772364>\n[4] Divine rod - 16000 <:FishCoin:937423381756772364>`,
    })
    .setColor("#ADD8E6")
    .setTimestamp(),
  // Embed
  information: new MessageEmbed()
    .setTitle(`F15H server information`)
    .addFields(
      {
        name: `Channels`,
        value: `<#970349280873304084> - In this channel information about the server can be found.\n<#937019093960253540> - In this channel all the rules which you must obey can be found.\n<#970349111985455125> - In this channel tickets can be created to get server support.\n<#937018874572972115> - In this channel announcements regarding the server or bot will be made.\n<#937019071151603772> - In this channel updates to the bot will be logged.\n<#937055370944319498> - In this channel all the server boosts are logged.\n<#937019249648623656> - Chill with other users!.\n<#937019775433990144>, <#937019797248557127> and <#937019828764573707> - Go F15Hing!`,
      },
      {
        name: `Roles`,
        value: `<@&939517749267423284> - Our lord and savior.\n<@&937453959487049748> - People who develop F15H.\n<@&967883504522260603> - People who keep the server clean.\n<@&971139439055233024> - People who joined this server before the full release.\n<@&967883535430062131> - People who joined the server.`,
      }
    )
    .setColor("#ADD8E6"),
  rules: new MessageEmbed()
    .setTitle(`F15H server rules`)
    .addFields(
      {
        name: `Text channel rules`,
        value: `1) Respect other users.\n2) Do not spam messages, including emojis, stickers and @mentions.\n3) Do not send messages which contain sexual, discriminatory, racial or political content\n4) Do not advertise social media, including in user's their dms.\n5) Do not @mention staff without a valid reason.\n6) Use channels for their intended purpose. You can find this in <#970349280873304084>.`,
      },
      {
        name: `Voice channel rules`,
        value: `1) Respect other users.\n2) Do not play loud or disturbing audio through your microphone.\n3) Do not use voice changers`,
      },
      {
        name: `Other rules`,
        value: `1) Staff has the final say on all situations. If you feel like they were unjust, create a <#970349111985455125>.\n2) Do not abuse any bugs of the bot. Doing so can result in a blacklist. Report them instead using /report.`,
      },
      {
        name: `RULES ARE SUBJECT TO CHANGE ANYTIME`,
        value: `If the rules are changed, we will announce it in <#937018874572972115>.`,
      },
      {
        name: `IGNORANCE OF THE RULES IS NOT AN EXCUSE!`,
        value: `You are obliged to know what you can and can't do.`,
      }
    )
    .setFooter({ text: `Happy F15Hing! 🐟` })
    .setColor("#ADD8E6"),
  updateLog: new MessageEmbed(),
  staffRules: new MessageEmbed(),
  confirmation: new MessageEmbed()
    .setTitle(`Embed sent!`)
    .setColor("#ADD8E6")
    .setTimestamp(),
};
