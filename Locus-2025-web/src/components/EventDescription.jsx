import React from 'react'
import eventimg from '../assets/LAST_DAY_try2.png'

import { FaArrowRight } from "react-icons/fa6";

const event =
{
  title: "VELOCITY", date: "April 4, 2024", imgSrc: eventimg, price: "30/-", winner: 1500, runnerup: 1000,
  time: "9:00 AM - 5:00 PM",
  mode:"Offline", type:"Individual",
  description: "Velocity is a national level tvents like pap includes workshops and guest lectures by eminent personalities from the industry. The symposium is a great opportunity for students to learn and explore the latest trends in the field of mechanical engineering.",
  rules: "1. Participants "
};

const EventDescription = () => {
  return (
    <div className='main-div '>
      <div className="events-list flex flex-col gap-4 ">
        <h2> <span className='highlight'>Events</span> List</h2>
        <hr />


        <div className='mr-8 ml-8 lg:mr-20 lg:ml-20 gap-12 flex flex-col p-8 border-2 rounded-xl border-[#00ffcc] bg-[#00ffcc]/5 shadow-lg shadow-white/10'>

          <div className=' flex flex-col lg:flex-row gap-8 '>
            <div className='flex-[0.25] event-poster flex flex-col items-center gap-4'>
              <img src={event.imgSrc} className='w-60 h-60 border-2 rounded-lg' />

              <button className='text-[24px] border-2 w-full py-2 bg-[#00ffcc]/10 hover:bg-black/50 rounded-lg border-[#00ffcc] font-bold '> REGISTER <span>{event.price}</span></button>

            </div>
            <div className='flex-[0.75] flex flex-col gap-2'>
              <h1 className='text-[24px] font-bold text-justify'>{event.title}</h1>
              <div className='bg-black/30 border-2 p-4 rounded-lg border-[#00ffcc] font-bold flex flex-row justify-around'>
                <span >{event.winner} </span>
                <span >| </span>
                <span> {event.runnerup} </span>
              </div>
              <span className='bg-black/30 border-2 p-4 rounded-lg border-[#00ffcc] text-justify'>{event.date} | {event.time}</span>
              <div className='flex justify-between'>

              <span className='bg-black/30 border-2 p-4 rounded-lg border-[#00ffcc] text-justify'>{event.mode}</span>
              <span className='bg-black/30 border-2 p-4 rounded-lg border-[#00ffcc] text-justify'>{event.type}</span>

              </div>
              <h3 className='text-justify'>{event.description}</h3>
              <h3 className='text-justify font-bold text-lg'>Rules and Regulations:</h3>
              <h3 className='text-justify'>{event.rules}</h3>
            </div>
          </div>
          <div className='flex justify-around'>
            <span className='font-bold text-[8px] md:text-[16px] sm:text-[12px]'>+91 9876543210</span>
            <span className='font-bold text-[8px] md:text-[16px] sm:text-[12px]'>www.velocity.com</span>

          </div>
        </div>

        <div className='flex justify-between mr-8 ml-8 lg:mr-20 lg:ml-20'>
          <div></div>
          <button className='border-white flex items-center gap-2'>
            Events<FaArrowRight />
          </button>
        </div>



        <div className='flex flex-col items-center mr-8 ml-8 lg:mr-20 lg:ml-20'>
          <h2 > <span className='highlight'>Event</span> Sponsors</h2>
          <img src={eventimg} className='w-28' />
        </div>


      </div>
    </div>

  )
}

export default EventDescription
