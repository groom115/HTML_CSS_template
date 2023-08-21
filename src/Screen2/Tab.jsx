import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import SendIcon from "@mui/icons-material/Send";

const TabsComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ position: "relative" }}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <BottomNavigationAction
          label="Trial"
          icon={
            <AnalyticsIcon className={`text-${value === 0 ? "black" : ""}`} />
          }
        />
        <BottomNavigationAction
          label="Shop"
          icon={
            <AddShoppingCartIcon
              className={`text-${value === 1 ? "black" : ""}`}
            />
          }
        />
        <BottomNavigationAction
          label="Reward"
          icon={<StarIcon className={`text-${value === 2 ? "black" : ""}`} />}
        />
        <BottomNavigationAction
          label="Action"
          icon={<SendIcon className={`text-${value === 3 ? "black" : ""}`} />}
        />
      </BottomNavigation>
    </div>
  );
};

export default TabsComponent;
