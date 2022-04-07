let num1 = 7428; //first Number
let i = 1;
let temp;
let count = 1;
while (i < num1) {
  let num2 = Array.from(String(num1)); //array conversion

  let num3 = num2.sort(); //Sorting

  console.log(`Number is: ${num1}`);
  let num4 = num3.join(""); //Joining Element
  let num5 = parseInt(num4); //Conversion String to Number
  console.log(`Ascending Sorted Number:${num5}`);

  let ascending = num5;

  let rev = 0;
  let lastDigit;
  while (num5 != 0) {
    lastDigit = num5 % 10;
    rev = rev * 10 + lastDigit;
    num5 = Math.floor(num5 / 10);
  }

  console.log(`Descending Number:${rev}`);

  let result = rev - ascending;
  console.log(rev + "-" + ascending + "=" + result);
  if (result == 6174) {
    console.log(`Final:=>${result} counter=${count}`);

    break;
  }

  temp = result;
  num1 = temp;
  count++;
  i++;
  console.log("");
  console.log("");
}
