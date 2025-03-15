const express = require("express");
const { pool } = require("./app");
const app = express();
const port = 4000;

app.use(express.json());

app.listen(port, function () {
  console.log("server running on port 400");
});

app.get("/:id", async function (req, res) {
  const modukes = await pool.query("select * from student where id = ?", [
    req.params.id,
  ]);
  res.send(modukes[0]);
});

// read all students
app.get("/", async function (req, res) {
  const modukes = await pool.query("select * from student");
  res.send(modukes[0]);
});

// insert new record
app.post("/create", async (req, res) => {
  const { fname, lname } = req.body;
  await pool.query("INSERT INTO student(fname, lname) VALUES (?,?)", [
    fname,
    lname,
  ]);
  res.send("New student created successfully");
});

// delete
app.delete("/delete/:id", async (req, res) => {
  await pool.query("DELETE FROM student WHERE id  = ?", [req.params.id]);
  res.send("Student deleted successfuly");
});

// update students
app.put("/update/:id", async (req, res) => {
  const { fname, lname } = req.body;
  await pool.query("UPDATE student SET fname = ?, lname = ? WHERE id = ?", [
    fname,
    lname,
    req.params.id,
  ]);
  res.send("record updated");
  console.log("updated");
});
