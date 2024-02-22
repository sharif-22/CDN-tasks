import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";

import Input from "../components/formComponents/Input";
import Button from "../components/formComponents/Button";
import TextArea from "../components/formComponents/TextArea";

const formSchema = z.object({
  location: z
    .string()
    .min(0, { message: "this field is required" })
    .min(3, { message: "please provide valid location" })
    .max(20, { message: "please provide valid location" }),
  budget: z.string(),
  numOfTravelers: z.string(),
  returnDate: z.string(),
  startDate: z.string(),
  transpotationPref: z.string(),
  review: z.string(),
});

const AddTrip = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const sendInfoToDB = (data) => {
    const addFireStoreDoc = async () => {
      await addDoc(collection(db, "location"), data);
    };
    addFireStoreDoc();
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(sendInfoToDB)}
        className="max-w-xs md:max-w-lg mx-auto bg-slate-200 my-5 rounded py-4"
      >
        <Input
          label={"Enter Trip Location"}
          register={register("location")}
          width="w-full"
          bgColor="bg-slate-50"
          placeholder="Ex: Thailand"
          required={true}
          error={errors.location}
        />
        <div className="flex">
          <Input
            type="number"
            min={0}
            label={"Enter Trip Budget"}
            register={register("budget")}
            width="w-full"
            bgColor="bg-slate-50"
            placeholder="Ex: 20,000"
            required={true}
            error={errors.budget}
          />
          <Input
            type="number"
            min={0}
            label={"Enter no of Travellers"}
            register={register("numOfTravelers")}
            width="w-full"
            bgColor="bg-slate-50"
            placeholder="Ex: 20,000"
            required={true}
            error={errors.numOfTravelers}
          />
        </div>
        <div className="flex">
          <Input
            type="date"
            label={"Enter Start Date"}
            register={register("startDate")}
            width="w-full"
            bgColor="bg-slate-50"
            placeholder="Ex: 20,000"
            required={true}
            error={errors.startDate}
          />
          <Input
            type="date"
            label={"Enter Return Date"}
            register={register("returnDate")}
            width="w-full"
            bgColor="bg-slate-50"
            placeholder="Ex: 20,000"
            required={true}
            error={errors.returnDate}
          />
        </div>

        <Input
          label={"Enter Trip Transpotation Preference"}
          register={register("transpotationPref")}
          width="w-full"
          bgColor="bg-slate-50"
          placeholder="Ex: Train 🚂..."
          required={true}
          error={errors.transpotationPref}
        />
        <TextArea
          register={register("review")}
          label={"Take a note for trip"}
          placeholder={"Take a note for trip"}
        />

        <Button
          btnName="Add Trip"
          bgColor="bg-secondary"
          textColor="text-white"
          textColorHover="hover:text-black"
        />
      </form>
    </>
  );
};

export default AddTrip;
