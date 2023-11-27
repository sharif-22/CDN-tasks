// Today's task: If Else, Switch case (should show all possibilities)

// if condition
let isRaining = true;
if (isRaining) {
  console.log("heavy rain Alert !!");
}

// if{} else condition
let percentage = 80;
if (percentage > 30) {
  console.log(`You Scored ${percentage}%`);
} else {
  console.log(`You Failed `);
}

// if{} elseif{} else
if (percentage >= 90) {
  console.log(`You Scored A - Grade`);
} else if (percentage >= 75) {
  console.log(`You Scored B - Grade`);
} else if (percentage >= 50) {
  console.log(`You Scored C - Grade`);
} else if (percentage > 35) {
  console.log(`You Scored U - Grade`);
}

// Examples: Mobile buying suggestion
// If given saving amount is > 10K Buy Android Mobile
// Else If given amount is > 60k Buy iPhone Mobile
// Else if given amount is > 5 && < 10 Buy Basic Mobile
// Else Print "You can't afford mobile phone now!
let budget = 75;

switch (true) {
  case budget > 60:
    console.log("Buy iphone ");
    break;
  case budget > 15:
    console.log("Buy Android ");
    break;
  case budget > 5 && budget <= 15:
    console.log("buy basic mobile ");
    break;
  default:
    console.log("default");
}
