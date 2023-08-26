import React from "react";

const Body = () => {
  return (
    <div className="mt-3 mx-3">
      <span className="text-gray-600 mt-4 font-semibold sm:text-lg">
        Top Brands on Smytten!
      </span>
      <div className="mt-5 w-full flex flex-wrap items-center">
        {Array.from({ length: 20 }, (_, index) => (
          <div className=" w-20 sm:w-32 mb-4 mr-2 ml-2">
            <div key={index} className=" h-28 sm:h-36 bg-black"></div>
            <div className="flex flex-col text-center justify-center">
              <span className="text-black ">TiTle</span>
              <span className="text-gray-500 text-sm">Subititle</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
