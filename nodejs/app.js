// variable declaration in nodejs
// const : used to define a value that does not change
const PI = 3.14;
const name = "Vanessa";

// console.log(PI, name);

// var : used to define a dynamic values

var user = "John doe";
user = "Peter";

// console.log(user);

// TASK 1 CORRECTION
const n1 = 30;
const n2 = -20;
// const sum = n1 + n2;
// console.log("SUM = ", sum);

// define addition function
function sum(x, y) {
  console.log(x + y);
}

sum(23, 89);
sum(0, 4);
sum(90, 100);

function add(a, b) {
  console.log("SUM = ", a + b);
}
function div(a, b) {
  console.log("DIVISION = ", a / b);
}
function mult(a, b) {
  console.log("MULTIPLICATION = ", a * b);
}

add(n1, n2);
mult(n1, n2);
div(n1, n2);

// if conditions
const ages = 9;
if (ages >= 18) {
  console.log("You're Adult");
} else {
  console.log("You're young");
}
