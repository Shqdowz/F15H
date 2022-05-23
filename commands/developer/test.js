const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("(DEV) Test an output"),
  async execute(interaction, client) {
    if (interaction.user.id === "856545083310604308") {
      console.log(client.guilds.cache.map((guild) => guild.name));
    } else {
      await interaction.reply({
        content: `You are not allowed to use this command!`,
        ephemeral: true,
      });
    }
  },
};
