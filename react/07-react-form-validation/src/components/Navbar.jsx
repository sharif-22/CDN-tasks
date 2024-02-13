import React from "react";
import { FaGithub } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="bg-indigo-400 px-5 py-3 w-full text-white">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-2xl font-medium cursor-pointer">Form Validation</h1>
        <a
          href="https://github.com/sharif-22/cyberdude-challenges/tree/main/react/07-react-form-validation"
          target="_blank"
        >
          <FaGithub size={32} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
