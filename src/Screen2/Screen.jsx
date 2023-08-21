import React from "react";
import Header from "./Header";
import TabsComponent from "./Tab";
import Body from "./Body";
import Scroll2 from "./Scroll2";

const Screen = () => {
  return (
    <div>
      <Header />
      <Body />
      <Scroll2 />
      <TabsComponent />
    </div>
  );
};

export default Screen;
