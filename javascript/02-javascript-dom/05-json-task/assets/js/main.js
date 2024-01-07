// https://xsgames.co/randomusers/

import data from "../../data/data.json";

const mainEl = document.querySelector("main");

console.table(data);
function genderImg(gender) {
  return gender.toLocaleLowerCase();
}

function createCardEl(fullName, gender, title, specializations, age = null) {
  // create El
  const divEl = document.createElement("div");
  const fullNameEl = document.createElement("p");
  const titleEl = document.createElement("p");
  const interestEl = document.createElement("p");
  const imgEl = document.createElement("img");
  const btnEl = document.createElement("button");

  // set attribute
  imgEl.setAttribute(
    "src",
    `https://xsgames.co/randomusers/avatar.php?g=${genderImg(gender)}`
  );

  // class
  divEl.classList.add(
    "px-4",
    "pb-4",
    "space-y-1",
    "pt-2",
    "m-2",
    "bg-slate-200",
    "hover:bg-slate-300",
    "rounded",
    "relative",
    "h-72"
  );

  imgEl.classList.add("w-20", "rounded-full", "m-2");
  fullNameEl.classList.add("font-semibold", "flex", "justify-between");
  btnEl.classList.add("btn");

  //add some values
  fullNameEl.innerHTML = `<span>${fullName}</span> <span class="font-normal text-gray-500"> ${gender.charAt(
    0
  )} - ${age} </span>`;

  titleEl.innerText = title;
  interestEl.innerText = `Talks about : #${specializations.join(" | #")}`;
  btnEl.innerText = "Follow";

  //appending el
  divEl.append(imgEl, fullNameEl, titleEl, interestEl, btnEl);
  mainEl.append(divEl);
}

data.forEach((profile) => {
  createCardEl(
    profile.fullName,
    profile.gender,
    profile.employeeDetails.position,
    profile.employeeDetails.specializations,
    profile.age
  );
});
