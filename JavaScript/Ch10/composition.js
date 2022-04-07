let canEat = {
  eat: function () {
    console.log("Eating");
  },
};

let canWalk = {
  walk: function () {
    console.log("Walking");
  },
};

let canSwim = {
  swim: function () {
    console.log("Swimming");
  },
};

let canBark = {
  bark: function () {
    console.log("Barking");
  },
};

function Person() {}

Object.assign(Person.prototype, canEat, canWalk);
const p1 = new Person();
p1.walk();

const p2 = new Person();
p2.eat();

console.log(Person.prototype);

let dog = Object.assign({}, canEat, canWalk, canBark);
