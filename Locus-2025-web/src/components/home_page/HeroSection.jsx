import { useState, useEffect } from "react";
import { MapPin, ArrowRight } from "lucide-react";

// Animations are now in index.css — no runtime style injection needed

function EventDateCard({ day, nepaliMonth, englishDate, index }) {
  return (
    <div style={{ animationDelay: `${index * 0.1}s` }} className='relative group transition-all duration-300 slide-in'>
      <div className='relative overflow-hidden rounded-xl border border-[#8d2b8f]/30 bg-[#14061a]/85 backdrop-blur-sm p-3 sm:p-4 shadow-[0_12px_28px_rgba(20,3,26,0.38)] hover:border-[#df7fe6]/60 hover:bg-[#1c0a25]/90 transition-all duration-300'>
        <div className='flex flex-col items-center gap-1'>
          <div className='text-xs sm:text-sm font-medium uppercase tracking-wider text-[#df7fe6]'>{nepaliMonth}</div>
          <div className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>{day}</div>
          <div className='hidden min-[400px]:block text-xs sm:text-sm font-medium text-gray-400'>{englishDate}</div>
          <div className='text-[10px] sm:text-xs font-medium uppercase tracking-wide text-gray-500'>Day {parseInt(day) - 21}</div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [daysRemaining, setDaysRemaining] = useState(null);

  useEffect(() => {
    const calculateDaysRemaining = () => {
      const eventDate = new Date("2026-01-30");
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      eventDate.setHours(0, 0, 0, 0);
      setDaysRemaining(Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24)));
    };
    calculateDaysRemaining();
    const interval = setInterval(calculateDaysRemaining, 1000 * 60 * 60 * 24);
    return () => clearInterval(interval);
  }, []);

  const eventDates = [
    { day: "22", nepaliMonth: "MAGH", englishDate: "Feb 5, 2027" },
    { day: "23", nepaliMonth: "MAGH", englishDate: "Feb 6, 2027" },
    { day: "24", nepaliMonth: "MAGH", englishDate: "Feb 7, 2027" },
  ];

  return (
    <main className='min-h-[100svh] flex flex-col items-center justify-center py-8 sm:py-12 relative overflow-hidden'>
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute top-24 left-6 w-64 h-64 bg-[#8d2b8f]/12 rounded-full blur-3xl' />
        <div className='absolute bottom-16 right-8 w-56 h-56 bg-[#500e5d]/18 rounded-full blur-3xl' />
      </div>
      <div className='relative z-10 w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto h-full flex flex-col items-center justify-center text-center px-3 sm:px-4'>
        <div className='flex flex-col items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10'>
          <img src='/assets/home/locus_2027_small_logo_2.png' alt='LOCUS 2027 Logo' className='h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto float-animation drop-shadow-[0_0_28px_rgba(141,43,143,0.55)] drop-shadow-[0_0_60px_rgba(80,14,93,0.35)]' />
          <div className='space-y-2 sm:space-y-3 md:space-y-4'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight slide-in leading-tight'><span className='text-white'>LOCUS </span><span className='text-[#df7fe6]'>2027</span></h1>
            <div className='space-y-2 sm:space-y-3'>
              <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light slide-in' style={{ animationDelay: "0.1s" }}>23<sup className='text-xs sm:text-sm'>rd</sup> National Technological Festival</p>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#df7fe6] slide-in' style={{ animationDelay: "0.2s" }}>Nepal&apos;s Biggest Tech Festival</p>
              <div className='flex flex-col items-center gap-2 mt-3 sm:mt-4 slide-in' style={{ animationDelay: "0.3s" }}>
                <div className='flex items-center gap-2 text-gray-300'><MapPin className='w-4 h-4 sm:w-5 sm:h-5 text-[#df7fe6] flex-shrink-0' /><span className='text-xs sm:text-sm md:text-base lg:text-lg'>Pulchowk Campus, Lalitpur</span></div>
                <a href='https://maps.app.goo.gl/2EzJrZ6PwkYRMy3Q6' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm text-[#f0bbf3] border border-[#8d2b8f]/40 bg-[#8d2b8f]/10 hover:bg-[#8d2b8f]/20 hover:border-[#df7fe6] transition-all duration-300 group'><span>View on Map</span><ArrowRight className='w-3 h-3 group-hover:translate-x-1 transition-transform' /></a>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full'>
          {daysRemaining !== null && daysRemaining > 0 && <div className='mb-3 sm:mb-4 md:mb-6 slide-in' style={{ animationDelay: "0.35s" }}><div className='inline-flex items-center gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-[#8d2b8f]/25 to-[#500e5d]/30 border border-[#a83bb0]/45 backdrop-blur-sm shadow-[0_0_24px_rgba(141,43,143,0.25)]'><div className='w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#df7fe6] animate-pulse' /><span className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white'><span className='text-[#df7fe6]'>{daysRemaining}</span> {daysRemaining === 1 ? "day" : "days"} to go</span></div></div>}
          <h2 className='text-gray-200 mb-4 sm:mb-6 md:mb-8 text-base sm:text-xl md:text-2xl lg:text-3xl tracking-widest font-light slide-in' style={{ animationDelay: "0.4s" }}>MARK YOUR CALENDAR</h2>
          <div className='grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto'>{eventDates.map((date, index) => <EventDateCard key={index} index={index} day={date.day} nepaliMonth={date.nepaliMonth} englishDate={date.englishDate} />)}</div>
        </div>
      </div>
    </main>
  );
}
