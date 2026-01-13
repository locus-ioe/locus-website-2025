import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  @keyframes glow {
    0%, 100% { text-shadow: 0 0 10px rgba(72, 208, 255, 0.5); }
    50% { text-shadow: 0 0 20px rgba(72, 208, 255, 0.8); }
  }
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(72, 208, 255, 0.4); }
    50% { box-shadow: 0 0 40px rgba(72, 208, 255, 0.8); }
  }
  .float-animation { animation: float 3s ease-in-out infinite; }
  .glow-text { animation: glow 2s ease-in-out infinite; }
  .slide-in { animation: slideInUp 0.8s ease-out; }
  .pulse-glow-animation { animation: pulse-glow 2s ease-in-out infinite; }
`;

function EventDateCard({ day, nepaliMonth, englishDate, index }) {
  return (
    <div
      style={{ animationDelay: `${index * 0.1}s` }}
      className='relative group transition-all duration-300 slide-in'
    >
      <div className='relative overflow-hidden rounded-2xl border-2 border-[#48d0ff] bg-gradient-to-br from-[#48d0ff]/30 to-[#2a9fd6]/30 backdrop-blur-sm p-3 sm:p-4 shadow-[0_0_30px_rgba(72,208,255,0.5)] hover:shadow-[0_0_40px_rgba(72,208,255,0.7)] transition-all duration-300'>
        <div className='flex flex-col items-center gap-1'>
          <div className='text-xs sm:text-sm font-medium uppercase tracking-wider text-[#48d0ff]'>
            {nepaliMonth}
          </div>
          <div className='text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(72,208,255,0.8)]'>
            {day}
          </div>
          <div className='text-xs sm:text-sm font-medium text-[#48d0ff]'>
            {englishDate}
          </div>
          <div className='text-[10px] sm:text-xs font-medium uppercase tracking-wide text-gray-200'>
            Day {parseInt(day) - 15}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [daysRemaining, setDaysRemaining] = useState(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = styles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const calculateDaysRemaining = () => {
      const eventDate = new Date('2026-01-29');
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      eventDate.setHours(0, 0, 0, 0);
      const diffTime = eventDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysRemaining(diffDays);
    };
    
    calculateDaysRemaining();
    const interval = setInterval(calculateDaysRemaining, 1000 * 60 * 60 * 24);
    return () => clearInterval(interval);
  }, []);

  const eventDates = [
    { day: "16", nepaliMonth: "MAGH", englishDate: "Jan 29, 2026" },
    { day: "17", nepaliMonth: "MAGH", englishDate: "Jan 30, 2026" },
    { day: "18", nepaliMonth: "MAGH", englishDate: "Jan 31, 2026" },
  ];

  return (
    <>
      <main className='min-h-[90svh] flex flex-col items-center justify-center pb-12 relative overflow-hidden'>
        {/* Animated background elements */}
        <div className='absolute inset-0 -z-10'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-[#48d0ff]/10 rounded-full blur-3xl animate-pulse' />
          <div className='absolute bottom-20 right-10 w-72 h-72 bg-[#2a9fd6]/10 rounded-full blur-3xl animate-pulse' />
        </div>

        <div className='w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-6xl mx-auto h-full flex flex-col items-center justify-center text-center px-4'>
          {/* Logo and Title Section */}
          <div className='flex flex-col items-center gap-4 sm:gap-6 mb-8 sm:mb-10'>
            <img
              src='/assets/home/small_logo.png'
              alt='LOCUS 2026 Logo'
              className='h-24 sm:h-28 md:h-32 lg:h-36 w-auto float-animation'
            />
            <div className='space-y-3 sm:space-y-4'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight slide-in'>
                <span className='text-white'>LOCUS </span>
                <span className='text-[#48d0ff] glow-text'>2026</span>
              </h1>
              <div className='space-y-3'>
                <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light slide-in' style={{ animationDelay: '0.1s' }}>
                  22nd National Technological Festival
                </p>

                {/* Festival Tagline */}
                <p className='text-lg sm:text-xl md:text-2xl font-semibold text-[#48d0ff] glow-text slide-in' style={{ animationDelay: '0.2s' }}>
                  Nepal's Biggest Tech Festival
                </p>

                {/* Location */}
                <div className='flex flex-col items-center gap-2 mt-4 slide-in' style={{ animationDelay: '0.3s' }}>
                  <div className='flex items-center gap-2 text-gray-300 group'>
                    <MapPin className='w-4 h-4 sm:w-5 sm:h-5 text-[#48d0ff] group-hover:animate-bounce' />
                    <span className='text-sm sm:text-base md:text-lg'>
                      Pulchowk Campus, Lalitpur
                    </span>
                  </div>
                  <a
                    href='https://maps.app.goo.gl/2EzJrZ6PwkYRMy3Q6'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 px-4 py-2 rounded-lg
                      text-xs sm:text-sm text-[#48d0ff] 
                      border border-[#48d0ff]/40
                      hover:bg-[#48d0ff]/10 hover:border-[#48d0ff] hover:shadow-[0_0_20px_rgba(72,208,255,0.5)]
                      transition-all duration-300 group'
                  >
                    <span>View on Map</span>
                    <svg
                      className='w-3 h-3 group-hover:translate-x-1 transition-transform'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Event Dates Section */}
          <div className='w-full'>
            {daysRemaining !== null && daysRemaining > 0 && (
              <div className='mb-4 sm:mb-6 slide-in' style={{ animationDelay: '0.35s' }}>
                <div className='inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#48d0ff]/20 to-[#2a9fd6]/20 border border-[#48d0ff]/50 backdrop-blur-sm'>
                  <div className='w-2 h-2 rounded-full bg-[#48d0ff] animate-pulse' />
                  <span className='text-sm sm:text-base md:text-lg font-semibold text-white'>
                    <span className='text-[#48d0ff]'>{daysRemaining}</span> {daysRemaining === 1 ? 'day' : 'days'} to go
                  </span>
                </div>
              </div>
            )}
            <h2 className='text-gray-200 mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl tracking-widest font-light slide-in' style={{ animationDelay: '0.4s' }}>
              MARK YOUR CALENDAR
            </h2>

            {/* Date Cards */}
            <div className='grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto'>
              {eventDates.map((date, index) => (
                <EventDateCard
                  key={index}
                  index={index}
                  day={date.day}
                  nepaliMonth={date.nepaliMonth}
                  englishDate={date.englishDate}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
