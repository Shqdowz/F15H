// Compacting?

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

let error, amountShort;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("upgrade")
    .setDescription("Upgrade a fish")
    .addStringOption((option) =>
      option
        .setName("fish")
        .setDescription("The fish to upgrade")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    // Option

    const fish = interaction.options.getString("fish").toLowerCase();

    // Initialization

    const userProfile = await client.createUser(interaction.member);

    const fishName = fish.charAt(0).toUpperCase() + fish.slice(1);
    const fishLevel = `${fish}Level`;

    // Embed

    const upgrade = new MessageEmbed()
      .setTitle("Upgrade successful!")
      .setDescription(
        `You upgraded your ${fishName} to level ${userProfile[fishLevel] + 1}!`
      )
      .setFooter({ text: `Performed by ${interaction.user.tag}` })
      .setColor("#ADD8E6")
      .setTimestamp();

    // Code

    switch (fish) {
      case "cod":
      case "herring":
      case "pufferfish":
      case "salmon":
      case "shrimp":
        switch (userProfile[fishLevel]) {
          case 0:
            error = "!obtained";
            break;
          case 1:
            if (userProfile[fish] >= 64) {
              if (userProfile.fishCoins >= 125) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 125),
                    [fishLevel]: (userProfile[fishLevel] = 2),
                    [fish]: (userProfile[fish] -= 64),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 125 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 64 - userProfile[fish];
            }
            break;
          case 2:
            if (userProfile[fish] >= 128) {
              if (userProfile.fishCoins >= 250) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 250),
                    [fishLevel]: (userProfile[fishLevel] = 3),
                    [fish]: (userProfile[fish] -= 128),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 250 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 128 - userProfile[fish];
            }
            break;
          case 3:
            if (userProfile[fish] >= 256) {
              if (userProfile.fishCoins >= 500) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 500),
                    [fishLevel]: (userProfile[fishLevel] = 4),
                    [fish]: (userProfile[fish] -= 256),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 500 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 256 - userProfile[fish];
            }
            break;
          case 4:
            if (userProfile[fish] >= 512) {
              if (userProfile.fishCoins >= 1000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 1000),
                    [fishLevel]: (userProfile[fishLevel] = 5),
                    [fish]: (userProfile[fish] -= 512),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 1000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 512 - userProfile[fish];
            }
            break;
          case 5:
            error = "max";
            break;
        }
        break;
      case "butterfish":
      case "clownfish":
      case "duck":
      case "penguin":
      case "squid":
        switch (userProfile[fishLevel]) {
          case 0:
            error = "!obtained";
            break;
          case 1:
            if (userProfile[fish] >= 32) {
              if (userProfile.fishCoins >= 250) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 250),
                    [fishLevel]: (userProfile[fishLevel] = 2),
                    [fish]: (userProfile[fish] -= 32),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 250 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 32 - userProfile[fish];
            }
            break;
          case 2:
            if (userProfile[fish] >= 64) {
              if (userProfile.fishCoins >= 500) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 500),
                    [fishLevel]: (userProfile[fishLevel] = 3),
                    [fish]: (userProfile[fish] -= 64),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 500 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 64 - userProfile[fish];
            }
            break;
          case 3:
            if (userProfile[fish] >= 128) {
              if (userProfile.fishCoins >= 1000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 1000),
                    [fishLevel]: (userProfile[fishLevel] = 4),
                    [fish]: (userProfile[fish] -= 128),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 1000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 128 - userProfile[fish];
            }
            break;
          case 4:
            if (userProfile[fish] >= 256) {
              if (userProfile.fishCoins >= 2000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 2000),
                    [fishLevel]: (userProfile[fishLevel] = 5),
                    [fish]: (userProfile[fish] -= 256),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 2000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 256 - userProfile[fish];
            }
            break;
          case 5:
            error = "max";
            break;
        }
        break;
      case "crab":
      case "orca":
      case "otter":
      case "shark":
      case "whale":
        switch (userProfile[fishLevel]) {
          case 0:
            error = "!obtained";
            break;
          case 1:
            if (userProfile[fish] >= 16) {
              if (userProfile.fishCoins >= 500) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 500),
                    [fishLevel]: (userProfile[fishLevel] = 2),
                    [fish]: (userProfile[fish] -= 16),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 500 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 16 - userProfile[fish];
            }
            break;
          case 2:
            if (userProfile[fish] >= 32) {
              if (userProfile.fishCoins >= 1000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 1000),
                    [fishLevel]: (userProfile[fishLevel] = 3),
                    [fish]: (userProfile[fish] -= 32),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 1000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 32 - userProfile[fish];
            }
            break;
          case 3:
            if (userProfile[fish] >= 64) {
              if (userProfile.fishCoins >= 2000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 2000),
                    [fishLevel]: (userProfile[fishLevel] = 4),
                    [fish]: (userProfile[fish] -= 64),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 2000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 64 - userProfile[fish];
            }
            break;
          case 4:
            if (userProfile[fish] >= 128) {
              if (userProfile.fishCoins >= 4000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 4000),
                    [fishLevel]: (userProfile[fishLevel] = 5),
                    [fish]: (userProfile[fish] -= 128),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 4000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 128 - userProfile[fish];
            }
            break;
          case 5:
            error = "max";
            break;
        }
        break;
      case "jellyfish":
      case "octopus":
      case "seahorse":
      case "seal":
      case "walrus":
        switch (userProfile[fishLevel]) {
          case 0:
            error = "!obtained";
            break;
          case 1:
            if (userProfile[fish] >= 8) {
              if (userProfile.fishCoins >= 1000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 1000),
                    [fishLevel]: (userProfile[fishLevel] = 2),
                    [fish]: (userProfile[fish] -= 8),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 1000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 8 - userProfile[fish];
            }
            break;
          case 2:
            if (userProfile[fish] >= 16) {
              if (userProfile.fishCoins >= 2000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 2000),
                    [fishLevel]: (userProfile[fishLevel] = 3),
                    [fish]: (userProfile[fish] -= 16),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 2000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 16 - userProfile[fish];
            }
            break;
          case 3:
            if (userProfile[fish] >= 32) {
              if (userProfile.fishCoins >= 4000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 4000),
                    [fishLevel]: (userProfile[fishLevel] = 4),
                    [fish]: (userProfile[fish] -= 32),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 4000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 32 - userProfile[fish];
            }
            break;
          case 4:
            if (userProfile[fish] >= 64) {
              if (userProfile.fishCoins >= 8000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 8000),
                    [fishLevel]: (userProfile[fishLevel] = 5),
                    [fish]: (userProfile[fish] -= 64),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 8000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 64 - userProfile[fish];
            }
            break;
          case 5:
            error = "max";
            break;
        }
        break;
      case "coral":
      case "crocodile":
      case "flamingo":
      case "manatee":
      case "turtle":
        switch (userProfile[fishLevel]) {
          case 0:
            error = "!obtained";
            break;
          case 1:
            if (userProfile[fish] >= 4) {
              if (userProfile.fishCoins >= 2000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 2000),
                    [fishLevel]: (userProfile[fishLevel] = 2),
                    [fish]: (userProfile[fish] -= 4),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 2000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 4 - userProfile[fish];
            }
            break;
          case 2:
            if (userProfile[fish] >= 8) {
              if (userProfile.fishCoins >= 4000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 4000),
                    [fishLevel]: (userProfile[fishLevel] = 3),
                    [fish]: (userProfile[fish] -= 8),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 4000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 8 - userProfile[fish];
            }
            break;
          case 3:
            if (userProfile[fish] >= 16) {
              if (userProfile.fishCoins >= 8000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 8000),
                    [fishLevel]: (userProfile[fishLevel] = 4),
                    [fish]: (userProfile[fish] -= 16),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 8000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 16 - userProfile[fish];
            }
            break;
          case 4:
            if (userProfile[fish] >= 32) {
              if (userProfile.fishCoins >= 16000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 16000),
                    [fishLevel]: (userProfile[fishLevel] = 5),
                    [fish]: (userProfile[fish] -= 32),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 16000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 32 - userProfile[fish];
            }
            break;
          case 5:
            error = "max";
            break;
        }
        break;
      case "blobfish":
      case "catfish":
      case "dolphin":
      case "mermaid":
      case "starfish":
        switch (userProfile[fishLevel]) {
          case 0:
            error = "!obtained";
            break;
          case 1:
            if (userProfile[fish] >= 2) {
              if (userProfile.fishCoins >= 4000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 4000),
                    [fishLevel]: (userProfile[fishLevel] = 2),
                    [fish]: (userProfile[fish] -= 2),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 4000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 2 - userProfile[fish];
            }
            break;
          case 2:
            if (userProfile[fish] >= 4) {
              if (userProfile.fishCoins >= 8000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 8000),
                    [fishLevel]: (userProfile[fishLevel] = 3),
                    [fish]: (userProfile[fish] -= 4),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 8000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 4 - userProfile[fish];
            }
            break;
          case 3:
            if (userProfile[fish] >= 8) {
              if (userProfile.fishCoins >= 16000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 16000),
                    [fishLevel]: (userProfile[fishLevel] = 4),
                    [fish]: (userProfile[fish] -= 8),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 16000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 8 - userProfile[fish];
            }
            break;
          case 4:
            if (userProfile[fish] >= 16) {
              if (userProfile.fishCoins >= 32000) {
                await User.findOneAndUpdate(
                  { _id: userProfile._id },
                  {
                    fishCoins: (userProfile.fishCoins -= 32000),
                    [fishLevel]: (userProfile[fishLevel] = 5),
                    [fish]: (userProfile[fish] -= 16),
                  }
                );

                error = "none";
              } else {
                error = "!enoughCoins";
                amountShort = 32000 - userProfile.fishCoins;
              }
            } else {
              error = "!enoughFish";
              amountShort = 16 - userProfile[fish];
            }
            break;
          case 5:
            error = "max";
            break;
        }
        break;
      default:
        error = "!exist";
        break;
    }

    if (error == "!exist") {
      await interaction.reply({
        content: `Invalid fish! Valid fish: check your inventory.`,
        ephemeral: true,
      });
    } else if (error == "none") {
      await interaction.reply({
        content: `${interaction.user}`,
        embeds: [upgrade],
      });
    } else if (error == "max") {
      await interaction.reply({
        content: `You already have your ${fishName} at the max level!`,
        ephemeral: true,
      });
    } else if (error == "!obtained") {
      await interaction.reply({
        content: `You haven't unlocked the ${fishName} fish yet!`,
        ephemeral: true,
      });
    } else if (error == "!enoughFish") {
      await interaction.reply({
        content: `You need ${amountShort} more ${fishName}(s) to upgrade your ${fishName} to level ${
          userProfile[fishLevel] + 1
        }!`,
        ephemeral: true,
      });
    } else if (error == "!enoughCoins") {
      await interaction.reply({
        content: `You need ${amountShort} more Fish Coins to upgrade your ${fishName} to level ${
          userProfile[fishLevel] + 1
        }!`,
        ephemeral: true,
      });
    }
  },
};
