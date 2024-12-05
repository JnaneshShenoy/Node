const path = require("path");

const filePath = "D:\Finacle Training\capstone\p4\p2.js";

console.log(`Directory Name: ${path.dirname(filePath)}`);
console.log(`Base Name: ${path.basename(filePath)}`);
console.log(`Extension: ${path.extname(filePath)}`);
console.log(`Is Absolute Path: ${path.isAbsolute(filePath)}`);
