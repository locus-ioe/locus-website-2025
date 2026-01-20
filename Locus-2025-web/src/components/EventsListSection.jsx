import React from "react";
import { eventsData } from "../data/eventDetails";
import { Link } from "react-router-dom";

const EventsListSection = ({ numEventsToShow = eventsData.length }) => {
  // Helper function to convert Google Drive links to direct image URLs
  const getImageUrl = (url) => {
    if (!url) return url;

    // Extract file ID from various Google Drive URL formats
    let fileId = null;

    // Format 1: /d/{FILE_ID}
    const driveMatch1 = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch1) {
      fileId = driveMatch1[1];
    }

    // Format 2: id={FILE_ID} or ?id={FILE_ID}
    const driveMatch2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (driveMatch2) {
      fileId = driveMatch2[1];
    }

    // If we found a Google Drive file ID, use the thumbnail endpoint
    if (fileId) {
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
    }

    return url;
  };

  const sortedEvents = [...eventsData].sort((a, b) => {
    // Helper function to clean and parse dates
    const parseDate = (dateString) => {
      // Remove ordinal suffixes (st, nd, rd, th)
      const cleanedDate = dateString.replace(/(\d+)(st|nd|rd|th)/, "$1");
      // Parse cleaned date
      return new Date(cleanedDate);
    };

    // Push 'Closed' events to the bottom
    if (a.event_type.status === "Closed" && b.event_type.status !== "Closed") {
      return 1; // 'a' goes to bottom
    }
    if (a.event_type.status !== "Closed" && b.event_type.status === "Closed") {
      return -1; // 'b' goes to bottom
    }

    // Prioritize 'Active' status
    if (a.event_type.status === "Active" && b.event_type.status !== "Active") {
      return -1; // 'a' comes first
    }
    if (a.event_type.status !== "Active" && b.event_type.status === "Active") {
      return 1; // 'b' comes first
    }

    // If status is the same, sort by start_date in descending order
    const dateA = parseDate(a.date_and_time.start_date);
    const dateB = parseDate(b.date_and_time.start_date);

    return dateB - dateA; // Descending order
  });

  // Slice the array to display only the number of events defined in numEventsToShow
  const eventsToDisplay = sortedEvents.slice(0, numEventsToShow);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12'>
      {eventsToDisplay.map((event) => {
        const isClosed = event.event_type.status === "Closed";
        const CardWrapper = isClosed ? 'div' : Link;
        const cardProps = isClosed ? {} : { to: `/event/${event.title}` };

        return (
          <CardWrapper
            key={event.id}
            {...cardProps}
            className={`relative w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ${isClosed ? 'cursor-not-allowed' : ''}`}
          >
            <div className='aspect-w-5 aspect-h-5 bg-gray-200'>
              <img
                src={getImageUrl(event.imgSrc)}
                alt={`Event ${event.title}`}
                className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
              />
            </div>
            {/* Floating Buttons */}
            <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center z-10'>
              {event.event_type.status && (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
                    event.event_type.status === "Coming Soon" ||
                    event.event_type.status === "Open"
                      ? "bg-[#00abe6]/20 text-[#00abe6] border-[#00abe6]/40"
                      : event.event_type.status === "Active" ||
                          event.event_type.status === "Ongoing"
                        ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
                        : "bg-zinc-700/60 text-zinc-300 border-zinc-600/40"
                  }`}
                >
                  {event.event_type.status}
                </span>
              )}
              {!isClosed && (
                <Link
                  to={`/event/${event.title}`}
                  className={!event.event_type.status ? "ml-auto" : ""}
                >
                  <button className='text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors'>
                    More
                  </button>
                </Link>
              )}
            </div>
          </CardWrapper>
        );
      })}
    </div>
  );
};

export default EventsListSection;
