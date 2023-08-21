import React from "react";
import applelaptop from "./applelaptop.jpeg";

const GridItem = ({ itemName, width }) => {
  return (
    <div className={`col-span-${width} relative `}>
      <img src={applelaptop} alt={itemName} />
      <div className="absolute inset-0 bg-black opacity-30 transition opacity-0 hover:opacity-0"></div>
      <p className="absolute bottom-[12px] w-full text-center font-semibold text-white">
        {itemName}
      </p>
    </div>
  );
};

export default GridItem;
