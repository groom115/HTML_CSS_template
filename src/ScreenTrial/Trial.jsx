import React from "react";
import Header from "./Header";
import Scroll from "./Scroll";
import Body from "./Body";

const Trial = () => {
  return (
    <div>
      <Header />
      <Scroll />
      <div className="bg-black mt-4 h-36"></div>
      <Body />
    </div>
  );
};

export default Trial;
