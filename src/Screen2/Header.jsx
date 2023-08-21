import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Header = () => {
  return (
    <div className="bg-slate-200 p-3 flex flex-row justify-between items-center">
      <div className="p-3 bg-lime-100 w-25 rounded-3xl">
        <div className="flex flex-row">
          <span className="text-lime-800 font-semibold">$0 </span>
          <span className="ml-1 font-semibold"> Wallet</span>
        </div>
        <span className="text-sm">Available </span>
      </div>
      <div className="flex flex-row space-x-10">
        <SearchIcon className="h-5 w-5" />
        <FavoriteIcon className="h-5 w-5" />
        <LoyaltyIcon className="h-5 w-5" />
      </div>
    </div>
  );
};

export default Header;
