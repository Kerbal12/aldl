import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SensorData.css";

const SensorData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mode, setMode] = useState("Free");
  const [pump1, setPump1] = useState(false);
  const [pump2, setPump2] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("mode") === "premium") {
      setMode("Premium");
    }
  }, [location]);

  const sensors = [
    { name: "Light Intensity", value: "750 lx", icon: "🌞" },
    { name: "Pressure", value: "1012 hPa", icon: "🌡️" },
    { name: "Moisture", value: "45%", icon: "💧" },
    { name: "Humidity", value: "60%", icon: "🌫️" },
    { name: "Temperature", value: "27°C", icon: "🔥" },
  ];

  const handlePremiumClick = () => {
    setShowPopup(true);
  };

  const handleExploreMore = () => {
    setShowPopup(false);
    setMode("Premium");
  };

  return (
    <div className="sensor-container">
      <div className="mode-buttons">
        <button className={`mode-btn ${mode === "Free" ? "active" : ""}`} onClick={() => setMode("Free")}>
          Free
        </button>
        <button className={`mode-btn ${mode === "Premium" ? "active" : ""}`} onClick={handlePremiumClick}>
          Premium
        </button>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Premium Plan Details</h2>
            <p><strong>60-Day Free Trial!</strong> Get advanced farming insights, diagnosis, and networking options.</p>
            <div className="plan-container">
              <div className="plan free-plan">
                <h3>Free Version</h3>
                <ul>
                  <li><strong>AI-Driven Pest & Disease Detection</strong> – Detects pests and diseases in real-time using AI and sensors.</li>
                  <li><strong>Mobile App Integration</strong> – Provides real-time alerts and AI-driven recommendations for farm management.</li>
                  <li><strong>Smart Data Loggers</strong> – IoT-based sensors monitor soil and atmospheric conditions, syncing data to the cloud.</li>
                  <li><strong>Automation of Farm Equipment</strong> – AI-controlled irrigation, lighting, and greenhouse systems for precision farming.</li>
                </ul>
              </div>
              <div className="plan premium-plan">
                <h3>Premium Version <span className="price">₹399/month</span></h3>
                <p><strong>First 60 days are free!</strong> No commitment, cancel anytime.</p>
                <ul>
                  <li><strong>Predictive Analytics</strong> – Uses historical data to predict and prevent pest and disease outbreaks.</li>
                  <li><strong>Fertilizer/Pesticide Recommendations</strong> – Personalized suggestions for treatments with in-app ordering.</li>
                  <li><strong>Community Platform</strong> – Enables knowledge sharing and issue discussions among farmers.</li>
                  <li><strong>Data-Driven Insights</strong> – Provides AI-powered reports for better farm planning and regional trend analysis.</li>
                </ul>
              </div>
            </div>
            <button className="explore-btn" onClick={handleExploreMore}>Start Now</button>
          </div>
        </div>
      )}

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
            <textarea
              className="feedback-input"
              placeholder="Share your farming experience..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <button className="feedback-button">Submit Feedback</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SensorData;