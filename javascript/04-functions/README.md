# Functions (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #4: Create different ways of defining functions and explain it in detail with examples.
>
> - expression
> - return it
> - pass arguments, receive parameters
> - IIFE

```js
// global variables
const n = 1;
const m = 5;
let fullName = "Khaja sharif";

// const operations
const add = "+";
const sub = "-";
const div = "/";
const mul = "*";
```

```js
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
```

```js
// acessing function
let total = simpleCalculator(n, m, add);
console.log(`total: ${total}`); //6
```

```js
// function expression - we cant call or  access  before initialization of the function
const greetingExpression = (name) => {
  console.log(`Hello ${name}`);
};

// acessing function
greetingExpression(fullName); // Hello Khaja sharif
```

```js
// Imediately Invocking Function - we dont need to call it . it calls by itself after decleration
(() => {
  console.log("iif in Arrow function ");
})();

(function iif() {
  console.log("function syntax in iif");
})();
```
