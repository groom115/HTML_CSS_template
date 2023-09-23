import React from "react";

const Click = () => {
  return (
    <div className="bg-gray-400 rounded-[30px] m-4 flex flex-row justify-between py-2 px-2 ">
      <div className="w-[200px]">
        <span className="text-sm">
          Invite your friends who are not on Smytten everyday
        </span>
      </div>
      <div className="flex items-center">
        <button className="py-1 px-3 rounded-2xl bg-sky-500">
          <span className="text-white">Click here</span>
        </button>
      </div>
    </div>
  );
};

export default Click;
