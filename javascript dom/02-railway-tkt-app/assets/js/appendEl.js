const passengerListEl = document.getElementById("passengerList");
const divEl = document.createElement("div");

const nameEl = createInput(10, "passenName", "text", "Enter passenger10 Name");
const gender = ["Male", "Female", "Others"];
const ageEl = createInput(
  10,
  "passenger10Age",
  "number",
  "Enter passenger10 Age"
);

divEl.append(nameEl, radioCollection(gender, 10), ageEl);

passengerListEl.append(divEl);

function createInput(count, passengerType, inputType, labelTxt) {
  // create el
  const divEl = document.createElement("div");
  const labelEl = document.createElement("label");
  const inputEl = document.createElement("input");

  // add classes
  divEl.classList.add("flex", "flex-col", "gap-3");
  inputEl.classList.add("passenger", "p-2");

  // setting attributes

  labelEl.setAttribute("for", passengerType);

  inputEl.setAttribute("type", inputType);
  inputEl.setAttribute("id", passengerType);
  inputEl.setAttribute("name", passengerType);
  inputEl.setAttribute("placeholder", `Enter Passenger ${count} Age `);
  inputEl.setAttribute("required", "required");

  labelEl.innerText = labelTxt;

  //   appending
  divEl.append(labelEl, inputEl);

  return divEl;
}

function radioCollection(arr, count) {
  const divEl = document.createElement("div");

  divEl.classList.add("flex", "justify-between", "p-3");

  for (let index = 0; index < arr.length; index++) {
    divEl.appendChild(
      createRadioButton(count, arr[index], arr[index], arr[index])
    );
  }
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

  var label = document.createElement("label");
  label.setAttribute("for", `${id.toLowerCase()}${count}`);
  label.textContent = labelText;

  radioDiv.append(input, label);

  return radioDiv;
}
