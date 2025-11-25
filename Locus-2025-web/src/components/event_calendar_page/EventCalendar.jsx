import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

const EventCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');

  const calendarData = [
    {
      month: 'Asoj',
      period: 'Asoj 19-31',
      label: 'Post Dashain',
      color: 'from-purple-500 to-pink-500',
      events: [
        { name: 'Online Competition (TBD)', date: 'TBD', type: 'sponsor', status: 'Coming Soon' }
      ]
    },
    {
      month: 'Kartik',
      period: 'Kartik 28 - Mangsir 13',
      label: 'Pre-Season',
      color: 'from-blue-500 to-cyan-500',
      events: [
        { name: 'Online Competition (TBD)', date: 'TBD', type: 'sponsor', status: 'Coming Soon' }
      ]
    },
    {
      month: 'Mangsir',
      period: 'Mangsir 19-28',
      label: 'Preparation Phase',
      color: 'from-green-500 to-emerald-500',
      events: [
        { name: 'Call for Flashmob', date: 'Mangsir 19', type: 'call', status: 'Coming Soon' },
        { name: 'Hardware Fellowship Registration', date: 'Mangsir 21', type: 'registration', status: 'Coming Soon' },
        { name: 'Theme Release', date: 'Mangsir 26', type: 'announcement', status: 'Coming Soon' },
        { name: 'Call for Projects', date: 'Mangsir 28', type: 'call', status: 'Coming Soon' },
        { name: 'Major Events Call', date: 'Mangsir 29', type: 'call', status: 'Coming Soon' }
      ]
    },
    {
      month: 'Poush',
      period: 'Poush 1-30',
      label: 'Competition Season',
      color: 'from-orange-500 to-red-500',
      events: [
        { name: 'Code Jam Registration', date: 'Poush 1', type: 'registration', status: 'Coming Soon' },
        { name: 'Hardware Fellowship', date: 'Poush 2-8', type: 'workshop', status: 'Coming Soon' },
        { name: 'Code Jam', date: 'Poush 9-12', type: 'competition', status: 'Coming Soon' },
        { name: 'Girls Locus Cup', date: 'Poush 13-15', type: 'competition', status: 'Coming Soon' },
        { name: 'Hack a Week', date: 'Poush 16-22', type: 'hackathon', status: 'Coming Soon' },
        { name: 'Energy Hackathon Registration', date: 'Poush 23', type: 'registration', status: 'Coming Soon' },
        { name: 'Capture the Flag', date: 'Poush 24-27', type: 'competition', status: 'Coming Soon' },
        { name: 'Dataverse Registration', date: 'Poush 26', type: 'registration', status: 'Coming Soon' },
        { name: 'Girls to Code', date: 'Poush 28-30', type: 'workshop', status: 'Coming Soon' }
      ]
    },
    {
      month: 'Magh',
      period: 'Magh 1-17',
      label: 'Main Event Season',
      color: 'from-[#00abe6] to-[#48d0ff]',
      events: [
        { name: 'Dataverse', date: 'Magh 1-6', type: 'competition', status: 'Coming Soon' },
        { name: 'Energy Hackathon', date: 'Magh 1-6', type: 'hackathon', status: 'Coming Soon' },
        { name: 'Walkathon', date: 'Magh 10', type: 'activity', status: 'Coming Soon' },
        { name: 'Flashmob', date: 'Magh 11-14', type: 'activity', status: 'Coming Soon' },
        { name: 'TikTok/Social Media Competition', date: 'Magh 11-14', type: 'competition', status: 'Coming Soon' },
        { name: 'Main Event - Day 1', date: 'Magh 15', type: 'main', status: 'Coming Soon' },
        { name: 'Main Event - Day 2', date: 'Magh 16', type: 'main', status: 'Coming Soon' },
        { name: 'Main Event - Day 3', date: 'Magh 17', type: 'main', status: 'Coming Soon' }
      ]
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      registration: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      workshop: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      competition: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      hackathon: 'bg-red-500/20 text-red-400 border-red-500/30',
      call: 'bg-green-500/20 text-green-400 border-green-500/30',
      announcement: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      activity: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      main: 'bg-[#00abe6]/20 text-[#00abe6] border-[#00abe6]/30',
      sponsor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
    };
    return colors[type] || 'bg-zinc-800 text-gray-400 border-zinc-700';
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
              ? 'bg-gradient-to-r from-[#00abe6] to-[#48d0ff] text-white shadow-lg shadow-[#00abe6]/30 scale-105'
              : 'bg-zinc-800/50 text-gray-400 hover:bg-zinc-700/50 hover:text-gray-300 border border-zinc-700'
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
                ? 'bg-gradient-to-r from-[#00abe6] to-[#48d0ff] text-white shadow-lg shadow-[#00abe6]/30 scale-105'
                : 'bg-zinc-800/50 text-gray-400 hover:bg-zinc-700/50 hover:text-gray-300 border border-zinc-700'
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
              <div className="hidden md:block absolute left-12 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#00abe6]/50 via-[#48d0ff]/30 to-transparent"></div>
            )}

            {/* Month Header Card */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-8">
              {/* Month Badge */}
              <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${monthData.color} flex items-center justify-center shadow-2xl flex-shrink-0 transform hover:scale-110 transition-transform duration-300`}>
                <div className="text-center">
                  <FiCalendar className="text-white text-2xl md:text-3xl mx-auto mb-1" />
                  <span className="text-white font-bold text-xs md:text-sm">{monthData.month}</span>
                </div>
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${monthData.color} blur-xl opacity-50 -z-10`}></div>
              </div>

              {/* Month Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{monthData.period}</h2>
                {monthData.label && (
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00abe6]/20 to-[#48d0ff]/20 border border-[#00abe6]/30">
                    <FiClock className="text-[#00abe6]" />
                    <span className="text-[#00abe6] text-sm md:text-base font-medium">{monthData.label}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Events Masonry Grid */}
            <div className="md:ml-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {monthData.events.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700/50 rounded-xl p-5 hover:border-[#00abe6]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00abe6]/20 hover:-translate-y-1"
                >
                  {/* Event Type Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-3 ${getTypeColor(event.type)}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </div>

                  {/* Event Name */}
                  <h3 className="font-bold text-base md:text-lg text-white mb-2 group-hover:text-[#00abe6] transition-colors leading-tight">
                    {event.name}
                  </h3>

                  {/* Event Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <FiCalendar className="text-[#00abe6] flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-700/50">
                    <span className="text-xs text-gray-500 font-medium">{event.status}</span>
                    <FiArrowRight className="text-[#00abe6] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#00abe6]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* View All Events CTA */}
      <div className="mt-16">
        <Link to="/events">
          <button className="group px-8 py-4 bg-gradient-to-r from-[#00abe6] to-[#48d0ff] text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#00abe6]/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
            <span>View All Event Details</span>
            <FiArrowRight className="transform group-hover:translate-x-2 transition-transform" />
          </button>
        </Link>
      </div>
    </div>
  );
};



export default EventCalendar;