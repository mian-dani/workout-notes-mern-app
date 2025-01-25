const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: string,
    require: true,
    unique: true,
  },
  password: {
    type: string,
    require: true,
  },
});

module.exports = mongoose.model("user", userSchema);
