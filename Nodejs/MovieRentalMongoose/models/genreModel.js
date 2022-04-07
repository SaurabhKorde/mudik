const mongoose = require("mongoose");
const Joi = require("joi");
const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 12,
    required: [true, "name  is  required"],
  },
});

function validateGenre(genre) {
  const Schema = Joi.object({
    name: Joi.string().min(3).max(12).required(),
  });
}

const Genre = mongoose.model("genres", genreSchema);
module.exports = Genre;
