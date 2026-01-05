import React, { useEffect, useState } from 'react';
import './EventsList.css';
import EventsListSection from './EventsListSection';
// import Popup from './Popup';
const EventsList = () => {
 
  return (
    <div className="text-center mt-12 md:mt-20 px-4"> 
      <h1 className="text-[#48d0ff] text-3xl md:text-5xl mb-3 md:mb-3"><span className="text-white">LOCUS</span> Pre Events</h1>
      <div className="h-0.5 bg-[#48d0ff] w-[80%] mx-auto mb-10 md:mb-16"></div>
      {/* {showPopup && <Popup onClose={closePopup} />} */}
      <EventsListSection  />
    </div>
  );
};

export default EventsList;
