import { githubUrl } from "./util.js";

const mainEl = document.querySelector("main");

function viewProfiles(profile) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let responseData = JSON.parse(this.response);
      console.log(responseData);
      card(
        responseData.avatar_url,
        responseData.name,
        responseData.bio,
        responseData.html_url,
        responseData.followers,
        responseData.following,
        responseData.created_at,
        mainEl
      );
      return responseData;
    }
  };

  xhttp.open("GET", `https://api.github.com/users/${profile}`, true);
  xhttp.send();
}

githubUrl.forEach((profile) => {
  viewProfiles(profile);
});

function card(
  imgSrc,
  name,
  bio,
  profileLink,
  followers,
  following,
  joinedAt,
  appendTo
) {
  // JavaScript
  const divElement = document.createElement("div");
  divElement.classList.add(
    "bg-slate-300",
    "rounded",
    "flex",
    "flex-col",
    "w-64",
    "m-2",
    "p-2"
  );

  const imgElement = document.createElement("img");
  imgElement.classList.add("avatar_url", "rounded-full", "w-24");
  imgElement.src = `${imgSrc}`;
  imgElement.alt = `${name} profile `;

  const nameElement = document.createElement("p");
  nameElement.classList.add("name");
  nameElement.innerText = name;

  const bioElement = document.createElement("p");
  bioElement.classList.add("bio");
  bioElement.innerText = bio;

  const profileUrlElement = document.createElement("a");
  profileUrlElement.classList.add("html_url");
  profileUrlElement.setAttribute("href", `${profileLink}`);

  const followersElement = document.createElement("p");
  const followersSpan = document.createElement("span");
  followersElement.appendChild(followersSpan);
  followersSpan.classList.add("followers");
  followersSpan.textContent = `followers: ${followers} `;

  const followingElement = document.createElement("p");
  const followingSpan = document.createElement("span");
  followingElement.appendChild(followingSpan);
  followingSpan.classList.add("following");
  followingSpan.textContent = `following: ${following} `;

  const createdAtElement = document.createElement("p");
  createdAtElement.classList.add("created_at");
  createdAtElement.textContent = `Joined in : ${joinedAt}`;

  // Append elements to the div
  divElement.appendChild(imgElement);
  divElement.appendChild(nameElement);
  divElement.appendChild(bioElement);
  divElement.appendChild(profileUrlElement);
  divElement.appendChild(followersElement);
  divElement.appendChild(followingElement);
  divElement.appendChild(createdAtElement);

  // Now you can append the `divElement` to your document
  // For example, assuming you have a container with id "container"
  appendTo.appendChild(divElement);
}
