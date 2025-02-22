// calculate a factorial of a number

function getFactorial(number) {
  if (number > 1) {
    return getFactorial(number - 1) * number;
  } else {
    return 1;
  }
}

// call factorial func
const f = getFactorial(3);
console.log(f);
