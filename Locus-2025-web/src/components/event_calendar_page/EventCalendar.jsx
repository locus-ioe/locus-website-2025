import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiCalendar, 
  FiClock, 
  FiArrowRight,
  FiAward,
  FiMic,
  FiEdit,
  FiBell,
  FiCpu,
  FiTarget,
  FiCode,
  FiActivity,
  FiZap,
  FiStar
} from 'react-icons/fi';
import calendarData from '../../data/eventcalendar.json';

const EventCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');

  const getTypeColor = () => {
    return 'bg-[#00abe6]/5 text-[#00abe6] border-[#00abe6]/20 group-hover:bg-[#00abe6]/10';
  };

  const getIcon = (type) => {
    const icons = {
      sponsor: FiStar,
      call: FiMic,
      registration: FiEdit,
      announcement: FiBell,
      workshop: FiCpu,
      competition: FiTarget,
      hackathon: FiCode,
      activity: FiActivity,
      main: FiZap
    };
    return icons[type] || FiCalendar;
  };

  const filteredData = selectedMonth === 'all' 
    ? calendarData 
    : calendarData.filter(item => item.month.toLowerCase() === selectedMonth.toLowerCase());

  return (
    <div className="text-center mt-12 md:mt-20 px-4 mb-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-white">Event </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00abe6] to-[#48d0ff]">
            Calendar
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
          Stay updated with all LOCUS 2026 events, competitions, and activities
        </p>
        <div className="h-1 bg-gradient-to-r from-transparent via-[#48d0ff] to-transparent w-[80%] mx-auto"></div>
      </div>

      {/* Month Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 max-w-3xl mx-auto">
        <button
          onClick={() => setSelectedMonth('all')}
          className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
            selectedMonth === 'all'
              ? 'bg-[#00abe6] text-white shadow-lg shadow-[#00abe6]/20 scale-105'
              : 'bg-zinc-900/50 text-gray-400 hover:bg-zinc-800 hover:text-gray-200 border border-white/10'
          }`}
        >
          All Months
        </button>
        {calendarData.map((item) => (
          <button
            key={item.month}
            onClick={() => setSelectedMonth(item.month)}
            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
              selectedMonth === item.month
                ? 'bg-[#00abe6] text-white shadow-lg shadow-[#00abe6]/20 scale-105'
                : 'bg-zinc-900/50 text-gray-400 hover:bg-zinc-800 hover:text-gray-200 border border-white/10'
            }`}
          >
            {item.month}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto">
        {filteredData.map((monthData, index) => (
          <div key={monthData.month} className="relative mb-16 md:mb-20">
            {/* Connecting Line for Desktop */}
            {index !== filteredData.length - 1 && (
              <div className="hidden md:block absolute left-12 top-20 bottom-0 w-px bg-gradient-to-b from-[#00abe6]/30 via-[#00abe6]/10 to-transparent"></div>
            )}

            {/* Month Header Card */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mb-8">
              {/* Month Badge */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-zinc-900/80 border border-[#00abe6]/30 flex items-center justify-center shadow-[0_0_30px_-10px_rgba(0,171,230,0.3)] flex-shrink-0 backdrop-blur-sm z-10">
                <div className="text-center">
                  <FiCalendar className="text-[#00abe6] text-2xl md:text-3xl mx-auto mb-1" />
                </div>
              </div>

              {/* Month Info */}
              <div className="flex-1 text-center md:text-left pt-2">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{monthData.period}</h2>
                {monthData.label && (
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00abe6]/10 border border-[#00abe6]/20 text-[#00abe6]">
                    <FiClock className="w-4 h-4" />
                    <span className="text-sm font-medium">{monthData.label}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Events Masonry Grid */}
            <div className="md:ml-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {monthData.events.map((event, eventIndex) => (
                <Link
                  to={event.detaillink}
                  key={eventIndex}
                  className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700/50 rounded-xl p-5 hover:border-[#00abe6]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00abe6]/20 hover:-translate-y-1 flex flex-col"
                >
                  {/* Event Type Badge - Fixed Position */}
                  <div className="flex justify-center mb-3">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor()}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </div>
                  </div>

                  {/* Event Name - Flexible Height */}
                  <h3 className="font-bold text-base md:text-lg text-white mb-2 group-hover:text-[#00abe6] transition-colors leading-tight flex-grow">
                    {event.name}
                  </h3>

                  {/* Event Date - Fixed Height */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3 min-h-[20px]">
                    <FiCalendar className="text-[#00abe6] flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>

                  {/* Status - Fixed Height */}
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-700/50 min-h-[36px]">
                    <span className="text-xs text-gray-500 font-medium">{event.status}</span>
                    <FiArrowRight className="text-[#00abe6] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#00abe6]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* View All Events CTA */}
      <div className="mt-20">
        <Link to="/events">
          <button className="group px-6 py-3 bg-zinc-900 border border-[#00abe6]/30 text-white rounded-full font-semibold text-base hover:bg-[#00abe6] hover:border-[#00abe6] transition-all duration-300 flex items-center gap-2 mx-auto shadow-[0_0_20px_-5px_rgba(0,171,230,0.15)] hover:shadow-[0_0_30px_-5px_rgba(0,171,230,0.4)]">
            <span>View All Event Details</span>
            <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCalendar;