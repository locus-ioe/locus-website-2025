import React from 'react'
import Navbar from '../components/Navbar'
import CountdownTimer from '../components/CountdownTimer'
import AboutLocus from '../components/AboutLocus'
import DirectorsAmbassadors from '../components/DirectorsAmbassadors'
import LocusHighlights from '../components/LocusHighlights'
import EventsHighlight from '../components/EventsHighlight'
const Home = () => {
  return (

    <div className='home'>
      <Navbar/>
      <CountdownTimer />
      <AboutLocus />
      <DirectorsAmbassadors />
      <LocusHighlights />
      <EventsHighlight />
      
      {/* <div>hello world</div> */}
    </div>
  )
}

export default Home