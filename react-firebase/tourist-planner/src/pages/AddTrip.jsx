import React, { useState, useEffect } from "react";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import dayjs from "dayjs";

import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";

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
  // returnDate: z.number(),
  startDate: z.number().min(1, { message: "please provide start date" }),
  transpotationPref: z.string(),
  review: z.string(),
  thumbnail: z.any().refine((files) => files?.length >= 1, "File is required."),
});

const AddTrip = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState({});
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const sendInfoToDB = (value) => {
    console.log(watch("startDate"));
    console.log(value);
    const addFireStoreDoc = async () => {
      console.log({ ...value, thumbnail: data });
      await addDoc(collection(db, "location"), {
        ...value,
        thumbnail: data.img,
      });
    };
    addFireStoreDoc();
    Navigate("/trips");
    reset();
  };

  return (
    <>
      <div className="lg:h-screen ">
        <form
          onSubmit={handleSubmit(sendInfoToDB)}
          className="max-w-xs md:max-w-4xl mx-auto bg-slate-200 my-5  rounded py-4 "
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
          <div className="flex lg:flex-row flex-col">
            <Input
              type="number"
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
              label={"Enter no of Travellers"}
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
                Choose trip start date
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
                      placeholder="Trip start date"
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
                Choose trip return date
              </label>
              <Controller
                control={control}
                name="returnDate"
                render={({ field }) => {
                  return (
                    <DatePicker
                      id="returnDate"
                      className="w-full p-2 outline-none border-none"
                      placeholder="Trip start date"
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
            label={"Transpotation Preference"}
            register={register("transpotationPref")}
            width="w-full"
            bgColor="bg-slate-50"
            placeholder="Ex: Bus,Train,Car..."
            required={true}
            error={errors.transpotationPref}
          />
          <div className="flex flex-col p-3 gap-y-2">
            <div>
              <label htmlFor="file">Upload the thumbnail of the location</label>
              <span className="text-pink-500 font-bold px-1">*</span>
            </div>
            <div className="flex flex-col gap-2">
              <input
                id="file"
                type="file"
                {...register("thumbnail")}
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
              {errors && (
                <small className="text-sm text-red-500">
                  {errors?.thumbnail?.message}
                </small>
              )}
            </div>
          </div>
          <TextArea
            register={register("review")}
            label={"Take a note for trip"}
            placeholder={"Take a note for trip"}
          />

          <Button
            disabled={progress !== null && progress < 100}
            btnName="Add Trip"
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

export default AddTrip;
