import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
const Questions = ({itemName}) => {
  return (
    <div className="flex flex-col pt-8  overflow-y-hidden">
      <hr className="bg-slate-50" />
      <div className="flex mt-4 w-[100%] justify-between p-2">
        <p className="text-white text-lg font-bold">{itemName}</p>
        <div className="bg-amber-300 rounded-full h-[30px] w-[30px]">
          <AiOutlinePlus className="h-[20px] w-[20px] m-1" />
        </div>
      </div>
    </div>
  );
}

export default Questions