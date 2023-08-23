import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineSmallDash } from "react-icons/ai";

const Questions = ({ itemName }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  function clickHandler() {
    setShowAnswer(!showAnswer);
  }

  return (
    <div className="flex flex-col pt-8 overflow-y-hidden">
      <hr className="bg-zinc-100" />
      <div
        onClick={clickHandler}
        className="flex mt-4 w-[100%] justify-between p-2"
      >
        <p className="text-white text-lg font-bold">{itemName.q}</p>
        {showAnswer ? (
          <div className="bg-amber-300 rounded-full h-[30px] w-[30px]">
            <AiOutlineSmallDash className="h-[20px] w-[20px] m-1" />
          </div>
        ) : (
          <div className="bg-amber-300 rounded-full h-[30px] w-[30px]">
            <AiOutlinePlus className="h-[20px] w-[20px] m-1" />
          </div>
        )}
      </div>
      {showAnswer && (
        <div className="rounded bg-white border border-black text-black flex items-center justify-between p-2">
          {itemName.a}
        </div>
      )}
    </div>
  );
};

export default Questions;
