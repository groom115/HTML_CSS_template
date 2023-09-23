import React from "react";

const SubHeader = () => {
  return (
    <div className="grid grid-cols-4 my-5 mx-2">
      <div className="col-span-1 flex flex-col items-center">
        <div className="bg-black w-10 h-10 rounded-full"></div>
        <span className="mt-1 font-semibold">Text</span>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <div className="bg-black w-10 h-10 rounded-full"></div>
        <span className="mt-1 font-semibold">Text</span>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <div className="bg-black w-10 h-10 rounded-full"></div>
        <span className="mt-1 font-semibold">Text</span>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <div className="bg-black w-10 h-10 rounded-full"></div>
        <span className="mt-1 font-semibold">Text</span>
      </div>
    </div>
  );
};

export default SubHeader;
