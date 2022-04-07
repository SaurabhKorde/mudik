const express = require("express");
const app = express();
const config = require("config");
const mongoose = require("mongoose");

const Genre = require("./model/models");
const Joi = require("joi");
app.use(express.json());

const Schema = Joi.object({
  name: Joi.string().min(3).max(12).required(),
});

mongoose
  .connect(config.get("db"))
  .then(() => {
    console.log("Connection SuccessFull...");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", async (req, res) => {
  const getGenres = await Genre.find({});
  try {
    res.send(getGenres);
  } catch (error) {
    res.send(error);
  }
});
app.get("/:id", async (req, res) => {
  const getGenre = await Genre.findById({ _id: req.params.id });
  try {
    res.send(getGenre);
  } catch (error) {
    res.send(error);
  }
});

app.post("/", async (req, res) => {
  const genre = new Genre({
    name: req.body.name,
  });
  try {
    const existingGenre = await Genre.findOne({ name: req.body.name });
    if (existingGenre) {
      console.log("Genre is already  present");
    }
    const requestGenre = await Schema.validateAsync(req.body);
    console.log("requestGenre" + JSON.stringify(requestGenre));
    const insertGenre = await genre.save(requestGenre);
    console.log(insertGenre);
    res.send(requestGenre);
  } catch (error) {
    res.send(error);
  }
});

app.put("/:id", async (req, res) => {
  try {
    const updateGenre = await Genre.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
    res.send(updateGenre);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const deleteGenre = await Genre.findByIdAndDelete(req.params.id);
    res.send(deleteGenre);
  } catch (error) {
    res.send(error);
  }
});

app.listen(8080, () => {
  console.log("Server is Running...");
});
