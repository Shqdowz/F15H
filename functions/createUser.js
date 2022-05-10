const User = require("../schemas/user");
const mongoose = require("mongoose");

module.exports = (client) => {
  client.createUser = async (member) => {
    let userProfile = await User.findOne({ userId: member.id });
    if (userProfile) {
      return userProfile;
    } else {
      userProfile = await new User({
        _id: mongoose.Types.ObjectId(),
        userId: member.id,
        userTag: client.users.cache.get(member.id).tag,
      });
      await userProfile.save().catch((err) => console.log(err));
      return userProfile;
    }
  };
};
