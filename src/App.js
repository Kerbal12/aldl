import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SensorData from "./components/SensorData";
import Diagnosis from "./components/Diagnosis";
import PremiumPlan from "./components/PremiumPlans"; // Import PremiumPlan.js

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sensor-data" element={<SensorData />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/premium-plan" element={<PremiumPlan />} /> {/* Added PremiumPlan Route */}
      </Routes>
    </Router>
  );
}

export default App;
