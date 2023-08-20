import React from 'react'

const Introduction = () => {
  return (
    <div>
      <div className="flex p-12 ml-6 w-[100%] justify-around ">
        <p className="text-white text-4xl font-bold">
          Let's Introduce <br />
          Ourself
        </p>
        <div className="h-[8rem] bg-gray-500 w-[2px] "></div>
        <div className="flex flex-col">
          <h6 className="text-white font-semibold text-lg">Criminal Lawyer</h6>
          <p className="text-gray-500 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Sed euismod ultricies leo, a vestibulum nulla euismod <br />{" "}
            eu. Nulla facilisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction