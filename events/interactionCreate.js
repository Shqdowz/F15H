const { MessageEmbed } = require("discord.js");
const User = require("../schemas/user");

let embed;
const cooldowns = [];

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isCommand()) return;
    if (!interaction.guild) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    const userProfile = await client.createUser(interaction.member);

    if (userProfile.userTag != interaction.user.tag) {
      await User.findOneAndUpdate(
        { _id: userProfile._id },
        { userTag: interaction.user.tag }
      );
    }

    if (userProfile.isBlacklisted) {
      await interaction.reply({
        content: `You have been blacklisted from using the bot!`,
        ephemeral: true,
      });
    } else if (userProfile.firstTime) {
      const embed = new MessageEmbed()
        .setTitle(`Welcome to the world of F15H!`)
        .setDescription(
          `Here are a few commands to get you started:\n- \`/help\` - Displays the help pages\n- \`/fish\` - Fish with your fishing rod\n- \`/inventory\` - Displays your inventory\n\nDisclaimer: progress might be reset after the closed beta testing period -> fully depends on how this period goes. If so, beta testers will be rewarded some rewards on the global release as recompensation :)\n\nAs a welcome gift, here's a gift code! -> \`F15Hlaunch\`\n\nI hope you will have a great time using F15H!`
        )
        .setFooter({ text: "- Shqdowz" })
        .setColor("#ADD8E6");

      await interaction.reply({ embeds: [embed], ephemeral: true });

      await User.findOneAndUpdate(
        { _id: userProfile._id },
        { firstTime: (userProfile.firstTime = false) }
      );
    } else {
      if (cooldowns.includes(interaction.user.id)) {
        await interaction.reply({
          content: `You are currently on cooldown!`,
          ephemeral: true,
        });
      } else {
        cooldowns.push(interaction.user.id);
        setTimeout(() => {
          cooldowns.shift(0);
        }, 3000);

        const xp = Math.ceil(Math.random() * 10);
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { experience: (userProfile.experience += xp) }
        );

        if (userProfile.experience > userProfile.neededExperience) {
          embed = new MessageEmbed()
            .setTitle("Level up!")
            .setDescription(
              `Congratulations ${interaction.user.tag}, you advanced to level ${
                userProfile.level + 1
              }!`
            )
            .setColor("#ADD8E6")
            .setTimestamp();

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            {
              experience: (userProfile.experience -=
                userProfile.neededExperience),
            }
          );
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { level: (userProfile.level += 1) }
          );
          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { neededExperience: (userProfile.neededExperience += 50) }
          );

          await interaction.channel.send({
            content: `<@${interaction.user.id}>`,
            embeds: [embed],
          });
        }

        try {
          await command.execute(interaction, client);
        } catch (error) {
          console.error(error);
          await interaction.reply({
            content: "There was an error while executing this command!",
            ephemeral: true,
          });
        }
      }
    }
  },
};
