import React from "react";

const Card = () => {
  return (
    <div className="mt-3 bg-black w-full  rounded-md flex flex-row p-3">
      <div className="w-[40%] flex items-center justify-center">
        <div className="bg-slate-800 p-2">
          <span className="text-white font-semibold text-3xl sm:text-5xl">
            0 6
          </span>
        </div>
      </div>

      <div className="flex-1 p-2 items-center justify-center">
        <div className="flex flex-col">
          <span className="text-white text-lg sm:text-3xl">You now have</span>
          <span className="text-white font-extrabold text-2xl sm:text-5xl">
            Trial
          </span>
          <span className="text-white font-extrabold text-2xl sm:text-5xl">
            Points
          </span>
          <span className="text-white text-sm sm:text-2xl">
            in your account
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
