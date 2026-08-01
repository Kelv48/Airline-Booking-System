import React from 'react';

const Hero = () => {
    return (
        <section className="hero">

            <div className="hero__image">
                <img
                    src="/images/hero-plane.jpg"
                    alt="Travel destination"
                />

                <svg
                    className="hero-wave"
                    viewBox="0 0 200 1000"
                    preserveAspectRatio="none"
                >
                    <path
                        d="
          M0 0
          C100 120 20 250 120 400
          C200 550 50 700 140 850
          C180 930 120 980 100 1000
          L200 1000
          L200 0
          Z
        "
                    />
                </svg>

            </div>


            <div className="hero__content">
                <h1 className="hero__title">
                    Your Ticket to Explore the World
                </h1>

                <p className="hero__subtitle">
                    Discover the world at your fingertips. Our flight booking service opens
                    doors to global destinations.
                </p>
            </div>


            <div className="search-bar">
                <div className="search-item">
                    <span className="search-item__label">From</span>
                    <span className="search-item__subtext">
                        Pick the location
                    </span>
                </div>

                <div className="search-item">
                    <span className="search-item__label">To</span>
                    <span className="search-item__subtext">
                        Pick the location
                    </span>
                </div>

                <div className="search-item">
                    <span className="search-item__label">
                        Departure
                    </span>
                    <span className="search-item__subtext">
                        Pick the date
                    </span>
                </div>

                <button className="btn-search">
                    🔍
                </button>
            </div>

        </section>
    );
};

export default Hero;