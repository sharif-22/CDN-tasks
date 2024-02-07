import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Forms/Input";
import ButtonInput from "../components/Forms/ButtonInput";
const Contact = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    phNum: "",
    mail: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState, //spreading the prevState obj
      [name]: value, // if the key matches we re-assign with new value or else we add new property
    }));
  };
  const submitFormToServer = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(`Form submitted, successfully! ${formData.fName}`);
    setFormData({
      fName: "",
      lName: "",
      phNum: "",
      mail: "",
    });
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={submitFormToServer}
        className="bg-slate-300 mx-auto p-3 rounded max-w-lg my-32"
      >
        {/* name */}
        <div className="flex w-full">
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
        <ButtonInput
          bgColor="bg-green-400"
          bgColorHover="hover:bg-green-500"
          btnName={"Submit"}
        />
      </form>
    </>
  );
};

export default Contact;
