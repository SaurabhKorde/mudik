/*function timeHandler(params) {
  alert("This  is time Handlere.");
}
setTimeout(timeHandler, 5000);
*/

function init() {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = handleClick;
  }
}

function handleClick(e) {
  const target = e.target;
  const id = target.id;
  const imgPath = "./img" + id + ".jpg";
  target.setAttribute("src", imgPath);
  setTimeout(showBlurImage, 2000, target);
}

function showBlurImage(target) {
  const id = target.id;
  const imgPath = "./img/" + id + "blur.jpg";
  target.setAttribute("src", imgPath);
}
window.onload = init();
