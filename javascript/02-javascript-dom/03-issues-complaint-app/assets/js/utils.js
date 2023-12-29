import dayjs from "dayjs";

function currentDate(format = "DD - MMM - YYYY") {
  return dayjs().format(format);
}

function issueResolvedDate(resolvedIn = 1) {
  return dayjs().add(resolvedIn, "days").format("DD - MMM - YYYY");
}

// validate form with help of just validate library
function validate(Form) {
  Form.addField(
    "#fullName",
    [
      {
        rule: "required",
        errorMessage: "Fullname is required",
      },
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "maxLength",
        value: 20,
      },
    ],
    {
      errorLabelCssClass: ["form-error"],
    }
  );

  Form.addField(
    "#contactNum",
    [
      {
        rule: "required",
        errorMessage: "Contact Number is required",
      },
      {
        rule: "number",
      },
      {
        rule: "minLength",
        value: 10,
        errorMessage: "Please Enter Valid Contact Number ",
      },
      {
        rule: "maxLength",
        value: 10,
        errorMessage: "Please Enter Valid Contact Number ",
      },
      {
        rule: "minNumber",
        value: 5999999999,
        errorMessage: "Please Enter Valid Contact Number ",
      },
      {
        rule: "maxNumber",
        value: 9999999999,
        errorMessage: "Please Enter Valid Contact Number ",
      },
    ],
    {
      errorLabelCssClass: ["form-error"],
    }
  );
  Form.addField("#issue", [
    {
      rule: "required",
      errorMessage: "Please select issue",
    },
  ]);

  Form.addField(
    "#wifiNum",
    [
      {
        rule: "required",
        errorMessage: "Wifi Id Number is required",
      },
      {
        rule: "number",
      },
      {
        rule: "minLength",
        value: 5,
        errorMessage: "Enter Wifi number is not valid ",
      },
      {
        rule: "maxLength",
        value: 10,
        errorMessage: "Enter Wifi number is not valid ",
      },
    ],
    {
      errorLabelCssClass: ["form-error"],
    }
  );
}

function swapUi(from, to) {
  from.classList.add("hidden");
  to.classList.remove("hidden");
}

const Engineers = {
  engineers: [
    { name: "Sharif", contact: "123-456-7890" },
    { name: "Vijay", contact: "987-654-3210" },
    { name: "Shajid", contact: "456-789-0123" },
    { name: "Vasanth", contact: "789-012-3456" },
    { name: "Dinesh", contact: "345-678-9012" },
  ],

  getRandomEngineer: function () {
    const randomIndex = Math.floor(Math.random() * this.engineers.length);
    return this.engineers[randomIndex];
  },
};

export { validate, currentDate, issueResolvedDate, swapUi, Engineers };
