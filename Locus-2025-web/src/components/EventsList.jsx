import React, { useEffect, useState } from 'react';
import './EventsList.css';
import EventsListSection from './EventsListSection';
// import Popup from './Popup';
const EventsList = () => {
  // const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   // Check if it's the user's first visit
  //   const isFirstVisit = localStorage.getItem('firstVisit') === null;

  //   if (isFirstVisit) {
  //     setShowPopup(true);
  //     // Mark the first visit as completed in localStorage
  //     localStorage.setItem('firstVisit', 'true');
  //   }
  // }, []);

  // const closePopup = () => {
  //   setShowPopup(false);
  // };
  // // Optionally pass numEventsToShow, or omit it to show all
  // const numEventsToShow = 6;  // Or leave it undefined to show all events

  return (
    <div className="text-center mt-12 md:mt-20 px-4"> 
      <h1 className="text-[#48d0ff] text-3xl md:text-5xl mb-3 md:mb-3"><span className="text-white">LOCUS</span> Events</h1>
      <div className="h-0.5 bg-[#48d0ff] w-[80%] mx-auto mb-10 md:mb-16"></div>
      {/* {showPopup && <Popup onClose={closePopup} />} */}

      <EventsListSection  />
    </div>
  );
};

export default EventsList;
