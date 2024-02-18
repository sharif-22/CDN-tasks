import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const InternsCard = ({ github, name }) => {
  return (
    <div className="bg-slate-200 pl-3 py-3 rounded m-5 max-w-xs flex flex-row">
      <div className="bg-slate-100 p-4 border-l-8 border-l-blue-300 rounded hover:shadow-md w-3/4 duration-500 cursor-pointer">
        <img
          className="rounded-full w-32 border-4 p-1 hover:border-slate-400 transition duration-500"
          src={`${github}.png`}
          alt={name}
        />
        <a
          href={github}
          target="_blank"
          className="font-semibold text-xl mt-2 text-slate-700 inline-block hover:underline transition-all duration-700"
        >
          {name}
        </a>
      </div>
      <div className="flex flex-col items-center justify-center w-1/4 gap-6">
        <FaGithub
          size={32}
          className="hover:text-slate-600 hover:drop-shadow-md cursor-pointer duration-500"
        />
        <FaLinkedin
          size={32}
          className="hover:text-blue-500  hover:drop-shadow-md cursor-pointer duration-500"
        />
      </div>
    </div>
  );
};

export default InternsCard;
