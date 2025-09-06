import React from 'react'
import TiltedCard from '../components/TiltedCard';


const Skills = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-slate-900 to-black h-screen w-full'>
      <h1 className='text-gray-500 font-medium flex flex-col items-center justify-center text-center text-2xl'>WHAT I USE TO BUILD</h1>
      <br/>
      <h2 className='text-gray-500 font-extrabold flex flex-col items-center justify-center text-center text-5xl'> TECHNOLOGIES</h2>
  
<div className='px-40 pt-10'>
  
<div className='flex flex-row px-75'>
<TiltedCard
  containerHeight="200px"
  containerWidth="250px"
  rotateAmplitude={30}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={false}
  displayOverlayContent={true}
  overlayContent={
    <div className='p-[2px] rounded-lg bg-gradient-to-b from-teal-600 to-purple-800'>
      <div class="w-30 h-30 bg-gray-900 text-white rounded-lg flex items-center justify-center text-xl font-semibold ">
 <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML5 Logo"
          className="w-17 h-17 animate-spin-slow"
        />
</div>
    </div>
  }
/>

<TiltedCard
  containerHeight="200px"
  containerWidth="250px"
  rotateAmplitude={30}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={false}
  displayOverlayContent={true}
  overlayContent={
     <div className='p-[2px] rounded-lg bg-gradient-to-b from-teal-600 to-purple-800'>
      <div class="w-30 h-30 bg-gray-900 text-white rounded-lg flex items-center justify-center text-xl font-semibold ">
 <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS3 Logo"
          className="w-17 h-17"
        />
</div>
    </div>

  }
/>
<TiltedCard
  containerHeight="200px"
  containerWidth="250px"
  rotateAmplitude={30}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={false}
  displayOverlayContent={true}
  overlayContent={
     <div className='p-[2px] rounded-lg bg-gradient-to-b from-teal-600 to-purple-800'>
      <div class="w-30 h-30 bg-gray-900 text-white rounded-lg flex items-center justify-center text-xl font-semibold ">
 <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript Logo"
          className="w-17 h-17"
        />
</div>
    </div>

  }
/>
</div>
<div className='flex flex-row px-45'>
  <TiltedCard
  containerHeight="200px"
  containerWidth="250px"
  rotateAmplitude={30}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={false}
  displayOverlayContent={true}
  overlayContent={
    <div className='p-[2px] rounded-lg bg-gradient-to-b from-teal-600 to-purple-800'>
      <div class="w-30 h-30 bg-gray-900 text-white rounded-lg flex items-center justify-center text-xl font-semibold ">
 <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React Logo"
          className="w-20 h-20 animate-spin-slow"
        />
</div>
    </div>

  }
/>
<TiltedCard
  containerHeight="200px"
  containerWidth="250px"
  rotateAmplitude={30}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={false}
  displayOverlayContent={true}
  overlayContent={
    <div className='p-[2px] rounded-lg bg-gradient-to-b from-teal-600 to-purple-800'>
      <div class="w-30 h-30 bg-gray-900 text-white rounded-lg flex items-center justify-center text-xl font-semibold ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          alt="React Logo"
          className="w-20 h-20 animate-spin-slow"
        />

</div>
    </div>

  }
/>
<TiltedCard
  containerHeight="200px"
  containerWidth="250px"
  rotateAmplitude={30}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={false}
  displayOverlayContent={true}
  overlayContent={
    <div className='p-[2px] rounded-lg bg-gradient-to-b from-teal-600 to-purple-800'>
      <div class="w-30 h-30 bg-gray-900 text-white rounded-lg flex items-center justify-center text-xl font-semibold ">
 <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="React Logo"
          className="w-20 h-20 animate-spin-slow"
        />
</div>
    </div>

  }
/>
<TiltedCard
  containerHeight="200px"
  containerWidth="250px"
  rotateAmplitude={30}
  scaleOnHover={1.05}
  showMobileWarning={false}
  showTooltip={false}
  displayOverlayContent={true}
  overlayContent={
    <div className='p-[2px] rounded-lg bg-gradient-to-b from-teal-600 to-purple-800'>
      <div class="w-30 h-30 bg-gray-900 text-white rounded-lg flex items-center justify-center text-xl font-semibold ">
 <img
          src="	https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          alt="React Logo"
          className="w-20 h-20 animate-spin-slow"
        />
</div>
    </div>

  }
/>


</div>
</div>

    </div>
  )
}

export default Skills
