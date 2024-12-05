const mongoose = require("mongoose");

const dbConfig = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/node-db-demo")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
};

module.exports = dbConfig;