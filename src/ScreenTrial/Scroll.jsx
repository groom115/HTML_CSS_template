import React from "react";

const Scroll = () => {
  const circles = Array.from({ length: 50 }, (_, index) => index);
  return (
    <div className="scroll-container">
      <div className=" flex flex-col items-center justify-center bg-white">
        <div className="h-12 w-12 rounded-3xl bg-black"></div>
        <span>All catergories </span>
      </div>
      <div className="circle-scroll">
        {circles.map((circle, index) => (
          <div
            className="flex flex-col items-center justify-center"
            key={index}
          >
            <div className="h-12 w-12 rounded-3xl bg-black" key={index}></div>
            <span>Title </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;
