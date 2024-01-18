function swapUI(fromEl, toEl) {
  fromEl.classList.add("hidden");
  toEl.classList.remove("hidden");
}
function getLocalStorage() {
  let userDetailsArr;
  if (localStorage.getItem("expenceHistory") === null) {
    userDetailsArr = [];
  } else {
    userDetailsArr = JSON.parse(localStorage.getItem("expenceHistory"));
  }
  return userDetailsArr;
}

function setLocalStorage(dataArr) {
  localStorage.setItem("expenceHistory", JSON.stringify(dataArr));
}

export { swapUI, getLocalStorage, setLocalStorage };
