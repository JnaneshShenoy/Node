const fs = require("fs");

const readableStream = fs.createReadStream("data.txt", "utf8");

readableStream.on("data", line => {
  console.log(line);
});
readableStream.on("error", err => {
  console.error(err);
});
