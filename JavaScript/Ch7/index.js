/*function pageLoader() {
  alert("I am alive.");
}
window.onload = pageLoader;
*/
function init() {
  const img = document.getElementById("zero");
  img.onclick = handleClick;
  const img2 = document.getElementById("five");
  img2.onclick = handleClick2;
  const img3 = document.getElementById("three");
  img3.onclick = handleClick3;
}

function handleClick(e) {
  const target = e.target;
  target.setAttribute("src", "img/img/zero.jpg");
}

function handleClick2(e) {
  const target = e.target;
  target.setAttribute("src", "img/img/four.jpg");
}

function handleClick3(e) {
  const target = e.target;
  target.setAttribute("src", "img/img/three.jpg");
}

window.onload = init;
