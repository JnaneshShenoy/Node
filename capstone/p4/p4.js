const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "output.txt");
const fileContent = "NodeJS capstone project,Dec 05 2024";

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`File created successfully`);
});
