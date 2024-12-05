// routes/adminRoutes.js
const express = require("express");
const Bus = require("../models/busModel");
const UpdateRequest = require("../models/UpdateRequest");
const router = express.Router();

// GET all update requests
router.get("/updates", async (req, res) => {
  try {
    const updates = await UpdateRequest.find().populate("busId");
    res.json(updates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST approve update request
router.post("/approve", async (req, res) => {
  const { requestId } = req.body;

  try {
    const updateRequest = await UpdateRequest.findById(requestId);
    if (!updateRequest)
      return res.status(404).json({ error: "Update request not found" });

    // Update bus timing
    await Bus.findByIdAndUpdate(updateRequest.busId, {
      busTiming: updateRequest.newTiming,
    });
    await updateRequest.remove(); // Remove request after approval

    res.json({ message: "Bus timing updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE reject update request
router.delete("/reject/:id", async (req, res) => {
  try {
    await UpdateRequest.findByIdAndDelete(req.params.id);
    res.json({ message: "Update request rejected" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
