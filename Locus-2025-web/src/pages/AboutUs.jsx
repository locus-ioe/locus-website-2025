import Image_content from "../components/about_page/Image_content";
import ProfileCard from "../components/about_page/ProfileCard";
import { aboutUsHistory } from "../data/about_us";
import committee_data from "../data/committee.json";

function AboutUs() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        {/* About Section */}
        <div className='text-center mb-12 sm:mb-16 mt-8 sm:mt-12'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight'>
            <span className='text-[#48d0ff]'>About</span>
            <span className='text-white'> LOCUS 2026</span>
          </h1>
          <p className='text-lg sm:text-xl lg:text-2xl text-white font-semibold mb-3'>22nd National Technology Fest</p>
          <p className='text-sm sm:text-base lg:text-lg text-gray-400 mt-2 max-w-3xl mx-auto leading-relaxed'>
            22nd National Technology Fest in January 2026, IOE Pulchowk Engineering Campus, Nepal
          </p>
          <div className='mt-6 sm:mt-8 flex justify-center'>
            <div className='h-1 bg-gradient-to-r from-transparent via-[#48d0ff] to-transparent w-3/4 sm:w-1/2 rounded-full' />
          </div>
        </div>

        {/* About Us History Section */}
        <div className='space-y-12 sm:space-y-16 lg:space-y-20 mt-16 sm:mt-20'>
          {aboutUsHistory.map((history, index) => (
            <Image_content
              key={index}
              description={history.description}
              image={history.image}
              order={index % 2 === 0 ? 1 : 2}
            />
          ))}
        </div>

        {/* Committee Section */}
        <div className='mt-20 sm:mt-28'>
          <div className='text-center mb-10 sm:mb-16'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight'>
              <span className='text-[#48d0ff]'>LOCUS 2026 </span>
              <span className='text-white'>Committee</span>
            </h1>
            <div className='mt-6 sm:mt-8 flex justify-center'>
              <div className='h-1 bg-gradient-to-r from-transparent via-[#48d0ff] to-transparent w-3/4 sm:w-1/2 rounded-full' />
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'>
            {committee_data.map((person, index) => (
              <ProfileCard
                key={index}
                imageUrl={person.imageUrl}
                name={person.name}
                designation={person.designation}
                facebook={person.facebook}
                twitter={person.twitter}
                instagram={person.instagram}
                linkedin={person.linkedin}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
