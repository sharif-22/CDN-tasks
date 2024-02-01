import React from "react";
const Navbar = () => {
  return (
    <nav className="w-full  p-5 sticky top-0 shadow-md z-10 bg-white">
      <div className="lg:max-w-6xl mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-medium text-white rounded p-2 bg-slate-700"
        >
          Khaja Sharif
        </a>
        <ol className="md:flex gap-5 text-slate-600 font-medium text-lg   hidden">
          <li>
            <a href="#" className="hover:text-slate-800">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-slate-800">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-800">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-800">
              Contact
            </a>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
