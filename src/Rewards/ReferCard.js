import React from "react";

const ReferCard = () => {
  return (
    <div className="m-4">
      <h3 className="font-bold">Refer & Earn</h3>
      <div className="mt-1 bg-cyan-600 w-full m-1 p-3 rounded-md flex flex-col ">
        <span className="text-white font-extrabold text-[20px] mt-1">
          REFER & EARN REWARDS
        </span>
        <span className="mt-2 text-white w-[250px]">
          Invite your friends to <span className="font-semibold">Smytten</span>{" "}
          & earn <span className="font-semibold">220 Smytten Bucks</span> when
          they place a Trial Order
        </span>
        <div className="mt-6 mb-1">
          <button className="bg-white px-4 py-1 rounded-2xl">
            <span>How To Refer a Friend</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferCard;
