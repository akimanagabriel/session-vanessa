// import mysql2 package with promise support
const mysql2 = require("mysql2/promise");
// create a connection and then assign it to constant called pool
const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "vanessa",
});

// read data from database
module.exports.getModules = async function () {
  const modules = await pool.query("SELECT * FROM `modukes`");
  return modules[0];
};

//insert data into database
async function insertModule(name, credit, marks) {
  await pool.query(
    "INSERT INTO modukes (`name`, `credits`, `marks`) VALUES (?,?,?)",
    [name, credit, marks]
  );
  console.log("Module created successfully!");
}

// delete record from a database
async function deleteModule(id) {
  await pool.query("DELETE FROM modukes WHERE id = ?", [id]);
  console.log("Module removed successfully");
}

// update module
async function updateModule(id, { name, credit, marks }) {
  await pool.query(
    "UPDATE modukes SET name = ?, credits = ?, marks = ? WHERE id = ?",
    [name, credit, marks, id]
  );
  console.log("Module updated successfully");
}

// function sayHello(name, ages) {
//   console.log("Hello " + name + " you are " + ages + " ages");
// }

// sayHello("AKIMANA", 90);
// sayHello("JOHN", "78");

// insertModule("Mobile app development using flutter", 10, 99);
// deleteModule(2);
// updateModule(4, { name: "ReactJs", credit: 70, marks: 80 });
// getModules();
