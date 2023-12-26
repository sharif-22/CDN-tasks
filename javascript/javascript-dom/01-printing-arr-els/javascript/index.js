// Task : printing each list to a single line paragraph
// Task : dynamic styleing in dom

// Dom elements
const skillsEls = document.querySelectorAll(".skills");
const skillInputEl = document.getElementById("skillInput");
const paragraphEls = document.getElementsByTagName("p");
const submitEl = document.getElementById("submit");

// events
submitEl.addEventListener("click", (e) => {
  e.preventDefault();
  paragraphEls[0].innerText = "I have some Knowledge in :";

  // console.log(skillsEls[0].childNodes);
  const skillsArr = [];
  skillsEls[0].childNodes.forEach((element) => {
    if (element.tagName === "LI") {
      skillsArr.push(element.innerText);
    }
  });
  skillsArr.forEach((element, index) => {
    index !== skillsArr.length - 1
      ? // += addition increment &  concatenation
        (paragraphEls[0].innerText += ` ${element},`)
      : (paragraphEls[0].innerText += ` ${element} etc...`);
  });

  // ui style
  paragraphEls[0].classList.remove("d-none");
  paragraphEls[0].classList.add("d-block");
  // paragraphEls[0].style.display = "block";

  setTimeout(() => {
    // ui style
    paragraphEls[0].classList.remove("d-block");
    paragraphEls[0].classList.add("d-none");
  }, 2000);
});

skillInputEl.addEventListener("keypress", (e) => {
  if (e.code !== "Enter") {
    return;
  }
  const skill = skillInputEl.value.trim();
  const liEl = document.createElement("li");
  liEl.textContent = skill;

  skillsEls[0].appendChild(liEl);
  skillInputEl.value = "";
  e.preventDefault();
});
