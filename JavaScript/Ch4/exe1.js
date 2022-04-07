let dog = {
  name: "Fido",
  weight: 20.2,
  age: 4,
  breed: "mixed",
  activity: "Fetch balls",
};
let bark;
if (dog.weight > 20) bark = "WOOF WOOF";
else bark = "woof woof";
let speak = dog.name + " says " + dog.activity + " when he wants to " + bark;
console.log(speak);
