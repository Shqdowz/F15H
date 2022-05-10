module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    const statusArray = [
      {
        type: "COMPETING",
        content: "fish fights ⚔️",
      },
      {
        type: "LISTENING",
        content: `${client.guilds.cache.reduce(
          (acc, guild) => acc + guild.memberCount,
          0
        )} users 👂`,
      },
      {
        type: "PLAYING",
        content: "type /help 🐟",
      },
      {
        type: "WATCHING",
        content: "fish getting reeled in 🎣",
      },
      {
        type: "WATCHING",
        content: `${client.guilds.cache.size} servers 👀`,
      },
    ];

    async function pickPresence() {
      const option = Math.floor(Math.random() * statusArray.length);

      try {
        await client.user.setPresence({
          activities: [
            {
              name: statusArray[option].content,
              type: statusArray[option].type,
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    }

    setInterval(pickPresence, 10000);

    console.log(`Logged in as ${client.user.tag}!`);
  },
};
