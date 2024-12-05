const express = require("express");
const errHandler = require("./error"); // Make sure this path is correct

const app = express();

// Mock function to simulate user retrieval
const getUser = () => undefined; // Returns undefined to mimic a missing user scenario

// Route to handle "/test"
app.get("/test", async (req, res, next) => {
  try {
    const user = getUser();
    if (!user) {
      throw new Error("user not found");
    }
    // Return success response if user is found
    return res.status(200).json({ success: true });
  } catch (error) {
    // Pass error to the error handler middleware
    return next(error);
  }
});

// Route to handle "/login"
app.post("/login", async (req, res) => {
  try {
    const user = getUser();
    if (!user) {
      throw new Error("user not found");
    }
    // Additional login logic goes here...
    res.status(200).send("Login successful");
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
});

// Error handling middleware
app.use(errHandler); // Use the error handler

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
