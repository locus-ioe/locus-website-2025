import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EventCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');

  const calendarData = [
    {
      month: 'Asoj',
      period: 'Asoj 19-31',
      label: 'Post Dashain',
      events: [
        { name: 'Online Competition (TBD)', type: 'sponsor', status: 'Coming Soon' }
      ]
    },
    {
      month: 'Kartik',
      period: 'Kartik 28 - Mangsir 13',
      label: '',
      events: [
        { name: 'Online Competition (TBD)', type: 'sponsor', status: 'Coming Soon' }
      ]
    },
    {
      month: 'Mangsir',
      period: 'Mangsir 19-28',
      label: '',
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

  const mainEvents = [
    'Software Project Competition',
    'Hardware Project Competition',
    'Photography Competition',
    'Robo Warz',
    'Dronacharya',
    'Robo Pop',
    'Robo Soccer',
    'Robo Racing',
    'Musical Eve'
  ];

  const getEventTypeColor = (type) => {
    const colors = {
      competition: 'bg-blue-500/20 border-blue-500 text-blue-300',
      hackathon: 'bg-purple-500/20 border-purple-500 text-purple-300',
      workshop: 'bg-green-500/20 border-green-500 text-green-300',
      registration: 'bg-yellow-500/20 border-yellow-500 text-yellow-300',
      call: 'bg-orange-500/20 border-orange-500 text-orange-300',
      announcement: 'bg-pink-500/20 border-pink-500 text-pink-300',
      activity: 'bg-cyan-500/20 border-cyan-500 text-cyan-300',
      main: 'bg-red-500/20 border-red-500 text-red-300',
      sponsor: 'bg-gray-500/20 border-gray-500 text-gray-300'
    };
    return colors[type] || 'bg-zinc-500/20 border-zinc-500 text-zinc-300';
  };

  const filteredData = selectedMonth === 'all' 
    ? calendarData 
    : calendarData.filter(item => item.month.toLowerCase() === selectedMonth.toLowerCase());

  return (
    <div className="text-center mt-12 md:mt-20 px-4">
      {/* Header */}
      <h1 className="text-[#48d0ff] text-3xl md:text-5xl mb-3">
        <span className="text-white">LOCUS</span> Event Calendar
      </h1>
      <div className="h-0.5 bg-[#48d0ff] w-[80%] mx-auto mb-8"></div>

      {/* Month Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setSelectedMonth('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedMonth === 'all'
              ? 'bg-[#00abe6] text-white'
              : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
          }`}
        >
          All Months
        </button>
        {calendarData.map((item) => (
          <button
            key={item.month}
            onClick={() => setSelectedMonth(item.month)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedMonth === item.month
                ? 'bg-[#00abe6] text-white'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
            }`}
          >
            {item.month}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto mb-16">
        {filteredData.map((monthData, index) => (
          <div key={monthData.month} className="relative mb-12">
            {/* Timeline Line */}
            {index !== filteredData.length - 1 && (
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#00abe6] to-transparent"></div>
            )}

            {/* Month Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00abe6] to-[#48d0ff] flex items-center justify-center shadow-lg shadow-[#00abe6]/50">
                <span className="text-white font-bold text-sm">{monthData.month}</span>
              </div>
              <div className="flex-1 text-left">
                <h2 className="text-2xl font-bold text-white">{monthData.period}</h2>
                {monthData.label && (
                  <p className="text-[#00abe6] text-sm">{monthData.label}</p>
                )}
              </div>
            </div>

            {/* Events Grid */}
            <div className="ml-24 grid grid-cols-1 md:grid-cols-2 gap-4">
              {monthData.events.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  className={`p-4 rounded-lg border backdrop-blur-sm transition-all hover:scale-105 ${getEventTypeColor(event.type)}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-left flex-1">{event.name}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 whitespace-nowrap ml-2">
                      {event.status}
                    </span>
                  </div>
                  {event.date && (
                    <p className="text-sm opacity-80 text-left">{event.date}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Main Events Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">Main Event Competitions</h2>
        <div className="h-0.5 bg-[#48d0ff] w-[60%] mx-auto mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {mainEvents.map((event, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-800 border border-[#00abe6]/30 hover:border-[#00abe6] transition-all hover:scale-105"
            >
              <h3 className="text-white font-semibold">{event}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-300 inline-block mt-2">
                Magh 15-17
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* View All Events Link */}
      <Link to="/events" className="inline-block mt-12">
        <button className="px-8 py-3 bg-[#00abe6] text-white rounded-lg font-medium hover:bg-[#00abe6]/80 transition-all transform hover:scale-105">
          View Full Event Details →
        </button>
      </Link>
    </div>
  );
};

export default EventCalendar;