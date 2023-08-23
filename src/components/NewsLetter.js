import React from 'react'
import Input from './Input'
const NewsLetter = () => {
  return (
    <div className="flex flex-col mx-[23rem] mt-20 bg-[#323232] h-[15rem] w-[50rem] text-center">
      <p className="text-white font-semibold text-5xl p-12">
        Subscribe Our Newsletter
      </p>
      <div className="flex p-6 w-[50rem] ml-[2rem]">
        <Input className=" border rounded-l-lg mx-[4rem]" itemName="Name:" />
        <Input className="mx-[-3rem]" itemName="Enter your Email" />
        <button className="text-black text-xs ml-[4rem] h-[2.5rem] w-[5rem] bg-amber-300 rounded-r-lg">
          Send
        </button>
      </div>
    </div>
  );
}

export default NewsLetter