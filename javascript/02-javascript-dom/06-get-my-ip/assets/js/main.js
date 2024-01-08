const ipEl = document.querySelector(".ip");

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    if (this.status === 200) {
      ipEl.innerHTML = `<div class='ok'> ${xhr.responseText} </div>`;
      console.log(xhr);
    } else {
      ipEl.innerHTML = `<div class='notOk'>COULDN'T GET YOUR IP. <a href="/" class="p-3 bg-blue-500 m-2 block w-fit rounded">Retry </a> </div>`;
    }
  }
};
xhr.open(
  "GET",
  "https://cors-anywhere.herokuapp.com/https://ipv4.icanhazip.com/"
);
xhr.send();
