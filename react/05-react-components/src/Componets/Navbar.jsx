import React from "react";

const Navbar = () => {
  return (
    <nav className="px-8 py-4 bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="font-semibold text-2xl">Tai-R Kit</h1>
        <ol className="flex justify-between gap-8 font-medium text-lg">
          <li className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 cursor-pointer">
            Alert
          </li>
          <li className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 cursor-pointer">
            Button
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
