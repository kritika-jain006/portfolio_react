import React from "react";

const Experience = () => {
  return (
    
      <div className="min-h-screen bg-black px-10 py-10 flex flex-col items-center">
        <h1 className="text-gray-500 font-semibold text-xl mb-2 text-center"></h1>
        <h2 className="text-cyan-900 font-extrabold text-6xl mb-10 text-center">
          Achievements
        </h2>

        <div className="border border-cyan-900 rounded-lg px-20 py-30 flex space-x-10 shadow-[0_0_20px_#008080]">
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
            


            <a
              href="/portfolio_react/pdf/java_basic.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-60 h-60 bg-gradient-to-b from-gray-950 to-slate-800 rounded-xl shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300 text-white text-center p-4"
            >
              <div>
                <h3 className="text-lg font-semibold">
                  Java (Basic) Certificate
                </h3>
                <p className="text-sm mt-2 text-indigo-400">
                  Issued by HackerRank
                </p>
              </div>
            </a>
            
          
            <a
              href="/portfolio_react/pdf/IbmSkill.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-60 h-60 bg-gradient-to-b from-gray-950 to-slate-800 rounded-xl shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300 text-white text-center p-4"
            >
              <div>
                <h3 className="text-lg font-semibold">
                  Getting Started with Data
                </h3>
                <p className="text-sm mt-2 text-indigo-400">
                  IBM SkillsBuild (Credly)
                </p>
              </div>
            </a>

           
            <a
              href="/portfolio_react/pdf/BasicsOfPython.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-60 h-60 bg-gradient-to-b from-gray-950 to-slate-800 rounded-xl shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300 text-white text-center p-4"
            >
              <div>
                <h3 className="text-lg font-semibold">Basics of Python</h3>
                <p className="text-sm mt-2 text-indigo-400">Issued by Infosys</p>
              </div>
            </a>

          
            <a
              href="https://link-to-certificate4.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-60 h-60 bg-gradient-to-b from-gray-950 to-slate-800 rounded-xl shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300 text-white text-center p-4"
            >
              <div>
                <h3 className="text-lg font-semibold">Certificate 4</h3>
                <p className="text-sm mt-2 text-indigo-400">-</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    
  );
};

export default Experience;
