document.body.classList.add("bg-red-500");

const inputEl = document.querySelector("input");
const getThumbnailEl = document.querySelector("#getThumbnail");
const imgEl = document.querySelector("img");

getThumbnailEl.addEventListener("click", (e) => {
  e.preventDefault();

  const url = new URL(inputEl.value);
  console.log(url);
  const videoId = url.searchParams.get("v");

  if (url.host == "www.youtube.com") {
    imgEl.src = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  } else {
    inputEl.nextElementSibling.innerText =
      "please past Youtube video url from search bar ";

    setTimeout(() => {
      inputEl.nextElementSibling.innerText = "";
    }, 2000);
  }

  inputEl.value = "";
});
