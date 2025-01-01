import React, { useState, useEffect } from 'react';
import { eventsData } from '../data/eventDetails';
import { Link } from 'react-router-dom';

const Popup = ({ onClose }) => {
  // Filter active events and sort by the latest start date
  const activeEvents = [...eventsData]
    .filter(event => event.event_type.status === "Active")
    .sort((a, b) => new Date(b.date_and_time.start_date) - new Date(a.date_and_time.start_date));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">Latest Active Events</h2>
        <div className="mb-4">
          {activeEvents.length > 0 ? (
            activeEvents.map((event) => (
              <div key={event.id} className="mb-3">
                <Link to={`/event/${event.title}`} className="text-blue-600 hover:underline">
                  {event.title}
                </Link>
                <p className="text-sm text-gray-600">Starts: {event.date_and_time.start_date}</p>
              </div>
            ))
          ) : (
            <p>No active events currently.</p>
          )}
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
