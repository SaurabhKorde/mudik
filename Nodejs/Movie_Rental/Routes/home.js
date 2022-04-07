const express = require("express");
const router = express.Router();

//get() method
router.get("/", (req, res) => {
  res.send("This  is  my page.");
  console.log(req.body);
});

module.exports = router;
