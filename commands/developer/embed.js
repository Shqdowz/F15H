// ✅ (except compacting)

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("(DEV) Send an embed")
    .addStringOption((option) =>
      option
        .setName("embed")
        .setDescription("The embed to send")
        .setRequired(true)
    )
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("The channel where to send the embed")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    if (interaction.user.id === "410448098326872064") {
      const embed = interaction.options.getString("embed").toLowerCase();
      const channel = interaction.options.getChannel("channel");

      const informationEmbed = new MessageEmbed()
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
        .setColor("#ADD8E6");

      const rulesEmbed = new MessageEmbed()
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
        .setColor("#ADD8E6");

      const updateLogEmbed = "";

      const staffRulesEmbed = "";

      const confirmationEmbed = new MessageEmbed()
        .setTitle(`Embed sent!`)
        .setDescription(`Sent the \`${embed}\` embed to ${channel}`)
        .setColor("#ADD8E6")
        .setTimestamp();

      switch (embed) {
        case "information":
          await channel.send({ embeds: [informationEmbed] });
          await interaction.reply({
            embeds: [confirmationEmbed],
            ephemeral: true,
          });
          break;
        case "rules":
          await channel.send({ embeds: [rulesEmbed] });
          await interaction.reply({
            embeds: [confirmationEmbed],
            ephemeral: true,
          });
          break;
        case "updatelog":
          await channel.send({ embeds: [updateLogEmbed] });
          await interaction.reply({
            embeds: [confirmationEmbed],
            ephemeral: true,
          });
          break;
        case "staffrules":
          await channel.send({ embeds: [staffRulesEmbed] });
          await interaction.reply({
            embeds: [confirmationEmbed],
            ephemeral: true,
          });
          break;
        default:
          interaction.reply({
            content: `That embed does not exist!`,
            ephemeral: true,
          });
          break;
      }
    } else {
      interaction.reply({
        content: `You are not allowed to use this command!`,
        ephemeral: true,
      });
    }
  },
};
