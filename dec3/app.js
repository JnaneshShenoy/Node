const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("demo", {
    title: "View Engine Demo",
  });
});

app.listen(3000, (error) => {
  if (error) throw error;
  console.log("Server created successfully");
});
