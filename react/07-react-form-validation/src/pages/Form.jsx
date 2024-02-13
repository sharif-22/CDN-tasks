import React from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Form-components/Input";
import ButtonInput from "../components/Form-components/ButtonInput";
import CheckBox from "../components/Form-components/CheckBox";
const Form = () => {
  return (
    <>
      <Navbar />
      <form className="max-w-xs md:max-w-lg mx-auto bg-indigo-300 mt-20 rounded py-4">
        <Input
          label={"Enter full name"}
          name="fullName"
          width="w-full"
          bgColor="bg-slate-50"
          placeholder="Ex: Khaja Sharif"
          required={true}
        />
        <div className="flex flex-col md:flex-row">
          <Input
            label="Enter your mail"
            type="email"
            name="mail"
            width="w-full"
            bgColor="bg-slate-50"
            placeholder="Ex: 9638527410"
            required={true}
          />
          <Input
            label="Enter mobile number"
            name="mobile"
            type="number"
            width="w-full"
            bgColor="bg-slate-50"
            placeholder="Ex: 9638527410"
          />
        </div>
        <CheckBox
          name="terms"
          desc="I accept all the Terms&Conditions"
          required={true}
        />

        <ButtonInput
          width="w-full"
          bgColor="bg-white"
          bgColorHover="hover:bg-slate-300"
        />
      </form>
    </>
  );
};

export default Form;
