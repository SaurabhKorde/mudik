// // const { AsyncResource } = require("async_hooks");
// // const path = require("path");

// // const pathObj = path.parse(__filename);
// // console.log(pathObj);

// const os = require("os");

// // const myOS = os.platform();

// console.log(os.cpus());
// // console.log(myOS);

// const logger = require("./logger");

// const loggerObj = new Logger.Logger();

// loggerObj.on("messageLogged", () => {
//   console.log("handlng message logged event");
// });
// loggerObj.log("User is added");

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

server.listen(3000);

console.log("listening onn port 3000");
