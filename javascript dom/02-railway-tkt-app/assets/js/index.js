const formEl = document.forms.ticketForm;

const addMemberEl = document.querySelector("#addMember");
const passengersListEl = document.querySelector("#passengerList");
const passengersEls = document.querySelectorAll(".passenger");

addMemberEl.addEventListener("click", (e) => {
  // preventing default behaviour
  e.preventDefault();
  let childLength = passengersListEl.children.length + 1;

  // appending html el
  let addMemberHTML = `
  <!-- passengers  -->
  <div>
    <div class="passenger">
      <!-- name field -->
      <div class="flex flex-col gap-3">
        <label for="passenger${childLength}Name">Enter Passenger ${childLength} Name </label>
        <input
          class="passenger p-2"
          type="text"
          name="passenger${childLength}Name"
          id="passenger${childLength}Name"
          placeholder="Enter Passenger Name "
        />
      </div>
      <!-- gender radio  -->
      <div class="flex justify-between p-3">
        <div>
          <input
            type="radio"
            name="passenger${childLength}Gender"
            id="male${childLength}"
            value="male"
          />
          <label for="male${childLength}">Male </label>
        </div>

        <div>
          <input
            type="radio"
            name="passenger${childLength}Gender"
            id="female${childLength}"
            value="female"
          />
          <label for="female${childLength}">Female </label>
        </div>

        <div>
          <input
            type="radio"
            name="passenger${childLength}Gender"
            id="others${childLength}"
            value="others"
          />
          <label for="others${childLength}">Others </label>
        </div>
      </div>
      <!-- age field -->
      <div class="flex flex-col gap-3">
        <label for="passenger${childLength}Age">Enter your Age </label>
        <input
          class="p-2"
          type="number"
          name="passenger${childLength}Age"
          id="passenger${childLength}Age"
          placeholder="Enter your Age "
        />
      </div>
    </div>
    <hr class="my-3" />
  </div>
  `;

  // members upto 5 only
  if (childLength < 6) {
    passengersListEl.innerHTML += addMemberHTML;
  } else {
    console.log("tickes solds upto 5 members only ");
  }
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formEl);

  // console.log(Object.fromEntries(formData)); // return all data in unstructure way
  const formDataObj = Object.fromEntries(formData);

  const passengersObjsArr = [];
  // loop to push individual passengers to arr
  for (let index = 0; index < 6; index++) {
    if (
      formDataObj[`passenger${index}Age`] &&
      formDataObj[`passenger${index}Gender`] &&
      formDataObj[`passenger${index}Name`]
    ) {
      passengersObjsArr.push({
        passengerAge: formDataObj[`passenger${index}Age`],
        passengerGender: formDataObj[`passenger${index}Gender`],
        passengerName: formDataObj[`passenger${index}Name`],
      });
    }
  }
  const journeyData = {
    trainNum: formDataObj["trainNum"],
    toStation: formDataObj["toStation"],
    fromStation: formDataObj["fromStation"],
    dateOfJourney: formDataObj["dateOfJourney"],
    totalPassengers: passengersObjsArr,
  };
  // console.log(journeyData); // structured data for appending to  server
  // converting journeyDate -> JSON
  const jsonData = JSON.stringify(journeyData);
  // console.log("JSON BODY", jsonData);

  // Send to Backend
  const url = "http://localhost:3000/tickets";

  const postMethod = async (json, url) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });
  };
  postMethod(jsonData, url);
  // removing existing inputs
  formEl.reset();
});
