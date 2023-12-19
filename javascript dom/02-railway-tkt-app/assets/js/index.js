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
  console.log(Object.fromEntries(formData));

  // const { passenger1Age, passenger1Gender, passenger1Name } =
  //   Object.fromEntries(formData);

  // const { passenger2Age, passenger2Gender, passenger2Name } =
  //   Object.fromEntries(formData);
  // const { passenger3Age, passenger3Gender, passenger3Name } =
  //   Object.fromEntries(formData);
  // const { passenger4Age, passenger4Gender, passenger4Name } =
  //   Object.fromEntries(formData);
  // const { passenger5Age, passenger5Gender, passenger5Name } =
  //   Object.fromEntries(formData);

  // const dbObj = {
  //   passengerList: [
  //     {
  //       passenger1Name: passenger1Name,
  //       passenger1Age: passenger1Age,
  //       passenger1Gender: passenger1Gender,
  //     },
  //     {
  //       passenger2Name: passenger2Name,
  //       passenger2Age: passenger2Age,
  //       passenger2Gender: passenger2Gender,
  //     },
  //     {
  //       passenger3Name: passenger3Name,
  //       passenger3Age: passenger3Age,
  //       passenger3Gender: passenger3Gender,
  //     },
  //     {
  //       passenger4Name: passenger4Name,
  //       passenger4Age: passenger4Age,
  //       passenger4Gender: passenger4Gender,
  //     },
  //     {
  //       passenger5Name: passenger5Name,
  //       passenger5Age: passenger5Age,
  //       passenger5Gender: passenger5Gender,
  //     },

  //     ...Object.fromEntries(formData),
  //   ],
  // };

  // console.log(dbObj);

  // console.log({ arr: [...formData.entries()] });
  // JSON
  // const jsonData = JSON.stringify(Object.fromEntries(formData));
  // Send to Backend
  // console.log("JSON BODY", jsonData);
});
