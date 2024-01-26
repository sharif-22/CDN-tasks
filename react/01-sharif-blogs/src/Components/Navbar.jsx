import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="w-full bg-blue-500 p-5">
      <div className="lg:max-w-6xl mx-auto flex justify-between">
        <Link to="/" className="text-2xl font-medium text-white">
          Sharif's Blogs!
        </Link>
        <ol className="flex gap-5 text-white font-medium text-lg">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ol>
      </div>
    </nav>
  );
};
