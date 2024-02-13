import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Input from "../components/Form-components/Input";
import ButtonInput from "../components/Form-components/ButtonInput";
import CheckBox from "../components/Form-components/CheckBox";

import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const formSchema = z.object({
  fullName: z
    .string()
    .min(0, { message: "this field is required" })
    .min(3, { message: "please provide valid name" })
    .max(20, { message: "provide your name short in between 16 characters" }),

  mail: z.string().email({ message: "Provide Correct mail" }),
  mobile: z
    .string()
    .min(10, { message: "please provide valid number" })
    .max(10, { message: "please provide valid number" }),

  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept Terms and Conditions" }),
  }),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const sendInfo = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit(sendInfo)}
        className="max-w-xs md:max-w-lg mx-auto bg-indigo-300 mt-20 rounded py-4"
      >
        <Input
          label={"Enter full name"}
          name="fullName"
          register={register("fullName")}
          width="w-full"
          bgColor="bg-slate-50"
          placeholder="Ex: Khaja Sharif"
          required={true}
          error={errors.fullName}
        />
        <div className="flex flex-col md:flex-row">
          <Input
            register={register("mail")}
            label="Enter your mail"
            type="email"
            name="mail"
            width="w-full"
            bgColor="bg-slate-50"
            placeholder="Ex: sharif@cdn.com"
            required={true}
            error={errors.mail}
          />
          <Input
            label="Enter mobile number"
            register={register("mobile")}
            error={errors.mobile}
            name="mobile"
            type="text"
            width="w-full"
            bgColor="bg-slate-50"
            placeholder="Ex: 9638527410"
          />
        </div>
        <CheckBox
          error={errors.terms}
          required={true}
          register={register("terms")}
          name="terms"
          desc="I accept all the Terms&Conditions"
        />

        <ButtonInput
          width="w-full"
          bgColor="bg-white"
          bgColorHover="hover:bg-slate-300"
          btnName="Submit "
        />
      </form>
    </>
  );
};

export default Form;
