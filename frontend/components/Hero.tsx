export default function Hero() {
    return (
        <section
            style={{
                background: "#f5f7f6",
            }}
        >
            <div
                className="container"
                style={{
                    textAlign: "center",
                    paddingTop: "80px",
                    paddingBottom: "80px",
                }}
            >
                <h1>
                    Plan your next journey with confidence
                </h1>
                <p
                    style={{
                        margin: "30px auto",
                    }}
                >
                    Discover destinations, compare simulated flights,
                    build itineraries and view live weather data
                    through one modern travel platform.
                </p>
                <button className="btn btn--primary">
                    Explore Destinations
                </button>
            </div>
        </section>
    );
}