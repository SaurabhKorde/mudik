const express = require("express");
const path = require("path");
const app = express();
const public = path.join(__dirname, "public");

app.get("/", (req, res) => {
  res.send("This is Working....");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(public, "about.html"));
});

app.get("/contact", (req, res) => {
  res.send("This  is contact  page Working...");
});
app.listen(8080, () => {
  console.log("Server is running...");
});
