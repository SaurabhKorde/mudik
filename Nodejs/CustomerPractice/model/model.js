const express = require("express");
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  isGold: Boolean,
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
