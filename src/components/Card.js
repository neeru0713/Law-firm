import React from "react";
import { BsGiftFill } from "react-icons/bs";
import picture from "./profile.png";
const Card = ({ value, showUser, userName, position }) => {
  return (
    <div className="flex flex-col hover:bg-[#2e2e2e] w-[100%] mr-4 cursor-pointer h-[310px] w-[310px] border rounded-lg border-gray-600 p-4">
      {!showUser && (
        <div className="h-[70px] w-[70px] rounded-full bg-white p-5">
          <BsGiftFill className="h-[2rem] w-[2rem]" />
        </div>
      )}
      {showUser && (
        <img
          className="h-[5rem] w-[5rem] bg-violet-500 rounded-full "
          src={picture}
        />
      )}

      <h4 className="text-white font-bold text-xl pt-[1rem]">{userName}</h4>
      <h4 className="text-white font-semibold text-sm">{position}</h4>
      {!showUser && (
        <div className="text-white font-bold text-2xl p-3">
          {value}% Success Rate
        </div>
      )}
      <p className="text-gray-700 text-xs p-2 font-semibold">
        Amet minim mollit non deserunt ullamco est <br />
        sit aliqua dolor do amet sint. Velit officia
        <br /> consequantduis enim velit mollit Exer.{" "}
      </p>
      {!showUser && (
        <button className="text-black font-bold bg-amber-400 h-[14%] w-[40%] rounded-2xl mt-8 ml-2">
          Read More
        </button>
      )}
    </div>
  );
};

export default Card;
