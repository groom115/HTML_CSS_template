import React from "react";
import Product from "./Product";
import Product2 from "./Product2";

const Body = () => (
  <div style={{ backgroundColor: "#F4F4F4" }}>
    <img
      src="https://static.toiimg.com/thumb/msid-102578478,width-1280,height-720,resizemode-4/.jpg"
      alt=""
      style={{
        marginTop: "80px",
        width: "100%",
        position: "relative",
        height: "120px",
        imageRendering: "pixelated",
      }}
    />
    <div style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0, fontSize: "1.25rem" }}>
            Trial order{" "}
            <span style={{ color: "grey", fontSize: "1rem" }}>(2 items)</span>
          </h2>
          <p style={{ margin: "2.5px 0", fontSize: "0.75rem" }}>
            Get free trials with 235 cashback*
          </p>
        </div>
        <div style={{ justifyContent: "flex-end" }}>
          <h5 style={{ margin: 0, fontSize: "0.75rem", color: "grey" }}>
            Expected delivery
          </h5>
          <p style={{ margin: "2.5px 0", fontSize: "0.75rem" }}>17 Aug 2023</p>
        </div>
      </div>
    </div>
    <Product />
    <Product2 />
    <div
      style={{ marginTop: "25px", marginLeft: "20px", marginBottom: "10px" }}
    >
      <h3 style={{ margin: 0 }}>Looking For More Trials?</h3>
      <p style={{ margin: 0 }}>Enjoy new discoveries at a normal fees</p>
    </div>
  </div>
);
export default Body;
