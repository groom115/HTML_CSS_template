import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Cart from "./Cart";

const Header = () => (
  <div style={{ backgroundColor: "black", height: "90px" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: "18px",
        paddingLeft: "15px",
      }}
    >
      <ArrowBackIcon style={{ color: "white", fontSize: "25px" }} />
      <h3 style={{ color: "white", marginLeft: "20px" }}>My Cart</h3>
    </div>
    <Cart />
  </div>
);

export default Header;
