import React from "react";

const Invite = () => {
  return (
    <div className="m-4">
      <h2 className="font-bold text-[20px]">Invite your friends to Smytten</h2>
      <div className="grid grid-cols-4 my-5 mx-2">
        <div className="col-span-1 flex flex-col items-center">
          <div className="bg-black w-10 h-10 rounded-full"></div>
          <span className="mt-1 ">Whatsapp</span>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="bg-black w-10 h-10 rounded-full"></div>
          <span className="mt-1 ">Telegram</span>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="bg-black w-10 h-10 rounded-full"></div>
          <span className="mt-1 ">Share</span>
        </div>
        <div className="col-span-1 flex flex-col items-center">
          <div className="bg-black w-10 h-10 rounded-full"></div>
          <span className="mt-1 ">Copy</span>
        </div>
      </div>
    </div>
  );
};

export default Invite;
