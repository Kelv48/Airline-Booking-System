import {
    MapPin,
    Plane,
    CloudSun,
    Info
} from "lucide-react";

export default function Navbar() {
    return (
        <header className="navbar">
            <div
                className="container"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div className="navbar__brand">
                    <h2>✈ Waypoint</h2>
                    <span>Your journey, simplified.</span>
                </div>
                <nav className="navbar__links">
                    <a href="#">
                        <MapPin size={18} />
                        Destinations
                    </a>
                    <a href="#">
                        <Plane size={18} />
                        Flights
                    </a>
                    <a href="#">
                        <CloudSun size={18} />
                        Weather
                    </a>
                    <a href="#">
                        <Info size={18} />
                        About
                    </a>
                    <button className="btn btn--primary">
                        Sign In
                    </button>
                </nav>
            </div>
        </header>
    );
}