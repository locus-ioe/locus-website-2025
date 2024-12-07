import React from 'react'
import Navbar from '../components/Navbar'
import CountdownTimer from '../components/CountdownTimer'
import AboutLocus from '../components/AboutLocus'
import DirectorsAmbassadors from '../components/DirectorsAmbassadors'
import LocusHighlights from '../components/LocusHighlights'
import EventsHighlight from '../components/EventsHighlight'
import Events from '../components/Events'
import Footer from '../components/Footer'
const Home = () => {
  return (

    <div className='home'>
      <Navbar/>
      {/* <div>hello</div> */}
      <CountdownTimer />
      <AboutLocus />
      <DirectorsAmbassadors />
      <LocusHighlights />
      <EventsHighlight />
      <Events />
      <Footer />
    </div>
  )
}

export default Home