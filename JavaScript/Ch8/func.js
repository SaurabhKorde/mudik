let a = "Hello";

function name(name) {
  return function print(a) {
    return name + " " + a;
  };
}
console.log(name("Saurabh"));
