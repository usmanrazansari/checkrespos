import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-4 py-2">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">
          Computer<span className="text-yellow-400">Zone</span>
        </div>

        <div className="flex">
          <a href="#" className="hover:text-yellow-400 ml-0">Home</a>
          <a href="#" className="hover:text-yellow-400 ml-6">About</a>
          <a href="#" className="hover:text-yellow-400 ml-6">Contact</a>
        </div>

        <div>
          <button className="bg-yellow-400 text-blue-900 px-4 py-1 rounded hover:bg-yellow-500">
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;