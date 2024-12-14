import React from 'react';
import './Events.css'
import event1 from '../assets/LAST_DAY_try2.png'
import sf from '../assets/events/sf2025.jpg'
import hf from '../assets/events/hf2025.jpg'
import et from '../assets/events/electrotech.jpg'

const events = [
  {
    title: "VELOCITY",
    date: "April 19",
    time: "10AM - 12PM",
    registrationFee: "₹20",
    prizes: ["1st Prize: 1K", "2nd Prize: 500"],
    image: sf,
  },
  {
    title: "SPEED FREAK",
    date: "April 20",
    time: "NA",
    registrationFee: "₹10",
    prizes: ["1st Prize: 1K", "2nd Prize: 500"],
    image: hf,
  },
  {
    title: "CYBER VERSE",
    date: "April 19",
    time: "11AM - 1PM",
    registrationFee: "FREE",
    prizes: ["1st Prize: 1K"],
    image: et,
  },
];

function Events() {
  return (
    <div className="events-container">
      <h1 className="title">Locus Events</h1>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            {/* <h2 className="event-title">{event.title}</h2>
            <p className="event-date">{event.date}</p>
            <p className="event-time">{event.time}</p>
            <p className="event-registration">Registration Fee: {event.registrationFee}</p>
            <ul className="event-prizes">
              {event.prizes.map((prize, i) => (
                <li key={i}>{prize}</li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
      <button className="show-more">Show More</button>
    </div>
  );
}

export default Events;
