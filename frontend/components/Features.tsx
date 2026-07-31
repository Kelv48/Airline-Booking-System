const features = [
    {
        icon: "🗺️",
        title: "Interactive Map",
        description:
            "Browse cities and attractions using an interactive world map.",
    },
    {
        icon: "✈️",
        title: "Flight Simulation",
        description:
            "Generate realistic routes using the airport network.",
    },
    {
        icon: "🌦️",
        title: "Live Weather",
        description:
            "See current weather conditions before travelling.",
    },
];

export default function Features() {
    return (
        <section className="container">
            <h2
                style={{
                    textAlign: "center",
                    marginBottom: "50px",
                }}
            >
                Everything you need to plan your trip
            </h2>
            <div className="grid">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="feature-card"
                    >
                        <span className="card__icon">
                            {feature.icon}
                        </span>
                        <span className="card__title">
                            {feature.title}
                        </span>
                        <span className="card__description">
                            {feature.description}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}