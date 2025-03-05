import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Smart Agriculture Solution</h1>
          <p className="hero-subtitle">
            AI-Driven Farming for Better Yield & Sustainability
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <FeatureCard
            icon="🌾"
            title="AI-Driven Early Warning"
            description="Real-time pest & disease alerts with predictive analytics."
          />
          <FeatureCard
            icon="📡"
            title="Smart Data Loggers"
            description="IoT sensors for real-time atmospheric & soil monitoring."
          />
          <FeatureCard
            icon="📱"
            title="Farmer-Connected App"
            description="Live alerts, recommendations, and community discussions."
          />
          <FeatureCard
            icon="🤖"
            title="Automated Farm Equipment"
            description="AI-controlled pumps, lighting, and greenhouse systems."
          />
        </div>
      </section>

      {/* Call to Action */}
      <footer className="cta-section">
        <h3 className="cta-title">Ready to Transform Your Farm?</h3>
        <p className="cta-subtitle">Join our smart agriculture revolution today!</p>
        <button className="cta-button" onClick={() => navigate("/sensor-data")}>
          🚀 Get Started
        </button>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <span className="feature-icon">{icon}</span>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default HomePage;
