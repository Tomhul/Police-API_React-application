import EventItem from "./EventItem";

function EventList({ events }) {
  //events=props tas emot från Events-sidan
  return (
    <section className="eventlist">
      {events.slice(0, 500).map((event) => (
        <EventItem key={event.id} event={event} />
        //prop=event skickas vidare till EventItem-komponent
      ))}
    </section>
  );
}

export default EventList;
