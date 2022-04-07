// function log(message) {
//   console.log(`Hello ${message}`);
// }

// const name = "Saurabh";

// module.exports.name = name;
// module.exports.mylog = log;

const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("messageLogged");
  }
}

module.exports.Logger = Logger();
