import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { events } from '../data/eventDetails';

const EventDescription = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));
  
  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h2 className="text-2xl text-white font-bold">Event not found</h2>
        <Link 
          to="/events" 
          className="text-[#00ffcc] hover:text-white flex items-center gap-2 transition-colors"
        >
          Return to Events <FaArrowRight />
        </Link>
      </div>
    );
  }

  const isWorkshop = event.type === "Workshop Series";
  const hasPrizes = event.winner && event.runnerup;

  const EventHeader = () => (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl md:text-3xl font-bold">{event.title}</h1>
      <div className="flex flex-wrap gap-4">
        <span className="bg-black/30 border-2 px-4 py-2 rounded-lg border-[#00ffcc]">
          {event.date} | {event.time}
        </span>
        <div className="flex gap-4">
          <span className="bg-black/30 border-2 px-4 py-2 rounded-lg border-[#00ffcc]">
            {event.mode}
          </span>
          <span className="bg-black/30 border-2 px-4 py-2 rounded-lg border-[#00ffcc]">
            {event.type}
          </span>
        </div>
      </div>
    </div>
  );

  const PrizePool = () => (
    hasPrizes && (
      <div className="bg-black/30 border-2 p-4 rounded-lg border-[#00ffcc] font-bold">
        <div className="flex flex-wrap justify-around gap-4">
          <span>Winner: ₹{event.winner}</span>
          <span className="hidden md:inline">|</span>
          <span>Runner-up: ₹{event.runnerup}</span>
        </div>
      </div>
    )
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold">
          <span className="text-[#00ffcc]">Events</span> List
        </h2>
        <hr className="border-[#00ffcc]/30" />

        <div className="border-2 rounded-xl border-[#00ffcc] bg-[#00ffcc]/5 shadow-lg shadow-white/10 p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Event Image and Registration */}
            <div className="lg:w-1/4 flex flex-col items-center gap-4">
              <img
                src={event.imgSrc}
                className="w-60 h-60 border-2 rounded-lg object-cover"
                alt={event.title}
              />
              <button className="w-full py-2 px-4 text-lg md:text-xl border-2 bg-[#00ffcc]/10 hover:bg-black/50 rounded-lg border-[#00ffcc] font-bold transition-colors">
                REGISTER {event.price !== "Free" && <span>{event.price}</span>}
              </button>
            </div>

            {/* Event Details */}
            <div className="lg:w-3/4 flex flex-col gap-6">
              <EventHeader />
              <PrizePool />
              
              <div className="space-y-4">
                <p className="whitespace-pre-line">{event.description}</p>
                <h3 className="font-bold text-lg mt-6">
                  {isWorkshop ? 'Workshop Guidelines:' : 'Rules and Regulations:'}
                </h3>
                <p className="whitespace-pre-line">{event.rules}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-around mt-8 text-sm md:text-base font-bold">
            <span>+91 9876543210</span>
            <span>www.locus.com</span>
          </div>
        </div>

        {/* Navigation and Sponsors */}
        <div className="flex justify-end">
          <Link 
            to="/events" 
            className="flex items-center gap-2 text-[#00ffcc] hover:text-white transition-colors"
          >
            Back to Events <FaArrowRight />
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">
            <span className="text-[#00ffcc]">Event</span> Sponsors
          </h2>
          <img 
            src={event.imgSrc} 
            className="w-28 mt-4" 
            alt="Event sponsor" 
          />
        </div>
      </div>
    </div>
  );
};

export default EventDescription;