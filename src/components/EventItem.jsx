
          //Props=event från comp-EventList
function EventItem({ event }) {
  return (
    <article className="event-card">
      <h2>{event.name}</h2>

      <ul className="event-details">
        <li>
          <strong>Plats:</strong> {event.location.name}
        </li>
        <li>
          <strong>Datum:</strong> {event.datetime}
        </li>
        <li>
          <strong>Typ av brott:</strong> {event.type}
        </li>
        <li>
          <strong>Summering:</strong> {event.summary}
        </li>
        <li>
          <strong>Koordinater:</strong> {event.location.gps}
        </li>
        <li>
          <strong>Länk:</strong>{" "}
          <a
            href={`https://polisen.se${event.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visa händelse
          </a>
        </li>
      </ul>
    </article>
  );
}

export default EventItem;
