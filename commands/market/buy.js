const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

// Initialization (change on restart)

let rarity, embed, amountShort;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("buy")
    .setDescription("Buy items from the shop")
    .addNumberOption((option) =>
      option
        .setName("item")
        .setDescription("The itemID of the item to buy (wrapped in [])")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    // Option

    const item = interaction.options.getNumber("item");

    // Database

    const userProfile = await client.createUser(interaction.member);

    // Initialization (change on command)

    let error;

    // Code

    switch (item) {
      case 1:
        if (userProfile.exquisiteRod === "Locked! 🔒") {
          if (userProfile.fishCoins >= 2000) {
            if (
              userProfile.butterfish >= 5 &&
              userProfile.clownfish >= 5 &&
              userProfile.duck >= 5 &&
              userProfile.penguin >= 5 &&
              userProfile.squid >= 5
            ) {
              embed = new MessageEmbed()
                .setTitle("Purchase successful!")
                .setDescription(
                  "You bought the Exquisite rod for 2000 <:FishCoin:937423381756772364> &  5 of each uncommon fish! Equip it with `/equip exquisite`."
                )
                .setFooter({ text: `Performed by ${interaction.user.tag}` })
                .setColor("#ADD8E6")
                .setTimestamp();

              await User.findOneAndUpdate(
                { _id: userProfile._id },
                {
                  fishCoins: (userProfile.fishCoins -= 2000),
                  butterfish: (userProfile.butterfish -= 5),
                  clownfish: (userProfile.clownfish -= 5),
                  duck: (userProfile.duck -= 5),
                  penguin: (userProfile.penguin -= 5),
                  squid: (userProfile.squid -= 5),
                  exquisiteRod: (userProfile.exquisiteRod = "Unlocked! 🔓"),
                }
              );
            } else {
              error = "!enoughFish";
              rarity = "uncommon";
            }
          } else {
            error = "!enoughCoins";
            amountShort = 2000 - userProfile.fishCoins;
          }
        } else {
          error = "alreadyBought";
        }
        break;
      case 2:
        if (userProfile.preciousRod === "Locked! 🔒") {
          if (userProfile.exquisiteRod === "Unlocked! 🔓") {
            if (userProfile.fishCoins >= 6000) {
              if (
                userProfile.crab >= 5 &&
                userProfile.orca >= 5 &&
                userProfile.otter >= 5 &&
                userProfile.shark >= 5 &&
                userProfile.whale >= 5
              ) {
                embed = new MessageEmbed()
                  .setTitle("Purchase successful!")
                  .setDescription(
                    "You bought the Precious rod for 6000 <:FishCoin:937423381756772364> &  5 of each rare fish! Equip it with `/equip precious`."
                  )
                  .setFooter({ text: `Performed by ${interaction.user.tag}` })
                  .setColor("#ADD8E6")
                  .setTimestamp();

                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 6000),
                    crab: (userProfile.crab -= 5),
                    orca: (userProfile.orca -= 5),
                    otter: (userProfile.otter -= 5),
                    shark: (userProfile.shark -= 5),
                    whale: (userProfile.whale -= 5),
                    preciousRod: (userProfile.preciousRod = "Unlocked! 🔓"),
                  }
                );
              } else {
                error = "!enoughFish";
                rarity = "rare";
              }
            } else {
              error = "!enoughCoins";
              amountShort = 6000 - userProfile.fishCoins;
            }
          } else {
            error = "!previousRodUnlocked";
          }
        } else {
          error = "alreadyBought";
        }
        break;
      case 3:
        if (userProfile.luxuriousRod === "Locked! 🔒") {
          if (userProfile.preciousRod === "Unlocked! 🔓") {
            if (userProfile.fishCoins >= 18000) {
              if (
                userProfile.jellyfish >= 5 &&
                userProfile.octopus >= 5 &&
                userProfile.seahorse >= 5 &&
                userProfile.seal >= 5 &&
                userProfile.walrus >= 5
              ) {
                embed = new MessageEmbed()
                  .setTitle("Purchase successful!")
                  .setDescription(
                    "You bought the Luxurious rod for 18000 <:FishCoin:937423381756772364> &  5 of each epic fish! Equip it with `/equip luxurious`."
                  )
                  .setFooter({ text: `Performed by ${interaction.user.tag}` })
                  .setColor("#ADD8E6")
                  .setTimestamp();

                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 18000),
                    jellyfish: (userProfile.jellyfish -= 5),
                    octopus: (userProfile.octopus -= 5),
                    seahorse: (userProfile.seahorse -= 5),
                    seal: (userProfile.seal -= 5),
                    walrus: (userProfile.walrus -= 5),
                    luxuriousRod: (userProfile.luxuriousRod = "Unlocked! 🔓"),
                  }
                );
              } else {
                error = "!enoughFish";
                rarity = "epic";
              }
            } else {
              error = "!enoughCoins";
              amountShort = 18000 - userProfile.fishCoins;
            }
          } else {
            error = "!previousRodUnlocked";
          }
        } else {
          error = "alreadyBought";
        }
        break;
      case 4:
        if (userProfile.divineRod === "Locked! 🔒") {
          if (userProfile.luxuriousRod === "Unlocked! 🔓") {
            if (userProfile.fishCoins >= 54000) {
              if (
                userProfile.coral >= 5 &&
                userProfile.crocodile >= 5 &&
                userProfile.flamingo >= 5 &&
                userProfile.manatee >= 5 &&
                userProfile.turtle >= 5
              ) {
                embed = new MessageEmbed()
                  .setTitle("Purchase successful!")
                  .setDescription(
                    "You bought the Divine rod for 54000 <:FishCoin:937423381756772364> &  5 of each mythic fish! Equip it with `/equip divine`."
                  )
                  .setFooter({ text: `Performed by ${interaction.user.tag}` })
                  .setColor("#ADD8E6")
                  .setTimestamp();

                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 54000),
                    coral: (userProfile.coral -= 5),
                    crocodile: (userProfile.crocodile -= 5),
                    flamingo: (userProfile.flamingo -= 5),
                    manatee: (userProfile.manatee -= 5),
                    turtle: (userProfile.turtle -= 5),
                    divineRod: (userProfile.divineRod = "Unlocked! 🔓"),
                  }
                );
              } else {
                error = "!enoughFish";
                rarity = "mythic";
              }
            } else {
              error = "!enoughCoins";
              amountShort = 54000 - userProfile.fishCoins;
            }
          } else {
            error = "!previousRodUnlocked";
          }
        } else {
          error = "alreadyBought";
        }
        break;
    }

    if (error == "alreadyBought") {
      await interaction.reply({
        content: `You already have this rod in your possession!`,
        ephemeral: true,
      });
    } else if (error == "!previousRodUnlocked") {
      await interaction.reply({
        content: `You need to buy previous rods first before buying this one!`,
        ephemeral: true,
      });
    } else if (error == "!enoughCoins") {
      await interaction.reply({
        content: `You need ${amountShort} more Fish Coins to buy this item!`,
        ephemeral: true,
      });
    } else if (error == "!enoughFish") {
      await interaction.reply({
        content: `You need 5 of each ${rarity} fish to buy this item!`,
        ephemeral: true,
      });
    } else if (embed) {
      await interaction.reply({
        content: `${interaction.user}`,
        embeds: [embed],
      });
    } else {
      await interaction.reply({
        content: `That itemID doesn't exist!`,
        ephemeral: true,
      });
    }
  },
};
