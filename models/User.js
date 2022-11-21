const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  Fullname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
