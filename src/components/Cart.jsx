import { useState } from "react";
import React from "react";

const Cart = () => {
  const [activeStep, setActiveStep] = useState(2);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };
  return (
    <div
      style={{
        position: "relative",
        marginTop: "12px",
        marginLeft: "25px",
        marginRight: "25px",
        height: "100px",
        zIndex: 9999,
        backgroundColor: "white",
        borderRadius: "10px",
        borderColor: "grey",
        borderWidth: "1px",
        borderStyle: "solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div class="line">
        <div className="circle-container">
          <div className="circle-center">
            <button
              className={`circle ${activeStep === 1 ? "active1" : ""}`}
              onClick={() => handleStepClick(1)}
              aria-label="Circle 1"
              style={{}}
            >
              <span className="circle-text">1</span>
            </button>
            <span className="circle-label">My cart</span>
          </div>
        </div>
        <div className="circle-container">
          <div className="circle-center">
            <button
              className={`circle ${activeStep === 2 ? "active1" : ""}`}
              onClick={() => handleStepClick(2)}
              aria-label="Circle 2"
            >
              <span className="circle-text">2</span>
            </button>
            <span className="circle-label">Address</span>
          </div>
        </div>
        <div className="circle-container">
          <div className="circle-center">
            <button
              className={`circle ${activeStep === 3 ? "active1" : ""}`}
              onClick={() => handleStepClick(3)}
              aria-label="Circle 3"
            >
              <span className="circle-text">3</span>
            </button>
            <span className="circle-label">Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
