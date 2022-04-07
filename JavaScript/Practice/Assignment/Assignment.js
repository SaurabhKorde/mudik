let btn = document.querySelector("#btn");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  let num1 = document.querySelector("#number").value; //first Number
  let i = 1;
  let temp;
  let count = 1;
  while (i < num1) {
    let num2 = Array.from(String(num1)); //array conversion

    let num3 = num2.sort(); //Sorting

    console.log(`Number is: ${num1}`);
    let num4 = num3.join(""); //Joining Element
    let num5 = parseInt(num4); //Conversion String to Number

    let ascending = num5;

    let rev = 0;
    let lastDigit;
    while (num5 != 0) {
      lastDigit = num5 % 10;
      rev = rev * 10 + lastDigit;
      num5 = Math.floor(num5 / 10);
    }

    let result = rev - ascending;
    document.writeln(
      "<h2>" +
        "(Descending Number)" +
        rev +
        "-" +
        ascending +
        "(Ascending Number)" +
        "=" +
        result +
        "</h2><br/>"
    );

    if (result == 6174) {
      document.writeln(
        `<h2>Kaprekar's Number:=>${result} Loop counter=${count}</h1>`
      );

      break;
    }
    if (result == 495) {
      document.writeln(
        `<h2>Kaprekar's Number:=>${result} Loop counter=${count}</h1>`
      );
      break;
    }

    temp = result;
    num1 = temp;
    count++;
    i++;
  }
});
