import numberFormatter from "number-formatter";
import { getLocalStorage, setLocalStorage } from "./utlis";
const deleteCardEl = document.querySelector(".delete-card");
const deleteEl = document.querySelector(".delete");
const cancelEl = document.querySelector(".cancel");
const transactionsEl = document.querySelector(".transactions");
const transactionNullEl = document.querySelector(".transactionNull");

let oldTransactions = getLocalStorage();
let ID = "";

// Delete
deleteEl.addEventListener("click", () => {
  deleteCardEl.classList.add("hidden");
  deleteDataFromStorage(ID);
  displayTransaction();
});
cancelEl.addEventListener("click", () => deleteCardEl.classList.add("hidden"));

// transaction cards html template
function transactionCardTemplate(
  id,
  title,
  totalExpence,
  eachOnePays,
  splitBy,
  description = "Oops! Description is not provided  "
) {
  const transactionCardEl = document.createElement("div");
  transactionCardEl.classList.add(
    "transactionCard",
    "bg-white",
    "p-4",
    "rounded",
    "border",
    "space-y-4",
    "shadow"
  );
  transactionCardEl.id = id;

  const transactionTitle = document.createElement("h1");
  transactionTitle.classList.add("text-3xl");
  transactionTitle.textContent = `${title}`;

  const transactionDescription = document.createElement("p");
  transactionDescription.textContent = `${description}`;

  const transactionExpenceInfo = document.createElement("div");
  transactionExpenceInfo.classList.add(
    "flex",
    "justify-between",
    "items-center"
  );

  var iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  iconSvg.setAttribute("width", "22");
  iconSvg.setAttribute("height", "22");
  iconSvg.setAttribute("viewBox", "0 0 24 24");

  var iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  iconPath.setAttribute("fill", "#fff");
  iconPath.setAttribute(
    "d",
    "M12 12.75c1.63 0 3.07.39 4.24.9c1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73c1.17-.52 2.61-.91 4.24-.91M4 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1c-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1c.4.68.63 1.46.63 2.29V18H24zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3"
  );

  iconSvg.appendChild(iconPath);

  iconSvg.classList.add("rounded-full", "absolute", "top-2");

  const transactionTotalExpence = document.createElement("h1");
  transactionTotalExpence.classList.add("text-xl");
  transactionTotalExpence.innerHTML = `Total Expence : <span class="total-expence">${totalExpence}</span>`;

  const transactionSplitBtn = document.createElement("div");
  transactionSplitBtn.classList.add(
    "grid",
    "place-items-center",
    "relative",
    "text-primary-white",
    "bg-primary-100",
    "hover:bg-primary-200",
    "cursor-pointer",
    "w-14",
    "h-14",
    "rounded-full"
  );

  const transactionSplitSpan = document.createElement("span");
  transactionSplitSpan.classList.add(
    "font-semibold",
    "text-lg",
    "absolute",
    "bottom-2",
    "splitNum"
  );

  transactionSplitSpan.textContent = ` ${splitBy}`;
  transactionSplitBtn.append(iconSvg, transactionSplitSpan);

  const transactionEachPay = document.createElement("p");
  transactionEachPay.textContent = `Each need to pay : ${eachOnePays}`;

  const transactionDeleteBtn = document.createElement("button");
  transactionDeleteBtn.classList.add(
    "btn",
    "w-full",
    "text-xl",
    "hover:bg-red-500",
    "hover:text-white"
  );
  transactionDeleteBtn.textContent = "Delete Transaction";
  transactionDeleteBtn.addEventListener("click", deleteAlertHandler);
  //   append

  //   transactionSplitBtn.append(iconSvg, transactionSplitSpan);

  transactionExpenceInfo.append(transactionTotalExpence, transactionSplitBtn);

  transactionCardEl.append(
    transactionTitle,
    transactionDescription,
    transactionExpenceInfo,
    transactionEachPay,
    transactionDeleteBtn
  );

  return transactionCardEl;
}

// delete alert dialog
function deleteAlertHandler(e) {
  e.preventDefault();
  deleteCardEl.classList.remove("hidden");
  const cardEl = e.target.closest(".transactionCard");
  ID = cardEl.id;
}

// displaying existing data from local storage
function displayTransaction() {
  oldTransactions = getLocalStorage();

  if (oldTransactions.length === 0) {
    transactionNullEl.classList.remove("hidden");
  } else {
    transactionNullEl.classList.add("hidden");

    transactionsEl.innerHTML = "";
    oldTransactions.forEach((element) => {
      let eachOnePay = parseInt(element.amount) / parseInt(element.splitBy);
      let id = element.id;
      let title = element.expenseTitle;
      let amount = element.amount;
      let splitBy = element.splitBy;
      let description = element.description;

      if (description.length >= 3) {
        transactionsEl.append(
          transactionCardTemplate(
            id,
            title,
            `${element.symbol}  ${numberFormatter("#,##0.####", amount)}`,
            `${element.symbol} ${numberFormatter(
              "#,##0.####",
              eachOnePay.toFixed(2)
            )}`,
            splitBy,
            description
          )
        );
      } else {
        transactionsEl.append(
          transactionCardTemplate(
            id,
            title,
            `${element.symbol}  ${numberFormatter("#,##0.####", amount)}`,
            `${element.symbol} ${numberFormatter(
              "#,##0.####",
              eachOnePay.toFixed(2)
            )}`,
            splitBy
          )
        );
      }
    });
  }
}
displayTransaction();

// Delete logic
function deleteDataFromStorage(id) {
  const localData = getLocalStorage();
  const otherRecords = localData.filter((issue) => issue.id != id);
  setLocalStorage(otherRecords);
  transactionsEl.innerHTML = "";
  displayTransaction();
}

const navMenuEl = document.querySelector(".navmenu");
const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", () => {
  let isChecked = navToggler.children[0].checked;

  if (isChecked) {
    navMenuEl.classList.remove("hidden");
    navMenuEl.classList.add("mobileNavParent");
    navMenuEl.children[0].classList.add("mobileNav");
  } else {
    navMenuEl.children[0].classList.remove("mobileNav");
    navMenuEl.classList.add("hidden");
  }
});
