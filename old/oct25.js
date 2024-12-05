const EventEmitter = require("events");

let eventEmitter = new EventEmitter();

eventEmitter.on("myevent", (msg) => {
  console.log(msg);
});

eventEmitter.emit("myevent", "First event");

// const net = require("net");
// const server = net.createServer((socket) => {
//   socket.on("close", () => {
//     console.log("socket closed !!");
//   });
// });
// server.listen(7000);
