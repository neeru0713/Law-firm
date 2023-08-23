import React from 'react'

const Input = ({ itemName, className }) => {
  return (
    <input
      type="text"
      className={`border text-black bg-white p-2 ${className}`} 
      placeholder={itemName}
    />
  );
};

export default Input