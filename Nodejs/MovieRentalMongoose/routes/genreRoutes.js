const express = require("express");
const router = express.Router();
const config = require("config");
const mongoose = require("mongoose");
const Genre = require("./model/models");
const Joi = require("joi");
const genreRouter = require("./routes/genreRouter");
const { Genre, validateGenre } = require("./models/genreModel");

router.get("/", async (rq, res) => {
  const genre = await Genre.find({});
  if (!genre) return res.status(404).send("Genres not found");
  res.send(genre);
});

router.get("/:id", async (rq, res) => {
  const genre = await Genre.findById(req.params.id);
  if (!genre) return res.status(404).send("Genres not found");
  res.send(genre);
});

router.post("/", async (rq, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(404).send(error.details[0].message);
  const genre = new Genre({
    name: req.body.name,
  });

  await genre.save();
  res.send(genre);
});

router.put("/id", async (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(404).send(error.details[0].message);
  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    { $set: { name: req.body.name } },
    { new: true }
  );
  if (!genre) return res.status(404).send("Genres not found");

  res.send(genre);
});
module.exports = router;
