let n = 5;
//assign to a variable
let num = function Number(n) {
  return n;
};

//Pass as argument to a function
function multiplication(num) {
  console.log("Table of " + num);
  for (let i = 1; i <= 10; i++) {
    let result = i * n;

    console.log(result);
  }
}

//returned from a function
function table(x) {
  console.log(x);
  return x;
}
table(multiplication(num));
