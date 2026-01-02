import HeroSection from "../components/home_page/HeroSection"
import  AboutSection  from "../components/home_page/AboutSection"
import LocusDirectors from "../components/home_page/LocusDirectors"
import LocusHighlights from "../components/home_page/Hightlights"
import PastNumbers from "../components/home_page/PastNumbers"
import Events from "../components/home_page/Events"
import ProjectRegistrationBanner from "../components/home_page/ProjectRegistrationBanner"

function Home() {
    return (
        <>
          <HeroSection />
          <ProjectRegistrationBanner />
          <AboutSection/>
          <LocusDirectors />
          <LocusHighlights />
          <PastNumbers />
          <Events />
        </>
    )
  }
  
export default Home
