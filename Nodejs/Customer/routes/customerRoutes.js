const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Customers = require("../models/customerModel");

router.get("/", async (req, res) => {
  // const customers = await Customers.find({});
  const getGenres = await Customers.find({});
  try {
    res.send(getGenres);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

module.exports = router;
