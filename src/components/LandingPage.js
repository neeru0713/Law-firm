import React from 'react'
import NavBar from './NavBar';
import HeroSection from './HeroSection';


const LandingFarm = () => {
  return (
    <div className="h-[100%]">
      <p className="text-slate-600 text-sm font-bold p-2 ">Law_Firm</p>
      <div className="bg-black h-[80%] w-[100%]">
        <NavBar />
        <HeroSection />
        <div className="flex p-12 ml-6 w-[100%] justify-around ">
          <p className="text-white text-4xl font-bold">
            Let's Introduce <br />
            Ourself
          </p>
          <div className="h-[8rem] bg-gray-500 w-[2px] " ></div>
          <div className="flex flex-col">
            <h6 className="text-white font-semibold text-lg">
              Criminal Lawyer
            </h6>
            <p className="text-gray-500 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Sed euismod ultricies leo, a vestibulum nulla euismod{" "}
              <br /> eu. Nulla facilisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingFarm
