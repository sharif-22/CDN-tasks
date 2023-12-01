// Today's task: If Else, Switch case (should show all possibilities)

// DOM El
const olEl = document.querySelector("ol");
const codeEl = document.querySelector("code");
const outPutEl = document.querySelector("#output");

// function
function successUi(content) {
  outPutEl.classList.add("success");
  outPutEl.classList.remove("warning");
  outPutEl.textContent = content;
}
function warningUi() {
  outPutEl.classList.remove("success");
  outPutEl.classList.add("warning");
}

// event listener
olEl.addEventListener("click", (e) => {
  const target = e.target;
  const condition = target.classList[1];

  switch (condition) {
    case "if": {
      codeEl.innerHTML = `   
      // if condition
      let isRaining = true;
      if (isRaining) {
        console.log("heavy rain Alert !!");
      }  
      `;

      console.log(outPutEl.classList);
      successUi("heavy rain Alert !!");
      break;
    }
    case "if-else": {
      codeEl.innerHTML = `
      
      // if{} else condition
      let percentage = 80;
      if (percentage > 30) {
        console.log("You Pass");
      } else {
        console.log('You Failed');
      }
      `;

      successUi("You Pass");
      break;
    }
    case "if-elseif": {
      codeEl.innerHTML = `
      
      // if{} elseif{} else
      let percentage = 80;
      if (percentage >= 90) {
        console.log("You Scored A - Grade");
      } else if (percentage >= 75) {
        console.log("You Scored B - Grade");
      } else if (percentage >= 50) {
        console.log("You Scored C - Grade");
      } else if (percentage < 35) {
        console.log("You Scored U - Grade");
      }
      
      `;

      successUi("You Scored B - Grade");
      break;
    }
    case "switch": {
      codeEl.innerHTML = `
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
              `;

      successUi("Buy iphone");
      break;
    }
    case "ternary-operator": {
      codeEl.innerHTML = `
              
              // ternary operator
              const score = 80;
              // condition ? trueExpression : falseExpression
              const scoreRating = score > 70 ? "Excellent" : "Do better";
              console.log(scoreRating); // Excellent
              `;

      successUi("Excellent");
      break;
    }
  }

  Prism.highlightElement(codeEl);
});

// ----------------------------------------------------------------

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
} else if (percentage < 35) {
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

// ternary operator
const score = 80;
// condition ? trueExpression : falseExpression
const scoreRating = score > 70 ? "Excellent" : "Do better";
console.log(scoreRating); // Excellent
