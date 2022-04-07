console.log("before");
getUser(1)
  .then((user) => getRepos(user.username))
  .then((repos) => getComment(repos[0]))
  .then((comments) => console.log(comments))
  .catch((err) => console.log(err.message));

console.log("after");

function getUser(id, cb) {
  setTimeout(function () {
    cb({ id, username: "Saurabh" });
  }, 2000);
}

function getRepos(username, cb) {
  setTimeout(function () {
    console.log(["repos1", "repos2", "repos3"]);
    cb(["repos1", "repos2", "repos3"]);
  }, 2000);
}

function getComment(username, cb) {
  setTimeout(function () {
    //console.log(["comment1", "comment2", "comment3"]);
    commentCb(["comment1", "comment2", "comment3"]);
  }, 2000);
}
