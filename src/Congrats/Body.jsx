import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
const Body = () => {
  return (
    <div className="mt-3">
      <span className="text-slate-300 text-xs sm:text-xl">
        USE THIS TO DISCOVER
      </span>
      <div className="flex flex-row">
        <span className="text-white font-[700] text-2xl sm:text-6xl">600+</span>
        <span className="text-slate-400 font-[700] text-2xl ml-1 sm:text-6xl">
          Trial Packs
        </span>
      </div>
      <div className="bg-black w-[40%] h-24 mt-2"></div>
      <button className="mt-6 bg-white flex flex-row items-center px-4 sm:px-6 py-2 rounded-full">
        <span className="text-sm sm:text-xl">Try Now</span>
        <LocalGroceryStoreIcon className="w-4 h-4 text-black ml-3" />
      </button>
    </div>
  );
};

export default Body;
