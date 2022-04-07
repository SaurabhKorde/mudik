const express = require("express");
const router = express.Router();
const Joi = require("joi");

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

router.get("/", (req, res) => {
  res.send(genres);
});
router.get("/:id", (req, res) => {
  const genreid = genres.find((e) => e.id === parseInt(req.params.id));
  //check Whether Movie is exist
  if (!genreid) return res.status(404).send("Genre is not found.");
  genreid.name = req.body.name;
  res.send(genreid);
});
//post() method
router.post("/", (req, res) => {
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
router.put("/:id", (req, res) => {
  const genreid = genres.find((e) => e.id === parseInt(req.params.id));
  if (!genreid) return res.status(404).send("Genre is not found.");

  const { error } = validateGenres(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  genreid.name = req.body.name;
  res.send(genreid);
});
//delete() method
router.delete("/:id", (req, res) => {
  const genreid = genres.find((e) => e.id === parseInt(req.params.id));
  if (!genreid) return res.status(404).send("Genre is not found.");

  const index = genres.indexOf(genreid);
  genres.splice(index, 1);
  res.send(genreid);
  console.log(genres);
});

module.exports = router;

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connection Successfully.."))
  .catch((err) => console.log(err));

const genreSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

const Genre = mongoose.model("Genre", genreSchema);

async function createGenre() {
  const genre = new Genre({
    id: 1,
    name: "Commedy",
  });
  await genre.save();
  console.log(genre);
}

createGenre();
