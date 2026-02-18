import { useParams } from "react-router-dom";
import events from "../data/events.json";

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) return <p>Event not found.</p>;

  return (
    <section>
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.description}</p>
    </section>
  );
}
