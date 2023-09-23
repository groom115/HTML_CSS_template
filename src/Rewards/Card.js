import React from "react";

const Card = () => {
  const boxStyle = {
    width: "250px",
    height: "150px",
    backgroundColor: "black",
    display: "inline-block",
    marginRight: "10px",
  };
  return (
    <div className="mt-4 ml-4">
      <h3 className="font-bold">Additional ways to earn Symtten bucks</h3>
      <div
        style={{
          width: "100%",
          overflowX: "scroll",
          whiteSpace: "nowrap",
          marginTop: "10px",
        }}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <div key={index} style={boxStyle}></div>
        ))}
      </div>
    </div>
  );
};

export default Card;
