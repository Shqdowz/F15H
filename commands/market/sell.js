// Compacting

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const User = require("../../schemas/user");

let embed,
  coins,
  commoncoins,
  uncommoncoins,
  rarecoins,
  epiccoins,
  mythiccoins,
  legendarycoins;
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
    const type = interaction.options.getString("type").toLowerCase();
    let amount = interaction.options.getString("amount");

    const userProfile = await client.createUser(interaction.member);

    coins =
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

    if (coins > 0) {
      if (type === "all" && !amount) {
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { fishCoins: (userProfile.fishCoins += coins) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { cod: (userProfile.cod = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { herring: (userProfile.herring = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { pufferfish: (userProfile.pufferfish = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { salmon: (userProfile.salmon = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { shrimp: (userProfile.shrimp = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { butterfish: (userProfile.butterfish = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { clownfish: (userProfile.clownfish = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { duck: (userProfile.duck = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { penguin: (userProfile.penguin = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { squid: (userProfile.squid = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { crab: (userProfile.crab = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { orca: (userProfile.orca = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { otter: (userProfile.otter = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { shark: (userProfile.shark = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { whale: (userProfile.whale = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { jellyfish: (userProfile.jellyfish = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { octopus: (userProfile.octopus = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { seahorse: (userProfile.seahorse = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { seal: (userProfile.seal = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { walrus: (userProfile.walrus = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { coral: (userProfile.coral = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { crocodile: (userProfile.crocodile = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { flamingo: (userProfile.flamingo = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { manatee: (userProfile.manatee = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { turtle: (userProfile.turtle = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { blobfish: (userProfile.blobfish = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { catfish: (userProfile.catfish = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { dolphin: (userProfile.dolphin = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { mermaid: (userProfile.mermaid = 0) }
        );
        await User.findOneAndUpdate(
          { _id: userProfile._id },
          { starfish: (userProfile.starfish = 0) }
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
            content: `<@${interaction.user.id}>`,
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
              { fishCoins: (userProfile.fishCoins += coins) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { cod: (userProfile.cod = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { herring: (userProfile.herring = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { pufferfish: (userProfile.pufferfish = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { salmon: (userProfile.salmon = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { shrimp: (userProfile.shrimp = 0) }
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
              { fishCoins: (userProfile.fishCoins += coins) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { butterfish: (userProfile.butterfish = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { clownfish: (userProfile.clownfish = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { duck: (userProfile.duck = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { penguin: (userProfile.penguin = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { squid: (userProfile.squid = 0) }
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
              { fishCoins: (userProfile.fishCoins += coins) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { crab: (userProfile.crab = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { orca: (userProfile.orca = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { otter: (userProfile.otter = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { shark: (userProfile.shark = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { whale: (userProfile.whale = 0) }
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
              { fishCoins: (userProfile.fishCoins += coins) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { jellyfish: (userProfile.jellyfish = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { octopus: (userProfile.octopus = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { seahorse: (userProfile.seahorse = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { seal: (userProfile.seal = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { walrus: (userProfile.walrus = 0) }
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
              { fishCoins: (userProfile.fishCoins += coins) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { coral: (userProfile.coral = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { crocodile: (userProfile.crocodile = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { flamingo: (userProfile.flamingo = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { manatee: (userProfile.manatee = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { turtle: (userProfile.turtle = 0) }
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
              { fishCoins: (userProfile.fishCoins += coins) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { blobfish: (userProfile.blobfish = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { catfish: (userProfile.catfish = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { dolphin: (userProfile.dolphin = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { mermaid: (userProfile.mermaid = 0) }
            );
            await User.findOneAndUpdate(
              { _id: userProfile._id },
              { starfish: (userProfile.starfish = 0) }
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
            content: `<@${interaction.user.id}>`,
            embeds: [embed],
          });
        } else {
          await interaction.reply({
            content: `You don't have any ${type} fish left!`,
            ephemeral: true,
          });
        }
      } else if (fish.includes(type)) {
        const isNum = amount / amount == 1;
        const isInt = amount % 1 == 0;
        if (!amount) {
          await interaction.reply({
            content: `Please specify an amount!`,
            ephemeral: true,
          });
        } else if (!isNum && amount === "all") {
          switch (type) {
            case "cod":
            case "herring":
            case "pufferfish":
            case "salmon":
            case "shrimp":
              coins = userProfile[type];
              break;
            case "butterfish":
            case "clownfish":
            case "duck":
            case "penguin":
            case "squid":
              coins = userProfile[type] * 4;
              break;
            case "crab":
            case "orca":
            case "otter":
            case "shark":
            case "whale":
              coins = userProfile[type] * 16;
              break;
            case "jellyfish":
            case "octopus":
            case "seahorse":
            case "seal":
            case "walrus":
              coins = userProfile[type] * 64;
              break;
            case "coral":
            case "crocodile":
            case "flamingo":
            case "manatee":
            case "turtle":
              coins = userProfile[type] * 256;
              break;
            case "blobfish":
            case "catfish":
            case "dolphin":
            case "mermaid":
            case "starfish":
              coins = userProfile[type] * 1024;
              break;
          }

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { fishCoins: (userProfile.fishCoins += coins) }
          );

          embed = new MessageEmbed()
            .setTitle("Sold succesfully!")
            .setDescription(
              `You sold ${userProfile[type]} ${type} for ${coins} <:FishCoin:937423381756772364>. You now have ${userProfile.fishCoins} <:FishCoin:937423381756772364>.`
            )
            .setFooter({ text: `Performed by ${interaction.user.tag}` })
            .setColor("#ADD8E6")
            .setTimestamp();
          await interaction.reply({
            content: `<@${interaction.user.id}>`,
            embeds: [embed],
          });

          await User.findOneAndUpdate(
            { _id: userProfile._id },
            { [type]: (userProfile[type] = 0) }
          );
        } else if (!isInt) {
          await interaction.reply({
            content: `That isn't an integer!`,
            ephemeral: true,
          });
        } else if (amount < 0 || amount > userProfile[type]) {
          await interaction.reply({
            content: `You don't have that much ${type}!`,
            ephemeral: true,
          });
        } else {
          switch (type) {
            case "cod":
            case "herring":
            case "pufferfish":
            case "salmon":
            case "shrimp":
              amount = parseInt(amount);
              coins = amount;
              break;
            case "butterfish":
            case "clownfish":
            case "duck":
            case "penguin":
            case "squid":
              amount = parseInt(amount);
              coins = amount * 4;
              break;
            case "crab":
            case "orca":
            case "otter":
            case "shark":
            case "whale":
              amount = parseInt(amount);
              coins = amount * 16;
              break;
            case "jellyfish":
            case "octopus":
            case "seahorse":
            case "seal":
            case "walrus":
              amount = parseInt(amount);
              coins = amount * 64;
              break;
            case "coral":
            case "crocodile":
            case "flamingo":
            case "manatee":
            case "turtle":
              amount = parseInt(amount);
              coins = amount * 256;
              break;
            case "blobfish":
            case "catfish":
            case "dolphin":
            case "mermaid":
            case "starfish":
              amount = parseInt(amount);
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
              `You sold ${amount} ${type} for ${coins} <:FishCoin:937423381756772364>. You now have ${userProfile.fishCoins} <:FishCoin:937423381756772364>.`
            )
            .setFooter({ text: `Performed by ${interaction.user.tag}` })
            .setColor("#ADD8E6")
            .setTimestamp();
          await interaction.reply({
            content: `<@${interaction.user.id}>`,
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
