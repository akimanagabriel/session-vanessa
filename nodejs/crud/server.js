const express = require("express");
const { getModules } = require("./app");
// initialise express application
const app = express();
app.listen(5000, function () {
  console.log("Server is running on port 5000");
});

// endpoint
app.get("/", function (req, res) {
  res.send("hello world");
});

// modules endpoint
app.get("/module", async function (req, res) {
  const modules = await getModules();
  res.json(modules);
});
