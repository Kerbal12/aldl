import React from "react";
import { useNavigate } from "react-router-dom";
import "./PremiumPlan.css";

const PremiumPlan = () => {
  const navigate = useNavigate();

  return (
    <div className="premium-container">
      <h1 className="premium-title">Upgrade to Premium</h1>
      <p className="premium-price">₹399 per month</p>

      <h2 className="features-title">Exclusive Premium Features</h2>
      <ul className="features-list">
        <li>✔ Fertilizer & Pesticide Recommendations</li>
        <li>✔ Predictive Analytics for Pests & Diseases</li>
        <li>✔ Community Platform for Farmer Discussions</li>
      </ul>

      <h2 className="additional-title">Other Smart Farming Features</h2>
      <ul className="features-list">
        <li>✔ AI-Driven Pest & Disease Detection</li>
        <li>✔ Mobile App Integration</li>
        <li>✔ Smart Data Loggers for Real-time Monitoring</li>
        <li>✔ Automation of Farm Equipment</li>
        <li>✔ AI-Powered Data Insights</li>
      </ul>
      
      {/* Clicking 'Explore' navigates to SensorData with Premium mode active */}
      <button className="explore-button" onClick={() => navigate("/sensor-data?mode=premium")}>
        Explore
      </button>
    </div>
  );
};

export default PremiumPlan;
