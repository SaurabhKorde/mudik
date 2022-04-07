function shape(side, radius) {
  this.side = side;
  this.radius = radius;
}

shape.prototype.calculateArea = function () {
  console.log("Area calculating...");
};

function circle() {
  shape.call();
  let area = 3.14 * this.radius * this.radius;
  console.log("Area of Circle is:" + area);
}

circle.prototype = new shape(5, 6);
circle.prototype.constructor = circle;

let c = new circle();
function square() {
  shape.call();
  let area = this.side * this.side;
  console.log("Area of Square is:" + area);
}

square.prototype = new shape(5, 5);
square.prototype.constructor = square;
let s = new square();
