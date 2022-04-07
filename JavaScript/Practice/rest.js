function createPerson(...params) {
  let person = {
    name: params[0],
    age: params[1],
  };
  return person;
}
let myVar = createPerson("Komal", 12);
console.log(myVar);
