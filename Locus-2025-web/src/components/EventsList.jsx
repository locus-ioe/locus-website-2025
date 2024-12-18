import React from 'react';
import './EventsList.css';
import zerone from '../assets/events/zerone.jpg';
import sf from '../assets/events/sf2025.jpg'
import hf from '../assets/events/hf2025.jpg'
import et from '../assets/events/electrotech.jpg'
import lostcomittee from '../assets/events/lostcommittee.jpg'
import research from '../assets/events/research.jpg'

const events = [
  { title: "VELOCITY", date: "April 4", imgSrc: lostcomittee },
  { title: "SPEED FREAK", date: "April 5", imgSrc: research },
  { title: "CYBER VERSE", date: "April 6", imgSrc: et },
  { title: "CYBER VERSE", date: "April 6", imgSrc: sf },
  { title: "CYBER VERSE", date: "April 6", imgSrc: zerone },
  { title: "CYBER VERSE", date: "April 6", imgSrc: hf },
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
