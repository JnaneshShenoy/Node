const express = require("express");
const userRoutes = require("./routes/userRoutes");
const dbConfig = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = 8000;

// Middleware
app.use(express.json());

// MongoDB connection
dbConfig();

// Routes
app.use("/users", userRoutes);

// Error handling middleware
app.use(errorHandler); // Use the error handler after all routes

// Start server
app.listen(port, () => {
  console.log(`Server started and running on http://localhost:${port}`);
});
