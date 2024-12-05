const calculateAverage = require('./new');

const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>This is a response from the server</h1>');
  res.write(`<h2>Average of 12, 45, and 67 is: ${calculateAverage(12, 45, 67)}</h2>`);
  res.end('OK Bye bye');
}).listen(9001);