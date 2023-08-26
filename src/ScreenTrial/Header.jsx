import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Header = () => {
  return (
    <div className="bg-slate-200 p-3 flex flex-row justify-between items-center">
      <div className=" px-3 sm:px-5 py-2 bg-blue-200  rounded-full">
        <div className="flex flex-row items-center">
          <div>
            <div className="bg-blue-500 w-8 h-8 sm:w-10 sm:h-10 rounded-full"></div>
          </div>
          <div className="ml-1 flex flex-col">
            <span className="font-bold sm:text-lg m-0">Trial Points</span>
            <span className="text-sm m-0"> Available</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row sm:space-x-10 mr-1 space-x-6">
        <SearchIcon className="h-5 w-5" />
        <FavoriteIcon className="h-5 w-5" />
        <LoyaltyIcon className="h-5 w-5" />
      </div>
    </div>
  );
};

export default Header;
