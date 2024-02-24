import React, { useState, useEffect } from "react";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { useParams } from "react-router-dom";

import dayjs from "dayjs";

import { db, storage } from "../firebase";

import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";

import { getDoc, doc, updateDoc } from "firebase/firestore";

import Input from "../components/formComponents/Input";
import Button from "../components/formComponents/Button";
import TextArea from "../components/formComponents/TextArea";

const formSchema = z.object({
  budget: z.string(),
  numOfTravelers: z.string(),
  startDate: z.number().min(1, { message: "please provide start date" }),
  transportationPref: z.string(),
  returnDate: z.custom(),
});

const UpdateTrip = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [currTripDetail, setCurrTripDetail] = useState({});

  useEffect(() => {
    const getCardDetails = async () => {
      // get existing data to user view
      const docRef = doc(db, "location", id);
      const docSnap = await getDoc(docRef);
      setCurrTripDetail(docSnap.data());
    };
    getCardDetails();
  }, [id]);

  console.log(currTripDetail);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: async () => {
      // get existing data to user view
      const docRef = doc(db, "location", id);
      const docSnap = await getDoc(docRef);
      const tripExistData = docSnap.data();
      return {
        startDate: tripExistData?.startDate,
        returnDate: tripExistData?.returnDate,
        budget: tripExistData?.budget,
        numOfTravelers: tripExistData?.numOfTravelers,
        transportationPref: tripExistData?.transportationPref,
      };
    },
  });

  const updateInfoToDB = (value) => {
    console.log(value);
    const updateData = async () => {
      const updateRef = doc(db, "location", id);
      await updateDoc(updateRef, value);
      reset();
    };
    updateData();
    Navigate("/trips");
  };

  return (
    <>
      <div className="h-svh flex items-center">
        <form
          onSubmit={handleSubmit(updateInfoToDB)}
          className="max-w-md md:max-w-5xl lg:w-3/4 mx-auto bg-slate-200 my-5 rounded"
        >
          <h1 className="bg-secondary rounded-t px-3 py-2 font-semibold text-white text-2xl capitalize">
            Update {currTripDetail.location} Trip details
          </h1>
          <div className="flex lg:flex-row flex-col">
            <Input
              type="number"
              name={"budget"}
              label={"Trip Budget"}
              register={register("budget")}
              width="w-full"
              bgColor="bg-slate-50"
              placeholder="Ex: 20,000"
              required={true}
              error={errors.budget}
            />
            <Input
              name={"numOfTravelers"}
              type="number"
              label={"How many travelers will be on the trip?"}
              min={1}
              value={1}
              register={register("numOfTravelers")}
              width="w-full"
              bgColor="bg-slate-50"
              placeholder="2 members"
              error={errors.numOfTravelers}
            />
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className="flex flex-col p-3 w-full gap-2">
              <label className="block font-medium " htmlFor="startDate">
                Schedule start date
                <span className="text-pink-500 font-bold px-1">*</span>
              </label>
              <Controller
                control={control}
                name="startDate"
                render={({ field }) => {
                  return (
                    <DatePicker
                      id="startDate"
                      className="w-full p-2 outline-none border-none"
                      placeholder="Schedule start date"
                      name={field.name}
                      ref={field.ref}
                      onBlur={field.onBlur}
                      value={field.value ? dayjs(field.value) : null}
                      onChange={(date) => {
                        field.onChange(date ? date.valueOf() : null);
                      }}
                    />
                  );
                }}
              />
              {errors && (
                <small className="text-sm text-red-500">
                  {errors?.startDate?.message}
                </small>
              )}
            </div>
            <div className="flex flex-col p-3 w-full gap-2 ">
              <label className="block font-medium " htmlFor="returnDate">
                Schedule trip return date
              </label>
              <Controller
                control={control}
                name="returnDate"
                render={({ field }) => {
                  return (
                    <DatePicker
                      id="returnDate"
                      className="w-full p-2 outline-none border-none"
                      placeholder="Schedule start date"
                      name={field.name}
                      ref={field.ref}
                      onBlur={field.onBlur}
                      value={field.value ? dayjs(field.value) : null}
                      onChange={(date) => {
                        field.onChange(date ? date.valueOf() : null);
                      }}
                    />
                  );
                }}
              />
            </div>
          </div>

          <Input
            label={"Preferred Mode of Transportation"}
            register={register("transportationPref")}
            width="w-full"
            name="transportationPref"
            bgColor="bg-slate-50"
            placeholder="Ex: Bus,Train,Car..."
            required={true}
            error={errors.transportationPref}
          />
          <TextArea
            name={"review"}
            register={register("review")}
            label={"Take a note for trip"}
            placeholder={"Take a note for trip"}
          />

          <Button
            btnName="Update Trip"
            bgColor="bg-secondary"
            textColor="text-white"
            bgColorHover="hover:bg-secondary/70"
            textColorHover="hover:text-black"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateTrip;
