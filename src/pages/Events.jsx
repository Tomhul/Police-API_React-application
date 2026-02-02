import { useEffect, useState } from "react";
import EventList from "../components/EventList";

function Events() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //useState 4st, spara API-data och felhantering

  useEffect(() => {
    fetch("https://polisen.se/api/events")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fel vid hämtning " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  //Går igenom event,behåller dom som matchar sök
  const filteredEvents = events.filter((event) => {
    const searchText = search.toLowerCase();

    const searchableText = `
    ${event.name}
    ${event.summary}
    ${event.type}
    ${event.datetime}
    ${event.location?.name}
    ${event.location?.gps}
  `.toLowerCase();

    return searchableText.includes(searchText);
  });

  if (loading) return <p>Data laddas...</p>;
  if (error) return <p>Error, fel på API hämtning: {error}</p>;

  return (
    <div>
      <h2>Senaste händelsenotiserna från Svenska Polisen</h2>

      <input
        //Sökfält
        type="text"
        placeholder="Sök"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredEvents.length === 0 && <p>Inga träffar</p>}
      <EventList events={filteredEvents} />
    </div>
  );
}

export default Events;
