// models/UpdateRequest.js
const mongoose = require("mongoose");

const updateRequestSchema = new mongoose.Schema({
  busId: { type: mongoose.Schema.Types.ObjectId, ref: "Bus", required: true },
  newTiming: { type: String, required: true }, // e.g., "09:00 AM"
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("UpdateRequest", updateRequestSchema);
