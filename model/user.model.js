const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // Structure
  username: {
    type: String,
    minLength: [8, "Must be at least 8 characters"],
    maxLength: [12, "Max number of characters should be 12"],
    required: true,
  },
  password: {
    type: String,
    minLength: [8, "password must have 8 characters"],
  },
  phone: {
    type: Number,
    min: [10, "Phone number should have atleast 10digits"],
    validate: function (v) {
      if (v < 9999999999) {
        return false;
      } else {
        return true;
      }
    },
  },
});

// 2e2 = 4   2^3 = 8 2e3 = 8
const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel;
