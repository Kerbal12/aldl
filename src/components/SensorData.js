import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SensorData.css";

const SensorData = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("Free");
  const [pump1, setPump1] = useState(false);
  const [pump2, setPump2] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [farmerFeedbacks, setFarmerFeedbacks] = useState([
    "Great platform for precision farming! 🌾",
    "Pest infestation likely, crops are showing signs of damage. 🐜",
    "Watering system needs adjustment, some areas too dry. 💧",
  ]);

  const sensors = [
    { name: "Light Intensity", value: "750 lx", icon: "🌞" },
    { name: "Pressure", value: "1012 hPa", icon: "🌡️" },
    { name: "Moisture", value: "45%", icon: "💧" },
    { name: "Humidity", value: "60%", icon: "🌫️" },
    { name: "Temperature", value: "27°C", icon: "🔥" },
  ];

  const handleFeedbackSubmit = () => {
    if (feedback.trim() !== "") {
      setFarmerFeedbacks([...farmerFeedbacks, feedback]);
      setFeedback("");
    }
  };

  return (
    <div className="sensor-container">
      <div className="mode-buttons">
        <button className={`mode-btn ${mode === "Free" ? "active" : ""}`} onClick={() => setMode("Free")}>
          Free
        </button>
        <button className={`mode-btn ${mode === "Premium" ? "active" : ""}`} onClick={() => setMode("Premium")}>
          Premium
        </button>
      </div>

      <h2 className="sensor-title">Live Sensor Readings</h2>

      <div className="sensor-grid">
        {sensors.map((sensor, index) => (
          <div key={index} className="sensor-card">
            <span className="sensor-icon">{sensor.icon}</span>
            <h3 className="sensor-name">{sensor.name}</h3>
            <p className="sensor-value">{sensor.value}</p>
          </div>
        ))}
      </div>

      <h2 className="pump-title">Pump Actuators</h2>
      <div className="pump-controls">
        {[{ name: "Pump 1", state: pump1, setState: setPump1 }, { name: "Pump 2", state: pump2, setState: setPump2 }].map((pump, index) => (
          <div key={index} className="pump-card">
            <h3 className="pump-name">{pump.name}</h3>
            <p className="pump-status">{pump.state ? "ON" : "OFF"}</p>
            <button className={`pump-button ${pump.state ? "on" : "off"}`} onClick={() => pump.setState(!pump.state)}>
              {pump.state ? "Turn OFF" : "Turn ON"}
            </button>
          </div>
        ))}
      </div>

      {mode === "Premium" && (
        <>
          <div className="diagnosis-section">
            <h2 className="diagnosis-title">Need a Diagnosis?</h2>
            <button className="diagnosis-button" onClick={() => navigate("/diagnosis")}>
              Run Diagnosis
            </button>
          </div>

          <div className="networking-section">
            <h2 className="networking-title">Farmer Networking & Feedback</h2>
            <div className="feedback-list">
              {farmerFeedbacks.map((item, index) => (
                <p key={index} className="feedback-item">📝 {item}</p>
              ))}
            </div>
            <textarea
              className="feedback-input"
              placeholder="Share your farming experience..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <button className="feedback-button" onClick={handleFeedbackSubmit}>Submit Feedback</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SensorData;
