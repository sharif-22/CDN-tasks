import countryData from "../../data/country.json";
import numberFormatter from "number-formatter";

// DOM
const calculatorFormEl = document.querySelector(".calculatorForm");
const saveTransactionEl = document.querySelector(".saveTransaction");

const splitAmountFormEl = document.forms.splitAmountForm;
const currencySelectEl = document.getElementById("currency");
const rangeEl = document.querySelector(".range");
const splitNumElArr = document.querySelectorAll(".splitNum");

const totalExpenceEl = document.querySelector(".total-expence");
const eachOnePayEl = document.querySelector(".eachOnePays");

// event listener
splitAmountFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  swapUI(calculatorFormEl, saveTransactionEl);

  const formData = new FormData(splitAmountFormEl);
  const formObj = Object.fromEntries(formData.entries());

  const currentCountry = countryData.filter((symbol) => {
    return formObj.currency === symbol.currency.code;
  });
  const symbol = currentCountry[0].currency.symbol;

  totalExpenceEl.textContent = `${symbol}${numberFormatter(
    "#,##0.####",
    formObj.amount
  )}`;

  eachOnePayEl.textContent = `${symbol} ${splitAmount(
    formObj.amount,
    formObj.splitBy
  )}`;

  splitAmountFormEl.reset();
});

rangeEl.addEventListener("change", (e) => {
  splitNumElArr.forEach((members) => (members.textContent = e.target.value));
});

countryData.forEach((data) => {
  const countryCurrency = data.currency;
  const optgroupEl = document.createElement("optgroup");
  const optEl = document.createElement("option");

  optEl.classList.add("p-2", "m-2");
  optgroupEl.setAttribute(
    "label",
    `${countryCurrency.code} : ${countryCurrency.symbol}`
  );
  optEl.setAttribute("value", countryCurrency.code);
  optEl.textContent = countryCurrency.name;

  optgroupEl.append(optEl);
  currencySelectEl.append(optgroupEl);
});

function splitAmount(amount, splitBy) {
  return numberFormatter("#,##0.####", amount / splitBy);
}

function swapUI(fromEl, toEl) {
  fromEl.classList.add("hidden");
  toEl.classList.remove("hidden");
}
