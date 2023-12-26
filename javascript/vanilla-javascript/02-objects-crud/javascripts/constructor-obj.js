//form dom elements
const formEls = document.querySelector(".form-container");
const fullnameEl = document.getElementById("fullname");
const fullNameErrEl = document.querySelector(".fullname small");
const bornInEl = document.getElementById("born-in");
const bornInErrEl = document.querySelector(".born-in small");
const skillsEl = document.getElementById("skills");
const skillsErrEl = document.querySelector(".skills small");
const submitEl = document.getElementById("submit");

// profile dom elements
const profileEl = document.querySelector(".profile");
const profileNameEl = document.querySelector(".profile-name");
const profileAgeEl = document.querySelector(".profile-age");
const profileSkillsEl = document.querySelector(".profile-skills");
const profileEditorBtnEl = document.querySelector(".profile-editor");
const profileDeleteBtnEl = document.querySelector(".profile-delete");

// events
submitEl.addEventListener("click", (e) => {
  e.preventDefault();

  // storeing the inputs to var
  let fullName = fullnameEl.value;
  let bornIn = parseInt(bornInEl.value);
  let skills = skillsEl.value.split(" ");

  // validating the inputs

  // validating user name
  if (fullName.length > 2) {
    fullNameErrEl.textContent = "";
    // validating the age of user
    if (bornIn <= new Date().getFullYear() && bornIn >= 1920) {
      // validating the skills
      if (skillsEl.value !== "") {
        // updating the error state
        skillsErrEl.textContent = "";
        bornInErrEl.textContent = "";

        // assigning the user inputs to {}
        const person = new Person(fullName, bornIn, skills);

        //  swaping the Ui
        formEls.classList.add("d-none");
        profileEl.classList.remove("d-none");

        // profile Ui content
        profileNameEl.textContent = person.name;
        profileAgeEl.textContent = `Age : ${person.dob()}`;
        // pushing elements to ol before that removing the existing elements
        profileSkillsEl.innerHTML = "";
        // pushing the existing elements and new element
        person.skills.forEach((element) => {
          // removing the last empty spaces in array
          let skillsLength = person.skills.length;
          if (person.skills[skillsLength - 1] === "") {
            person.skills.pop();
          }
          profileSkillsEl.innerHTML += `<li class="skill-btn">${element}</li>`;
        });
      }
      // err msg for invalid skill
      else {
        skillsErrEl.textContent = "you must enter more than 1 skill";
      }
    }
    // err msg for invalid year
    else {
      bornInErrEl.textContent = "give the correct birth Year ";
    }
  }
  // err msg for inavlid name
  else {
    if (fullnameEl.value === "") {
      fullNameErrEl.textContent = `Enter a valid name `;
    } else {
      fullNameErrEl.textContent = `${fullName} is Not a valid name `;
    }
  }
});

// update
profileEditorBtnEl.addEventListener("click", () => {
  //  swaping the Ui
  formEls.classList.remove("d-none");
  profileEl.classList.add("d-none");
});

// delete
profileDeleteBtnEl.addEventListener("click", () => {
  // storeing the inputs to var
  fullnameEl.value = "";
  bornInEl.value = "";
  skillsEl.value = "";

  //  swaping the Ui
  formEls.classList.remove("d-none");
  profileEl.classList.add("d-none");
});

// creating Constructor object person
class Person {
  constructor(name, birthYear, skills) {
    this.name = name;
    this.birthYear = birthYear;
    this.skills = skills;
  }
  // object method to get age
  dob() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.birthYear;
    return age;
  }
}
