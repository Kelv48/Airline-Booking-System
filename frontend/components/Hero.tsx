import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Your Ticket to Explore the World</h1>
        <p className="hero__subtitle">
          Discover the world at your fingertips. Our flight booking service opens 
          doors to global destinations, making travel dreams a reality with convenience and ease.
        </p>

        {/* The Search Bar - Integrated correctly */}
        <div className="search-bar">
          <div className="search-item">
            <span className="search-item__label">From</span>
            <span className="search-item__subtext">Pick the location</span>
          </div>
          <div className="search-item">
            <span className="search-item__label">To</span>
            <span className="search-item__subtext">Pick the location</span>
          </div>
          <div className="search-item">
            <span className="search-item__label">Departure</span>
            <span className="search-item__subtext">Pick the date</span>
          </div>
          <div className="search-item">
            <span className="search-item__label">Return</span>
            <span className="search-item__subtext">Pick the date</span>
          </div>
          <button className="btn-search" aria-label="Search">
            🔍
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;