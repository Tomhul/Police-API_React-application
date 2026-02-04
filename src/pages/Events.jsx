import { useEffect, useState } from "react";
import EventList from "../components/EventList";

function Events() {
  //useState, API-data, inputfält, laddningsmeddelande, felmeddelande
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://polisen.se/api/events")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fel vid hämtning " + response.status);
        }
        return response.json();
      })
      //Sparar data i state setEvents
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      //Sparar data i state setError
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Data laddas...</p>;
  if (error) return <p>Fel på API hämtning: {error}</p>;

  //Loopar igenom events=allt från API,skapar en ny array behåller bara de objekt som returnerar true
  const filteredEvents = events.filter((event) => {
    const searchText = search.toLowerCase();

    //Söker igenom fälten efter varandra i ett stycke
    const searchableText = `
    ${event.name}
    ${event.summary}
    ${event.type}
    ${event.datetime}
    ${event.location?.name}
    ${event.location?.gps}
  `.toLowerCase();
    //Visar resultat om söktext finns
    return searchableText.includes(searchText);
  });

  return (
    <section>
      <h2>Senaste händelsenotiserna från Svenska Polisen</h2>

      <input
        type="text"
        placeholder="Sök"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredEvents.length === 0 && <p>Inga träffar</p>}

      {/*Props=events->EventList*/}
      <EventList events={filteredEvents} />
    </section>
  );
}

export default Events;
