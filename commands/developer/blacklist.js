const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("blacklist")
    .setDescription("(DEV) Blacklist a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The userID to blacklist")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("The reason for the blacklist")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    if (interaction.user.id === "856545083310604308") {
      const user = interaction.options.getUser("user");
      const reason = interaction.options.getString("reason");

      const guild = client.guilds.cache.get("937018874572972112");
      const channel = "976933257583144980";

      const userProfile = await client.createUser(user);

      const logEmbed = new MessageEmbed()
        .setTitle("Blacklist")
        .setDescription(
          `Developer ${interaction.user.tag} blacklisted ${user} (${user.id}) for: ${reason}.`
        )
        .setColor("#000000")
        .setTimestamp();
      const confirmationEmbed = new MessageEmbed()
        .setTitle(`Blacklist successful!`)
        .setDescription(`Blacklisted ${user} (${user.id}) for: ${reason}`)
        .setColor("#ADD8E6")
        .setTimestamp();

      await guild.channels.cache.get(channel).send({
        embeds: [logEmbed],
      });
      await interaction.reply({
        embeds: [confirmationEmbed],
        ephemeral: true,
      });

      await User.findOneAndUpdate(
        { _id: userProfile._id },
        { isBlacklisted: (userProfile.isBlacklisted = true) }
      );
    } else {
      await interaction.reply({
        content: `You are not allowed to use this command!`,
        ephemeral: true,
      });
    }
  },
};
