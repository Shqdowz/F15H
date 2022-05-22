// Compacting?

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

let message, success;

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
            success = "!obtained";
            break;
          case 1:
            if (userProfile[fish] >= 64) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 2) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 64) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 2:
            if (userProfile[fish] >= 128) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 3) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 128) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 3:
            if (userProfile[fish] >= 256) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 4) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 256) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 4:
            if (userProfile[fish] >= 512) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 5) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 512) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 5:
            success = "max";
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
            success = "!obtained";
            break;
          case 1:
            if (userProfile[fish] >= 32) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 2) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 32) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 2:
            if (userProfile[fish] >= 64) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 3) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 64) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 3:
            if (userProfile[fish] >= 128) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 4) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 128) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 4:
            if (userProfile[fish] >= 256) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 5) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 256) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 5:
            success = "max";
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
            success = "!obtained";
            break;
          case 1:
            if (userProfile[fish] >= 16) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 2) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 16) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 2:
            if (userProfile[fish] >= 32) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 3) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 32) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 3:
            if (userProfile[fish] >= 64) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 4) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 64) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 4:
            if (userProfile[fish] >= 128) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 5) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 128) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 5:
            success = "max";
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
            success = "!obtained";
            break;
          case 1:
            if (userProfile[fish] >= 8) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 2) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 8) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 2:
            if (userProfile[fish] >= 16) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 3) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 16) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 3:
            if (userProfile[fish] >= 32) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 4) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 32) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 4:
            if (userProfile[fish] >= 64) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 5) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 64) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 5:
            success = "max";
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
            success = "!obtained";
            break;
          case 1:
            if (userProfile[fish] >= 4) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 2) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 4) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 2:
            if (userProfile[fish] >= 8) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 3) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 8) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 3:
            if (userProfile[fish] >= 16) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 4) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 16) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 4:
            if (userProfile[fish] >= 32) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 5) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 32) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 5:
            success = "max";
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
            success = "!obtained";
            break;
          case 1:
            if (userProfile[fish] >= 2) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 2) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 2) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 2:
            if (userProfile[fish] >= 4) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 3) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 4) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 3:
            if (userProfile[fish] >= 8) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 4) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 8) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 4:
            if (userProfile[fish] >= 16) {
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fishLevel]: (userProfile[fishLevel] = 5) }
              );
              await User.findOneAndUpdate(
                { _id: userProfile._id },
                { [fish]: (userProfile[fish] -= 16) }
              );

              success = true;
            } else {
              success = "!enough";
            }
            break;
          case 5:
            success = "max";
            break;
        }
        break;
      default:
        success = "!exist";
        break;
    }

    if (success == "!exist") {
      await interaction.reply({
        content: `Invalid fish! Valid fish: check your inventory.`,
        ephemeral: true,
      });
    } else if (success == true) {
      await interaction.reply({
        content: `${interaction.user}`,
        embeds: [upgrade],
      });
    } else if (success == "max") {
      await interaction.reply({
        content: `You already have this fish at the max level!`,
        ephemeral: true,
      });
    } else if (success == "!obtained") {
      await interaction.reply({
        content: `You haven't unlocked this fish yet!`,
        ephemeral: true,
      });
    } else if (success == "!enough") {
      await interaction.reply({
        content: `You don't have enough ${fishName} to upgrade it to the next level!`,
        ephemeral: true,
      });
    }
  },
};
