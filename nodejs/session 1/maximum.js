const numbers = [2, 300, 4, 4, 32];

var maxNumber = numbers[0];

numbers.forEach((n) => {
  if (n > maxNumber) {
    maxNumber = n;
  }
});

console.log(maxNumber);
