import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-slate-800 to-black text-white w-full px-4 py-6 flex flex-col items-center space-y-4">
      <nav className="space-x-30 text-xl max-md:space-x-0 max-md:flex max-md:flex-wrap max-md:justify-center max-md:gap-x-6 max-md:gap-y-3 max-md:text-base">
        <a href="https://github.com/kritika-jain006/kritika-jain006" target="_blank" rel="noopener noreferrer" className="text-gray-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-1/2 after:bottom-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Github</a>
        <a href="https://www.linkedin.com/in/kritika-jain-652b42324/" target="_blank" rel="noopener noreferrer"  className="text-gray-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-1/2 after:bottom-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">LinkedIn</a>
        <a href="https://x.com/jkritika375?t=a9VcNWrhX4PEYU4fm96jaw&s=09" target="_blank" rel="noopener noreferrer"  className="text-gray-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-1/2 after:bottom-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">Twitter</a>
        <a href="https://leetcode.com/u/kritika_jain01/" target="_blank" rel="noopener noreferrer"  className="text-gray-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-1/2 after:bottom-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"> Leetcode</a>
        <a href="https://www.geeksforgeeks.org/user/jkritihxd7/" target="_blank" rel="noopener noreferrer" className="text-gray-300 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-1/2 after:bottom-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">GFG</a>


      </nav>
     <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Kritika Jain. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;

