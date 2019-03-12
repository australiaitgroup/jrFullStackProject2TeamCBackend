const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min_length: 2,
    trim: true
  },
  password: String,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  location: String,
  avatar: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;
