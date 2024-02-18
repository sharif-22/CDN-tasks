import React from "react";
import { FaGithub } from "react-icons/fa6";
import { GrServerCluster } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-blue-400 shadow-md px-5 py-3 w-full text-white sticky top-0">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-2xl font-medium cursor-pointer flex gap-2 items-center">
          Fetch Interns Data from
          <FaNodeJs className="hidden md:block" />
          <GrServerCluster />
        </h1>
        <a
          href="https://github.com/sharif-22/cyberdude-challenges/tree/main/nodejs/02-http-server"
          target="_blank"
        >
          <FaGithub size={32} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
