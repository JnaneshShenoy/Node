const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Check if the error is a validation error from Mongoose
  if (err.name === "ValidationError") {
    return res
      .status(400)
      .json({ message: "Validation Error", errors: err.errors });
  }

  // Handle other types of errors
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err : {}, // Send error details only in development
  });
};

module.exports = errorHandler;
