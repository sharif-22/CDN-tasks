const githubProfiles = [
  "esakki2104prsnl",
  "vk2401",
  "suriyamassmsd",
  "riyaz1000",
  "hema-venkat3",
  "yrd369",
  "mushkir",
  "bearcin46",
  "dineshdevelope",
  "jeya-rosini",
  "swethadsalvatore",
  "mshajid",
  "muthuakalya",
  "vedhatech002",
  "danielace1",
  "sharif-22",
  "gayathrihg",
  "kishorekumar-kp",
  "muthukumarimoorthi",
];

function cardUi(
  imgSrc,
  name,
  login,
  profileLink,
  repo,
  followers,
  following,
  joinedAt,
  appendTo
) {
  // JavaScript
  const divElement = document.createElement("div");
  divElement.classList.add("card");

  const imgElement = document.createElement("img");
  imgElement.classList.add("avatar_url", "rounded-full", "w-24");
  imgElement.src = `${imgSrc}`;
  imgElement.alt = `${name} profile `;

  const nameElement = document.createElement("p");
  nameElement.classList.add("name");
  nameElement.innerText = name;

  // const logInElement = document.createElement("p");
  // logInElement.classList.add("login");
  // logInElement.innerText = login;

  const profileUrlElement = document.createElement("a");
  profileUrlElement.classList.add("html_url");
  profileUrlElement.setAttribute("href", `${profileLink}`);
  profileUrlElement.setAttribute("target", "_blank");
  profileUrlElement.innerHTML = `<img src="https://api.iconify.design/mdi:github.svg?color=%23ffffff" class="w-8" /> ${login}`;

  const profileRepoElement = document.createElement("p");
  profileRepoElement.classList.add("public_repos");
  profileRepoElement.innerHTML = `<img src="https://api.iconify.design/eos-icons:repositories.svg?color=%23ffffff" class="w-8" /> ${repo} Public Repositories`;

  const followElement = document.createElement("p");

  followElement.classList.add("flex", "flex-col", "gap-1");

  const followersSpan = document.createElement("span");
  followElement.appendChild(followersSpan);
  followersSpan.classList.add("followers");
  followersSpan.innerHTML = `<img src="https://api.iconify.design/ic:twotone-people-alt.svg?color=%23000000" /> : <span class="font-medium text-slate-700">${followers}</span> Followers`;

  // const followingElement = document.createElement("p");
  const followingSpan = document.createElement("span");
  followElement.appendChild(followingSpan);
  followingSpan.classList.add("following");
  followingSpan.innerHTML = `<img src="https://api.iconify.design/fluent:people-checkmark-24-regular.svg?color=%23000000"/>: <span class="font-medium text-slate-700">${following}</span> Following`;

  const createdAtElement = document.createElement("p");
  createdAtElement.classList.add("created_at");
  createdAtElement.textContent = `Joined in : ${joinedAt.slice(0, 4)}`;

  // Append elements to the div
  divElement.appendChild(imgElement);
  divElement.appendChild(nameElement);
  // divElement.appendChild(logInElement);
  divElement.appendChild(profileUrlElement);
  divElement.appendChild(profileRepoElement);
  divElement.appendChild(followElement);
  divElement.appendChild(createdAtElement);

  // Now you can append the `divElement` to your document
  // For example, assuming you have a container with id "container"
  appendTo.appendChild(divElement);
}

export { githubProfiles, cardUi };
