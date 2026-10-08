"use client";

import React, { useState } from "react";
import "../styles/WeatherPage.scss";

const forecast = [
  {
    day: "Today",
    icon: "☀️",
    condition: "Sunny",
    temperature: "18°C",
    low: "11°C",
  },
  {
    day: "Fri",
    icon: "🌤️",
    condition: "Partly Cloudy",
    temperature: "17°C",
    low: "10°C",
  },
  {
    day: "Sat",
    icon: "🌧️",
    condition: "Light Rain",
    temperature: "14°C",
    low: "9°C",
  },
  {
    day: "Sun",
    icon: "☁️",
    condition: "Cloudy",
    temperature: "15°C",
    low: "10°C",
  },
  {
    day: "Mon",
    icon: "☀️",
    condition: "Sunny",
    temperature: "19°C",
    low: "12°C",
  },
];

export default function WeatherPage() {
  const [city, setCity] = useState("Dublin");
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    setCity(search.trim());
    setSearch("");
  };

  return (
    <div className="page-container weather-page">
      <header className="weather-header">
        <div>
          <h1>Travel Weather</h1>
          <p>Check the weather before you travel.</p>
        </div>

        <form className="weather-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search city..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button type="submit">Search</button>
        </form>
      </header>

      <section className="current-weather">
        <div className="current-weather-main">
          <div>
            <p className="weather-location">📍 {city}</p>
            <p className="weather-date">Thursday, October 8</p>
          </div>

          <div className="weather-temperature">
            <span className="weather-icon">☀️</span>
            <span>18°C</span>
          </div>

          <h2>Sunny</h2>
          <p>Feels like 17°C</p>
        </div>

        <div className="travel-status">
          <span className="status-icon">✓</span>
          <div>
            <strong>Good travel conditions</strong>
            <p>Weather conditions look favourable for travel.</p>
          </div>
        </div>
      </section>

      <section className="weather-details">
        <div className="weather-detail-card">
          <span>💨</span>
          <div>
            <p>Wind</p>
            <strong>14 km/h</strong>
          </div>
        </div>

        <div className="weather-detail-card">
          <span>💧</span>
          <div>
            <p>Humidity</p>
            <strong>68%</strong>
          </div>
        </div>

        <div className="weather-detail-card">
          <span>👁️</span>
          <div>
            <p>Visibility</p>
            <strong>10 km</strong>
          </div>
        </div>

        <div className="weather-detail-card">
          <span>🌅</span>
          <div>
            <p>Sunrise</p>
            <strong>07:32 AM</strong>
          </div>
        </div>
      </section>

      <section className="forecast-section">
        <div className="section-heading">
          <div>
            <h2>5-Day Forecast</h2>
            <p>Plan your trip around the weather.</p>
          </div>
        </div>

        <div className="forecast-grid">
          {forecast.map((day) => (
            <article className="forecast-card" key={day.day}>
              <h3>{day.day}</h3>

              <span className="forecast-icon">{day.icon}</span>

              <p>{day.condition}</p>

              <strong>{day.temperature}</strong>

              <span className="forecast-low">
                Low {day.low}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="travel-advisory">
        <div className="advisory-icon">✈️</div>

        <div>
          <h2>Travel Weather Advisory</h2>
          <p>
            No significant weather issues are currently expected.
            Always check the latest conditions before departure.
          </p>
        </div>
      </section>
    </div>
  );
}