// models/Bus.js
const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  type: { type: String, enum: ["express", "local"], required: true },
  busName: { type: String, required: true },
  busTiming: { type: String, required: true }, // e.g., "08:30 AM"
  destination: { type: String, required: true },
});

module.exports = mongoose.model("Bus", busSchema);
