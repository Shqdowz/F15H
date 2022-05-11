const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: String,
  userTag: String,
  // First time
  firstTime: { type: Boolean, default: true },
  // Currency
  fishCoins: { type: Number, default: 0 },
  fishCrystals: { type: Number, default: 0 },
  // Common fish
  cod: { type: Number, default: 0 },
  herring: { type: Number, default: 0 },
  pufferfish: { type: Number, default: 0 },
  salmon: { type: Number, default: 0 },
  shrimp: { type: Number, default: 0 },
  // Uncommon fish
  butterfish: { type: Number, default: 0 },
  clownfish: { type: Number, default: 0 },
  duck: { type: Number, default: 0 },
  penguin: { type: Number, default: 0 },
  squid: { type: Number, default: 0 },
  // Rare fish
  crab: { type: Number, default: 0 },
  orca: { type: Number, default: 0 },
  otter: { type: Number, default: 0 },
  shark: { type: Number, default: 0 },
  whale: { type: Number, default: 0 },
  // Epic fish
  jellyfish: { type: Number, default: 0 },
  octopus: { type: Number, default: 0 },
  seahorse: { type: Number, default: 0 },
  seal: { type: Number, default: 0 },
  walrus: { type: Number, default: 0 },
  // Mythic fish
  coral: { type: Number, default: 0 },
  crocodile: { type: Number, default: 0 },
  flamingo: { type: Number, default: 0 },
  manatee: { type: Number, default: 0 },
  turtle: { type: Number, default: 0 },
  // Legendary fish
  blobfish: { type: Number, default: 0 },
  catfish: { type: Number, default: 0 },
  dolphin: { type: Number, default: 0 },
  mermaid: { type: Number, default: 0 },
  starfish: { type: Number, default: 0 },
  // Bronze common fish
  bronzecod: { type: Number, default: 0 },
  bronzeherring: { type: Number, default: 0 },
  bronzepufferfish: { type: Number, default: 0 },
  bronzesalmon: { type: Number, default: 0 },
  bronzeshrimp: { type: Number, default: 0 },
  // Bronze uncommon fish
  bronzebutterfish: { type: Number, default: 0 },
  bronzeclownfish: { type: Number, default: 0 },
  bronzeduck: { type: Number, default: 0 },
  bronzepenguin: { type: Number, default: 0 },
  bronzesquid: { type: Number, default: 0 },
  // Bronze rare fish
  bronzecrab: { type: Number, default: 0 },
  bronzeorca: { type: Number, default: 0 },
  bronzeotter: { type: Number, default: 0 },
  bronzeshark: { type: Number, default: 0 },
  bronzewhale: { type: Number, default: 0 },
  // Bronze epic fish
  bronzejellyfish: { type: Number, default: 0 },
  bronzeoctopus: { type: Number, default: 0 },
  bronzeseahorse: { type: Number, default: 0 },
  bronzeseal: { type: Number, default: 0 },
  bronzewalrus: { type: Number, default: 0 },
  // Bronze mythic fish
  bronzecoral: { type: Number, default: 0 },
  bronzecrocodile: { type: Number, default: 0 },
  bronzeflamingo: { type: Number, default: 0 },
  bronzemanatee: { type: Number, default: 0 },
  bronzeturtle: { type: Number, default: 0 },
  // Bronze legendary fish
  bronzeblobfish: { type: Number, default: 0 },
  bronzecatfish: { type: Number, default: 0 },
  bronzedolphin: { type: Number, default: 0 },
  bronzemermaid: { type: Number, default: 0 },
  bronzestarfish: { type: Number, default: 0 },
  // Silver common fish
  silvercod: { type: Number, default: 0 },
  silverherring: { type: Number, default: 0 },
  silverpufferfish: { type: Number, default: 0 },
  silversalmon: { type: Number, default: 0 },
  silvershrimp: { type: Number, default: 0 },
  // Silver uncommon fish
  silverbutterfish: { type: Number, default: 0 },
  silverclownfish: { type: Number, default: 0 },
  silverduck: { type: Number, default: 0 },
  silverpenguin: { type: Number, default: 0 },
  silversquid: { type: Number, default: 0 },
  // Silver rare fish
  silvercrab: { type: Number, default: 0 },
  silverorca: { type: Number, default: 0 },
  silverotter: { type: Number, default: 0 },
  silvershark: { type: Number, default: 0 },
  silverwhale: { type: Number, default: 0 },
  // Silver epic fish
  silverjellyfish: { type: Number, default: 0 },
  silveroctopus: { type: Number, default: 0 },
  silverseahorse: { type: Number, default: 0 },
  silverseal: { type: Number, default: 0 },
  silverwalrus: { type: Number, default: 0 },
  // Silver mythic fish
  silvercoral: { type: Number, default: 0 },
  silvercrocodile: { type: Number, default: 0 },
  silverflamingo: { type: Number, default: 0 },
  silvermanatee: { type: Number, default: 0 },
  silverturtle: { type: Number, default: 0 },
  // Silver legendary fish
  silverblobfish: { type: Number, default: 0 },
  silvercatfish: { type: Number, default: 0 },
  silverdolphin: { type: Number, default: 0 },
  silvermermaid: { type: Number, default: 0 },
  silverstarfish: { type: Number, default: 0 },
  // Gold common fish
  goldcod: { type: Number, default: 0 },
  goldherring: { type: Number, default: 0 },
  goldpufferfish: { type: Number, default: 0 },
  goldsalmon: { type: Number, default: 0 },
  goldshrimp: { type: Number, default: 0 },
  // Gold uncommon fish
  goldbutterfish: { type: Number, default: 0 },
  goldclownfish: { type: Number, default: 0 },
  goldduck: { type: Number, default: 0 },
  goldpenguin: { type: Number, default: 0 },
  goldsquid: { type: Number, default: 0 },
  // Gold rare fish
  goldcrab: { type: Number, default: 0 },
  goldorca: { type: Number, default: 0 },
  goldotter: { type: Number, default: 0 },
  goldshark: { type: Number, default: 0 },
  goldwhale: { type: Number, default: 0 },
  // Gold epic fish
  goldjellyfish: { type: Number, default: 0 },
  goldoctopus: { type: Number, default: 0 },
  goldseahorse: { type: Number, default: 0 },
  goldseal: { type: Number, default: 0 },
  goldwalrus: { type: Number, default: 0 },
  // Gold mythic fish
  goldcoral: { type: Number, default: 0 },
  goldcrocodile: { type: Number, default: 0 },
  goldflamingo: { type: Number, default: 0 },
  goldmanatee: { type: Number, default: 0 },
  goldturtle: { type: Number, default: 0 },
  // Gold legendary fish
  goldblobfish: { type: Number, default: 0 },
  goldcatfish: { type: Number, default: 0 },
  golddolphin: { type: Number, default: 0 },
  goldmermaid: { type: Number, default: 0 },
  goldstarfish: { type: Number, default: 0 },
  // Fishing rods
  exquisiteRod: { type: String, default: "Locked! 🔒" },
  preciousRod: { type: String, default: "Locked! 🔒" },
  luxuriousRod: { type: String, default: "Locked! 🔒" },
  divineRod: { type: String, default: "Locked! 🔒" },
  // Gift codes
  F15Hlaunch: { type: Boolean, default: false },
  ShqdowzIsPog: { type: Boolean, default: false },
  legendaryplz: { type: Boolean, default: false },
  // Loot Boxes
  s1LootBox: { type: Number, default: 0 },
  s2LootBox: { type: Number, default: 0 },
  s3LootBox: { type: Number, default: 0 },
  s4LootBox: { type: Number, default: 0 },
  s5LootBox: { type: Number, default: 0 },
  // Profile
  level: { type: Number, default: 0 },
  experience: { type: Number, default: 0 },
  neededExperience: { type: Number, default: 1000 },
  // Blacklist
  isBlacklisted: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema, "user");
