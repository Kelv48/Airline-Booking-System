import React from "react";
import "../styles/DestinationsPage.scss";

const destinations = [
  {
    city: "Paris",
    country: "France",
    emoji: "🇫🇷",
    description: "Explore iconic landmarks, art, food and culture.",
    category: "Europe",
  },
  {
    city: "New York",
    country: "USA",
    emoji: "🇺🇸",
    description: "Experience the energy of one of the world's great cities.",
    category: "North America",
  },
  {
    city: "London",
    country: "England",
    emoji: "🇬🇧",
    description: "Discover history, culture and modern city life.",
    category: "Europe",
  },
  {
    city: "Rome",
    country: "Italy",
    emoji: "🇮🇹",
    description: "Experience ancient history, architecture and Italian cuisine.",
    category: "Europe",
  },
];

export default function DestinationsPage() {
  return (
    <main className="page-container destinations-page">
      <header className="destinations-header">
        <div>
          <span className="destinations-eyebrow">
            EXPLORE THE WORLD
          </span>

          <h1>Destinations</h1>

          <p>
            Discover your next destination and start planning
            your journey.
          </p>
        </div>

        <button className="map-button">
          🗺️ Explore on Map
        </button>
      </header>

      <section className="destination-search">
        <div className="destination-search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search destinations..."
          />
        </div>

        <select defaultValue="all">
          <option value="all">All regions</option>
          <option value="europe">Europe</option>
          <option value="north-america">North America</option>
          <option value="asia">Asia</option>
        </select>
      </section>

      <section className="popular-section">
        <div className="section-heading">
          <div>
            <h2>Popular destinations</h2>
            <p>Places travellers are exploring right now.</p>
          </div>
        </div>

        <div className="destinations-grid">
          {destinations.map((destination) => (
            <article
              className="destination-card"
              key={destination.city}
            >
              <div className="destination-image">
                <span>{destination.emoji}</span>

                <button
                  className="favourite-button"
                  aria-label={`Save ${destination.city}`}
                >
                  ♡
                </button>
              </div>

              <div className="destination-content">
                <span className="destination-category">
                  {destination.category}
                </span>

                <h3>
                  {destination.city}, {destination.country}
                </h3>

                <p>{destination.description}</p>

                <div className="destination-actions">
                  <button className="explore-button">
                    Explore
                  </button>

                  <button className="flight-button">
                    ✈️ Flights
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-map-preview">
        <div className="map-preview-content">
          <span>INTERACTIVE MAP</span>

          <h2>Explore destinations visually</h2>

          <p>
            Browse destinations on an interactive map and
            discover places that could be part of your next
            journey.
          </p>

          <button>Open Destination Map</button>
        </div>

        <div className="mock-map">
          <span className="map-pin pin-one">📍</span>
          <span className="map-pin pin-two">📍</span>
          <span className="map-pin pin-three">📍</span>
          <span className="map-pin pin-four">📍</span>

          <div className="map-label">
            Explore the world
          </div>
        </div>
      </section>

      <section className="destination-cta">
        <div>
          <h2>Not sure where to go?</h2>

          <p>
            Explore our destination collection and find
            inspiration for your next trip.
          </p>
        </div>

        <button>Explore More Destinations</button>
      </section>
    </main>
  );
}