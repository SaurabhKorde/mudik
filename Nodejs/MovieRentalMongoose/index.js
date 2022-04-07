const express = require("express");
const router = express.Router();
const config = require("config");
const mongoose = require("mongoose");

///const Genre = require("./model/models");
const genreRouter = require("./routes/genreRouter");
const { Genre, validateGenre } = require("./models/genreModel");

mongoose
  .connect(config.get("db"))
  .then(() => console.log("Connection Successfully...."))
  .catch((err) => console.log(err));
