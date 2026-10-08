import React from "react";
import "../styles/AboutPage.scss";

const features = [
  {
    icon: "✈️",
    title: "Find Flights",
    description:
      "Search and compare flights to help you find an option that fits your journey.",
  },
  {
    icon: "🌦️",
    title: "Check Weather",
    description:
      "View weather information for your destination before you travel.",
  },
  {
    icon: "📍",
    title: "Discover Destinations",
    description:
      "Explore destinations and find places that match your travel plans.",
  },
  {
    icon: "🗺️",
    title: "Plan Your Journey",
    description:
      "Bring your travel information together in one convenient place.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose a destination",
    description:
      "Explore destinations and decide where you want to go.",
  },
  {
    number: "02",
    title: "Check your journey",
    description:
      "Search flights and review travel information for your destination.",
  },
  {
    number: "03",
    title: "Check the weather",
    description:
      "Make sure the conditions are suitable for your planned trip.",
  },
  {
    number: "04",
    title: "Start travelling",
    description:
      "Use your collected travel information to prepare for your journey.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-container about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-eyebrow">
            YOUR JOURNEY, SIMPLIFIED
          </span>

          <h1>
            Plan your journey with
            <span> Waypoint</span>
          </h1>

          <p>
            Waypoint is a travel platform designed to simplify
            your journey planning process. Discover destinations,
            find flights, check weather conditions and organise
            the information you need for your trip.
          </p>

          <div className="about-hero-actions">
            <button className="about-primary-button">
              Start Exploring
            </button>

            <button className="about-secondary-button">
              View Destinations
            </button>
          </div>
        </div>

        <div className="about-hero-card">
          <div className="hero-card-icon">🌍</div>

          <h2>Your next adventure starts here.</h2>

          <p>
            Discover new places and make your travel planning
            easier with Waypoint.
          </p>

          <div className="hero-route">
            <span>📍 Dublin</span>
            <span className="route-line">→</span>
            <span>📍 Paris</span>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-intro">
          <span>WHAT WE OFFER</span>
          <h2>Everything you need to plan your trip</h2>
          <p>
            Waypoint brings the most important parts of travel
            planning together in one platform.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <div className="section-intro">
          <span>HOW IT WORKS</span>
          <h2>Plan your trip in four simple steps</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-stats">
        <div>
          <strong>4+</strong>
          <span>Travel tools</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Travel information</span>
        </div>

        <div>
          <strong>🌍</strong>
          <span>Explore the world</span>
        </div>

        <div>
          <strong>✈️</strong>
          <span>Plan your journey</span>
        </div>
      </section>

      <section className="about-cta">
        <div>
          <span>READY TO EXPLORE?</span>
          <h2>Start planning your next journey.</h2>
          <p>
            Explore destinations, compare flights and check
            the weather before you go.
          </p>
        </div>

        <button>Explore Destinations</button>
      </section>
    </main>
  );
}