import React from "react";
import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Cart } from "../Context";
import { BsCart4 } from "react-icons/bs";

const Footer = () => {
  const { register, handleSubmit, reset } = useForm();
  const [cartItems, setCartItems, gadgetNames, setGadgetNames] =
    useContext(Cart);
  const [inputData, setInputData] = useState({ favoriteGadget: "" });

  useEffect(() => {
    inputData.favoriteGadget.length > 2
      ? setGadgetNames([...gadgetNames, inputData.favoriteGadget])
      : [];
    console.log(gadgetNames, inputData.favoriteGadget);
  }, [inputData]);

  const submitHandler = (data) => {
    setInputData(data);
    reset();
  };

  return (
    <footer className="lg:p-12 p-5 bg-blue-400 text-white">
      {/* {gadgetNames[gadgetNames.length - 1]} */}
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 items-start">
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="text-2xl font-medium cursor-pointer flex gap-2 items-center"
            >
              K-art
              <BsCart4 />
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              k-art@support.com
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              k-art@cutomersupport.com
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              +91 9638527410
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="text-2xl font-medium cursor-pointer flex gap-2 items-center"
            >
              Pricing
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              Overview
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              Affilate Programe
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              Promotions
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="text-2xl font-medium cursor-pointer flex gap-2 items-center"
            >
              Company
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              About Us
            </a>
            <a href="#" className="text-sm hover:underline duration-500">
              Careers
            </a>
          </div>
          <form onSubmit={handleSubmit(submitHandler)} className="space-y-3">
            <div className="flex gap-2 items-end">
              <div className="flex-col flex gap-2">
                <label className="text-xs text-white" htmlFor="favoriteGadget">
                  Enter your favorite Gadget
                </label>
                <input
                  {...register("favoriteGadget")}
                  className="w-64 text-black rounded md:max-w-sm p-2 outline-none"
                  type="text"
                  name="favoriteGadget"
                  id="favoriteGadget"
                  placeholder="Enter your favorite Gadget"
                />
              </div>
              <button
                type="submit"
                className="p-2 w-16 px-5 h-fit text-black rounded font-medium bg-yellow-300 hover:bg-yellow-400 duration-500 hover:shadow-md "
              >
                Add
              </button>
            </div>
            <h3 className="text-lg font-medium">
              Add your favorite gadget to your favorites list to receive
              exclusive offer alerts!
            </h3>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
