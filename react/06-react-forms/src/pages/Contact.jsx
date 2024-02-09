import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Forms/Input";
import TextAreaInput from "../components/Forms/TextAreaInput";
import ButtonInput from "../components/Forms/ButtonInput";
import { SlClose } from "react-icons/sl";

const Contact = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    phNum: "",
    mail: "",
    desc: "",
  });
  const userName = [];
  const [alertHidden, setAlertHidden] = useState({
    statues: false,
    classes: "alert-pop-up",
    msg: [],
  });

  const handleInputs = (e, clear) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState, //spreading the prevState obj
      [name]: value, // if the key matches we re-assign with new value or else we add new property
    }));

    clear ? setFormData(clearForm) : "";
  };
  const submitFormToServer = (e) => {
    e.preventDefault();
    console.log(formData);
    userName.push();

    // alerting username
    setAlertHidden((prevState) => ({
      ...prevState,
      classes: "alert-pop-up animate-rubberBand",
      statues: true,
      msg: `${formData.fName} ${formData.lName}`,
    }));

    console.log(alertHidden);
    // reset form
    setFormData({
      fName: "",
      lName: "",
      phNum: "",
      mail: "",
      desc: "",
    });
  };

  const handleAlert = () => {
    setAlertHidden((prevState) => ({
      ...prevState,
      classes: "alert-pop-up",
      statues: false,
    }));
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={submitFormToServer}
        className="bg-slate-100 mx-auto  p-3 rounded max-w-lg my-32 m-2"
      >
        {/* name */}
        <div className="flex w-full flex-col md:flex-row">
          <Input
            width={"w-full"}
            type="Text"
            name="fName"
            label="Enter First Name"
            required={true}
            placeholder="Enter First Name "
            value={formData.fName}
            handleOnChange={handleInputs}
          />
          <Input
            width={"w-full"}
            type="Text"
            name="lName"
            label="Enter Last Name"
            required={false}
            placeholder="Enter Last Name "
            value={formData.lName}
            handleOnChange={handleInputs}
          />
        </div>
        {/* Phone */}
        <Input
          width={"w-full"}
          type="number"
          name="phNum"
          label="Enter Phone number"
          required={false}
          placeholder="Enter Your Phone Number"
          value={formData.phNum}
          handleOnChange={handleInputs}
        />
        {/* Phone */}
        <Input
          width={"w-full"}
          type="email"
          name="mail"
          label="Enter Your Mail"
          required={true}
          placeholder="Enter Your Mail"
          value={formData.mail}
          handleOnChange={handleInputs}
        />
        {/* Submit */}
        <TextAreaInput
          handleOnChange={handleInputs}
          name="desc"
          row={3}
          value={formData.desc}
          placeholder="Write detailed description"
        />
        <ButtonInput
          bgColor="bg-green-400"
          bgColorHover="hover:bg-green-500"
          btnName={"Submit"}
        />
      </form>

      <div className={alertHidden.statues ? alertHidden.classes : "hidden"}>
        <p className="text-lg text-center">
          Thank's for your response
          <span className="font-medium mx-1">{alertHidden.msg}</span>
        </p>
        <SlClose
          onClick={handleAlert}
          size={32}
          className="text-slate-700 md:rounded-full md:p-0.5 md:bg-slate-300 cursor-pointer md:hover:bg-slate-200 transition-all hover:-rotate-180 duration-700 hover:scale-125"
        />
      </div>
    </>
  );
};

export default Contact;
