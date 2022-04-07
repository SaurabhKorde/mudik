const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Customer = require("../model/model");

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/", async (req, res) => {
  console.log("Hello");
  const customer = new Customer({
    name: req.body.Name,
    phone: req.body.phone,
    isGold: req.body.isGold,
  });
  console.log(customer);
  await customer.save();
  res.send(customer);
});

module.exports = router;
