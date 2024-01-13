const adviceEl = document.querySelector("#advice");
const API_URL = "https://api.adviceslip.com/advice";
const refreshBtnEl = document.querySelector(".refreshBtn");
const adviceCardEl = document.querySelector(".advice-card");

async function getAdvices() {
  try {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Some network error: ", error);
  }
}

const adviceData = await getAdvices();

adviceEl.textContent = adviceData.slip.advice;

refreshBtnEl.addEventListener("click", () => {
  getAdvices().then((newAdvice) => {
    console.log(newAdvice);
    adviceEl.textContent = newAdvice.slip.advice;
  });
});
