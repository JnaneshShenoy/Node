const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String },
    email: { type: String, required: true },
    jobtitle: { type: String },
    gender: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User ", userSchema);

module.exports = User;
