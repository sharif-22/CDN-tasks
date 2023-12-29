import JustValidate from "just-validate";
import { v4 as uuidv4 } from "uuid";
import {
  validate,
  currentDate,
  issueResolvedDate,
  swapUi,
  Engineers,
} from "./utils";

//DOM elements
const complaintsFormEl = document.forms.complaints;
const riseNewTicketBtnEls = document.querySelectorAll(".rise-new-ticket");
const localStorageKey = "issueData";

const ticketDetails = document.querySelector(".ticket-details");
const viewTicketEl = document.querySelector(".ticket-view");
const viewCurrentTkt = document.querySelector(".view-current-ticket");
const tktIdEl = document.querySelector("h1 span");

const TableViewEl = document.querySelector(".table-view");
const viewExistingTkt = document.querySelector(".view-existing-ticket");

const tBodyEl = document.querySelector("tbody");

// global variables
let currentTicketObj = {};
let existingIssueArray = [];

const validateForm = new JustValidate("#complaints", {
  errorFieldCssClass: ["border-double", "border-4", "border-rose-500"],
  focusInvalidField: true,
});
validate(validateForm);

validateForm.onSuccess((event) => {
  event.preventDefault();
  // getting form data
  const formData = new FormData(complaintsFormEl);
  const randEngineer = Engineers.getRandomEngineer();

  // setting some keys to acess

  formData.append("id", uuidv4());
  formData.append("createdAt", currentDate());
  formData.append("resolvedAt", issueResolvedDate());
  formData.append("resolvedAt", issueResolvedDate());
  formData.append("engineer", randEngineer.name);
  formData.append("engineerCell", randEngineer.contact);
  // converting form data into a single obj
  const complaintObj = Object.fromEntries(formData.entries());
  console.log(complaintObj);

  currentTicketObj = complaintObj;

  const newIssueData = [];
  // Get existing localStorage value, if it's exist!
  if (localStorage.getItem("issueData")) {
    const existingIssueData = localStorage.getItem("issueData");
    // Parse that string into Javascript value
    existingIssueArray = JSON.parse(existingIssueData);
    existingIssueArray.unshift(currentTicketObj);
    // push the new array (which has all the info to the localstorage)
    localStorage.setItem(localStorageKey, JSON.stringify(existingIssueArray));

    tBodyEl.innerHTML = "";
    existingIssueArray.map((obj, i) => {
      tBodyEl.append(createTr(obj, i + 1));
    });
  } else {
    newIssueData.push(currentTicketObj);
    localStorage.setItem(localStorageKey, JSON.stringify(newIssueData));
    // localStorage.setItem(localStorageKey, newIssueData);
  }

  swapUi(complaintsFormEl, viewTicketEl);
  complaintsFormEl.reset();

  tktIdEl.innerText = currentTicketObj.id.slice(25);
  viewTktCard();

  // event.currentTarget.submit();
});

// form ui
riseNewTicketBtnEls[0].addEventListener("click", () => {
  swapUi(viewTicketEl, complaintsFormEl);
  swapUi(TableViewEl, complaintsFormEl);
});
riseNewTicketBtnEls[1].addEventListener("click", () => {
  swapUi(viewTicketEl, complaintsFormEl);
  swapUi(TableViewEl, complaintsFormEl);
});

// tkt card ui
viewCurrentTkt.addEventListener("click", () => {
  swapUi(TableViewEl, viewTicketEl);
  viewTktCard();
});

viewExistingTkt.addEventListener("click", () => {
  swapUi(viewTicketEl, TableViewEl);

  // dispaying from local
  const existingIssueData = localStorage.getItem("issueData");
  // Parse that string into Javascript value
  existingIssueArray = JSON.parse(existingIssueData);
  tBodyEl.innerHTML = "";
  existingIssueArray.map((obj, i) => {
    tBodyEl.append(createTr(obj, i + 1));
  });

  displayIssueList();
  viewTktCard();
});

// tkt ui content
function viewTktCard() {
  const ticketChild = ticketDetails.children;

  ticketChild.item(0).children[0].innerText = currentTicketObj.wifiNum;
  ticketChild.item(1).children[0].innerText = currentTicketObj.issue;
  ticketChild.item(2).children[0].innerText = currentTicketObj.resolvedAt;
  ticketChild.item(3).children[0].innerText = currentTicketObj.engineer;
  ticketChild.item(4).children[0].innerText = currentTicketObj.engineerCell;
  ticketChild
    .item(4)
    .children[0].setAttribute("href", `tel:+${currentTicketObj.engineerCell}`);
}

function createTr(data, i) {
  const tr = document.createElement("tr");

  tr.classList.add("tr");

  const snoTd = document.createElement("td");
  const issueTd = document.createElement("td");
  const createdAtTd = document.createElement("td");
  const engineerTd = document.createElement("td");
  const engineerCellTd = document.createElement("td");
  const resolvedAtTd = document.createElement("td");
  const tdBtns = document.createElement("td");
  tdBtns.innerHTML = `
  <button type="button" class="td-btn-red">delete</button>`;
  const deleteBtnEl = document.createElement("button");

  deleteBtnEl.className =
    "px-2 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm";
  deleteBtnEl.textContent = "Delete";

  deleteBtnEl.addEventListener("click", (e) => {
    deletePastIssues(data);
  });

  tdBtns.append(deleteBtnEl);

  snoTd.classList.add("td");
  snoTd.innerText = i;

  issueTd.classList.add("td");
  issueTd.innerText = data["issue"];

  createdAtTd.classList.add("td");
  createdAtTd.innerText = data["createdAt"];

  engineerTd.classList.add("td");
  engineerTd.innerText = data["engineer"];

  engineerCellTd.classList.add("td");
  engineerCellTd.innerText = data["engineerCell"];

  resolvedAtTd.classList.add("td");
  resolvedAtTd.innerText = data["resolvedAt"];

  tdBtns.classList.add("td");

  tr.append(
    snoTd,
    issueTd,
    createdAtTd,
    engineerTd,
    engineerCellTd,
    resolvedAtTd,
    tdBtns
  );

  return tr;
}

function deletePastIssues(issueObj) {
  console.log(issueObj);
  const existingData = localStorage.getItem(localStorageKey);

  const DataObj = JSON.parse(existingData);

  const otherRecords = DataObj.filter((issue) => issue.id != issueObj.id);
  // Push it to localstorage again, this time, i'm deleting that record (courierRequestId)
  localStorage.setItem(localStorageKey, JSON.stringify(otherRecords));

  displayIssueList();
}

function displayIssueList() {
  // dispaying from local
  const existingIssueData = localStorage.getItem("issueData");
  // Parse that string into Javascript value
  existingIssueArray = JSON.parse(existingIssueData);
  tBodyEl.innerHTML = "";
  existingIssueArray.map((obj, i) => {
    tBodyEl.append(createTr(obj, i + 1));
  });

  if (tBodyEl.children.length == 0) {
    tBodyEl.parentElement.classList.add("hidden");
    tBodyEl.parentElement.nextElementSibling.classList.remove("hidden");
  } else {
    tBodyEl.parentElement.classList.remove("hidden");
    tBodyEl.parentElement.nextElementSibling.classList.add("hidden");
  }
}
