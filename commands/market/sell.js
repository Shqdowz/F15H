// Compacting

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

let embed;
const fish = [
  "cod",
  "herring",
  "pufferfish",
  "salmon",
  "shrimp",
  "butterfish",
  "clownfish",
  "duck",
  "penguin",
  "squid",
  "crab",
  "orca",
  "otter",
  "shark",
  "whale",
  "jellyfish",
  "octopus",
  "seahorse",
  "seal",
  "walrus",
  "coral",
  "crocodile",
  "flamingo",
  "manatee",
  "turtle",
  "blobfish",
  "catfish",
  "dolphin",
  "mermaid",
  "starfish",
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sell")
    .setDescription("Sell fish for Fish Coins")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("The type to sell")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("amount")
        .setDescription("The amount to sell")
        .setRequired(false)
    ),
  async execute(interaction, client) {
    // Database

    const userProfile = await client.createUser(interaction.member);

    // Options

    const type = interaction.options.getString("type").toLowerCase();
    let amount = interaction.options.getString("amount");

    // Initialization

    let coins =
      userProfile.cod +
      userProfile.herring +
      userProfile.pufferfish +
      userProfile.salmon +
      userProfile.shrimp +
      userProfile.butterfish * 4 +
      userProfile.clownfish * 4 +
      userProfile.duck * 4 +
      userProfile.penguin * 4 +
      userProfile.squid * 4 +
      userProfile.crab * 16 +
      userProfile.orca * 16 +
      userProfile.otter * 16 +
      userProfile.shark * 16 +
      userProfile.whale * 16 +
      userProfile.jellyfish * 64 +
      userProfile.octopus * 64 +
      userProfile.seahorse * 64 +
      userProfile.seal * 64 +
      userProfile.walrus * 64 +
      userProfile.coral * 256 +
      userProfile.crocodile * 256 +
      userProfile.flamingo * 256 +
      userProfile.manatee * 256 +
      userProfile.turtle * 256 +
      userProfile.blobfish * 1024 +
      userProfile.catfish * 1024 +
      userProfile.dolphin * 1024 +
      userProfile.mermaid * 1024 +
      userProfile.starfish * 1024;

    const typeName = type.charAt(0).toUpperCase() + type.slice(1);

    // Code

    if (coins > 0) {
      if (type === "all" && !amount) {
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          {
            fishCoins: (userProfile.fishCoins += coins),
            cod: (userProfile.cod = 0),
            herring: (userProfile.herring = 0),
            pufferfish: (userProfile.pufferfish = 0),
            salmon: (userProfile.salmon = 0),
            shrimp: (userProfile.shrimp = 0),
            butterfish: (userProfile.butterfish = 0),
            clownfish: (userProfile.clownfish = 0),
            duck: (userProfile.duck = 0),
            penguin: (userProfile.penguin = 0),
            squid: (userProfile.squid = 0),
            crab: (userProfile.crab = 0),
            orca: (userProfile.orca = 0),
            otter: (userProfile.otter = 0),
            shark: (userProfile.shark = 0),
            whale: (userProfile.whale = 0),
            jellyfish: (userProfile.jellyfish = 0),
            octopus: (userProfile.octopus = 0),
            seahorse: userProfile.seahorse,
            seal: (userProfile.seal = 0),
            walrus: (userProfile.walrus = 0),
            coral: (userProfile.coral = 0),
            crocodile: (userProfile.crocodile = 0),
            flamingo: (userProfile.flamingo = 0),
            manatee: (userProfile.manatee = 0),
            turtle: (userProfile.turtle = 0),
            blobfish: (userProfile.blobfish = 0),
            catfish: (userProfile.catfish = 0),
            dolphin: (userProfile.dolphin = 0),
            mermaid: (userProfile.mermaid = 0),
            starfish: (userProfile.starfish = 0),
          }
        );

        embed = new MessageEmbed()
          .setTitle("Sold succesfully!")
          .setDescription(
            `You sold all your fish for ${coins} <:FishCoin:937423381756772364>. You now have ${userProfile.fishCoins} <:FishCoin:937423381756772364>.`
          )
          .setFooter({ text: `Performed by ${interaction.user.tag}` })
          .setColor("#ADD8E6")
          .setTimestamp();
        try {
          await interaction.reply({
            content: `${interaction.user}`,
            embeds: [embed],
          });
        } catch (err) {}
      } else if (
        type === "common" ||
        type === "uncommon" ||
        type === "rare" ||
        type === "epic" ||
        type === "mythic" ||
        type === "legendary"
      ) {
        if (!amount) {
          switch (type) {
            case "common":
              coins =
                userProfile.cod +
                userProfile.herring +
                userProfile.pufferfish +
                userProfile.salmon +
                userProfile.shrimp;

              await User.findOneAndUpdate(
                { _id: userProfile._id },
                {
                  fishCoins: (userProfile.fishCoins += coins),
                  cod: (userProfile.cod = 0),
                  herring: (userProfile.herring = 0),
                  pufferfish: (userProfile.pufferfish = 0),
                  salmon: (userProfile.salmon = 0),
                  shrimp: (userProfile.shrimp = 0),
                }
              );
              break;
            case "uncommon":
              coins =
                userProfile.butterfish * 4 +
                userProfile.clownfish * 4 +
                userProfile.duck * 4 +
                userProfile.penguin * 4 +
                userProfile.squid * 4;

              await User.findOneAndUpdate(
                { _id: userProfile._id },
                {
                  fishCoins: (userProfile.fishCoins += coins),
                  butterfish: (userProfile.butterfish = 0),
                  clownfish: (userProfile.clownfish = 0),
                  duck: (userProfile.duck = 0),
                  penguin: (userProfile.penguin = 0),
                  squid: (userProfile.squid = 0),
                }
              );
              break;
            case "rare":
              coins =
                userProfile.crab * 16 +
                userProfile.orca * 16 +
                userProfile.otter * 16 +
                userProfile.shark * 16 +
                userProfile.whale * 16;

              await User.findOneAndUpdate(
                { _id: userProfile._id },
                {
                  fishCoins: (userProfile.fishCoins += coins),
                  crab: (userProfile.crab = 0),
                  orca: (userProfile.orca = 0),
                  otter: (userProfile.otter = 0),
                  shark: (userProfile.shark = 0),
                  whale: (userProfile.whale = 0),
                }
              );
              break;
            case "epic":
              coins =
                userProfile.jellyfish * 64 +
                userProfile.octopus * 64 +
                userProfile.seahorse * 64 +
                userProfile.seal * 64 +
                userProfile.walrus * 64;

              await User.findOneAndUpdate(
                { _id: userProfile._id },
                {
                  fishCoins: (userProfile.fishCoins += coins),
                  jellyfish: (userProfile.jellyfish = 0),
                  octopus: (userProfile.octopus = 0),
                  seahorse: (userProfile.seahorse = 0),
                  seal: (userProfile.seal = 0),
                  walrus: (userProfile.walrus = 0),
                }
              );
              break;
            case "mythic":
              coins =
                userProfile.coral * 256 +
                userProfile.crocodile * 256 +
                userProfile.flamingo * 256 +
                userProfile.manatee * 256 +
                userProfile.turtle * 256;

              await User.findOneAndUpdate(
                { _id: userProfile._id },
                {
                  fishCoins: (userProfile.fishCoins += coins),
                  coral: (userProfile.coral = 0),
                  crocodile: (userProfile.crocodile = 0),
                  flamingo: (userProfile.flamingo = 0),
                  manatee: (userProfile.manatee = 0),
                  turtle: (userProfile.turtle = 0),
                }
              );
              break;
            case "legendary":
              coins =
                userProfile.blobfish * 1024 +
                userProfile.catfish * 1024 +
                userProfile.dolphin * 1024 +
                userProfile.mermaid * 1024 +
                userProfile.starfish * 1024;

              await User.findOneAndUpdate(
                { _id: userProfile._id },
                {
                  fishCoins: (userProfile.fishCoins += coins),
                  blobfish: (userProfile.blobfish = 0),
                  catfish: (userProfile.catfish = 0),
                  dolphin: (userProfile.dolphin = 0),
                  mermaid: (userProfile.mermaid = 0),
                  starfish: (userProfile.starfish = 0),
                }
              );
              break;
          }

          if (coins > 0) {
            embed = new MessageEmbed()
              .setTitle("Sold succesfully!")
              .setDescription(
                `You sold all your ${type} fish for ${coins} <:FishCoin:937423381756772364>. You now have ${userProfile.fishCoins} <:FishCoin:937423381756772364>.`
              )
              .setFooter({ text: `Performed by ${interaction.user.tag}` })
              .setColor("#ADD8E6")
              .setTimestamp();
            await interaction.reply({
              content: `${interaction.user}`,
              embeds: [embed],
            });
          } else {
            await interaction.reply({
              content: `You don't have any ${type} fish left!`,
              ephemeral: true,
            });
          }
        } else {
          await interaction.reply({
            content: `You do not need to specify an amount!`,
            ephemeral: true,
          });
        }
      } else if (fish.includes(type)) {
        if (!amount || amount == "all") {
          amount = userProfile[type];
        } else {
          amount = parseInt(amount);
        }

        if (amount > userProfile[type]) {
          await interaction.reply({
            content: `You don't have that much ${typeName}!`,
            ephemeral: true,
          });
        } else if (amount <= 0 && userProfile[type] > 0) {
          await interaction.reply({
            content: `You can't sell less than 0!`,
            ephemeral: true,
          });
        } else if (amount <= 0) {
          await interaction.reply({
            content: `You don't have any ${typeName} left!`,
            ephemeral: true,
          });
        } else {
          switch (type) {
            case "cod":
            case "herring":
            case "pufferfish":
            case "salmon":
            case "shrimp":
              coins = amount;
              break;
            case "butterfish":
            case "clownfish":
            case "duck":
            case "penguin":
            case "squid":
              coins = amount * 4;
              break;
            case "crab":
            case "orca":
            case "otter":
            case "shark":
            case "whale":
              coins = amount * 16;
              break;
            case "jellyfish":
            case "octopus":
            case "seahorse":
            case "seal":
            case "walrus":
              coins = amount * 64;
              break;
            case "coral":
            case "crocodile":
            case "flamingo":
            case "manatee":
            case "turtle":
              coins = amount * 256;
              break;
            case "blobfish":
            case "catfish":
            case "dolphin":
            case "mermaid":
            case "starfish":
              coins = amount * 1024;
              break;
          }

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { fishCoins: (userProfile.fishCoins += coins) }
          );

          embed = new MessageEmbed()
            .setTitle("Sold succesfully!")
            .setDescription(
              `You sold ${amount} ${typeName} for ${coins} <:FishCoin:937423381756772364>. You now have ${userProfile.fishCoins} <:FishCoin:937423381756772364>.`
            )
            .setFooter({ text: `Performed by ${interaction.user.tag}` })
            .setColor("#ADD8E6")
            .setTimestamp();
          await interaction.reply({
            content: `${interaction.user}`,
            embeds: [embed],
          });

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { [type]: (userProfile[type] -= amount) }
          );
        }
      } else {
        await interaction.reply({
          content: `Invalid type! Valid types: \`all, <rarity> and <fish>.\``,
          ephemeral: true,
        });
      }
    } else {
      await interaction.reply({
        content: `You don't have any fish left to sell!`,
        ephemeral: true,
      });
    }
  },
};
