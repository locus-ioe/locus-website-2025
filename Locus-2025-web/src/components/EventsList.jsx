import React from 'react';
import './EventsList.css';
import { eventsData } from '../data/eventDetails';
import { Link } from 'react-router-dom';


const EventsList = () => {
  return (
    <div className="text-center mt-12 md:mt-20 px-4 ">
      <h1 className="text-[#00ffcc] text-5xl md:text-7xl mb-3 md:mb-3"><span className="text-white">LOCUS</span> Events</h1>
      <div className="h-0.5 bg-[#00ffcc] w-[80%] mx-auto mb-10 md:mb-16"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {eventsData.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.title}`}
            className="relative w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="aspect-w-5 aspect-h-5 bg-gray-200">
              <img
                src={event.imgSrc}
                alt={`Event ${event.title}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Floating Buttons */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
              <span
                className={`px-2 py-0 rounded-full text-xs font-small ${
                  event.event_type.status === "Coming Soon"
                    ? "bg-yellow-100 text-yellow-600"
                    : event.event_type.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {event.event_type.status}
              </span>
              <Link
            to={`/event/${event.title}`}
             >
              <button
                className=" text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors"
                // onClick={(e) => {
                //   e.preventDefault();
                //   alert(`More details about ${event.title}`);
                // }}
              >
                 More
              </button></Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
