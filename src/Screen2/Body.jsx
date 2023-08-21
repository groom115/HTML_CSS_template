import React from "react";
import Scroll from "./Scroll";
import CardSlider from "./Card";

const Body = () => {
  return (
    <div>
      <Scroll />
      <img
        src="https://img.freepik.com/free-vector/realistic-peanut-butter-horizontal-advertising-with-branded-product-editable-text-arachis-bean-images_1284-29379.jpg?w=2000"
        alt=""
        className="mt-3 w-full h-28 rounded-md"
      />
      <CardSlider />
    </div>
  );
};

export default Body;
