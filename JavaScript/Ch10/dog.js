function Dog(name, weight, breed) {
  this.name = name;
  this.weight = weight;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  console.log("barking");
};

let spotty = new Dog("spotty", 23, "mixed");
spotty.bark = function () {
  console.log("Spotty is barking");
};

let spike = new Dog("spike", 34, "Mixed");

spotty.bark();
spike.bark();

Dog.prototype.run = function () {
  console.log(`${this.name} is runninng`);
};
spotty.run();

console.log(spotty.hasOwnProperty("bark"));
console.log(spike.hasOwnProperty("bark"));

console.log(Object.keys(spotty));

for (let prop in spotty) {
  console.log(prop);
}

Dog.prototype.sitting = false;

Dog.prototype.sit = function () {
  if (this.sitting) {
    console.log(this.name + " is already sitting");
  } else {
    this.sitting = true;

    console.log(this.name + " is now sitting");
  }
};

console.log(spotty.hasOwnProperty("sitting"));
spotty.sit();
console.log(spotty.hasOwnProperty("sitting"));
spotty.sit();
console.log(Object.keys(spotty));
console.log(spotty.hasOwnProperty("sitting"));
console.log(Object.keys(spike));
