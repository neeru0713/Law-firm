import React from 'react'

const Input = ({ itemName }) => {
  return (
    <input
      type="text"
      className=" border text-black bg-white"
      placeholder={itemName}
    />
  );
};

export default Input