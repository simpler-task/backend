const mongoose = require("../mongoose");

const Users = mongoose.model(
  "Users",
  mongoose.Schema({
    username: String,
    password: String,
    isManager: Boolean
  })
);

module.exports = Users;
