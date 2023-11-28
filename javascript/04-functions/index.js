// Today's Task: - Create different ways of defining functions and explain it in detail with examples.
// - expression
// - return it
// - pass arguments, receive parameters
// - IIFE

// global variables
const n = 1;
const m = 5;

let fullName = "Khaja sharif";

// const operations
const add = "+";
const sub = "-";
const div = "/";
const mul = "*";

// acessing functions
let total = simpleCalculator(n, m, add);
console.log(total);

// functions decleration - we can call this function at any ware in code
function simpleCalculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 + num2;
    case "*":
      return num1 + num2;
    case "/":
      return num1 + num2;
    default:
      return `${operator} is not a valid one`;
  }
}

// greetingExpression(fullName);
// function expression - we cant call or  access  before initialization of the function

const greetingExpression = (name) => {
  console.log(`Hello ${name}`);
};

// Imediately Invocking Function
(() => {
  console.log("iif in Arrow function ");
})();

(function iif() {
  console.log("function syntax in iif");
})();

(function iif(name) {
  console.log("iif with parameter name : ", name);
})("Khaja sharif");

// iif("sharif"); // uncaught reference err

// billing function
// function calculateBill(a, b, ...rest) {
//   let total = [a, b, ...rest];
//   let amount = total.reduce((prev, curr) => {
//     return prev + curr; // Add 'return' here
//   }, 0);

//   return amount;
// }

function calculateBill(a, b, ...rest) {
  let total = [a, b, ...rest];
  let amount = total.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  return amount;
}

// how rest operator works
// return {
//   a: a,
//   b: b,
//   c: c,
// rest: rest, // rest: [rest],
// };
// console.log(calculateBill(1, 2, 3, 4, 5, 6, 7));
// console.log(calculateBill(12 * 3, 7 * 3, 5 * 3));
