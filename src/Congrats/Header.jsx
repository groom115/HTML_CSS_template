import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Header = () => {
  return (
    <div>
      <div className="flex items-center">
        <span className="font-bold text-lg text-white sm:text-2xl">
          Congratulations,
        </span>
        <CloseOutlinedIcon className="w-3 h-3 ml-auto text-slate-400" />
      </div>
      <div>
        <span className="font-bold text-lg text-white sm:text-2xl">
          Ishaan Malik!
        </span>
      </div>
      <div className="bg-white h-1 w-12 mt-3"></div>
    </div>
  );
};

export default Header;
