function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    console.log(count);
  }
  return innerFunction;
}
let nestedFc = outerFunction();
console.log(nestedFc);
nestedFc();
nestedFc();
nestedFc();
nestedFc();
