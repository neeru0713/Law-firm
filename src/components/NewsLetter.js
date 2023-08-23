import React from 'react'
import Input from './Input'
const NewsLetter = () => {
  return (
    <div className="flex flex-col mx-[23rem] mt-20 bg-[#323232] h-[15rem] w-[50rem] text-center">
      <p className="text-white font-semibold text-5xl p-12">
        Subscribe Our Newsletter
      </p>
      <div className="flex p-6 w-[50rem] justify-around">
        <Input className=" border rounded-l-xl" itemName="name:" />
        <Input itemName="Enter your Email" />
        <Input className="text-black text-xs" itemName="SEND"/>
      </div>
    </div>
  );
}

export default NewsLetter