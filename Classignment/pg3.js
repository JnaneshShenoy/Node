const fs = require("fs");

const writableStream = fs.createWriteStream("output.txt");
const data = ["Good one mate", "That's better", "well done"];

data.forEach((line) => {
  writableStream.write(line + "\n");
});

writableStream.end();
writableStream.on("finish", () => {
  console.log("success");
});
writableStream.on("error", (err) => {
  console.error(err);
});
