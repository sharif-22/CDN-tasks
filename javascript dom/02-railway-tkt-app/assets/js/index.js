document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.forms.ticketForm;

  const addPassengersBtnEl = document.querySelector("#addPassengers");
  const passengersListEl = document.querySelector("#passengerList");
  const passengersEls = document.querySelectorAll(".passenger");

  addPassengersBtnEl.addEventListener("click", (e) => {
    e.preventDefault();
    let childLength = passengersListEl.children.length + 1;

    // appending html el
    const divEl = document.createElement("div");

    const nameEl = createInput(
      childLength,
      `passenr ${childLength} Name`,
      "text",
      `Enter passenger ${childLength} Name`
    );
    const gender = ["Male", "Female", "Others"];
    const ageEl = createInput(
      childLength,
      `passenger ${childLength} Age`,
      "number",
      `Enter passenger ${childLength} Age`
    );

    // members upto 5 only
    if (childLength < 6) {
      divEl.append(nameEl, radioCollection(gender, childLength), ageEl);
    } else {
      console.log("tickes solds upto 5 members only ");
    }
    passengersListEl.append(divEl);

    function createInput(count, passengerData, inputType, labelTxt) {
      // create el
      const divEl = document.createElement("div");
      const labelEl = document.createElement("label");
      const inputEl = document.createElement("input");
      const smallEl = document.createElement("small");

      // add classes
      divEl.classList.add("flex", "flex-col", "gap-3");
      inputEl.classList.add("passenger", "p-2");

      // setting attributes
      if (inputType == "number" && passengerData == `passenger${count}Age`) {
        inputEl.setAttribute("min", 0);
        inputEl.setAttribute("max", 110);
      }

      labelEl.setAttribute("for", passengerData);

      inputEl.setAttribute("type", inputType);
      inputEl.setAttribute("id", passengerData);
      inputEl.setAttribute("name", passengerData);
      inputEl.setAttribute("placeholder", `Enter Passenger ${count} Age `);
      inputEl.setAttribute("required", "required");

      labelEl.innerText = labelTxt;

      //   appending
      divEl.append(labelEl, inputEl, smallEl);

      return divEl;
    }

    function radioCollection(arr, count) {
      const divEl = document.createElement("div");
      const smallEl = document.createElement("small");

      divEl.classList.add("flex", "justify-between", "p-3");

      for (let index = 0; index < arr.length; index++) {
        divEl.appendChild(
          createRadioButton(count, arr[index], arr[index], arr[index])
        );
      }
      divEl.append(smallEl);
      return divEl;
    }

    function createRadioButton(count, id, value, labelText) {
      let name = `passenger${count}Gender`;

      var radioDiv = document.createElement("div");

      var input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("name", name);
      input.setAttribute("id", `${id.toLowerCase()}${count}`);
      input.setAttribute("value", value.toLowerCase());
      input.setAttribute("required", "required");

      input.style.margin = "6px";

      var label = document.createElement("label");
      label.setAttribute("for", `${id.toLowerCase()}${count}`);
      label.textContent = labelText;

      radioDiv.append(input, label);

      return radioDiv;
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
      passengersDetails: passengersObjsArr,
    };

    // console.log(journeyData); // structured data for appending to  server
    // converting journeyDate -> JSON
    const jsonData = JSON.stringify(journeyData);
    console.log("JSON BODY", jsonData);

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
    // formEl.reset();
  });
  // document.addEventListener("", () => {
  formEl.addEventListener("input", (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    // console.log(Object.fromEntries(formData)); // return all data in unstructure way
    const formDataObj = Object.fromEntries(formData);

    const validData = [];
    for (let key in formDataObj) {
      const element = document.getElementById(key);
      if (element.id == key) {
        let validate = Emptystring(element.value.trim());

        validate ? errStyle("green", element) : errStyle("red", element);

        console.log(validate, element.id);
      }
    }
  });
  // });

  const Emptystring = (value) => (value === "" ? false : true);
  const Between = (length, min, max) =>
    length < min || length > max ? false : true;

  function errStyle(color, element) {
    element.style.borderColor = color;
    element.style.borderWidth = "2px";
  }
});
