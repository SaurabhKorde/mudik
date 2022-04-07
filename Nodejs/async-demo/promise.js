function getUser(id) {
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ id, username: "Saurabh" });
    });
  });
}

console.log(getUser(5));
