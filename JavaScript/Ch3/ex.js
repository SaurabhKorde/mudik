function makePharse() {
  let words1 = ["Saurabh", "Saket", "Peter", "Finney"];
  let words2 = ["270", "280", "270", "285"];
  let words3 = ["is", "employee", "of", "VAST"];

  let text =
    words1[Math.floor(Math.random() * words1.length)] +
    " " +
    words2[Math.floor(Math.random() * words2.length)] +
    " " +
    words3[Math.floor(Math.random() * words3.length)];
  return text;
}
console.log(makePharse());
