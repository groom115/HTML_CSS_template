import React from "react";

const Scroll2 = () => {
  const boxStyle = {
    width: "120px",
    height: "150px",
    backgroundColor: "black",
    display: "inline-block",
    marginRight: "10px",
  };
  return (
    <div className="mt-3 ml-3">
      <h4 style={{ margin: 0 }}>BRANDS OF THE DAY</h4>
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

export default Scroll2;
