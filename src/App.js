import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Screen from "./Screen2/Screen";
import Trial from "./ScreenTrial/Trial";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/screen" element={<Screen />} />
        <Route path="/trial" element={<Trial />} />
      </Routes>
    </Router>
  );
};

export default App;
