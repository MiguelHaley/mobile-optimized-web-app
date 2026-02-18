import { Link } from "react-router-dom";

export default function EventCard({ event, toggleFavorite, isFavorite }) {
  return (
    <div className="card">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>

      <div className="card-actions">
        <Link to={`/events/${event.id}`} className="btn">
          View Details
        </Link>

        <button
          onClick={() => toggleFavorite(event.id)}
          className="btn secondary"
        >
          {isFavorite ? "★ Saved" : "☆ Save"}
        </button>
      </div>
    </div>
  );
}
