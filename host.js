var http = require('http');

http.createServer(function (req, res) {
  res.write("Hephaestus is hard at work.");
  res.end();
}).listen(8080);