import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { eventsData } from "../data/eventDetails";
const EventDescription = () => {
  const { title } = useParams();
  console.log(title);

  const event = eventsData.find((eventsData) => eventsData.title === title);
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
                  src={event.imgSrc}
                  className="w-80 h-auto border-2 rounded-lg"
                  alt={event.title}
                />
              )}

              {event.registration?.button_text && (
                <button className="text-[24px] border-2 w-full py-2 bg-[#0085b3]/10 hover:bg-black/50 rounded-lg border-[#0085b3] font-bold">
                  <Link to={event.registration_link}>
                    <span>{event.registration.button_text}</span>
                  </Link>
                </button>
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
                    src={img.image}
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
