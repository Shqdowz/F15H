const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

let embed, success;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("equip")
    .setDescription("Equip one of your fishing rods")
    .addStringOption((option) =>
      option.setName("rod").setDescription("The rod to equip").setRequired(true)
    ),
  async execute(interaction, client) {
    const rod = interaction.options.getString("rod").toLowerCase();

    const userProfile = await client.createUser(interaction.member);

    if (
      rod == "common" ||
      rod == "exquisite" ||
      rod == "precious" ||
      rod == "luxurious" ||
      rod == "divine"
    ) {
      if (rod != userProfile.equippedRod) {
        switch (rod) {
          case "common":
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { equippedRod: (userProfile.equippedRod = "common") }
            );

            embed = new MessageEmbed()
              .setTitle("Equip successful!")
              .setDescription(
                "You equipped your common rod. Type `/fish` to fish with it!"
              )
              .setFooter({ text: `Performed by ${interaction.user.tag}` })
              .setColor("#ADD8E6")
              .setTimestamp();

            success = true;
            break;
          case "exquisite":
            if (userProfile.exquisiteRod == "Unlocked! 🔓") {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { equippedRod: (userProfile.equippedRod = "exquisite") }
              );

              embed = new MessageEmbed()
                .setTitle("Equip successful!")
                .setDescription(
                  "You equipped your exquisite rod. Type `/fish` to fish with it!"
                )
                .setFooter({ text: `Performed by ${interaction.user.tag}` })
                .setColor("#ADD8E6")
                .setTimestamp();

              success = true;
            } else {
              success = false;
            }
            break;
          case "precious":
            if (userProfile.preciousRod == "Unlocked! 🔓") {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { equippedRod: (userProfile.equippedRod = "precious") }
              );

              embed = new MessageEmbed()
                .setTitle("Equip successful!")
                .setDescription(
                  "You equipped your precious rod. Type `/fish` to fish with it!"
                )
                .setFooter({ text: `Performed by ${interaction.user.tag}` })
                .setColor("#ADD8E6")
                .setTimestamp();

              success = true;
            } else {
              success = false;
            }
            break;
          case "luxurious":
            if (userProfile.luxuriousRod == "Unlocked! 🔓") {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { equippedRod: (userProfile.equippedRod = "luxurious") }
              );

              embed = new MessageEmbed()
                .setTitle("Equip successful!")
                .setDescription(
                  "You equipped your luxurious rod. Type `/fish` to fish with it!"
                )
                .setFooter({ text: `Performed by ${interaction.user.tag}` })
                .setColor("#ADD8E6")
                .setTimestamp();

              success = true;
            } else {
              success = false;
            }
            break;
          case "divine":
            if (userProfile.divineRod == "Unlocked! 🔓") {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { equippedRod: (userProfile.equippedRod = "divine") }
              );

              embed = new MessageEmbed()
                .setTitle("Equip successful!")
                .setDescription(
                  "You equipped your divine rod. Type `/fish` to fish with it!"
                )
                .setFooter({ text: `Performed by ${interaction.user.tag}` })
                .setColor("#ADD8E6")
                .setTimestamp();

              success = true;
            } else {
              success = false;
            }
            break;
        }

        if (success) {
          await interaction.reply({ embeds: [embed] });
        } else {
          await interaction.reply({
            content: `You don't own this rod!`,
            ephemeral: true,
          });
        }
      } else {
        await interaction.reply({
          content: `You already have this rod equipped!`,
          ephemeral: true,
        });
      }
    } else {
      await interaction.reply({
        content:
          "That rod does not exist! Valid rods: `common, exquisite, precious, luxurious, divine`.",
        ephemeral: true,
      });
    }
  },
};
