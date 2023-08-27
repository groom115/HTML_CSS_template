import React from "react";
import Header from "./Header";
import Card from "./Card";
import Body from "./Body";

const Congrats = () => {
  return (
    <div className="bg-sky-900 p-5">
      <Header />
      <Card />
      <Body />
      <div className="text-white text-right mt-10">
        <a href="#" className="text-white-300 hover:underline">
          See more benefits
        </a>
      </div>
    </div>
  );
};

export default Congrats;
