import React from "react";
import But from "./But";

const Details = () => {
  return (
    <div className="mt-2 mx-3">
      <span>YOUR ACCOUNT</span>
      <div className="mt-2">
        <But title="My orders" />
        <But title="My orders" desc="Earn Your reward" />
        <But title="My orders" desc="Earn Your reward" />
      </div>
      <div className="mt-4">
        <span className="">HELP AND SETTINGS</span>
        <div className="mt-2">
          <But title="Turn Your notifications" />
        </div>
      </div>
    </div>
  );
};

export default Details;
