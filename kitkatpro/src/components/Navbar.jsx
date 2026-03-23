import React from "react";

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <header className="bg-black text-white p-8 flex justify-center max-md:px-3 max-md:py-4">
      <nav className="border border-cyan-200 rounded-full px-8 py-3 flex space-x-10 shadow-[0_0_20px_#008080] max-md:w-full max-md:px-4 max-md:py-2 max-md:space-x-5 max-md:overflow-x-auto max-md:whitespace-nowrap">
        <button
          onClick={() => handleScroll("home")}
          className="hover:scale-125 text-teal-200 transform transition duration-500 max-md:text-sm"
        >
          Home
        </button>
        <button
          onClick={() => handleScroll("about")}
          className="hover:scale-125 text-teal-200 transform transition duration-500 max-md:text-sm"
        >
          About
        </button>
        <button
          onClick={() => handleScroll("projects")}
          className="hover:scale-125 text-teal-200 transform transition duration-500 max-md:text-sm"
        >
          Projects
        </button>
        <button
          onClick={() => handleScroll("experience")}
          className="hover:scale-125 text-teal-200 transform transition duration-500 max-md:text-sm"
        >
          Certificates
        </button>
        
        <button
          onClick={() => handleScroll("skills")}
          className="hover:scale-125 text-teal-200 transform transition duration-500 max-md:text-sm"
        >
          Skills
        </button>
        <button
          onClick={() => handleScroll("contact")}
          className="hover:scale-125 text-teal-200 transform transition duration-500 max-md:text-sm"
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
