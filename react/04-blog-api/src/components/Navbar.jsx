import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-full  p-5 sticky top-0 shadow-md z-10 bg-white">
      <div className="lg:max-w-6xl mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-2xl font-medium text-white rounded p-2 bg-slate-700"
        >
          Dev
        </NavLink>
        <ol className="md:flex gap-5 text-slate-600 font-medium text-lg   hidden">
          <li>
            <NavLink to="/home" className="hover:text-slate-800">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className="hover:text-slate-800">
              Blogs
            </NavLink>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
