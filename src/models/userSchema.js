const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: Number, require: true },
  name: { type: String },
  password: { type: String, require: true },
});

module.exports = mongoose.model("User", userSchema, "User");
