const express = require("express");
const Joi = require("joi");
const app = express();
const config = require("config");
console.log(config.get("password"));
const morgan = require("morgan");
app.use(express.json());

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
}
console.log(config.get("password"));

const employees = [
  { id: 2, name: "Saket" },
  { id: 1, name: "Peter" },
  { id: 3, name: "Dattaram" },
  { id: 4, name: "Finney" },
];
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Heyy,This is new page.");
});

app.get("api/people", (req, res) => {
  res.send(["Saket", "Peter"]);
});

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.get("/employees/:id", (req, res) => {
  const id = req.params.id;
  const employee = employees.find((e) => e.id === parseInt(id));

  if (!employee)
    return res.status(404).send("Employee with given id  is not fond");
  res.send(employee);
});
//function for validation
function validateEmployee(input) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
  });
  return schema.validate(input);
}

app.post("/employees", (req, res) => {
  const { error } = validateEmployee(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emp = {
    id: employees.length + 1,
    name: req.body.name,
  };
  employees.push(emp);
  res.send(emp);
});

app.put("/employees/:id", (req, res) => {
  //Check whether an employee exist
  const employee = employees.find((e) => e.id === parseInt(req.params.id));
  if (!employee) return res.status(404).send("Empolyee is not found.");
  //validation

  const { error } = validateEmployee(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  employee.name = req.body.name;
  res.send(employee);
});

app.delete("/employees/:id", (req, res) => {
  //Check whether an employee exist
  const employee = employees.find((e) => e.id === parseInt(req.params.id));
  if (!employee) return res.status(404).send("Empolyee is not found.");
  //validation
  const { error } = validateEmployee(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const index = employees.indexOf(employee);
  employees.splice(index, 3);
  res.send(employee);
});

app.listen(port, () => {
  console.log("Server is  Working...");
});
