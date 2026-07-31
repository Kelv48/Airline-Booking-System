export default function Navbar() {
    return (
        <header>
            <div
                className="container"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2 style={{ color: "#00843d", margin: 0 }}>
                    ✈ Journey Planner
                </h2>
                <nav
                    style={{
                        display: "flex",
                        gap: "30px",
                        alignItems: "center",
                    }}
                >
                    <a href="#">Destinations</a>
                    <a href="#">Flights</a>
                    <a href="#">Weather</a>
                    <a href="#">About</a>
                    <button className="btn btn--primary">
                        Sign In
                    </button>
                </nav>
            </div>
        </header>
    );
}