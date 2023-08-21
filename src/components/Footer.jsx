import React from "react";
import Screen from "../Screen2/Screen";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "auto",
        paddingLeft: "20px",
        paddingRight: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderTop: "1px solid black",
      }}
    >
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <h3 style={{ margin: 0 }}>$ 199</h3>
        <p style={{ margin: 0, color: "blue", textDecoration: "underline" }}>
          Grand Total
        </p>
      </div>

      <div style={{ display: "flex", alignSelf: "center" }}>
        <Link to="/screen">
          <button
            style={{
              paddingRight: "22px",
              paddingLeft: "22px",
              paddingTop: "12px",
              paddingBottom: "12px",
              borderRadius: "20px",
              backgroundColor: "black",
            }}
          >
            <span style={{ color: "white" }}>Proceed to payment</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
