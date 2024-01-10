import { githubProfiles, cardUi } from "./util.js";

const mainEl = document.querySelector("main");

function viewProfiles(profile) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let responseData = JSON.parse(this.response);
      console.log(responseData);
      cardUi(
        responseData.avatar_url,
        responseData.name,
        responseData.login,
        responseData.html_url,
        responseData.public_repos,
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

githubProfiles.forEach((profile) => {
  viewProfiles(profile);
});
