import React from "react";

const Scroll = () => {
  const circles = Array.from({ length: 50 }, (_, index) => index);
  return (
    <div className="scroll-container">
      <div className="circle-scroll">
        {circles.map((circle, index) => (
          <div
            className="h-12 w-12 rounded-3xl bg-black mr-4"
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;
