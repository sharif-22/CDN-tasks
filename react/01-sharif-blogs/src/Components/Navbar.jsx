import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-full bg-blue-500 px-5 py-3 sticky top-0 shadow-md">
      <div className="lg:max-w-6xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-medium text-white bg-blue-600">
          Sharif's Blogs!
        </NavLink>
        <ol className="md:flex gap-5 text-white font-medium text-lg  hidden">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
