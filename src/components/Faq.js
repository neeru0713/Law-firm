import React from 'react'
import Questions from './Questions'
const Faq = () => {
  return (
    <div className="flex flex-col mx-[20rem] mt-40">
      <h5 className="text-white font-bold text-4xl">FAQ</h5>
      <div className="flex mt-6 justify-between">
        <p className="text-gray-400">
          Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do
          amet sint.
        </p>
        <div flex flex-col>
          <p className="text-white font-semibold text-xl mb-5">
            Do I need a personal injury report?
          </p>
          <p className="text-gray-400">
            Amet minim mollit non deserunt ullamco est <br />
            sit aliqua dolor do amet sint. Velit officia
            <br /> consequantduis enim velit mollit Exer.{" "}
          </p>
          <Questions itemName="How much is my case worth?" />
          <Questions itemName="How much is my case worth?" />
          <Questions itemName="How much is my case worth?" />
        </div>
      </div>
    </div>
  );
}

export default Faq