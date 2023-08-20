import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import picture from "./profile.png";
const HeroSection = () => {
  return (
    <div>
      <div className="flex text-white p-7 ml-6">
        <div className="flex relative w-[100%] justify-center">
          <div className="flex flex-col">
            <h6 className="text-6xl font-bold ">
              You don't have to <br /> Fight them Alone.{" "}
            </h6>
            <p className="text-gray-400 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Sed euismod ultricies leo, a vestibulum nulla euismod{" "}
              <br /> eu. Nulla facilisi.
            </p>
            <div>
              <div className="relative w-[70%]">
                <input
                  placeholder="Enter your email address"
                  className="h-[50%] w-[100%] bg-[#1e1e1e] rounded-full p-4 pl-8 text-left mt-8"
                />
                <HiOutlineMail className="absolute left-[10px] top-[52px]" />
                <div className="h-[60%] w-[28%] bg-amber-400 rounded-full absolute p-4 top-[32px] right-0 text-black font-semibold text-sm">
                  Let's Take
                </div>
              </div>
            </div>
          </div>
          <div className="h-[100%] w-[24%] bg-amber-400 rounded-lg ml-[6rem] relative">
            <img className="h-[120%] w-[100%] absolute bottom-0" src={picture} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection