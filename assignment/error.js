const express = require("express");
const app = express();

const getUser = () => undefined;

app.get("/test", async (req, res) => {
  try {
    const user = getUser();

    if (!user) {
      throw new Error("user not found");
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }

  return res.status(200).json({ success: true });
});

app.listen(4001, () => {
  console.log("server listening on port 4001");
});

// D:\Finacle Training\Node\assignment\error.js
module.exports = (err, req, res, next) => {
   console.error(err.stack); // Log the error stack trace
   res.status(500).send("Something went wrong!"); // Send a generic error message
 };
 