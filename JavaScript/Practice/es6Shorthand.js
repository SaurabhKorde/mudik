let createPerson = (para) => {
  let name = person.name;
  let age = person.age;
  return {
    name,
    age,
  };
};

let person = {
  name: "komal",

  age: 12,
};

console.log(createPerson(person));
