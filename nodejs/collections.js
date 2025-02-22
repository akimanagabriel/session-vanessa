// array
// is a collection of multiple values tha share the same identifier (variable name)
// we define array by using identifier followed a pair of square blacket
const names = ["Peter", "John", "Linkoln"];

// console.log(names[0]);
// loop
names.forEach(function (name, i) {
  console.log(i + 1, ".", name);
});

// (name) => {
//   console.log(name);
// };

// // arrow function
// const add = (x, y) => console.log(x + y);

// // anonymous function
// const divide = function (t, y) {
//   console.log(t / y);
// };

// add(90, 90);
// divide(100, 2);
