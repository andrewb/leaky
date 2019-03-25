const http = require("http");

const myLog = [];

const server = http.createServer((req, res) => {
  myLog.push({ url: req.url, date: new Date() });
  res.end("Hello!");
});

server.listen(9000);
console.log("Server listening on port 9000");
