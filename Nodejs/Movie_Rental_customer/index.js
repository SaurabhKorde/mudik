const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("config");
app.use(express.json());
const port = process.env.PORT || 8080;
///const genresRouter = require("./routes/genresRoutes");
const customerRouter = require("./");
//const movieRouter = require("./routes/movieRoutes");
// app.use("/api/genres", genresRouter);
// app.use("/api/customers", customerRouter);
// app.use("/api/movies", movieRouter);

mongoose
  .connect(config.get("db"))
  .then((db) => {
    console.log(`connected to ${config.get("db")} db`);
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(port, () => {
  console.log(`Server is up and runnig! ${port}`);
});
