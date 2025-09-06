import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black text-white p-8 flex justify-center">
      <nav className="border border-cyan-400 rounded-full px-8 py-3 flex space-x-10 shadow-[0_0_20px_#008080]">
        <Link
          to="/"
          className="hover:scale-125 text-teal-200 transform transition duration-500"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:scale-125 text-teal-200 transform transition duration-500"
        >
          About
        </Link>
        <Link
          to="/experience"
          className="hover:scale-125 text-teal-200 transform transition duration-500"
        >
          Experience
        </Link>
        <Link
          to="/skills"
          className="hover:scale-125 text-teal-200 transform transition duration-500"
        >
          Skills
        </Link>
       
        <Link
          to="/contact"
          className="hover:scale-125 text-teal-200 transform transition duration-500"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
