import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { eventsData, mainEventsData } from "../data/eventDetails";
const EventDescription = () => {
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

  const { title } = useParams();
  console.log(title);

  // Check both eventsData and mainEventsData arrays
  let event = eventsData.find((eventItem) => eventItem.title === title);
  
  // If not found in eventsData, check mainEventsData
  if (!event) {
    event = mainEventsData.find((eventItem) => eventItem.title === title);
  }
  
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#48d0ff]">Event</span>
            <span className="text-white"> Detail</span>
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-[#48d0ff] to-transparent w-3/4 sm:w-1/2 mx-auto rounded-full" />
        </div>

        {/* Main Content Card */}
        <div className="bg-gradient-to-b from-gray-900/90 to-gray-800/90 border-2 border-gray-700/50 hover:border-[#48d0ff]/50 rounded-xl p-6 sm:p-8 lg:p-10 shadow-[0_0_30px_rgba(72,208,255,0.2)] transition-all duration-500">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Event Poster & Actions */}
            <div className="lg:w-1/3 flex flex-col items-center gap-6">
              {event.imgSrc && (
                <img
                  src={getImageUrl(event.imgSrc)}
                  className="w-full max-w-sm rounded-xl border-2 border-gray-700/50 shadow-lg"
                  alt={event.title}
                />
              )}

              {event.registration?.button_text && (
                <a 
                  href={event.registration_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-[#48d0ff] hover:bg-[#48d0ff]/90 text-white text-lg font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(72,208,255,0.5)] hover:scale-105 text-center"
                >
                  {event.registration.button_text}
                </a>
              )}

              {/* Further Info Section */}
              {event.furtherInfo && event.furtherInfo.length > 0 && (
                <div className="w-full">
                  <h3 className="text-lg font-bold text-[#48d0ff] mb-4 text-center">
                    Further Info
                  </h3>
                  <div className="flex flex-col gap-3">
                    {event.furtherInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between px-4 py-3 bg-gray-900/50 hover:bg-[#48d0ff]/10 border-2 border-gray-700/50 hover:border-[#48d0ff] rounded-lg transition-all duration-300"
                      >
                        <span className="text-sm text-gray-300 group-hover:text-[#48d0ff] transition-colors font-medium">
                          {info.title}
                        </span>
                        <svg
                          className="w-4 h-4 text-gray-500 group-hover:text-[#48d0ff] transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Event Details */}
            <div className="lg:w-2/3 flex flex-col gap-6">
              {event.title && (
                <h1 className="text-2xl sm:text-3xl font-bold text-white">
                  {event.title}
                </h1>
              )}
              
              {/* Prize Pool */}
              {event.event_type?.category !== "Workshop" && event.prize && (
                <div className="bg-gray-900/50 border-2 border-[#48d0ff]/50 p-4 rounded-lg text-center">
                  <span className="text-lg font-bold text-[#48d0ff]">{event.prize.prizePool}</span>
                </div>
              )}
              
              {/* Date & Time */}
              {event.date_and_time && (
                <div className="bg-gray-900/50 border-2 border-gray-700/50 p-4 rounded-lg">
                  <p className="text-gray-300 flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-[#48d0ff]">Date:</span>
                    <span className="font-bold text-white text-lg">{event.date_and_time.start_date}</span>
                    <span className="text-gray-400">to</span>
                    <span className="font-bold text-white text-lg">{event.date_and_time.end_date}</span>
                    <span className="mx-2 text-gray-600">|</span>
                    <span className="font-semibold text-[#48d0ff]">Time:</span>
                    <span className="font-bold text-white text-lg">{event.date_and_time.time}</span>
                  </p>
                </div>
              )}
              
              {/* Mode & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.event_type?.mode && (
                  <div className="bg-gray-900/50 border-2 border-gray-700/50 p-4 rounded-lg">
                    <p className="text-gray-300"><span className="font-semibold text-[#48d0ff]">Mode:</span> {event.event_type.mode}</p>
                  </div>
                )}
                {event.event_type?.status && (
                  <div className="bg-gray-900/50 border-2 border-gray-700/50 p-4 rounded-lg">
                    <p className="text-gray-300"><span className="font-semibold text-[#48d0ff]">Status:</span> {event.event_type.status}</p>
                  </div>
                )}
              </div>
              
              {/* Description */}
              {event.description && (
                <div className="space-y-2">
                  <p className="text-gray-300 leading-relaxed">{event.description}</p>
                </div>
              )}
              
              {/* Why Join */}
              {event.whyJoin && (
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#48d0ff]">Why Join?</h3>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">{event.whyJoin}</p>
                </div>
              )}
              
              {/* Rules */}
              {event.rules && (
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#48d0ff]">Rules and Regulations</h3>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">{event.rules}</p>
                </div>
              )}
              
              {/* Info */}
              {event.info && (
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#48d0ff]">Info</h3>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">{event.info}</p>
                </div>
              )}
            </div>
          </div>

          {/* Contacts */}
          {event.contacts?.length > 0 && (
            <div className="mt-10 pt-8 border-t-2 border-gray-700/50">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm sm:text-base">
                  <h4 className="font-bold text-[#48d0ff] mb-2">Contact:</h4>
                  {event.contacts.map((person) => (
                    <p key={person.name} className="text-gray-300">
                      {person.name}: {person.phone || "N/A"}
                    </p>
                  ))}
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-400">
                  LOCUS_EVENTS
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Back to Events Button */}
        <div className="flex justify-end mt-8">
          <Link to="/events">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#48d0ff]/10 border-2 border-[#48d0ff]/40 text-[#48d0ff] font-semibold rounded-lg hover:bg-[#48d0ff] hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(72,208,255,0.5)]">
              <span>Back to Events</span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>

        {/* Sponsors */}
        {event.sponsoredby && event.sponsoredby.length > 0 && (
          <div className="mt-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="text-[#48d0ff]">Event</span>
                <span className="text-white"> Sponsors</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#48d0ff] to-transparent w-1/2 mx-auto rounded-full mt-4" />
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {event.sponsoredby.map((img) => (
                <div key={img.name} className="p-4 bg-gray-900/50 border-2 border-gray-700/50 rounded-lg hover:border-[#48d0ff]/50 transition-all duration-300">
                  <img
                    src={getImageUrl(img.image)}
                    className="w-32 sm:w-48 h-auto object-contain"
                    alt={`${img.name} Sponsor`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDescription;
