const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 12,
    required: [true, "name  is  required"],
  },
});

const Genre = mongoose.model("genres", genreSchema);
module.exports = Genre;
