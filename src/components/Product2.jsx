import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Product2 = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        marginLeft: "20px",
        marginRight: "20px",
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    >
      <div className="Product1">
        <div style={{ display: "flex", justifyItems: "center" }}>
          <img
            src="https://media.allure.com/photos/6143bcca48012ef8a84ea4e7/16:9/w_3487,h_1961,c_limit/jh_fragrance.jpg"
            alt=""
            className="Img1"
          />
        </div>
        <div
          style={{
            paddingLeft: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h4 className="text2">Natural Green Tea Face Toner</h4>
          <p className="text1">THE MONS CO.</p>
          <p
            style={{
              margin: 0,
              color: "grey",
              fontSize: ".75rem",
              marginTop: "auto",
            }}
          >
            Size: 25 Qty:1
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
          <DeleteIcon
            style={{ height: "20px", width: "20px", alignSelf: "flex-end" }}
          />
          <div className="text3">
            <p style={{ margin: 0 }}>TRIAL</p>
            <p style={{ margin: 0 }}>POINT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product2;
