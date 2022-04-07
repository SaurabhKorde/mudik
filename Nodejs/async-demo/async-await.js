console.log("Before");
async function displayComments() {
  try {
    const user = await getUser(1);
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
}
displayComments();
console.log("After");

function getUser(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ id, username: "Saurabh" });
    });
  });
}
