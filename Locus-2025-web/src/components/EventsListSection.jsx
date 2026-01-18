import React from "react";
import { eventsData } from "../data/eventDetails";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const EventsListSection = ({ numEventsToShow = eventsData.length }) => {
  const getImageUrl = (url) => {
    if (!url) return url;
    let fileId = null;
    const driveMatch1 = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch1) fileId = driveMatch1[1];
    const driveMatch2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (driveMatch2) fileId = driveMatch2[1];
    if (fileId) return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
    return url;
  };

  const sortedEvents = [...eventsData].sort((a, b) => {
    const parseDate = (dateString) => {
      const cleanedDate = dateString.replace(/(\d+)(st|nd|rd|th)/, "$1");
      return new Date(cleanedDate);
    };
    if (a.event_type.status === "Active" && b.event_type.status !== "Active") return -1;
    if (a.event_type.status !== "Active" && b.event_type.status === "Active") return 1;
    const dateA = parseDate(a.date_and_time.start_date);
    const dateB = parseDate(b.date_and_time.start_date);
    return dateB - dateA;
  });

  const eventsToDisplay = sortedEvents.slice(0, numEventsToShow);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 mb-12">
      {eventsToDisplay.map((event) => (
        <Link
          key={event.id}
          to={`/event/${event.title}`}
          className="group relative bg-gradient-to-b from-gray-900/90 to-gray-800/90 rounded-xl overflow-hidden border-2 border-gray-700/50 hover:border-[#48d0ff] transition-all duration-500 hover:shadow-[0_0_30px_rgba(72,208,255,0.4)] hover:scale-105"
        >
          {/* Image Container */}
          <div className="relative h-56 sm:h-64 overflow-hidden">
            <img
              src={getImageUrl(event.imgSrc)}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Status Badge */}
            {event.event_type.status && (
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border-2 shadow-lg transition-all duration-300 group-hover:scale-110 ${
                    event.event_type.status === "Coming Soon" || event.event_type.status === "Open"
                      ? "bg-[#48d0ff]/20 text-[#48d0ff] border-[#48d0ff]/60"
                      : event.event_type.status === "Active" || event.event_type.status === "Ongoing"
                      ? "bg-green-500/20 text-green-300 border-green-500/60"
                      : "bg-gray-700/60 text-gray-300 border-gray-600/60"
                  }`}
                >
                  {event.event_type.status}
                </span>
              </div>
            )}
          </div>

          {/* Content Container */}
          <div className="p-5 sm:p-6 space-y-4">
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#48d0ff] transition-colors duration-300 line-clamp-2">
              {event.title}
            </h3>

            {/* Date & Time Info */}
            <div className="space-y-2 text-sm text-gray-400">
              {event.date_and_time.start_date && (
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#48d0ff]" />
                  <span>{event.date_and_time.start_date}</span>
                </div>
              )}
              {event.date_and_time.start_time && (
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#48d0ff]" />
                  <span>{event.date_and_time.start_time}</span>
                </div>
              )}
            </div>

            {/* More Button */}
            <div className="pt-2">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#48d0ff]/10 border border-[#48d0ff]/40 text-[#48d0ff] text-sm font-semibold hover:bg-[#48d0ff] hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(72,208,255,0.5)]">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EventsListSection;
