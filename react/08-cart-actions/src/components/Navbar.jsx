import React from "react";
import { FaGithub } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="bg-blue-400 shadow-md px-5 py-3 w-full text-white sticky top-0">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-2xl font-medium cursor-pointer flex gap-2 items-center">
          K-art
          <BsCart4 />
        </h1>
        <a
          href="https://github.com/sharif-22/cyberdude-challenges/tree/main/react/08-cart-actions"
          target="_blank"
        >
          <FaGithub size={32} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
