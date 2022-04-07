const express = require("express");
const app = express();
const genres = require("./Routes/genres");
const home = require("./Routes/home");
const port = 8080;
const mongoose = require("mongoose");
app.use(express.json());
app.use("/api/home", home);
console.log(config.get("db"));
app.use("/api/genres", genres);

app.listen(port, () => {
  console.log("Server is Running...");
});
