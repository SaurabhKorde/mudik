const mongoose = require("mongoose");
const Joi = require("Joi");
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 5,
    max: 20,
    required: true,
  },
  phone: {
    type: String,
    min: 7,
    max: 10,
    required: true,
  },
  isGold: {
    type: Boolean,
    default: false,
  },
});
const Customers = mongoose.model("customers", customerSchema);

module.exports.Customers = Customers;
