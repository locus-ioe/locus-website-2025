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
    <div className="main-div">
      <div className="events-list flex flex-col gap-4">
        <h2>
          <span className="text-[#48d0ff]">Event</span> Detail
        </h2>
        <hr />

        <div className="mx-1 sm:mx-8 lg:mr-20 lg:ml-20 gap-12 flex flex-col p-4 sm:p-8 border-2 rounded-xl border-[#0085b3] shadow-lg shadow-white/10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Event Poster */}
            <div className="flex-[0.35] event-poster flex flex-col items-center gap-4">
              {event.imgSrc && (
                <img
                  src={getImageUrl(event.imgSrc)}
                  className="w-80 h-auto border-2 rounded-lg"
                  alt={event.title}
                />
              )}

              {event.registration?.button_text && (
                <a 
                  href={event.registration_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[24px] border-2 w-full py-2 bg-[#0085b3]/10 hover:bg-black/50 rounded-lg border-[#0085b3] font-bold block text-center"
                >
                  <span>{event.registration.button_text}</span>
                </a>
              )}

              {/* Further Info Section */}
              {event.furtherInfo && event.furtherInfo.length > 0 && (
                <div className="w-full">
                  <h3 className="text-[18px] font-bold text-[#00abe6] mb-3 text-center">
                    Further Info
                  </h3>
                  <div className="flex flex-col gap-2">
                    {event.furtherInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between px-4 py-3 bg-zinc-900/50 hover:bg-[#0085b3]/20 border border-zinc-700 hover:border-[#00abe6]/50 rounded-lg transition-all duration-300"
                      >
                        <span className="text-sm text-zinc-300 group-hover:text-[#00abe6] transition-colors">
                          {info.title}
                        </span>
                        <svg
                          className="w-4 h-4 text-zinc-500 group-hover:text-[#00abe6] transition-colors"
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
            <div className="flex-[0.65] flex flex-col gap-2">
              {event.title && (
                <h1 className="text-[24px] font-bold text-left">
                  {event.title}
                </h1>
              )}
              {event.event_type?.category !== "Workshop" ? (
                <div className="bg-black/30 border-2 p-4 rounded-lg border-[#0085b3] font-bold flex flex-row justify-around">
                  {event.prize && <span>{event.prize.prizePool}</span>}
                  {/* <span>|</span>
                  {event.runnerup && <span>{event.runnerup}</span>} */}
                </div>
              ) : (
                <></>
              )}
              {event.date_and_time && (
                <span className="bg-black/30 border-2 p-4 rounded-lg border-[#0085b3] text-justify">
                  Date : {event.date_and_time.start_date} to{" "}
                  {event.date_and_time.end_date} | Time :{" "}
                  {event.date_and_time.time}
                </span>
              )}
              <div className="flex justify-between">
                {event.event_type?.mode && (
                  <span className="bg-black/30 border-2 p-4 rounded-lg border-[#0085b3] text-justify">
                    Mode : {event.event_type.mode}
                  </span>
                )}
                {event.event_type?.status && (
                  <span className="bg-black/30 border-2 p-4 rounded-lg border-[#0085b3] text-justify">
                    Status : {event.event_type.status}
                  </span>
                )}
              </div>
              {event.description && (
                <h3 className="text-left">{event.description}</h3>
              )}
              {event.rules && (
                <>
                  <h3 className="text-justify font-bold text-lg">
                    Rules and Regulations:
                  </h3>
                  <h3 className="text-left">
                    {event.rules.split("\n").map((rule, index) => (
                      <span key={index}>
                        {rule}
                        <br />
                      </span>
                    ))}
                  </h3>
                </>
              )}
            </div>
          </div>

          {/* Contacts */}
          <div className="flex justify-around">
            {event.contacts?.length > 0 && (
              <span className="font-bold text-[8px] md:text-[16px] sm:text-[12px]">
                {event.contacts.map((person) => (
                  <div key={person.name}>
                    <ul>
                      <li>
                        {person.name &&
                          `${person.name} : ${person.phone || "N/A"}`}
                      </li>
                    </ul>
                  </div>
                ))}
              </span>
            )}
            <span className="font-bold text-[8px] md:text-[16px] sm:text-[12px]">
              LOCUS_EVENTS
            </span>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-between mr-8 ml-8 lg:mr-20 lg:ml-20">
          <div></div>
          <Link to="/events">
            <button className="border-white flex items-center gap-2">
              Events
              <ArrowRight />
            </button>
          </Link>
        </div>

        {/* Sponsors */}
        {/* Sponsors */}
        <div className="flex flex-col items-center mr-8 ml-8 lg:mr-20 lg:ml-20">
          <h2>
            <span className="text-[#48d0ff]">Event</span> Sponsors
          </h2>
          {event.sponsoredby && (
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {event.sponsoredby.map((img) => (
                <div key={img.name} className="flex-shrink-0">
                  <img
                    src={getImageUrl(img.image)}
                    className="min-w-28 max-w-72 w-auto h-auto"
                    alt={`${img.name} Sponsor`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
