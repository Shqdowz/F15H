const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const User = require("../../schemas/user");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lifetime")
    .setDescription("Displays your lifetime caught fish")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user of who to view the lifetime caught fish")
        .setRequired(false)
    ),
  async execute(interaction, client) {
    let user = interaction.options.getUser("user")
      ? interaction.options.getUser("user")
      : interaction.user;

    const userProfile = await client.createUser(user);

    const lifetime = new MessageEmbed()
      .setTitle(`${user.tag}'s lifetime caught fish`)
      .addFields(
        {
          name: "Common Fish",
          value: `Cod: ${userProfile.totalCod}\nHerring: ${userProfile.totalHerring}\nPufferfish: ${userProfile.totalPufferfish}\nSalmon: ${userProfile.totalSalmon}\n:shrimp: Shrimp: ${userProfile.totalShrimp}`,
          inline: true,
        },
        {
          name: "Uncommon Fish",
          value: `Butterfish: ${userProfile.totalButterfish}\nClownfish: ${userProfile.totalClownfish}\n:duck: Duck: ${userProfile.totalDuck}\n:penguin: Penguin: ${userProfile.totalPenguin}\n:squid: Squid: ${userProfile.totalSquid}`,
          inline: true,
        },
        {
          name: "Rare Fish",
          value: `:crab: Crab: ${userProfile.totalCrab}\nOrca: ${userProfile.totalOrca}\n:otter: Otter: ${userProfile.totalOtter}\n:shark: Shark: ${userProfile.totalShark}\n:whale: Whale: ${userProfile.totalWhale}`,
          inline: true,
        },
        {
          name: "Epic Fish",
          value: `Jellyfish: ${userProfile.totalJellyfish}\n:octopus: Octopus: ${userProfile.totalOctopus}\nSeahorse: ${userProfile.totalSeahorse}\n:seal: Seal: ${userProfile.totalSeal}\nWalrus: ${userProfile.totalWalrus}`,
          inline: true,
        },
        {
          name: "Mythic Fish",
          value: `Coral: ${userProfile.totalCoral}\n:crocodile: Crocodile: ${userProfile.totalCrocodile}\n:flamingo: Flamingo: ${userProfile.totalFlamingo}\nManatee: ${userProfile.totalManatee}\n:turtle: Turtle: ${userProfile.totalTurtle}`,
          inline: true,
        },
        {
          name: "Legendary Fish",
          value: `Blobfish: ${userProfile.totalBlobfish}\nCatfish: ${userProfile.totalCatfish}\n:dolphin: Dolphin: ${userProfile.totalDolphin}\nMermaid: ${userProfile.totalMermaid}\nStarfish: ${userProfile.totalStarfish}`,
          inline: true,
        }
      )
      .setFooter({ text: `Requested by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    await interaction.reply({
      content: `${interaction.user}`,
      embeds: [lifetime],
    });
  },
};
