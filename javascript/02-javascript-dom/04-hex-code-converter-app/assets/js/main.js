import { hexToRgb } from "./utlis";

const inputEL = document.querySelector("input");
const buttonEL = document.querySelector("button");
// const hexEL = document.querySelector(".hex");
const rgbEL = document.querySelector(".rgb");
// const hslEL = document.querySelector(".hsl");

buttonEL.addEventListener("click", () => {
  const value = inputEL.value;

  if (value.length > 3 && value.includes("#")) {
    console.log(value.includes("#"));

    let rbg = `  rgb(${hexToRgb(value).r},${hexToRgb(value).g},${
      hexToRgb(value).b
    })`;

    rgbEL.textContent = rbg;
    document.body.style.backgroundColor = rbg;
  }
});
