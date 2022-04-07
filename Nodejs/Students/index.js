const express = require("express");
const app = express();
const mongoose = require("mongoose");

const config = require("config");
const port = process.env.PORT || 8080;
const Student = require("./models/studentModel");
//app.use("api/students");
app.use(express.json());
mongoose
  .connect(config.get("db"))
  .then(() => console.log("Connection Successful..."))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello....");
});

app.get("/:id", async (req, res) => {
  const _id = req.params.id;
  const student = await Student.findById({ _id });
  res.send(student);
});

app.post("/", async (req, res) => {
  const student = new Student({
    name: req.body.name,
    marks: req.body.marks,
  });

  await student.save();

  res.send(student);
});

app.put("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    { $set: { name: req.body.name, marks: req.body.marks } },
    { new: true }
  );
  res.send(student);
});

app.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  const student = await Student.findOneAndDelete({ _id });
  res.send(student);
});

app.listen(port, () => {
  console.log("Server is Running...");
});
