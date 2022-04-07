// function hello(event) {
//   event.preventDefault();
//   let op = document.getElementById("name1").value;
//   console.log(op);
//   document.getElementById("detail").innerHTML = op;
// }
let exe = document.querySelector("#btn");
exe.addEventListener("click", function printMe(ab) {
  ab.preventDefault();
  let val = document.querySelector("#name1").value;
  let place = document.querySelector("#detail");
  place.innerHTML = "Name: " + val;
  place.style.backgroundColor = "gray";
  place.style.color = "yellow";
});
