import React from "react";

const Product = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        marginLeft: "20px",
        marginRight: "20px",
        backgroundColor: "#CCFFCC",
        borderRadius: "8px",
      }}
    >
      <div className="Product1">
        <div style={{ display: "flex", justifyItems: "center" }}>
          <img
            src="https://img.freepik.com/premium-photo/perfume-bottle-white-background-3d-render_167862-45.jpg?w=2000"
            alt=""
            className="Img1"
          />
        </div>
        <div className="Product2">
          <h4 className="text2">No Gas, No Sweat Kit</h4>
          <p className="text1">SMYTTEN PICKS</p>
          <p
            style={{
              margin: 0,
              color: "grey",
              fontSize: ".75rem",
              marginTop: "auto",
            }}
          >
            Size: Combo Qty:1
          </p>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <img
            src="https://5.imimg.com/data5/HC/EV/MY-15940038/diwali-gift-box.jpg"
            alt=""
            className="img2"
          />
          <p
            style={{
              margin: 0,
              color: "green",
              fontSize: ".75rem",
              marginTop: "auto",
              alignSelf: "flex-end",
            }}
          >
            Free gifts
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingRight: "25px",
          paddingLeft: "25px",
          justifyContent: "space-between",
        }}
      >
        <div className="text4">
          <p style={{}} className="text5">
            Gift Options available: 12
          </p>
        </div>
        <div style={{ display: "flex", alignSelf: "center" }}>
          <button className="seg">
            <span style={{ color: "white" }}>View All</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
