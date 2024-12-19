import React from 'react';
import './EventsList.css';
import zerone from '../assets/events/zerone.jpg';
import sf from '../assets/events/sf2025.jpg'
import hf from '../assets/events/hf2025.jpg'
import et from '../assets/events/electrotech.jpg'
import lostcomittee from '../assets/events/lostcommittee.jpg'
import research from '../assets/events/research.jpg'
import { Link } from 'react-router-dom';

const events = [
  { id: 1, title: "VELOCITY", date: "April 4", imgSrc: lostcomittee },
  { id: 1, title: "SPEED FREAK", date: "April 5", imgSrc: research },
  { id: 1, title: "CYBER VERSE", date: "April 6", imgSrc: et },
  { id: 1, title: "CYBER VERSE", date: "April 6", imgSrc: sf },
  { id: 1, title: "CYBER VERSE", date: "April 6", imgSrc: zerone },
  { id: 6, title: "CYBER VERSE", date: "April 6", imgSrc: hf },
];

const EventsList = () => {
  return (
    <div className='main-div'>
      <div className="events-list">
        <h2><span className='highlight'>Events</span> List</h2>
        <hr />
        <div className="events-grid">
          {events.map((event, index) => (
            <Link to={`/event/${event.id}`}>
            <div className="event-card" key={index}>
              
              <img src={event.imgSrc} alt={`${event.title} poster`} />
             
              {/* <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
              </div> */}
            </div> </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsList;
