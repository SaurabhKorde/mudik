const mongoose = require("mongoose");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const { number, string } = require("joi");
const { genreSchema } = require("./genreModel");
//schema and validation for post movieModel
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    min: 5,
    max: 225,
    required: true,
    trim: true,
  },

  genre: { type: genreSchema, required: true },
  dailyRentalRate: {
    type: Number,
    min: 0,
    max: 255,
    required: true,
  },
  numberInStocks: {
    type: Number,
    min: 0,
    max: 255,
    required: true,
  },
});
function movieInputValidation(input) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(255).required(),
    genreId: Joi.objectId().required(),
    // genreId: Joi.string().required(),
    dailyRentalRate: Joi.number().min(0).max(255).required(),
    numberInStocks: Joi.number().min(0).max(255).required(),
  });
  return schema.validate(input);
}

//model for movie collection
const Movie = mongoose.model("movies", movieSchema);
module.exports.movieSchema = movieSchema;
module.exports.Movie = Movie;
module.exports.movieInputValidation = movieInputValidation;
