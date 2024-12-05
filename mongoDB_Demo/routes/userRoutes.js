const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data", error: err });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  const { firstname, lastname, email, jobtitle, gender } = req.body;

  // Validate request body
  if (!firstname || !lastname || !email || !jobtitle || !gender) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  try {
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      jobtitle,
      gender,
    });
    res.status(201).json({ message: "User  created", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err });
  }
});

// Get user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User  not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err });
  }
});

// Update user by ID
router.patch("/:id", async (req, res) => {
  try {
    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    if (!updatedUser)
      return res.status(404).json({ message: "User  not found" });
    res.json({ message: "User  updated", user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err });
  }
});

// Delete user by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "User  not found" });
    res.json({ message: "User  deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err });
  }
});

module.exports = router;
