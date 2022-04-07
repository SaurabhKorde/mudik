const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("config");
const router = require("./routes/routes");

const port = process.env.PORT || 8080;
app.use("/api/customer", router);
app.use(express.json());

mongoose
  .connect(config.get("db"))
  .then(() => console.log("Connection Successfull..."))
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server is running...");
});
