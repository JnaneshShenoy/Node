const express = require("express");
const fs = require("fs");
const status = require("express-status-monitor");
const zlib = require("zlib");

const app = express();
const port = 5050;

app.use(status());

fs.createReadStream("./main.js").pipe(
  zlib.createGzip().pipe(fs.createWriteStream("./main.zip"))
);

app.get("/", (req, res) => {
  const stream = fs.createReadStream("./main.js", "utf-8");
  stream.on("data", (chunk) => res.write(chunk));
  stream.on("end", () => res.end());
});

app.listen(port, () => console.log(`server startd @ http://localhost:${port}`));
