// Compacting

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

let embed;

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
    const item = interaction.options.getNumber("item");

    const userProfile = await client.createUser(interaction.member);

    switch (item) {
      case 1:
        if (userProfile.exquisiteRod === "Locked! 🔒") {
          if (userProfile.fishCoins >= 2000) {
            embed = new MessageEmbed()
              .setTitle("Purchase successful!")
              .setDescription(
                "You bought the Exquisite rod for 2000 <:FishCoin:937423381756772364>! Equip it with `/equip exquisite`."
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
              { exquisiteRod: (userProfile.exquisiteRod = "Unlocked! 🔓") }
            );
          } else {
            await interaction.reply({
              content: `You don't have enough Fish Coins to buy this item!`,
              ephemeral: true,
            });
          }
        } else {
          await interaction.reply({
            content: `You already have this rod in possession!`,
            ephemeral: true,
          });
        }
        break;
      case 2:
        if (userProfile.preciousRod === "Locked! 🔒") {
          if (userProfile.exquisiteRod === "Unlocked! 🔓") {
            if (userProfile.fishCoins >= 4000) {
              embed = new MessageEmbed()
                .setTitle("Purchase successful!")
                .setDescription(
                  "You bought the Precious rod for 4000 <:FishCoin:937423381756772364>! Equip it with `/equip precious`."
                )
                .setFooter({ text: `Performed by ${interaction.user.tag}` })
                .setColor("#ADD8E6")
                .setTimestamp();

              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { fishCoins: (userProfile.fishCoins -= 4000) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { preciousRod: (userProfile.preciousRod = "Unlocked! 🔓") }
              );
            } else {
              await interaction.reply({
                content: `You don't have enough Fish Coins to buy this item!`,
                ephemeral: true,
              });
            }
          } else {
            await interaction.reply({
              content: `You need to buy previous rods first before buying this one!`,
              ephemeral: true,
            });
          }
        } else {
          await interaction.reply({
            content: `You already have this rod in possession!`,
            ephemeral: true,
          });
        }
        break;
      case 3:
        if (userProfile.luxuriousRod === "Locked! 🔒") {
          if (userProfile.preciousRod === "Unlocked! 🔓") {
            if (userProfile.fishCoins >= 8000) {
              embed = new MessageEmbed()
                .setTitle("Purchase successful!")
                .setDescription(
                  "You bought the Luxurious rod for 8000 <:FishCoin:937423381756772364>! Equip it with `/equip luxurious`."
                )
                .setFooter({ text: `Performed by ${interaction.user.tag}` })
                .setColor("#ADD8E6")
                .setTimestamp();

              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { fishCoins: (userProfile.fishCoins -= 8000) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { luxuriousRod: (userProfile.luxuriousRod = "Unlocked! 🔓") }
              );
            } else {
              await interaction.reply({
                content: `You don't have enough Fish Coins to buy this item!`,
                ephemeral: true,
              });
            }
          } else {
            await interaction.reply({
              content: `You need to buy previous rods first before buying this one!`,
              ephemeral: true,
            });
          }
        } else {
          await interaction.reply({
            content: `You already have this rod in possession!`,
            ephemeral: true,
          });
        }
        break;
      case 4:
        if (userProfile.divineRod === "Locked! 🔒") {
          if (userProfile.luxuriousRod === "Unlocked! 🔓") {
            if (userProfile.fishCoins >= 16000) {
              embed = new MessageEmbed()
                .setTitle("Purchase successful!")
                .setDescription(
                  "You bought the Divine rod for 16000 <:FishCoin:937423381756772364>! Equip it with `/equip divine`."
                )
                .setFooter({ text: `Performed by ${interaction.user.tag}` })
                .setColor("#ADD8E6")
                .setTimestamp();

              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { fishCoins: (userProfile.fishCoins -= 16000) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { divineRod: (userProfile.divineRod = "Unlocked! 🔓") }
              );
            } else {
              await interaction.reply({
                content: `You don't have enough Fish Coins to buy this item!`,
                ephemeral: true,
              });
            }
          } else {
            await interaction.reply({
              content: `You need to buy previous rods first before buying this one!`,
              ephemeral: true,
            });
          }
        } else {
          await interaction.reply({
            content: `You already have this rod in possession!`,
            ephemeral: true,
          });
        }
        break;
    }

    if (embed) {
      try {
        await interaction.reply({
          content: `${interaction.user}`,
          embeds: [embed],
        });
      } catch (err) {}
    } else {
      try {
        await interaction.reply({
          content: `That itemID doesn't exist!`,
          ephemeral: true,
        });
      } catch (err) {}
    }
  },
};
