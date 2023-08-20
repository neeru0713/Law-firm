import React from 'react'
import { GiCrossedBones } from "react-icons/gi";
const NavBar = () => {
    return (
      <div className="flex justify-between items-center text-white text-bold w-[100%] p-12">
        <div className="w-[10%] flex items-center">
          <GiCrossedBones className="mr-2 " />
          <h5 className="text-sm font-extrabold">IGSTUDIO</h5>
        </div>
        <div className='flex justify-between w-[40%]'>
          <h4 className=" text-center">Home</h4>
          <h4 className="text-center">Attorneys</h4>
          <h4 className="text-center">Practice Areas</h4>
          <h4 className="text-center">About Us</h4>
        </div>

        <button className="w-[15%] text-center boder border-2 border-white p-1">
          Contact Now
        </button>
      </div>
    );
}

export default NavBar