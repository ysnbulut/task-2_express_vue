const mongoose = require("mongoose");

const usersSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  }
);

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
