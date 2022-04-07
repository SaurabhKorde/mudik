let data = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is resolve.");
  });
});

data.then((item) => {
  console.log(item);
});
console.log("Welcome");
