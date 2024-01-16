// dom
const locationFormEl = document.forms.locationForm;
const storesEl = document.querySelector(".stores");
const inputEl = document.querySelector("input");
const alertEl = document.querySelector(".alert-toast");

// event listener
locationFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(locationFormEl);

  // converting form data into a single obj
  const complaintObj = Object.fromEntries(formData.entries());
  let result = await getDataFromApi(complaintObj.location);
  alertEl.classList.add("hidden");

  result.data.forEach((store) => {
    const name = store.name;
    const address = store.address;
    const phone = store.phone;
    // console.log(store);

    storesEl.append(createCard("Domino's Pizza", name, address, phone));
  });
  locationFormEl.reset();
});

inputEl.addEventListener("change", (e) => {
  e.preventDefault();
  storesEl.innerHTML = " ";
});

// functions

async function getDataFromApi(city) {
  const url = `https://api.dominos.co.in/locator-service/ve2/cities/${city.toUpperCase()}/stores`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      alertEl.classList.remove("hidden");
      inputEl.value = "";
      throw new Error(`Failed to load data. Status code : ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

function createCard(h2Text, h3Text, pText, phoneNumber) {
  // Create a new div element
  let cardDiv = document.createElement("div");
  cardDiv.className = "card border border-red-500 text-white";

  // Create a new div for card body
  let cardBodyDiv = document.createElement("div");
  cardBodyDiv.className = "card-body";

  // Create an h2 element for card title
  let cardTitleH2 = document.createElement("h2");
  cardTitleH2.className = "card-title text-2xl";
  cardTitleH2.textContent = h2Text;

  // Create an h3 element for location
  let locationH3 = document.createElement("h3");
  locationH3.className = "text-lg";
  locationH3.textContent = h3Text;

  // Create a p element for address
  let addressP = document.createElement("p");
  addressP.textContent = pText;

  // Create a div for card actions
  let cardActionsDiv = document.createElement("div");
  cardActionsDiv.className = "card-actions justify-end";

  // Create a link for ordering with a button
  let orderLink = document.createElement("a");
  // orderLink.href = `tel:${
  //   phoneNumber[0] == "+" ? phoneNumber : "+91" + phoneNumber
  // }`;
  orderLink.href = "tel:" + phoneNumber;
  let orderButton = document.createElement("button");
  orderButton.className = "btn text-white";
  orderButton.textContent = "Order now";

  // Append elements to their respective parents
  orderLink.appendChild(orderButton);
  cardActionsDiv.appendChild(orderLink);
  cardBodyDiv.appendChild(cardTitleH2);
  cardBodyDiv.appendChild(locationH3);
  cardBodyDiv.appendChild(addressP);
  cardBodyDiv.appendChild(cardActionsDiv);
  cardDiv.appendChild(cardBodyDiv);

  return cardDiv;
}
