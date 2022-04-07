const express = require("express");
const mongoose = require("mongoose");

//const db = config.get("db");
const app = express();
const Joi = require("joi");
const config = require("config");
app.use(express.json());
const port = process.env.PORT || 3000;
//genres Data
const genres = [
  { id: 1, name: "Comedy" },
  { id: 2, name: "Friction" },
  { id: 3, name: "Animation" },
  { id: 4, name: "Horror" },
];

//function for validation
function validateGenres(input) {
  const schema = Joi.object({
    name: Joi.string().min(4).max(50).required(),
  });
  return schema.validate(input);
}
//get() method
app.get("/api/genres", (req, res) => {
  res.send(genres);
  console.log(req.body);
});

app.get("/api/genres/:id", (req, res) => {
  const genreid = genres.find((e) => e.id === parseInt(req.params.id));
  //check Whether Movie is exist
  if (!genreid) return res.status(404).send("Genre is not found.");
  genreid.name = req.body.name;
  res.send(genreid);
});
//post() method
app.post("/api/genres", (req, res) => {
  const { error } = validateGenres(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };
  genres.push(genre);
  res.send(req.body);
});
///put() method
app.put("/api/genres/:id", (req, res) => {
  const genreid = genres.find((e) => e.id === parseInt(req.params.id));
  if (!genreid) return res.status(404).send("Genre is not found.");

  const { error } = validateGenres(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  genreid.name = req.body.name;
  res.send(genreid);
});
//delete() method
app.delete("/api/genres/:id", (req, res) => {
  const { error } = validateGenres(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genreid = genres.find((e) => e.id === parseInt(req.params.id));
  if (!genreid) return res.status(404).send("Genre is not found.");

  const index = genres.indexOf(genreid);
  genres.splice(index, 1);
  res.send(genreid);
  console.log(genres);
});

app.listen(port, () => {
  console.log("Server is Running...");
});

//DB Connection

