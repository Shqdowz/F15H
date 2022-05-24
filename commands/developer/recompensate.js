const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

const commonFish = ["cod", "herring", "pufferfish", "salmon", "shrimp"];
const uncommonFish = ["butterfish", "clownfish", "duck", "penguin", "squid"];
const rareFish = ["crab", "orca", "otter", "shark", "whale"];
const epicFish = ["jellyfish", "octopus", "seahorse", "seal", "walrus"];
const mythicFish = ["coral", "crocodile", "flamingo", "manatee", "turtle"];
const legendaryFish = ["blobfish", "catfish", "dolphin", "mermaid", "starfish"];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("recompensate")
    .setDescription("(DEV) Recompensate a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to recompensate")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("rarity")
        .setDescription("The rarity to recompensate")
        .setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName("amount")
        .setDescription("The amount to recompensate")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    if (interaction.user.id === "856545083310604308") {
      const user = interaction.options.getUser("user");
      const rarity = interaction.options.getString("rarity").toLowerCase();
      const amount = interaction.options.getNumber("amount");

      const userProfile = await client.createUser(user);

      if (
        rarity == "common" ||
        rarity == "uncommon" ||
        rarity == "rare" ||
        rarity == "epic" ||
        rarity == "mythic" ||
        rarity == "legendary"
      ) {
        if (amount <= 32) {
          switch (rarity) {
            case "common":
              for (let i = 0; i < amount; i++) {
                const random = Math.floor(Math.random() * 5);
                const fish = commonFish[random];
                const fishLevel = `${fish}Level`;
                const fishName = fish.charAt(0).toUpperCase() + fish.slice(1);
                const totalFish = `total${fishName}`;

                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { [fish]: (userProfile[fish] += 1) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { [totalFish]: (userProfile[totalFish] += 1) }
                );

                if (userProfile[fishLevel] == 0) {
                  await User.findOneAndUpdate(
                    { _id: userProfile._id },
                    { [fishLevel]: (userProfile[fishLevel] = 1) }
                  );
                }
              }
              break;
            case "uncommon":
              for (let i = 0; i < amount; i++) {
                const random = Math.floor(Math.random() * 5);
                const fish = uncommonFish[random];
                const fishLevel = `${fish}Level`;
                const fishName = fish.charAt(0).toUpperCase() + fish.slice(1);
                const totalFish = `total${fishName}`;

                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { [fish]: (userProfile[fish] += 1) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { [totalFish]: (userProfile[totalFish] += 1) }
                );

                if (userProfile[fishLevel] == 0) {
                  await User.findOneAndUpdate(
                    { _id: userProfile._id },
                    { [fishLevel]: (userProfile[fishLevel] = 1) }
                  );
                }
              }
              break;
            case "rare":
              for (let i = 0; i < amount; i++) {
                const random = Math.floor(Math.random() * 5);
                const fish = rareFish[random];
                const fishLevel = `${fish}Level`;
                const fishName = fish.charAt(0).toUpperCase() + fish.slice(1);
                const totalFish = `total${fishName}`;

                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { [fish]: (userProfile[fish] += 1) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { [totalFish]: (userProfile[totalFish] += 1) }
                );

                if (userProfile[fishLevel] == 0) {
                  await User.findOneAndUpdate(
                    { _id: userProfile._id },
                    { [fishLevel]: (userProfile[fishLevel] = 1) }
                  );
                }
              }
              break;
            case "epic":
              for (let i = 0; i < amount; i++) {
                const random = Math.floor(Math.random() * 5);
                const fish = epicFish[random];
                const fishLevel = `${fish}Level`;
                const fishName = fish.charAt(0).toUpperCase() + fish.slice(1);
                const totalFish = `total${fishName}`;

                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { [fish]: (userProfile[fish] += 1) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { [totalFish]: (userProfile[totalFish] += 1) }
                );

                if (userProfile[fishLevel] == 0) {
                  await User.findOneAndUpdate(
                    { _id: userProfile._id },
                    { [fishLevel]: (userProfile[fishLevel] = 1) }
                  );
                }
              }
              break;
            case "mythic":
              for (let i = 0; i < amount; i++) {
                const random = Math.floor(Math.random() * 5);
                const fish = mythicFish[random];
                const fishLevel = `${fish}Level`;
                const fishName = fish.charAt(0).toUpperCase() + fish.slice(1);
                const totalFish = `total${fishName}`;

                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { [fish]: (userProfile[fish] += 1) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { [totalFish]: (userProfile[totalFish] += 1) }
                );

                if (userProfile[fishLevel] == 0) {
                  await User.findOneAndUpdate(
                    { _id: userProfile._id },
                    { [fishLevel]: (userProfile[fishLevel] = 1) }
                  );
                }
              }
              break;
            case "legendary":
              for (let i = 0; i < amount; i++) {
                const random = Math.floor(Math.random() * 5);
                const fish = legendaryFish[random];
                const fishLevel = `${fish}Level`;
                const fishName = fish.charAt(0).toUpperCase() + fish.slice(1);
                const totalFish = `total${fishName}`;

                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { [fish]: (userProfile[fish] += 1) }
                );
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  { [totalFish]: (userProfile[totalFish] += 1) }
                );

                if (userProfile[fishLevel] == 0) {
                  await User.findOneAndUpdate(
                    { _id: userProfile._id },
                    { [fishLevel]: (userProfile[fishLevel] = 1) }
                  );
                }
              }
              break;
          }

          await interaction.reply({
            content: `Given ${amount} random ${rarity} fish to ${user.tag}!`,
            ephemeral: true,
          });
        } else {
          await interaction.reply({
            content: `No values above 32!`,
            ephemeral: true,
          });
        }
      } else {
        await interaction.reply({
          content: `Invalid rarity!`,
          ephemeral: true,
        });
      }
    } else {
      await interaction.reply({
        content: `You are not allowed to use this command!`,
        ephemeral: true,
      });
    }
  },
};
