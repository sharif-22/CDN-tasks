import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-5 py-3 w-full text-black sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between">
        <NavLink to="/">
          <h1 className="text-2xl font-medium cursor-pointer flex gap-2 items-center p-2">
            <img width={32} src="/favicon.png" />
            RoamRover
          </h1>
        </NavLink>

        <ul className="flex justify-between gap-3 items-center">
          <li>
            <NavLink
              to="/trips"
              className="text-base md:text-lg font-medium md:p-2"
            >
              Trips
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addTrip"
              className="text-base md:text-lg font-medium md:p-2"
            >
              Add Trips
            </NavLink>
          </li>
          <li className="hidden md:block">
            <a
              href="https://github.com/sharif-22/cyberdude-challenges/tree/main/react-firebase/tourist-planner"
              target="_blank"
            >
              <FaGithub size={32} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
