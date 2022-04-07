module.exports.cname = "Mercedize";
module.exports.model = "112";

let arr = [91, 92, 93, 94, 95, 96, 97, 98, 99];

let result = arr.filter((item) => {
  return item <= 95;
});

module.exports.result = result;
