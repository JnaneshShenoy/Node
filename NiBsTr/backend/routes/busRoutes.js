// routes/busRoutes.js
const express = require("express");
const Bus = require("../models/busModel");
const UpdateRequest = require("../models/UpdateRequest");
const router = express.Router();

// GET all buses
router.get("/", async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new update request
router.post("/update-request", async (req, res) => {
  const { busId, newTiming } = req.body;
  try {
    const updateRequest = new UpdateRequest({ busId, newTiming });
    await updateRequest.save();
    res.status(201).json({ message: "Update request submitted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Add a new bus (Admin only)
router.post("/add", async (req, res) => {
  const { type, busName, busTiming, destination } = req.body;
  try {
    const newBus = new Bus({ type, busName, busTiming, destination });
    await newBus.save();
    res.status(201).json({ message: "New bus added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
