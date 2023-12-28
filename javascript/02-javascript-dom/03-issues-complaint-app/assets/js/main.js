import JustValidate from "just-validate";
import { validate, swapUi, Engineers } from "./utils";

//DOM elements
const complaintsFormEl = document.forms.complaints;
const viewTicketEl = document.querySelector(".ticket-view");
const riseNewTicketBtnEl = document.querySelector(".rise-new-ticket");
const ticketCardEl = document.querySelector(".ticket-card");

// global variables
let currentTicketObj = {};
const myDate = new Date();

const validateForm = new JustValidate("#complaints", {
  errorFieldCssClass: ["border-double", "border-4", "border-rose-500"],
  focusInvalidField: true,
});
validate(validateForm);

validateForm.onSuccess((event) => {
  event.preventDefault();
  // getting form data
  const formData = new FormData(complaintsFormEl);

  // converting form data into a single obj
  const complaintObj = Object.fromEntries(formData.entries());
  console.log(complaintObj);

  currentTicketObj = complaintObj;

  swapUi(complaintsFormEl, viewTicketEl);
  complaintsFormEl.reset();

  // tkt ui content
  const ticketChild = ticketCardEl.children;
  const randEngineer = Engineers.getRandomEngineer();

  // displaying wifi num and issue type
  ticketChild.item(0).children[0].innerHTML = currentTicketObj.wifiNum;
  ticketChild.item(1).children[0].innerHTML = currentTicketObj.issue;
  ticketChild.item(2).children[0].innerHTML = `${
    myDate.getDate() + Math.round(Math.random() * 4)
  }/${myDate.getMonth() + 1}/${myDate.getFullYear()}`;
  ticketChild.item(3).children[0].innerHTML = randEngineer.name;
  ticketChild.item(4).children[0].innerHTML = randEngineer.contact;
  ticketChild
    .item(4)
    .children[0].setAttribute("href", `tel:+${randEngineer.contact}`);
  // randomly selecting Engineer

  // event.currentTarget.submit();
});

riseNewTicketBtnEl.addEventListener("click", () =>
  swapUi(viewTicketEl, complaintsFormEl)
);
