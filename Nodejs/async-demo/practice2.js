console.log("Number is 5:");
multiplication(5, 20);
console.log("Number is 20:");

/*function multiplication(callback) {
  setTimeout(function () {
    const a = 5;
    const b = 20;
    callback(a, b);
  }, 4000);
}*/

function multiplication(a, b) {
  setTimeout(function number() {
    console.log("Multiplication is:" + a * b);
  }, 2000);
}
