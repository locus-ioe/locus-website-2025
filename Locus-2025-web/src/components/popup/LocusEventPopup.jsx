import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

import locuslogo from "../../../public/assets/logo/locus_logo.png";

const ExhibitionPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true); // Show the popup on page load
  }, []);

  const popupContent = (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50'>
      <div className='relative bg-gray-900 text-white p-6 sm:p-8 rounded-lg shadow-lg max-w-4xl w-11/12 text-left flex flex-col md:flex-row items-center gap-6'>
        {/* Close Button */}
        <button
          className='absolute top-3 right-3 text-gray-400 hover:text-white transition'
          onClick={() => setShowPopup(false)}
        >
          <AiOutlineClose className='w-6 h-6' />
        </button>

        {/* Image Section */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img
            src={locuslogo}
            alt='Exhibition Preview'
            className='rounded-lg shadow-md max-w-full'
          />
        </div>

        {/* Text Section */}
        <div className='w-full md:w-1/2'>
          <h2 className='text-2xl sm:text-3xl font-extrabold text-green-400 mb-4 text-center md:text-left'>
            🚀 LOCUS 2026 Grand Exhibition
          </h2>
          <p className='text-base sm:text-lg text-gray-300 mb-4'>
            <span className='font-bold text-yellow-400'>📅 Dates:</span> Magh
            11, 12, and 13
          </p>
          <p className='text-sm sm:text-base text-gray-300 mb-4 leading-relaxed'>
            Be part of Nepal's biggest tech extravaganza—a celebration of{" "}
            <span className='text-yellow-400 font-bold'>innovation</span>,{" "}
            <span className='text-yellow-400 font-bold'>creativity</span>, and{" "}
            <span className='text-yellow-400 font-bold'>technology</span>.
          </p>
          <p className='text-sm sm:text-base text-gray-300 mb-4 leading-relaxed'>
            Explore groundbreaking projects, discover future-ready ideas, and
            connect with tech enthusiasts from all over Nepal. Whether you're a{" "}
            <span className='text-yellow-400 font-bold'>tech lover</span>, an{" "}
            <span className='text-yellow-400 font-bold'>innovator</span>, or
            just curious, there’s something for everyone!
          </p>
          <p className='text-lg sm:text-xl font-bold text-green-400 mt-6'>
            Let’s make LOCUS 2026 an unforgettable experience! 🎉
          </p>
        </div>
      </div>
    </div>
  );

  return showPopup
    ? ReactDOM.createPortal(
        popupContent,
        document.getElementById("portal-root")
      )
    : null;
};

export default ExhibitionPopup;
