let v1 = "Hello";
let type1 = typeof v1;
console.log(type1);

let test1 = "World";
let type2 = typeof test1;
console.log(type2);

let test2 = 123;
let type3 = typeof test2;
console.log(type3);

let test3 = true;
let type4 = typeof test3;
console.log(type4);

let test4 = {};
let type5 = typeof test4;
console.log(type5);

let test5 = [];
let type6 = typeof test5;
console.log(type6);

let test6;
let type7 = typeof test6;
console.log(type7);

let test7 = { abcd: 123 };
let type8 = typeof test7;
console.log(type8);

let x = 0 / 0;
let test10 = isNaN(x);
console.log(test10);

//let test ={"abcd",1234};
function test9() {
  return "Heyy";
}

let y = 99;

if (y == "99") {
  console.log("same");
} else {
  console.log("not same");
}

console.log("hello" + 12 * 3);

//console.log(infinity - "1");

console.log(42 + "42");
console.log("4" - 1);
console.log("Result:" + 10 / 5);
console.log(3 + "banana" + 2 + "apple");
