//let firstName = "Saurabh";

let car = {
  name: "BMW",
  color: "Black",
  price: "2CR",
};

function name(obj) {
  console.log("Car Name: ", obj);
}
name(car);

function color(obj) {
  obj.color = "White";
  return obj;
}
let x = color(car);
console.log("Change Color: ", x);
