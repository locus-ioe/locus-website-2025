import React from 'react';
import { eventsData } from '../data/eventDetails';
import { Link } from 'react-router-dom';

const EventsListSection = ({ numEventsToShow = eventsData.length }) => {
  // Sort events by status first, then by start_date in descending order
  const sortedEvents = [...eventsData]
    .sort((a, b) => {
      // First, prioritize 'Active' status
      if (a.event_type.status === "Active" && b.event_type.status !== "Active") {
        return -1; // 'a' comes first
      }
      if (a.event_type.status !== "Active" && b.event_type.status === "Active") {
        return 1; // 'b' comes first
      }

      // If status is the same, sort by start_date in descending order
      return new Date(b.date_and_time.start_date) - new Date(a.date_and_time.start_date);
    });

  // Slice the array to display only the number of events defined in numEventsToShow
  const eventsToDisplay = sortedEvents.slice(0, numEventsToShow);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
      {eventsToDisplay.map((event) => (
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
            <Link to={`/event/${event.title}`}>
              <button
                className="text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors"
              >
                More
              </button>
            </Link>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EventsListSection;
