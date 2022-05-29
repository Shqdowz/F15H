// Compacting

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

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

    // Initialization

    const userProfile = await client.createUser(interaction.member);

    let error;

    // Code

    switch (item) {
      case 1:
        if (userProfile.exquisiteRod === "Locked! 🔒") {
          if (userProfile.fishCoins >= 2000) {
            if (
              userProfile.butterfish >= 10 &&
              userProfile.clownfish >= 10 &&
              userProfile.duck >= 10 &&
              userProfile.penguin >= 10 &&
              userProfile.squid >= 10
            ) {
              embed = new MessageEmbed()
                .setTitle("Purchase successful!")
                .setDescription(
                  "You bought the Exquisite rod for 2000 <:FishCoin:937423381756772364> &  10 of each uncommon fish! Equip it with `/equip exquisite`."
                )
                .setFooter({ text: `Performed by ${interaction.user.tag}` })
                .setColor("#ADD8E6")
                .setTimestamp();

              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { fishCoins: (userProfile.fishCoins -= 2000) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { butterfish: (userProfile.butterfish -= 10) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { clownfish: (userProfile.clownfish -= 10) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { duck: (userProfile.duck -= 10) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { penguin: (userProfile.penguin -= 10) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { squid: (userProfile.squid -= 10) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { exquisiteRod: (userProfile.exquisiteRod = "Unlocked! 🔓") }
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
                userProfile.crab >= 10 &&
                userProfile.orca >= 10 &&
                userProfile.otter >= 10 &&
                userProfile.shark >= 10 &&
                userProfile.whale >= 10
              ) {
                embed = new MessageEmbed()
                  .setTitle("Purchase successful!")
                  .setDescription(
                    "You bought the Precious rod for 6000 <:FishCoin:937423381756772364> &  10 of each rare fish! Equip it with `/equip precious`."
                  )
                  .setFooter({ text: `Performed by ${interaction.user.tag}` })
                  .setColor("#ADD8E6")
                  .setTimestamp();

                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { fishCoins: (userProfile.fishCoins -= 6000) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { crab: (userProfile.crab -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { orca: (userProfile.orca -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { otter: (userProfile.otter -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { shark: (userProfile.shark -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { whale: (userProfile.whale -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { preciousRod: (userProfile.preciousRod = "Unlocked! 🔓") }
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
                userProfile.jellyfish >= 10 &&
                userProfile.octopus >= 10 &&
                userProfile.seahorse >= 10 &&
                userProfile.seal >= 10 &&
                userProfile.walrus >= 10
              ) {
                embed = new MessageEmbed()
                  .setTitle("Purchase successful!")
                  .setDescription(
                    "You bought the Luxurious rod for 18000 <:FishCoin:937423381756772364> &  10 of each epic fish! Equip it with `/equip luxurious`."
                  )
                  .setFooter({ text: `Performed by ${interaction.user.tag}` })
                  .setColor("#ADD8E6")
                  .setTimestamp();

                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { fishCoins: (userProfile.fishCoins -= 18000) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { jellyfish: (userProfile.jellyfish -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { octopus: (userProfile.octopus -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { seahorse: (userProfile.seahorse -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { seal: (userProfile.seal -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { walrus: (userProfile.walrus -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { luxuriousRod: (userProfile.luxuriousRod = "Unlocked! 🔓") }
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
                userProfile.coral >= 10 &&
                userProfile.crocodile >= 10 &&
                userProfile.flamingo >= 10 &&
                userProfile.manatee >= 10 &&
                userProfile.turtle >= 10
              ) {
                embed = new MessageEmbed()
                  .setTitle("Purchase successful!")
                  .setDescription(
                    "You bought the Divine rod for 54000 <:FishCoin:937423381756772364> &  10 of each mythic fish! Equip it with `/equip divine`."
                  )
                  .setFooter({ text: `Performed by ${interaction.user.tag}` })
                  .setColor("#ADD8E6")
                  .setTimestamp();

                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { fishCoins: (userProfile.fishCoins -= 54000) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { coral: (userProfile.coral -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { crocodile: (userProfile.crocodile -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { flamingo: (userProfile.flamingo -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { manatee: (userProfile.manatee -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { turtle: (userProfile.turtle -= 10) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { divineRod: (userProfile.divineRod = "Unlocked! 🔓") }
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
        content: `You need 10 of each ${rarity} fish to buy this item!`,
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
