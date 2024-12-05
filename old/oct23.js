// const fs = require("fs");
// console.log("start");

// const data = fs.readFileSync("./test.js", "utf-8");
// console.log("data", data);

// console.log("end");


const fs = require('fs')
const readstream = fs.createReadStream('./heh.js')

console.log('Start')

readstream.on('data',(chunk)=>{
   console.log(chunk.toString());
})
console.log('End')