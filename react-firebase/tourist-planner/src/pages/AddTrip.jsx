import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import Input from "../components/formComponents/Input";
import Button from "../components/formComponents/Button";
import TextArea from "../components/formComponents/TextArea";
import { useNavigate } from "react-router-dom";

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
  thumbnail: z.any().refine((files) => files?.length >= 1, "File is required."),
});

const AddTrip = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState({});
  // const [per, setPerc] = useState(null);
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
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const sendInfoToDB = (value) => {
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
              register={register("numOfTravelers")}
              width="w-full"
              bgColor="bg-slate-50"
              placeholder="Ex: 20,000"
              error={errors.numOfTravelers}
            />
          </div>
          <div className="flex lg:flex-row flex-col">
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
              error={errors.returnDate}
            />
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
