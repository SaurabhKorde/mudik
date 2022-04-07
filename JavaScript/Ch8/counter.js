function makeCounter() {
  let count = 0;

  function counter() {
    count = count++;
    return count;
  }
  return counter;
}

let counterfn = makeCounter();
console.log(counterfn());
console.log(counterfn());
console.log(counterfn());
console.log(counterfn());
