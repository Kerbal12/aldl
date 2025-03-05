import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SensorData from "./components/SensorData"; // Import SensorData.js
import Diagnosis from "./components/Diagnosis"; // Import Diagnosis.js

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sensor-data" element={<SensorData />} />
        <Route path="/diagnosis" element={<Diagnosis />} /> {/* Add route for Diagnosis */}
      </Routes>
    </Router>
  );
}

export default App;
