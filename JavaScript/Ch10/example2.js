function Dog(name, weight, breed) {
  this.name = name;
  this.weight = weight;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  console.log("barking");
};

Dog.prototype.run = function () {
  console.log(`${this.name} is runninng`);
};

Dog.prototype.sitting = false;

Dog.prototype.sit = function () {
  if (this.sitting) {
    console.log(this.name + " is already sitting");
  } else {
    this.sitting = true;

    console.log(this.name + " is now sitting");
  }
};

function showDog(name, bread, wight, handler) {
  this.name = name;
  this.bread = bread;
  this.weight;
  this.handler;
}
showDog.prototype = new Dog();
const bruno = new showDog("bruno", "mixed", 23, "Jack");
bruno.run();

showDog.prototype.league = "Webville";
showDog.prototype.stack = function () {
  console.log("Stack");
};
bruno.stack();
showDog.prototype.bait = function () {
  console.log("Bait");
};

showDog.prototype.gait = function (kind) {
  console.log(kind + "ing");
};
bruno.gait();
showDog.prototype.groom = function () {
  console.log("Groom");
};
bruno.gait();
