const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "output");

fs.mkdir(directoryPath, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Directory created successfully");
});
