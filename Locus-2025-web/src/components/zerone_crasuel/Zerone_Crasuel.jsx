import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { zerone_crausel_items } from "../../data/zerone_crausel";

const HighlightCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isTouching, setIsTouching] = useState(false); // Track touch state

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
    const touchStart = e.touches[0].clientX;
    setStartX(touchStart);
    setIsTouching(true); // Start touch, hide arrows
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const distance = startX - touchEnd;

    if (distance > 50) {
      nextSlide(); // Swiped left, move to the next slide
    } else if (distance < -50) {
      prevSlide(); // Swiped right, move to the previous slide
    }

    setIsTouching(false); // End touch, show arrows again
  };

  return (
    <div
      className='relative flex items-center justify-center w-full bg-gray-900 text-white'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Conditionally Render Arrows */}
      {!isTouching && (
        <>
          <button
            onClick={prevSlide}
            className='absolute left-4 md:left-10 z-20 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700'
          >
            <FaArrowLeft className='w-6 h-6' />
          </button>
          <button
            onClick={nextSlide}
            className='absolute right-4 md:right-10 z-20 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700'
          >
            <FaArrowRight className='w-6 h-6' />
          </button>
        </>
      )}

      {/* Carousel Items */}
      <div className='relative flex items-center justify-center w-full h-[80vh] overflow-hidden'>
        {zerone_crausel_items.map((item, index) => {
          const position =
            index === currentIndex
              ? "scale-105 z-20 opacity-100"
              : index === (currentIndex + 1) % zerone_crausel_items.length
              ? "scale-90 z-10 opacity-50 translate-x-[30%]"
              : "scale-90 z-10 opacity-50 -translate-x-[30%]";
          return (
            <div
              key={item.id}
              className={`absolute transition-all duration-500 ease-in-out transform ${position}`}
            >
              <a
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                className='block w-[300px] sm:w-[300px] md:w-[300px] lg:w-[400px] h-[400px] sm:h-[400px] md:h-[500px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg bg-gray-700 hover:scale-110 transition-all duration-300 ease-in-out'
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full object-cover'
                />
                <p className='absolute bottom-4 left-0 right-0 text-center text-lg font-semibold text-yellow-400 bg-black bg-opacity-50 p-2 rounded-b-lg'>
                  {item.title}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HighlightCarousel;
