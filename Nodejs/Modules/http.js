const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello There");
    res.end();
  } else if (req.url === "/numbers") {
    res.write(JSON.stringify([1, 2, 3, 4]));
    res.end();
  }
});

server.listen(4000);

console.log("listening on port 3000");
