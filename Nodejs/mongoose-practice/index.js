const mongoose = require("mongoose");
const config = require("config");
const db = config.get("db");

mongoose
  .connect(db)
  .then(() => console.log("Connection successfull..."))
  .catch((err) => console.log(err.message));

const empSchema = mongoose.Schema({
  empid: Number,
  empName: String,
  empSalary: Number,
});

const EmpDetails = mongoose.model("EmpDetails", empSchema);

async function createEmpDetails() {
  const EmpDetail = new EmpDetails({
    empid: 3,
    empName: "Saurabh",
    empSalary: 50000,
  });
  await EmpDetail.save();
  console.log(EmpDetail);
}

//createEmpDetails();

async function getDetails() {
  const empDetails = await EmpDetails.find();
  console.log(empDetails);
}

//getDetails();

async function sortDetails() {
  const empDetails = await EmpDetails.find().sort({ EmpSalary: -1 });
  console.log(empDetails);
}

sortDetails();
