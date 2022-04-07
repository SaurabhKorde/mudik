const name = ["Radhe", "Krishna", "Saurabh", "Saket", "Peter"];

console.log(name);

const car = [];

car[0] = "BMW";
car[1] = "Mercedize";
car[2] = "Jaguar";

console.log(car);

const emp = new Array("emp1", "emp2", "emp3", "emp4");

console.log(emp);

console.log(name[0] + name[1]);

console.log(name.length);

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

let print = name.forEach(myFunction);

function myFunction(params) {
  console.log(" " + params);
}

name.push("Finney");
name[name.length] = "Dattaram";
name.push(4);
name[name.length] = 7;
console.log(name);
