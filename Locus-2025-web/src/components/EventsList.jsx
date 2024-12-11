import './EventsList.css';

const events = [
  { title: "VELOCITY", date: "April 4", imgSrc: "src/assets/LAST_DAY_try2.png" },
  { title: "SPEED FREAK", date: "April 5", imgSrc: "src/assets/LAST_DAY_try2.png" },
  { title: "CYBER VERSE", date: "April 6", imgSrc: "src/assets/LAST_DAY_try2.png" },
  { title: "CYBER VERSE", date: "April 6", imgSrc: "src/assets/LAST_DAY_try2.png" },
  { title: "CYBER VERSE", date: "April 6", imgSrc: "src/assets/LAST_DAY_try2.png" },
  { title: "CYBER VERSE", date: "April 6", imgSrc: "src/assets/LAST_DAY_try2.png" },
  // Repeat for all events...
];

const EventsList = () => {
  return (
    <div className='main-div'>
      <div className="events-list">
      <h2> <span className='highlight'>Events</span> List</h2>
      <hr/>
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.imgSrc} alt={`${event.title} poster`} />
            {/* <div className="event-details">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div> */}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default EventsList;
