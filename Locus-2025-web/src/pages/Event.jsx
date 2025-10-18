import React from 'react'
// import EventsList from '../components/EventsList'
// import EventDescription from '../components/EventDescription'
import EventsTimeline from '../components/events/Timeline'
import { locusEvents } from '../data/events'

const Event = () => {
  return (
    <>
      {/* <EventsList /> */}
      <div>
        <div className='text-center my-12 md:my-20 px-4'>
          <h1 className="text-[#48d0ff] text-3xl md:text-5xl mb-3 md:mb-3">
            <span className="text-white">LOCUS</span> Events
          </h1>
        </div>
      </div>
      <EventsTimeline title="Locus Events 2026" items={locusEvents} />
    </>
    // <div><EventDescription /></div>
  )
}

export default Event