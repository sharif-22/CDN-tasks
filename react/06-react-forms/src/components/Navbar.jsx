import React from "react";
import { FaGithub } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="bg-blue-500 px-5 py-3 w-full text-white">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-2xl font-medium">Contact</h1>
        <a
          href="https://github.com/sharif-22/cyberdude-challenges/tree/main/react/06-react-forms"
          target="_blank"
        >
          <FaGithub size={32} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
