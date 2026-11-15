import React, { useMemo } from "react";
import { mainEventsData } from "../data/eventDetails";
import { Link } from "react-router-dom";

const MainEventsListSection = ({ numEventsToShow = mainEventsData.length }) => {
  // Helper function to convert Google Drive links to direct image URLs
  const getImageUrl = (url) => {
    if (!url) return url;
    if (url.startsWith('/assets/')) return url;
    
    // Extract file ID from various Google Drive URL formats
    let fileId = null;
    
    // Format 1: /d/{FILE_ID}
    const driveMatch1 = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch1) {
      fileId = driveMatch1[1];
    }
    
    // Format 2: id={FILE_ID} or ?id={FILE_ID}
    if (!fileId) {
      const driveMatch2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (driveMatch2) {
        fileId = driveMatch2[1];
      }
    }
    
    // Direct CDN endpoint (works reliably without 429 redirects)
    if (fileId) {
      return `https://lh3.googleusercontent.com/d/${fileId}=w1000`;
    }
    
    return url;
  };

  // Memoize sort + slice so it doesn't recalculate on every render
  const eventsToDisplay = useMemo(() => {
    const sorted = [...mainEventsData].sort((a, b) => {
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

    return sorted.slice(0, numEventsToShow);
  }, [numEventsToShow]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
      {eventsToDisplay.map((event) => {
        const isClosed = event.event_type.status === "Closed";
        const CardWrapper = isClosed ? 'div' : Link;
        const cardProps = isClosed ? {} : { to: `/event/${event.title}` };

        return (
          <CardWrapper
            key={event.id}
            {...cardProps}
            className={`group relative w-full mx-auto bg-gray-900 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${isClosed ? 'cursor-not-allowed' : ''}`}
          >
            <div className="aspect-w-5 aspect-h-5 bg-gray-900">
              <img
                src={getImageUrl(event.imgSrc)}
                alt={`Event ${event.title}`}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Gradient overlay at bottom to ensure badges and buttons are distinct from the photo */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
            {/* Floating Buttons */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 flex justify-between items-center z-10 gap-2">
              {event.event_type.status && (
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border shadow-sm ${
                    event.event_type.status === "Coming Soon" ||
                    event.event_type.status === "Open" ||
                    event.event_type.status === "Upcoming"
                      ? "bg-[#d946ef]/20 text-[#d946ef] border-[#d946ef]/40"
                      : event.event_type.status === "Active" ||
                          event.event_type.status === "Ongoing"
                        ? "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40"
                        : "bg-zinc-700/60 text-zinc-300 border-zinc-600/40"
                  }`}
                >
                  {event.event_type.status}
                </span>
              )}
              {!isClosed && (
                <span
                  className="ml-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#d946ef] hover:text-white bg-[#d946ef]/20 hover:bg-[#d946ef]/35 border border-[#d946ef]/40 hover:border-[#d946ef]/70 backdrop-blur-md shadow-sm transition-all duration-300 cursor-pointer"
                >
                  <span>More</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 font-bold">→</span>
                </span>
              )}
            </div>
          </CardWrapper>
        );
      })}
    </div>
  );
};

export default MainEventsListSection;
