console.log("First Line...");
print(number);
console.log("Second  Line...");

function number(n) {
  console.log("Number  is :" + n);
}

function print(callback) {
  setTimeout(function () {
    const n = 100;
    callback(n);
  }, 3000);
}
