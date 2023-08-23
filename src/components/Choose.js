import React from 'react'
import Card from './Card.js'
const Choose = () => {
  return (
    <div>
      <p className="text-white text-center font-bold text-5xl w-[100%] pt-20">
        Why Choose us?
      </p>
      <div className="flex w-[70%] m-auto p-10">
        <Card value="98" />
        <Card value="100" />
        <Card value="100" />
      </div>
    </div>
  );
}

export default Choose