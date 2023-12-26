# If-Else (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #1: Create a if-else condition with all possible conditions

```js
// if condition
// syntax
if (condition) {
  //code that you need to run
}

let isRaining = true;
if (isRaining) {
  // above condition is true then it execute this block
  console.log("heavy rain Alert !!");
}
```

```js
// if{} else condition
let percentage = 80;
if (percentage > 30) {
  // if the condition true this block will executed
  console.log(`You Scored ${percentage}%`);
} else {
  // if the condition fail this block will executed
  console.log(`You Failed `);
}
```

```js
// if{} elseif{} else
// syntax
if (condition) {
  //code that you need to run
}elseif (condition){
    //code that you need to run
}else{
  // default execution block
}



let percentage = 80;
if (percentage >= 90) {
  // above condition is true then it execute this block
  console.log(`You Scored A - Grade`);
} else if (percentage >= 75) {
  // above condition is true then it execute this block
  console.log(`You Scored B - Grade`);
} else if (percentage >= 50) {
  // above condition is true then it execute this block
  console.log(`You Scored C - Grade`);
} else if (percentage < 35) {
  // above condition is true then it execute this block
  console.log(`You Scored U - Grade`);
}
```

```js
// switch case

let budget = 75;

switch (true) {
  case budget > 60:
    // budget > 60 -> true now this block executed and stoping this block using break keyword
    console.log("Buy iphone ");
    break;
  case budget > 15:
    // budget > 15 -> true now this block executed and stoping this block execution using break keyword
    console.log("Buy Android ");
    break;
  case budget > 5 && budget <= 15:
    // budget > 15 -> true now this block executed and stoping this block execution using break keyword
    console.log("buy basic mobile ");
    break;
  default:
    // if above cases failed in all condition or comparision this default will executed
    console.log("default");
}
```

switch case compares the condition and execute that particular block

```js
// ternary operator
const score = 80;
// condition ? trueExpression : falseExpression
const scoreRating = score > 70 ? "Excellent" : "Do better";
console.log(scoreRating); // Excellent
```

### [Live link](https://sharif-22.github.io/cyberdude-challenges/javascript/01-conditional-statements/)

## References:

<!--
Paste the `YOUTUBE_VIDEO_ID_HERE` with the video id.
md -->

[![IMAGE ALT TEXT](http://img.youtube.com/vi/WebG_D9-U80/0.jpg)](http://www.youtube.com/watch?v=WebG_D9-U80 "#27 - JavaScript If-Else (With Examples) - (தமிழில்) (Tamil) | JavaScript Course")
[![IMAGE ALT TEXT](http://img.youtube.com/vi/xG5IUyZvbDk/0.jpg)](http://www.youtube.com/watch?v=xG5IUyZvbDk "#28 - JavaScript Switch-case (With Examples) - (தமிழில்) (Tamil) | JavaScript Course")
