const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("(DEV) Test an output"),
  async execute(interaction, client) {
    if (interaction.user.id === "856545083310604308") {
      const guilds = client.guilds.cache.map((guild) => guild.name);
      interaction.reply({
        content: `${guilds}`,
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: `You are not allowed to use this command!`,
        ephemeral: true,
      });
    }
  },
};
