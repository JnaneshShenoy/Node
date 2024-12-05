const fs = require("fs");
const { Readable } = require("stream");

const readableStream = fs.createReadStream("MOCK_DATA.json");
let buffer = "";
let recordCount = 0;
let totalAge = 0;
let activeRecords = [];

readableStream.on("data", data => {
  buffer += data;
});

readableStream.on("end", () => {
  const records = JSON.parse(buffer);
  recordCount = records.length;
  totalAge = records.reduce((sum, record) => sum + record.age, 0);
  activeRecords = records.filter((record) => record.isActive);

  console.log(`Total Records: ${recordCount}`);
  console.log(`Average Age: ${(totalAge / recordCount)}`);
  console.log("Active Records:", activeRecords);
});

readableStream.on("error", (err) => {
  console.error("Error: ", err);
});


