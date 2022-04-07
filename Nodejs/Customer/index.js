const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const customerRouter = require("./routes/customerRoutes");
app.use(express.json());
app.use("/api/customers", customerRouter);
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("connection successful");
  })
  .catch(() => {
    console.log("connection not successfull");
  });

app.listen(port, () => {
  console.log("server is up and runnig", port);
});
