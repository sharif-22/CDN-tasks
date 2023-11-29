console.log(
  "%c JavaScript functions!!",
  "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(245,221,8) , 6px 6px 0 rgb(5,148,68) , 9px 9px 0 rgb(2,135,206) "
);
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
console.log(
  `%c we are loging a total variable which holdes simpleCalculator() return number`,
  "color: #3667d9; font-size: 16px"
);
console.log(`total: ${total}`);

// functions decleration - we can call this function at any ware in code
function simpleCalculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return `${operator} is not a valid one`;
  }
}

// function expression - we cant call or  access  before initialization of the function
const greetingExpression = (name) => {
  console.log(`Hello ${name}`);
};
console.log(
  `%c we are calling funcExp it logging "Hello + parameter"`,
  "color: #3667d9; font-size: 16px"
);

greetingExpression(fullName);

// Imediately Invocking Function
console.log(
  `%c we are declearing a IIF anonomous arrow func it logging "iif in Arrow function "`,
  "color: #3667d9; font-size: 16px"
);
(() => {
  console.log("iif in Arrow function ");
})();
console.log(
  `%c we are declearing a IIF  named func it logging "function syntax in iif"`,
  "color: #3667d9; font-size: 16px"
);
(function iif() {
  console.log("function syntax in iif");
})();

console.log(
  `%c we are declearing a IIF  named func with a parameter it logging "iif with parameter name : parameter"`,
  "color: #3667d9; font-size: 16px"
);
(function iif(name) {
  console.log("iif with parameter name : ", name);
})("Khaja sharif");

// iif("sharif"); // uncaught reference err

// billing function
function calculateBill(a, b, ...remaining) {
  let total = [a, b, ...remaining];
  // console.log(total);
  // console.log(a, b, remaining);
  let amount = total.reduce((prev, curr) => {
    return prev + curr; // Add 'return' here
  }, 0);

  return amount;
}
console.log(calculateBill(1, 2, 3, 4, 5, 6, 7)); // 28
console.log(calculateBill(12 * 3, 7 * 3, 5 * 5)); //82

// how rest operator works
// return {
//   a: a,
//   b: b,
//   c: c,
//   rest: rest, // rest: [rest],
// };
