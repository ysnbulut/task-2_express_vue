const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
