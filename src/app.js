const express = require("express");
const app = express();

app.get("/", (_req, res) =>  {
  res.status(200).send("Hello world")
})
app.get("/test", (_req, res) =>  {
  res.status(200).send("test 200")
})
module.exports = app;