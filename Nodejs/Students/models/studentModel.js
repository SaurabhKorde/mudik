const express = require("express");
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  marks: Number,
});

const Student = mongoose.model("studentDetails", studentSchema);

module.exports = Student;
