import React from "react";

const template = (title, num) => {
  return (
    <div className="bg-white m-1 sm:mx-2 flex flex-col justify-center items-center rounded-md p-3 shadow-md">
      <div className="h-10 w-10 rounded-full bg-red-500 mt-1.5 sm:h-16 sm:w-16 "></div>
      <span className="text-black font-semibold mt-2">{title}</span>
      <span className="text-slate-500 text-sm -mt-1">Available</span>
      <div className="bg-sky-500 px-3  rounded-lg mt-1.5 mb-1">
        <span className="text-white font-bold">{num}</span>
      </div>
    </div>
  );
};
const Cards = () => {
  return (
    <div className="-mt-12 flex flex-row px-2 items-center justify-center">
      {template("Trial Points", 2)}
      {template("Trial Points", 2)}
      {template("Trial Points", 2)}
    </div>
  );
};

export default Cards;
