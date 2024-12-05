const http = require("http")
const { request } = require("https")
const url = require("url")
http
.createServer((req, res) => {
   console.log(request.url)
})
.listen(3000)

// // file operations
// const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname, "hello.txt");

// fs.writeFile(filePath, "Hello World", (err) => {
//    if (err) {
//       console.log(err);
//    }
// });

// fs.readFile(filePath, (err, data) => {
//    if (err) {
//       console.log(err);
//    }
//    console.log(data.toString());
// });

// fs.appendFile(filePath, "\nHello World Again", (err) => {
//    if (err) {
//       console.log(err);
//    }
// });

// fs.unlink(filePath, (err)=>{
//    if(err){
//       console.log(err);
//    }
// })
