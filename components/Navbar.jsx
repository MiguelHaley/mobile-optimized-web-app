import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Campus Companion</div>

      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul>
    </nav>
  );
}
