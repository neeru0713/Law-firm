import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Card from "./Card";
const Client = () => {
  return (
    <div className="flex flex-col p-12 mx-[20rem] pt-20">
      <div className="flex justify-between">
        <p className="text-white font-semibold text-5xl">
          What says our
          <br /> happy Clients
        </p>
        <div className="flex w-[18%] justify-between">
          <div className="h-[60px] w-[60px] rounded-full bg-white">
            <span>
              <AiOutlineArrowLeft className="ml-[1rem] mt-[1rem] h-[20px] w-[20px]" />
            </span>
          </div>
          <div className="h-[60px] w-[60px] rounded-full bg-amber-400">
            <span>
              <AiOutlineArrowRight className="ml-[1rem] mt-[1rem] h-[20px] w-[20px]" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-10">
        <Card showUser={true} userName="Jane Cooper" position="Ceo of hunt" />
        <Card showUser={true} userName="Devon Lane" position="Ceo of hunt" />
        <Card showUser={true} userName="Robert Fox" position="Ceo of hunt" />
      </div>
    </div>
  );
};

export default Client;
