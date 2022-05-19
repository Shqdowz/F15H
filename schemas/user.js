const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: String,
  userTag: String,
  // First time
  firstTime: { type: Boolean, default: true },
  // Anti-AFK
  commandCounter: { type: Number, default: 0 },
  needVerify: { type: Boolean, default: false },
  firstInt: { type: Boolean, default: true },
  verifyCode: { type: String, default: undefined },
  wrongCodeCounter: { type: Number, default: 0 },
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
  // Fishing rods
  equippedRod: { type: String, default: "common" },
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
