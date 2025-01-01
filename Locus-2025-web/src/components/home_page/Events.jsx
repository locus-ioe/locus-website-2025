import React from 'react';
import { Link } from 'react-router-dom';
import { eventsData } from '../../data/eventDetails';
import EventsListSection from '../EventsListSection';


export default function Events() {
  const numEventsToShow = 3;
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="text-center mt-12 md:mt-20">
        <h1 className="text-[#00ffcc] text-5xl md:text-7xl mb-10 md:mb-16">LOCUS Events</h1>
        <EventsListSection numEventsToShow={numEventsToShow} />

        <Link
          to="/events"
          className="inline-block px-6 py-2 text-white bg-[#00bcd4] rounded hover:bg-[#008c9e] transition-colors duration-300"
        >
          Show More
        </Link>
      </div>
    </div>
  );
}
