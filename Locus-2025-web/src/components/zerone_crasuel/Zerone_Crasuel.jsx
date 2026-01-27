import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { zerone_crausel_items } from "../../data/zerone_crausel";

const HighlightCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? zerone_crausel_items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === zerone_crausel_items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const distance = startX - e.changedTouches[0].clientX;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
  };

  return (
    <div
      className='relative flex items-center justify-center w-full py-12 text-white'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className='absolute left-4 md:left-10 z-30 p-3 bg-black/40 backdrop-blur-sm border border-[#48d0ff]/30 text-[#48d0ff] rounded-full transition-colors hover:bg-[#48d0ff]/20'
      >
        <ChevronLeft className='w-5 h-5' />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-4 md:right-10 z-30 p-3 bg-black/40 backdrop-blur-sm border border-[#48d0ff]/30 text-[#48d0ff] rounded-full transition-colors hover:bg-[#48d0ff]/20'
      >
        <ChevronRight className='w-5 h-5' />
      </button>

      {/* Carousel Items */}
      <div className='relative flex items-center justify-center w-full h-[70vh] md:h-[80vh] overflow-hidden'>
        {zerone_crausel_items.map((item, index) => {
          const isCurrent = index === currentIndex;
          const isNext = index === (currentIndex + 1) % zerone_crausel_items.length;
          const isPrev = index === (currentIndex - 1 + zerone_crausel_items.length) % zerone_crausel_items.length;
          
          const position = isCurrent
            ? "scale-100 z-20 opacity-100"
            : isNext
            ? "scale-75 z-10 opacity-40 translate-x-[40%] md:translate-x-[50%]"
            : isPrev
            ? "scale-75 z-10 opacity-40 -translate-x-[40%] md:-translate-x-[50%]"
            : "scale-75 z-0 opacity-0";

          return (
            <div
              key={item.id}
              className={`absolute transition-all duration-700 ease-out ${position}`}
            >
              <a
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                className='block w-[280px] sm:w-[320px] md:w-[380px] lg:w-[450px] h-[380px] sm:h-[420px] md:h-[480px] lg:h-[550px] rounded-xl overflow-hidden border border-[#48d0ff]/20 bg-black/60 backdrop-blur-sm transition-transform hover:border-[#48d0ff]/40'
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full object-cover'
                />
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4'>
                  <p className='text-center text-base md:text-lg font-semibold text-[#48d0ff]'>
                    {item.title}
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {/* Dots Indicator */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30'>
        {zerone_crausel_items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-[#48d0ff] w-6'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HighlightCarousel;
