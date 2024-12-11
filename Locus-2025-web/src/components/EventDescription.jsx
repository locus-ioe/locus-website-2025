import React from 'react'
import eventimg from '../assets/LAST_DAY_try2.png'


const event =
{
  title: "VELOCITY", date: "April 4, 2024", imgSrc: eventimg, price: "30/-", winner: 1500, runnerup: 1000,
  time: "9:00 AM - 5:00 PM",
  description: "Velocity is a national level tvents like pap includes workshops and guest lectures by eminent personalities from the industry. The symposium is a great opportunity for students to learn and explore the latest trends in the field of mechanical engineering.",
  rules: "1. Participants "
};

const EventDescription = () => {
  return (
    <div className='main-div'>
      <div className="events-list">
        <h2> <span className='highlight'>Events</span> List</h2>
        <hr />


        <div className='mt-4 mr-20 ml-20 gap-12 flex flex-col p-8 border-2 rounded-xl border-[#00ffcc] bg-[#00ffcc]/10 shadow-lg shadow-white/10'>

          <div className=' flex flex-row gap-8 '>
            <div className='flex-[0.25] event-poster flex flex-col items-center gap-4'>
              <img src={event.imgSrc} className='w-60 h-60 border-2 rounded-lg' />

              <h1 className='text-[24px] border-2 p-4 rounded-lg border-[#00ffcc] font-bold '> REGISTER <span>{event.price}</span></h1>

            </div>
            <div className='flex-[0.75] flex flex-col gap-2'>
              <h1 className='text-[24px] font-bold'>{event.title}</h1>
              <div className='border-2 p-4 rounded-lg border-[#00ffcc] font-bold flex flex-row justify-around'>
                <span >{event.winner} </span>
                <span >| </span>
                <span> {event.runnerup} </span>
              </div>
              <span className='border-2 p-4 rounded-lg border-[#00ffcc]'>{event.date} | {event.time}</span>
              <h3 className='text-justify'>{event.description}</h3>
              <h3 className='text-justify font-bold text-lg'>Rules and Regulations:</h3>
              <h3 className='text-justify'>{event.rules}</h3>
            </div>
          </div>
          <div className='flex justify-around'>
            <span className='font-bold'>+91 9876543210</span>
            <span className='font-bold'>www.velocity.com</span>

          </div>
        </div>


      </div>
    </div>

  )
}

export default EventDescription
