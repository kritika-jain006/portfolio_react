import React from "react";
import resume from "../assets/Kritika_jain_resume.pdf";
import Particles from "../components/Particles";

const Portfolio = () => {
  return (
    <div className="relative w-full h-screen text-white overflow-hidden max-md:min-h-screen">
      
      {/* Particle background */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={["#ffffff", "#00ffff"]}
          particleCount={280}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Portfolio content */}
      <div className="p-20 flex flex-col items-center justify-center text-center max-md:px-6 max-md:py-14">
        <div className="text-left space-y-6 max-md:text-center">
          <h1 className="font-pt-serif text-6xl max-md:text-4xl max-sm:text-3xl">
            Hi, I'm Kritika Jain
          </h1>
          <h2>
            <span
              className=" font-pt-serif text-5xl text-cyan-400 flex items-center justify-center max-md:text-3xl max-sm:text-2xl"  
              style={{ textShadow: "0 0 20px #008080" }}
            >
              Web Developer
            </span>
          </h2>
          <div className="flex items-center justify-center">
          <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            className=" inline-block mt-10 border border-cyan-400 rounded-full px-6 py-3 shadow-[0_0_20px_#008080] max-md:mt-6 max-md:px-5 max-md:py-2.5"
          >
            RESUME
          </a>
          </div>
        </div>
<div>
  
</div>
        
      </div>
    </div>
  );
};

export default Portfolio;
