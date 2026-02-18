import { useState } from "react";
import eventsData from "../data/events.json";
import EventCard from "../components/EventCard";

export default function Events() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
    );
  };

  const filtered = eventsData.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h2>Campus Events</h2>

      <input
        type="text"
        placeholder="Search events..."
        aria-label="Search events"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="grid">
        {filtered.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(event.id)}
          />
        ))}
      </div>
    </section>
  );
}
