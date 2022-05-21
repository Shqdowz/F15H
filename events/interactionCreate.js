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

    if (userProfile.commandCounter >= 25) {
      if (Math.ceil(Math.random() * 10) == 10) {
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { needVerify: (userProfile.needVerify = true) }
        );

        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { firstInt: (userProfile.firstInt = true) }
        );

        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { commandCounter: (userProfile.commandCounter = 0) }
        );
      }
    }

    if (userProfile.wrongCodeCounter >= 5) {
      const guild = client.guilds.cache.get("937018874572972112");
      const channel = "976933257583144980";

      const logEmbed = new MessageEmbed()
        .setTitle("Blacklist")
        .setDescription(
          `${interaction.user} (${interaction.user.id}) got auto-blacklisted by the anti-afk system.`
        )
        .setColor("#000000")
        .setTimestamp();

      await guild.channels.cache.get(channel).send({
        embeds: [logEmbed],
      });

      await User.findOneAndUpdate(
        { _id: userProfile._id },
        { isBlacklisted: (userProfile.isBlacklisted = true) }
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
          `Go fishing for animals, sell them for Fish Coins, take them into battles against other users, upgrade them and compete on the global leaderboards!\n\nHere are a few commands to get you started:\n- \`/help\` - Displays the help pages\n- \`/fish\` - Fish with your fishing rod\n- \`/inventory\` - Displays your inventory\n\nDisclaimer: progress will most likely be reset after the closed beta testing period. As compensation, users who have joined the official \`/discord\` server before global launch will be rewarded some rewards as a headstart :)\n\nI hope you will have a great time with F15H. As a welcome gift, here's a gift code! -> \`F15Hlaunch\``
        )
        .setFooter({ text: "- Shqdowz#2521" })
        .setColor("#ADD8E6");

      await interaction.reply({ embeds: [embed], ephemeral: true });

      await User.findOneAndUpdate(
        { _id: userProfile._id },
        { firstTime: (userProfile.firstTime = false) }
      );
    } else if (userProfile.needVerify) {
      if (userProfile.firstInt) {
        const code = `${Math.floor(Math.random() * 9)}${Math.floor(
          Math.random() * 9
        )}${Math.floor(Math.random() * 9)}${Math.floor(
          Math.random() * 9
        )}${Math.floor(Math.random() * 9)}`;

        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { verifyCode: (userProfile.verifyCode = code) }
        );

        await interaction.reply({
          content: `Please /v (verify) the following code to prove you aren't afk: \`${code}\``,
          ephemeral: true,
        });
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { firstInt: (userProfile.firstInt = false) }
        );
      } else if (interaction.commandName != "v" && !userProfile.firstInt) {
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { wrongCodeCounter: (userProfile.wrongCodeCounter += 1) }
        );
        if (userProfile.wrongCodeCounter < 5) {
          await interaction.reply({
            content: `Wrong code! /v (verify) your code to prove you aren't afk: \`${userProfile.verifyCode}\``,
            ephemeral: true,
          });
        } else {
          await interaction.reply({
            content: `You have been auto blacklisted from the bot due to too many wrong codes!`,
            ephemeral: true,
          });
        }
      } else {
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
    } else {
      if (cooldowns.includes(interaction.user.id)) {
        await interaction.reply({
          content: `You are currently on cooldown!`,
          ephemeral: true,
        });
      } else {
        cooldowns.push(interaction.user.id);
        setTimeout(() => {
          cooldowns.shift();
        }, 2000);

        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { commandCounter: (userProfile.commandCounter += 1) }
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
            { neededExperience: (userProfile.neededExperience += 250) }
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
