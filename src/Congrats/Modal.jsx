import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

const Modal = ({ closeModal }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-slate-900 rounded-xl px-1 pt-1 pb-4 sm:px-3 shadow-lg">
          <div className="flex items-center justify-end">
            <ClearIcon
              className="cursor-pointer text-white"
              onClick={closeModal}
            />
          </div>
          <div className="flex justify-center">
            <div className="border-b border-gray-300 w-8"></div>
          </div>
          <div className="">
            <span className="sm:text-lg font-semibold text-white text-xs">
              Reasons to get Smytten today
            </span>
            <div className="bg-white   w-8 sm:w-12 h-0.5 mt-1.5"></div>
          </div>
          <div className="bg-white mx-1.5 sm:mx-2.5 mt-3  justify-center px-6 pt-3 sm:px-8 sm:mt-5 ">
            <div className="flex justify-center">
              <span className="sm:text-xl">
                Get upto 6 Trial Packs &{" "}
                <span className="font-semibold">a</span>
              </span>
            </div>
            <div className="flex justify-center">
              <span className="text-sky-500 font-bold text-xl sm:text-3xl">
                No Gas, No, Sweat Kit
              </span>
            </div>
            <div className="flex justify-center sm:mt-1">
              <div className="bg-sky-500 text-center mt-1 w-28 sm:w-36 rounded-lg">
                <span className="text-white text-sm sm:text-lg">For $199*</span>
              </div>
            </div>

            <div className="h-32 sm:h-44 bg-black mt-1"></div>
          </div>
          <div className="mt-2 flex justify-center">
            <p className=" text-white underline underline-offset-1 text-xs">
              More details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
