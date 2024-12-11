import React from 'react';
import './EventsList.css';
import eventimg from '../assets/LAST_DAY_try2.png';

const events = [
  { title: "VELOCITY", date: "April 4", imgSrc: eventimg },
  { title: "SPEED FREAK", date: "April 5", imgSrc: eventimg },
  { title: "CYBER VERSE", date: "April 6", imgSrc: eventimg },
  { title: "CYBER VERSE", date: "April 6", imgSrc: eventimg },
  { title: "CYBER VERSE", date: "April 6", imgSrc: eventimg },
  { title: "CYBER VERSE", date: "April 6", imgSrc: eventimg },
];

const EventsList = () => {
  return (
    <div className='main-div'>
      <div className="events-list">
        <h2><span className='highlight'>Events</span> List</h2>
        <hr />
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
