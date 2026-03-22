import React from "react";
import SpotlightCard from "../components/SpotlightCard";



const About = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <h1 className="text-gray-500 font-medium text-2xl px-50">INTRODUCTION</h1>
      <h2 className="text-cyan-400 font-extrabold text-7xl px-45 py-2">
        Overview
      </h2>

      <p className="text-gray-500 px-48 py-2 text-2xl font-medium">
        A passionate Computer Science student at GLA University.
        <br />
        I’m currently exploring the world of web development and data <br />
        structures using Java. I love building creative projects, learning new
        technologies, <br />
        and solving real-world problems through code. Always curious, always
        growing.
      </p>
<div className="flex flex-wrap justify-center gap-20 p-20">
  <div className="max-w-xs w-full sm:w-[18%] h-80 flex items-center justify-center">
  <SpotlightCard
    className="custom-spotlight-card w-full h-full flex items-center justify-center"
    spotlightColor="rgba(255, 0, 255, 0.25)"
  >
    <span className="text-center text-cyan-200 text-lg font-serif">
      Frontend <br/><div className="text-2xl">Developer</div>
    </span>
  </SpotlightCard>
</div>

<div className="max-w-xs w-full sm:w-[18%] h-80 flex items-center justify-center">
  <SpotlightCard
    className="custom-spotlight-card w-full h-full flex items-center justify-center"
    spotlightColor="rgba(255, 0, 255, 0.25)"
  >
    <span className="text-center text-cyan-200 text-lg font-serif">
      Problem<br/><div className="text-2xl">Solver</div>
    </span>
  </SpotlightCard>
</div>


  <div className="max-w-xs w-full sm:w-[18%] h-80 flex items-center justify-center">
  <SpotlightCard
    className="custom-spotlight-card w-full h-full flex items-center justify-center"
    spotlightColor="rgba(255, 0, 255, 0.25)"
  >
    <span className="text-center text-cyan-200 text-lg font-serif">
      Backend<br/><div className="text-2xl">Developer</div>
    </span>
  </SpotlightCard>
</div>

  <div className="max-w-xs w-full sm:w-[18%] h-80 flex items-center justify-center">
  <SpotlightCard
    className="custom-spotlight-card w-full h-full flex items-center justify-center"
    spotlightColor="rgba(255, 0, 255, 0.25)"
  >
    <span className="text-center text-cyan-200 text-l font-serif">
      Creative<br/><div className="text-2xl">Thinker</div>
    </span>
  </SpotlightCard>
</div>

</div>



    </div>
  );
};

export default About;
