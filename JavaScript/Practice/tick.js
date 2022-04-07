function print() {
  console.log("tick");
}
for (i = 0; i < 10; i++) {
  setTimeout(print, 10000);
}
