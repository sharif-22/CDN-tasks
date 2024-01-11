import { githubProfiles, cardUi, formatDate, swapUI } from "./util.js";

const cardsEl = document.querySelector(".cards");
const repoPageEl = document.querySelector(".repo-page");
const backToCardsEl = document.getElementById("backToCards");

function viewProfiles(profile) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let responseData = JSON.parse(this.response);
      // console.log(responseData);
      cardUi(
        responseData.avatar_url,
        responseData.name,
        responseData.login,
        responseData.html_url,
        responseData.public_repos,
        responseData.followers,
        responseData.following,
        responseData.created_at,
        cardsEl
      );
      return responseData;
    }
  };

  xhttp.open("GET", `https://api.github.com/users/${profile}`, true);
  xhttp.send();
}

githubProfiles.forEach((profile) => {
  viewProfiles(profile);
});

setTimeout(() => {
  const repos = document.querySelectorAll(".public_repos");
  repos.forEach((user) => {
    user.addEventListener("click", () => {
      swapUI(cardsEl, repoPageEl);
      backToCardsEl.classList.remove("hide", "d-none");
      const nearestdiv = user.closest("div");
      const UserName = nearestdiv.querySelector("a").textContent.trim("");
      fetch(`https://api.github.com/users/${UserName}/repos`)
        .then((res) => {
          return res.json();
        })
        .then((obj) => {
          // console.log(obj);
          repoPageEl.innerHTML = "";
          obj.forEach((repo, index) => {
            repoPageEl.innerHTML += `

            <div class="repo-card">
          
              <div class="repo-card__count"># ${index + 1}</div>

              <div class="repo-card__info">
                <a class="repo-card__title"
                   href="${repo.html_url}"
                   target="_blank"
                >
                <img src="https://api.iconify.design/iconoir:repository.svg" alt="repo link"/>
                 ${repo.name}
                </a>
                <a class="repo-card__owner" 
                   href="https://github.com/${repo.owner.login}"
                   target="_blank"
                   >
                  
                   ${repo.owner.login}
                </a>
                <p class="repo-card__description">${
                  repo.description == null
                    ? `Oops! the repository description has not been provided by the author:${repo.owner.login} `
                    : repo.description
                }</p>
                <p class="repo-card__language">
                  ${
                    repo.language == null
                      ? "Markdown"
                      : `The majority of lines are written in : ${repo.language}`
                  }
                </p>
                <p class="repo-card__created_at">
                  Created in : ${formatDate(repo.created_at)}
                </p>
                <p class="repo-card__pushed_at">
                  Latest Update in : ${formatDate(repo.pushed_at)}
                </p>
              </div>
          
            </div>
            
            `;
            // console.log(repo);
          });
        });
    });
  });
}, 2000);

backToCardsEl.addEventListener("click", (e) => {
  // console.log(e);
  swapUI(repoPageEl, cardsEl);
  backToCardsEl.classList.add("hide", "d-none");
});
