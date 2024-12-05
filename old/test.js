// Code to calculate the average of three numbers
function calculateAverage(a, b, c) {
   return (a + b + c) / 3;
 }

 // Code to create a simple HTTP server
 const http = require("http");
 
 http.createServer((req, res) => {
   res.writeHead(200, { "Content-Type": "text/html" });
   res.write("<h1>This is a response from the server</h1>");
   res.write(`<h2>Average of 12, 45, and 67 is: ${calculateAverage(12, 45, 67)}</h2>`);
   res.end("OK Bye bye");
 }).listen(9001);

// const http = require("http");
// const server = http.createServer((req, resp) => {
//   resp.writeHead(200, { "content-type": "text/html" });
//   resp.write("<h1>Hello Node.js</h1>");
//   resp.write("<h2>OK</h2>");
//   resp.end("ok bye byee!!");
// });
// server.listen(3000);

// let x = "Welcome to Infosys ";
// let y = "Node.js Tutorials ";
// let z = ["Infosys", "Bengaluru"];
// console.log(x);
// console.log(y);
// console.log("Concat Using (+): ", x + y);
// console.log("Concat Using Function : ", x.concat(y));
// console.log("Split String : ", x.split(" "));
// console.log("Join String : ", z.join(", "));
// console.log("Char at index 5 : ", x.charAt(5));

// hi = () => {
//    console.log("Hello")
// }

// hi()
