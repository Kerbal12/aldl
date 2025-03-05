import React from "react";
import "./Diagnosis.css"; // Ensure this CSS file exists

const Diagnosis = () => {
  return (
    <div className="diagnosis-container">
      {/* Warning Section */}
      <div className="warning-box">
        <h2 className="warning-title">⚠️ Infestation Risk Alert!</h2>
        <p className="warning-text">
          Our AI analysis shows that your farm's environmental conditions closely
          match those of another farm that recently experienced a severe pest
          infestation. You are at <strong>HIGH RISK</strong> of an outbreak.
        </p>
      </div>

      {/* Recommended Pesticides Section */}
      <div className="pesticide-section">
        <h3>Recommended Pesticides</h3>
        <div className="pesticide-list">
          <div className="pesticide-card">
            <h4>Organic Neem Oil</h4>
            <p>Eco-friendly pest control for various crops.</p>
            <button className="buy-button">🛒 Buy Now</button>
          </div>

          <div className="pesticide-card">
            <h4>Pyrethrin Spray</h4>
            <p>Fast-acting insecticide derived from natural sources.</p>
            <button className="buy-button">🛒 Buy Now</button>
          </div>

          <div className="pesticide-card">
            <h4>Bacillus Thuringiensis</h4>
            <p>Biological control for caterpillar infestations.</p>
            <button className="buy-button">🛒 Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
