const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  // Help
  homepage: new MessageActionRow().addComponents(
    new MessageButton()
      .setCustomId("toNothing")
      .setLabel("Previous page")
      .setEmoji("⬅️")
      .setStyle("PRIMARY")
      .setDisabled(true),
    new MessageButton()
      .setCustomId("toGeneral")
      .setLabel("Next page")
      .setEmoji("➡️")
      .setStyle("PRIMARY")
      .setDisabled(false)
  ),
  general: new MessageActionRow().addComponents(
    new MessageButton()
      .setCustomId("toHomepage")
      .setLabel("Previous page")
      .setEmoji("⬅️")
      .setStyle("PRIMARY")
      .setDisabled(false),
    new MessageButton()
      .setCustomId("toFishing")
      .setLabel("Next page")
      .setEmoji("➡️")
      .setStyle("PRIMARY")
      .setDisabled(false)
  ),
  fishing: new MessageActionRow().addComponents(
    new MessageButton()
      .setCustomId("toGeneral")
      .setLabel("Previous page")
      .setEmoji("⬅️")
      .setStyle("PRIMARY")
      .setDisabled(false),
    new MessageButton()
      .setCustomId("toMarket")
      .setLabel("Next page")
      .setEmoji("➡️")
      .setStyle("PRIMARY")
      .setDisabled(false)
  ),
  market: new MessageActionRow().addComponents(
    new MessageButton()
      .setCustomId("toFishing")
      .setLabel("Previous page")
      .setEmoji("⬅️")
      .setStyle("PRIMARY")
      .setDisabled(false),
    new MessageButton()
      .setCustomId("toEconomy")
      .setLabel("Next page")
      .setEmoji("➡️")
      .setStyle("PRIMARY")
      .setDisabled(false)
  ),
  economy: new MessageActionRow().addComponents(
    new MessageButton()
      .setCustomId("toMarket")
      .setLabel("Previous page")
      .setEmoji("⬅️")
      .setStyle("PRIMARY")
      .setDisabled(false),
    new MessageButton()
      .setCustomId("toBattling")
      .setLabel("Next page")
      .setEmoji("➡️")
      .setStyle("PRIMARY")
      .setDisabled(false)
  ),
  battling: new MessageActionRow().addComponents(
    new MessageButton()
      .setCustomId("toEconomy")
      .setLabel("Previous page")
      .setEmoji("⬅️")
      .setStyle("PRIMARY")
      .setDisabled(false),
    new MessageButton()
      .setCustomId("toLootBoxes")
      .setLabel("Next page")
      .setEmoji("➡️")
      .setStyle("PRIMARY")
      .setDisabled(false)
  ),
  lootBoxes: new MessageActionRow().addComponents(
    new MessageButton()
      .setCustomId("toBattling")
      .setLabel("Previous page")
      .setEmoji("⬅️")
      .setStyle("PRIMARY")
      .setDisabled(false),
    new MessageButton()
      .setCustomId("toUser")
      .setLabel("Next page")
      .setEmoji("➡️")
      .setStyle("PRIMARY")
      .setDisabled(false)
  ),
  user: new MessageActionRow().addComponents(
    new MessageButton()
      .setCustomId("toLootBoxes")
      .setLabel("Previous page")
      .setEmoji("⬅️")
      .setStyle("PRIMARY")
      .setDisabled(false),
    new MessageButton()
      .setCustomId("toNothing")
      .setLabel("Next page")
      .setEmoji("➡️")
      .setStyle("PRIMARY")
      .setDisabled(true)
  ),
  inactive: new MessageActionRow().addComponents(
    new MessageButton()
      .setCustomId("inactive1")
      .setLabel("Previous page")
      .setEmoji("⬅️")
      .setStyle("PRIMARY")
      .setDisabled(true),
    new MessageButton()
      .setCustomId("inactive2")
      .setLabel("Next page")
      .setEmoji("➡️")
      .setStyle("PRIMARY")
      .setDisabled(true)
  ),
};
