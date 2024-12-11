import Image_content from "../components/about_page/Image_content";
import ProfileCard from "../components/about_page/ProfileCard";
import { aboutUsHistory } from "../data/about_us";
import committee_data from "../data/committee.json";

function AboutUs() {
  return (
    <div>
      <div className='w-full max-w-[1148px] mx-auto px-4 py-8'>
        {/* About Section */}
        <div className='text-center mb-8'>
          <h1 className='text-2xl md:text-4xl font-bold mb-4'>
            <span className='text-[#48BFBA]'>About</span> Locus 2025
          </h1>
          <p className='text-lg text-white'>21st National Technology Fest</p>
          <p className='text-sm md:text-base text-white mt-2'>
            21st National Technology Fest 7th - 10th July, IOE Pulchowk
            Engineering Campus, Nepal
          </p>
          <div className='mt-4 mb-4'>
            <hr className='border-gray-300' />
          </div>
        </div>

        {/* About Us History Section */}
        <div className='space-y-8 mt-20'>
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
        <div className='mt-12'>
          <div className='text-center mb-8'>
            <h1 className='text-2xl md:text-4xl font-bold'>
              <span className='text-[#48BFBA]'>Locus 2025 </span>Committee
            </h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
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
