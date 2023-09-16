import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const But = ({ title, desc }) => {
  const [showDownwardIcons, setShowDownwardIcons] = useState(true);
  return (
    <div className="flex flex-row h-12 items-center rounded-sm">
      <div className="bg-black h-6 w-6 ml-1"></div>
      <div className="ml-3 flex flex-row">
        <span>{title}</span>
        <div className="bg-slate-500  rounded-md ml-1.5 flex items-center">
          <span className="text-xs">{desc}</span>
        </div>
      </div>
      <button
        className="ml-auto focus:outline-none" // Remove outline on focus if not needed
        onClick={() => setShowDownwardIcons(!showDownwardIcons)} // Toggle visibility on button click
      >
        {showDownwardIcons ? (
          <ArrowForwardIosIcon />
        ) : (
          <KeyboardArrowDownIcon />
        )}
      </button>
    </div>
  );
};

export default But;
