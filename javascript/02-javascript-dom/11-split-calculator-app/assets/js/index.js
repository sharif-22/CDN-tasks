import { v4 as uuidv4 } from "uuid";
import numberFormatter from "number-formatter";
import countryData from "../../data/country.json";
import { swapUI, getLocalStorage, setLocalStorage } from "./utlis.js";

// DOM
const allFormsArr = document.querySelectorAll("form");
const calculatorFormEl = document.querySelector(".calculatorForm");
const saveTransactionEl = document.querySelector(".saveTransaction");
const editBtnEl = document.querySelector(".editBtn");

const splitAmountFormEl = document.forms.splitAmountForm;
const currencySelectEl = document.getElementById("currency");
const rangeEl = document.querySelector(".range");
const splitNumElArr = document.querySelectorAll(".splitNum");

const totalExpenceEl = document.querySelector(".total-expence");
const eachOnePayEl = document.querySelector(".eachOnePays");

let currentData = [];
const expenceHistory = getLocalStorage();

function splitAmount(amount, splitBy) {
  return numberFormatter("#,##0.####", amount / splitBy);
}

// event listener
splitAmountFormEl.addEventListener("submit", (e) => splitAmountHandler(e));

saveTransactionEl.addEventListener("submit", (e) => saveTransactionHandler(e));

editBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  swapUI(saveTransactionEl, calculatorFormEl);
});

rangeEl.addEventListener("change", (e) => {
  splitNumElArr.forEach((members) => (members.textContent = e.target.value));
});

countryData.forEach((data) => {
  const countryCurrency = data.currency;
  const optgroupEl = document.createElement("optgroup");
  const optEl = document.createElement("option");

  optgroupEl.setAttribute(
    "label",
    `${countryCurrency.code} : ${countryCurrency.symbol}`
  );
  optEl.setAttribute("value", countryCurrency.code);
  optEl.textContent = `${data.name} /${countryCurrency.name}`;

  optgroupEl.append(optEl);
  currencySelectEl.append(optgroupEl);
});

// handlers

function splitAmountHandler(e) {
  e.preventDefault();

  // change ui
  swapUI(calculatorFormEl, saveTransactionEl);

  // get form data
  const formData = new FormData(splitAmountFormEl);
  formData.append("id", uuidv4());
  const formObj = Object.fromEntries(formData.entries());

  // find currency code
  const currentCountry = countryData.filter((symbol) => {
    return formObj.currency === symbol.currency.code;
  });
  const symbol = currentCountry[0].currency.symbol;

  // append data to nxt ui
  totalExpenceEl.textContent = `${symbol}${numberFormatter(
    "#,##0.####",
    formObj.amount
  )}`;

  eachOnePayEl.textContent = `${symbol} ${splitAmount(
    formObj.amount,
    formObj.splitBy
  )}`;

  // push data to global
  currentData = [];
  currentData.unshift({ symbol, ...formObj });
}

function saveTransactionHandler(e) {
  e.preventDefault();

  // get form data
  const formData = new FormData(saveTransactionEl);
  const formObj = Object.fromEntries(formData.entries());

  // organise data
  currentData = [{ ...currentData[0], ...formObj }];
  console.log(currentData);

  // push to local
  expenceHistory.unshift(...currentData);

  setLocalStorage(expenceHistory);
  // change ui

  // reset forms
  allFormsArr.forEach((form) => form.reset());

  // change
  window.location.href = window.location.href.replace("index", "transaction");
}
