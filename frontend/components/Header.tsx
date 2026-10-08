import Link from "next/link";
import "../styles/Header.scss";
import {
  House,
  MapPin,
  Plane,
  CloudSun,
  Info,
} from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="header__brand">
          <h2>✈ Waypoint</h2>
          <span>Your journey, simplified.</span>
        </Link>

        <nav className="header__nav">
          <Link href="/">
            <House size={18} />
            Home
          </Link>

          <Link href="/destinations">
            <MapPin size={18} />
            Destinations
          </Link>

          <Link href="/flights">
            <Plane size={18} />
            Flights
          </Link>

          <Link href="/weather">
            <CloudSun size={18} />
            Weather
          </Link>

          <Link href="/about">
            <Info size={18} />
            About
          </Link>

          <button className="btn btn--primary">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
}