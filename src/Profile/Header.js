import React from "react";
import EditIcon from "@mui/icons-material/Edit";
const Header = () => {
  return (
    <div className="bg-black p-3 flex flex-row pb-14">
      <div className="bg-white w-16 h-16 rounded-full"></div>
      <div className="flex flex-col justify-center pl-2">
        <span className="text-white font-semibold m-0">Ishaan Malik</span>
        <div className="-mt-1 flex flex-row">
          <span className="text-white text-xs">Edit Profile </span>
          <div className="h-4 w-4">
            <EditIcon className="text-white custom-icon-size" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
