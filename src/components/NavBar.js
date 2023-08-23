import React from "react";
import { GiCrossedBones } from "react-icons/gi";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { BiLogoCPlusPlus } from "react-icons/bi";
const NavBar = ({ showButton }) => {
  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex justify-between items-center text-white text-bold w-[100%] p-12">
        <div className="flex">
          <GiCrossedBones className="mr-2" />
          <h5 className="text-sm font-extrabold">IGSTUDIO</h5>
        </div>
        <div className="flex text-center w-[50%] justify-between">
          <h4>Home</h4>
          <h4>Attorneys</h4>
          <h4>Practice Areas</h4>
          <h4>About Us</h4>
        </div>

        {showButton && (
          <button className="w-[15%] text-center boder border-2 border-white p-1">
            Contact Now
          </button>
        )}
        {!showButton && (
          <div className="flex  w-[12%] justify-between">
            <BsInstagram />
            <AiOutlineFacebook />
            <AiFillTwitterSquare />
            <BiLogoPinterestAlt />
          </div>
        )}
      </div>

      {!showButton && (
        <div className="flex text-white justify-between w-[60%] m-auto">
          <div className="flex items-center">
            <BiLogoCPlusPlus />
            <p className="ml-2">2020 Acme.All right reserved</p>
          </div>
          <p>Private Policy</p>
          <p>Term Of Service</p>
        </div>
      )}
    </div>
  );
};

export default NavBar;
