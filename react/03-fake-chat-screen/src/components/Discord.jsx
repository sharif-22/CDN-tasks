import React from "react";
import { FaArrowLeft, FaGift } from "react-icons/fa6";
import { IoIosArrowForward, IoIosSearch } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import { MdBattery80 } from "react-icons/md";
import { IoWifiSharp } from "react-icons/io5";
import { BiSignal4 } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";

const Discord = ({ server, time, chatDate, persons }) => {
  return (
    <div className="bg-slate-700 h-[75dvh] w-96 rounded-2xl relative">
      {/* notify bar */}
      <div className="px-5 pt-2 text-white bg-black rounded-t-2xl flex justify-between">
        <>
          <p className="flex items-center gap-2">
            {time} <SiDiscord />
          </p>
        </>
        <div>
          <div className="flex">
            <IoWifiSharp />
            <BiSignal4 />
            <MdBattery80 />
            <p className="text-xs">85%</p>
          </div>
        </div>
      </div>
      {/* server or dm */}
      <div className="flex items-center justify-between gap-3  border-b border-slate-500 p-4">
        <div className="flex gap-2 items-center">
          <FaArrowLeft color="white" size={24} />
          <div className="flex items-center gap-1 ">
            <p className="text-white text-xl font-semibold">{server}</p>
            <IoIosArrowForward color="white" />
          </div>
        </div>
        <IoIosSearch
          size={32}
          color="white"
          className=" p-1 rounded-2xl bg-slate-600"
        />
      </div>
      {/* chat start date  */}
      <div className="p-4">
        <div className="flex items-center">
          <div className="w-full border-t border-slate-500"></div>
          <p className="text-white text-xs w-full text-center">{chatDate}</p>
          <div className="w-full border-t border-slate-500"></div>
        </div>
      </div>
      {/* user input chat  */}

      {persons.map((person, index) => {
        return (
          <div key={index} className="px-4 gap-2 text-white mb-4">
            {person?.person1Name.length > 2 && person?.person1Msg.length > 2 ? (
              <div>
                <p className="font-medium text-xl">{person?.person1Name}</p>
                <p className="text-slate-300">{person?.person1Msg}</p>
              </div>
            ) : null}
            {person?.person2Name.length > 2 && person?.person2Msg.length > 2 ? (
              <div>
                <p className="font-medium text-xl">{person?.person2Name}</p>
                <p className="text-slate-300">{person?.person2Msg}</p>
              </div>
            ) : null}
          </div>
        );
      })}

      {/* footer */}
      <div className="p-4 gap-3 flex w-full text-white border-t border-slate-500 rounded-b-2xl absolute bottom-0 ">
        <div className="bg-slate-600 p-2 w-fit rounded-full">
          <GrAdd size={20} />
        </div>
        <div className="bg-slate-600 p-2 w-fit rounded-full">
          <FaGift size={20} />
        </div>
        <input
          type="text"
          className="bg-slate-600 rounded-2xl px-3"
          placeholder={`Message ${server}`}
        />
        <div className="bg-slate-600 p-2 w-fit rounded-full">
          <FaMicrophone size={20} />
        </div>
      </div>
    </div>
  );
};

export default Discord;
