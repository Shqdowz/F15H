const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

let top, embed;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("leaderboard")
    .setDescription("Displays the leaderboard")
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("The category to view")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const category = interaction.options.getString("category").toLowerCase();
    switch (category) {
      case "coins":
        top = await User.find({}).sort({ fishCoins: -1 });

        for (let obj of top) {
          if (obj.userId == interaction.user.id) {
            const userIndex = top.indexOf(obj) + 1;

            embed = new MessageEmbed()
              .setTitle("Fish Coins leaderboard")
              .setDescription(
                `1. ${top[0].userTag} - ${top[0].fishCoins} <:FishCoin:937423381756772364>\n2. ${top[1].userTag} - ${top[1].fishCoins} <:FishCoin:937423381756772364>\n3. ${top[2].userTag} - ${top[2].fishCoins} <:FishCoin:937423381756772364>\n4. ${top[3].userTag} - ${top[3].fishCoins} <:FishCoin:937423381756772364>\n5. ${top[4].userTag} - ${top[4].fishCoins} <:FishCoin:937423381756772364>\n6. ${top[5].userTag} - ${top[5].fishCoins} <:FishCoin:937423381756772364>\n7. ${top[6].userTag} - ${top[6].fishCoins} <:FishCoin:937423381756772364>\n8. ${top[7].userTag} - ${top[7].fishCoins} <:FishCoin:937423381756772364>\n9. ${top[8].userTag} - ${top[8].fishCoins} <:FishCoin:937423381756772364>\n10. ${top[9].userTag} - ${top[9].fishCoins} <:FishCoin:937423381756772364>`
              )
              .setFooter({
                text: `Your position: #${userIndex} | Requested by ${interaction.user.tag}`,
              })
              .setColor("#ADD8E6")
              .setTimestamp();
          }
        }
        break;
      case "crystals":
        top = await User.find({}).sort({ fishCrystals: -1 });

        for (let obj of top) {
          if (obj.userId == interaction.user.id) {
            const userIndex = top.indexOf(obj) + 1;

            embed = new MessageEmbed()
              .setTitle("Fish Crystals leaderboard")
              .setDescription(
                `1. ${top[0].userTag} - ${top[0].fishCrystals}\n2. ${top[1].userTag} - ${top[1].fishCrystals}\n3. ${top[2].userTag} - ${top[2].fishCrystals}\n4. ${top[3].userTag} - ${top[3].fishCrystals}\n5. ${top[4].userTag} - ${top[4].fishCrystals}\n6. ${top[5].userTag} - ${top[5].fishCrystals}\n7. ${top[6].userTag} - ${top[6].fishCrystals}\n8. ${top[7].userTag} - ${top[7].fishCrystals}\n9. ${top[8].userTag} - ${top[8].fishCrystals}\n10. ${top[9].userTag} - ${top[9].fishCrystals}`
              )
              .setFooter({
                text: `Your position: #${userIndex} | Requested by ${interaction.user.tag}`,
              })
              .setColor("#ADD8E6")
              .setTimestamp();
          }
        }
        break;
      case "level":
        top = await User.find({}).sort({ level: -1, experience: -1 });

        for (let obj of top) {
          if (obj.userId == interaction.user.id) {
            const userIndex = top.indexOf(obj) + 1;

            embed = new MessageEmbed()
              .setTitle("Level leaderboard")
              .setDescription(
                `1. ${top[0].userTag} - Level: ${top[0].level}, experience: ${top[0].experience}\n2. ${top[1].userTag} - Level: ${top[1].level}, experience: ${top[1].experience}\n3. ${top[2].userTag} - Level: ${top[2].level}, experience: ${top[2].experience}\n4. ${top[3].userTag} - Level: ${top[3].level}, experience: ${top[3].experience}\n5. ${top[4].userTag} - Level: ${top[4].level}, experience: ${top[4].experience}\n6. ${top[5].userTag} - Level: ${top[5].level}, experience: ${top[5].experience}\n7. ${top[6].userTag} - Level: ${top[6].level}, experience: ${top[6].experience}\n8. ${top[7].userTag} - Level: ${top[7].level}, experience: ${top[7].experience}\n9. ${top[8].userTag} - Level: ${top[8].level}, experience: ${top[8].experience}\n10. ${top[9].userTag} - Level: ${top[9].level}, experience: ${top[9].experience}`
              )
              .setFooter({
                text: `Your position: #${userIndex} | Requested by ${interaction.user.tag}`,
              })
              .setColor("#ADD8E6")
              .setTimestamp();
          }
        }
        break;
      default:
        try {
          await interaction.reply({
            content: `Invalid category! Valid categories: \`coins, crystals, level\`.`,
            ephemeral: true,
          });
        } catch (err) {}
    }
    try {
      await interaction.reply({
        content: `${interaction.user}`,
        embeds: [embed],
      });
    } catch (err) {
      console.log(err);
    }
  },
};
