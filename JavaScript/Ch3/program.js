function score() {
  let scores = [
    60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
    64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
  ];
  for (let i = 0; i < scores.length; i++) {
    console.log(`Solution # ${i} Scores ${scores[i]}`);
  }
  let highestscore = Math.max(...scores);

  console.log(`Highest Score is ${highestscore}`);

  let multiarray = [];
  let count = 0;
  let index = [];
  scores.forEach((x) => {
    if (highestscore === x) {
      index.push(count);
      console.log(`Highest Score Position and ${count} and Score ${x}`);
    }
    count++;
  });
  console.log(index);

  let costs = [
    0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22,
    0.31, 0.25, 0.25, 0.33, 0.21, 0.25, 0.25, 0.25, 0.28, 0.25, 0.24, 0.22, 0.2,
    0.25, 0.3, 0.25, 0.24, 0.25, 0.25, 0.25, 0.27, 0.25, 0.26, 0.29,
  ];

  index.forEach((element) => {
    multiarray.push(scores[element] * costs[element]);
  });
  console.log(multiarray);
  if (multiarray[0] < multiarray[1]) {
    console.log(`Cost effective solution is: ${multiarray[0]}`);
  } else {
    console.log(`Cost effective solution is: ${multiarray[1]}`);
  }
}
//console.log(`Total number of scores is ${scores.length}`);

score();
