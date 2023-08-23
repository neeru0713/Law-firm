import React from 'react'
import picture from "./profile.png";
const TeamMember = ({itemName,cases }) => {
  return (
    <div className="flex mx-[2rem] mt-8 hover:bg-amber-300  cursor-pointer rounded-2xl p-4">
      <img className="h-[3rem] rounded-full bg-purple-500" src={picture} />
      <div className="flex flex-col ml-4">
        <p className="text-white font-semibold text-sm">{itemName}</p>
        <p className="text-gray-400">{cases}</p>
      </div>
    </div>
  );
}

export default TeamMember