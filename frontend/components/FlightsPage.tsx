import React from "react";
import "../styles/FlightsPage.scss";

const flights = [
  {
    id: 1,
    airline: "SkyHigh Air",
    flightNo: "SH102",
    departure: "08:00 AM",
    arrival: "10:30 AM",
    duration: "2h 30m",
    price: "$299",
    status: "On Time",
  },
  {
    id: 2,
    airline: "CloudNine",
    flightNo: "CN445",
    departure: "11:15 AM",
    arrival: "01:45 PM",
    duration: "2h 30m",
    price: "$350",
    status: "Delayed",
  },
  {
    id: 3,
    airline: "Horizon",
    flightNo: "HZ882",
    departure: "03:00 PM",
    arrival: "05:15 PM",
    duration: "2h 15m",
    price: "$275",
    status: "On Time",
  },
];

export default function FlightsPage() {
  return (
    <div className="page-container flights-page">
      <header className="page-header">
        <h1>Flight Search Results</h1>
        <p>Choose a flight that suits your travel plans.</p>
      </header>

      <section className="filter-bar">
        <button type="button">Non-stop</button>
        <button type="button">Economy Only</button>
        <button type="button">Flexible Dates</button>
      </section>

      <section className="results-list">
        {flights.map((flight) => (
          <article className="flight-item" key={flight.id}>
            <div className="flight-info">
              <h3>
                {flight.airline} - {flight.flightNo}
              </h3>

              <div className="flight-times">
                <span>{flight.departure}</span>
                <span className="flight-arrow">→</span>
                <span>{flight.arrival}</span>
              </div>

              <p>{flight.duration} · Economy</p>
            </div>

            <div className="flight-price">
              <p className="price-tag">{flight.price}</p>

              <span
                className={`status-badge ${
                  flight.status === "On Time"
                    ? "status-on-time"
                    : "status-delayed"
                }`}
              >
                {flight.status}
              </span>

              <button className="select-flight" type="button">
                Select Flight
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}