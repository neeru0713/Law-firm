import React from 'react'
import { GiCrossedBones } from "react-icons/gi";
const NavBar = () => {
    return (
      <div className="flex flex-col">
        <div className="flex text-white text-bold w-[100%] p-12">
          <div className="w-[15%] flex items-center">
            <GiCrossedBones className="mr-2 " />
            <h5 className="text-sm font-extrabold">IGSTUDIO</h5>
          </div>
          <h4 className="w-[10%] text-center">Home</h4>
          <h4 className="w-[10%] text-center">Attorneys</h4>
          <h4 className="w-[10%] text-center">Practice Areas</h4>
          <h4 className="w-[10%] text-center">About Us</h4>
          <h4 className="w-[12%] text-center boder border-2 border-white p-1">
            Contact Now
          </h4>
        </div>
       
      </div>
    );
}

export default NavBar