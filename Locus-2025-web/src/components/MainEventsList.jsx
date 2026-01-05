import React from 'react';
import './EventsList.css';
import MainEventsListSection from './MainEventsListSection';

const MainEventsList = () => {
 
  return (
    <div className="text-center mt-12 md:mt-20 px-4"> 
      <h1 className="text-[#48d0ff] text-3xl md:text-5xl mb-3 md:mb-3"><span className="text-white">LOCUS</span> Main Events</h1>
      <div className="h-0.5 bg-[#48d0ff] w-[80%] mx-auto mb-10 md:mb-16"></div>
      <MainEventsListSection  />
    </div>
  );
};

export default MainEventsList;
