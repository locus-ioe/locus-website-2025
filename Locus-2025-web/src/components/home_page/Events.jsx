import React from 'react';
import { Link } from 'react-router-dom';

// Assuming these images are in the public folder
const sf = '/assets/events/sf2025.jpg';
const hf = '/assets/events/hf2025.jpg';
const et = '/assets/events/electrotech.jpg';

const events = [
  {
    id: '1',
    image: sf,
  },
  {
    id: '2',
    image: hf,
  },
  {
    id: '3',
    image: et,
  },
];

export default function Events() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="text-center mt-12 md:mt-20">
        <h1 className="text-[#00ffcc] text-5xl md:text-7xl mb-10 md:mb-16">Locus Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <Link
              key={event.id}
              // to={`/event/${event.id}`}
              className="w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="aspect-w-5 aspect-h-5 bg-gray-200">
                <img
                  src={event.image}
                  alt={`Event ${event.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
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
