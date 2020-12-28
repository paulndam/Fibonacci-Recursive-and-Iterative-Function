/** @format */

// Recursive function
const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(10));

// Iterative function

const fibonacciIterative = (n) => {
  let stack = [];
  stack.push(n);
  let sum = 0;

  while (stack.length > 0) {
    n = stack.pop();

    if (n === 0) {
      sum += 0;
    }
    if (n === 1) {
      sum += 1;
    } else {
      stack.push(n - 1);
      stack.push(n - 2);
    }
  }
  return sum;
};

console.log(fibonacciIterative(8))