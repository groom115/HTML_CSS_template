import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Screen from "./Screen2/Screen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/screen" element={<Screen />} />
      </Routes>
    </Router>
  );
};

export default App;
