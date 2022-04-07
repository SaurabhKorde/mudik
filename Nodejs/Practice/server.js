let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/HTML" });
    //res.write("<h1>Hello World...!</h1>");
    res.write(req.url);
    res.end();
  })
  .listen(2000);
