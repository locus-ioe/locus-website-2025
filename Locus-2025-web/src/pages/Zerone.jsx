import Image_content from "../components/about_page/Image_content";
import ProfileCard from "../components/about_page/ProfileCard";
import { aboutUsHistory } from "../data/zerone";
import committee_data from "../data/zeronecommittee.json";
import zeroneevent from "../../public/assets/events/zerone.jpg";
import technicalevent from "../../public/assets/events/technicalwriting.jpg";
import { Link } from "react-router-dom";
import Zerone_Carousel from "../components/zerone_crasuel/Zerone_Crasuel";

const highlightImages = [
  {
    src: "/assets/zerone/Gallery/cute.jpg",
    alt: "Locus Highlight 8",
  },
  {
    src: "/assets/zerone/Gallery/magazine.jpg",
    alt: "Locus Highlight 9",
  },
  {
    src: "/assets/zerone/Gallery/KUU00022.jpg",
    alt: "Locus Highlight 1",
  },
  {
    src: "/assets/zerone/Gallery/KUU00060.jpg",
    alt: "Locus Highlight 2",
  },
  {
    src: "/assets/zerone/Gallery/The Zerone 2025.JPG",
    alt: "Locus Highlight 3",
  },
  {
    src: "/assets/zerone/Gallery/zerone 2020.png",
    alt: "Locus Highlight 4",
  },
  {
    src: "/assets/zerone/Gallery/zerone 2023.png",
    alt: "Locus Highlight 5",
  },
  {
    src: "/assets/zerone/Gallery/zerone 2024.png",
    alt: "Locus Highlight 6",
  },
  {
    src: "/assets/zerone/Gallery/zerone stall 2024.png",
    alt: "Locus Highlight 7",
  },
  // { src: 'public/assets/zerone/Zeroneteam.png', alt: 'Locus Highlight 8' },
];
function Zerone() {
  return (
    <div>
      <div className='w-full max-w-[1148px] mx-auto px-4 py-8'>
        {/* About Section */}
        <div className='text-center mb-8'>
          <h1 className='text-2xl md:text-4xl font-bold mb-4'>
            <span className='text-[#48d0ff]'>The</span> Zerone 2025
          </h1>
          {/* <p className='text-lg text-white'>22nd National Technology Fest</p>
          <p className='text-sm md:text-base text-white mt-2'>
            22nd National Technology Fest 24th - 26th January, IOE Pulchowk
            Engineering Campus, Nepal
          </p> */}
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
              <span className='text-[#48d0ff]'>The Zerone 2025 </span>Committee
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

        <div className='text-center mt-12 md:mt-20 px-4'>
          <h1 className='text-[#48d0ff] text-3xl md:text-5xl mb-3 md:mb-3'>
            <span className='text-white'>Zerone</span> Highlights
          </h1>
          <div className=''>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12'>
              <Link
                // key={event.id}
                to='https://medium.com/zerone-magazine/tagged/blogging-competition'
                className='relative w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'
              >
                <div className='aspect-w-5 aspect-h-5 bg-gray-200'>
                  <img
                    src={zeroneevent}
                    alt=''
                    className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                  />
                </div>

                {/* Floating Buttons */}
                <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center z-10'>
                  <span
                    className={`px-2 py-0 rounded-full text-xs font-small ${
                      "Closed" === "Coming Soon"
                        ? "bg-yellow-100 text-yellow-600"
                        : "Closed" === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    Closed
                  </span>
                  <Link to='https://medium.com/zerone-magazine/tagged/blogging-competition'>
                    <button className='text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors'>
                      More
                    </button>
                  </Link>
                </div>
              </Link>
              <Link
                // key={event.id}
                to='https://medium.com/zerone-magazine/tagged/technical-competition'
                className='relative w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'
              >
                <div className='aspect-w-5 aspect-h-5 bg-gray-200'>
                  <img
                    src={technicalevent}
                    alt=''
                    className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                  />
                </div>

                {/* Floating Buttons */}
                <div className='absolute bottom-4 left-4 right-4 flex justify-between items-center z-10'>
                  <span
                    className={`px-2 py-0 rounded-full text-xs font-small ${
                      "Closed" === "Coming Soon"
                        ? "bg-yellow-100 text-yellow-600"
                        : "Closed" === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    Closed
                  </span>
                  <Link to='https://medium.com/zerone-magazine/tagged/technical-competition'>
                    <button className='text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors'>
                      More
                    </button>
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <section className='min-h-screen text-white flex flex-col p-4 sm:p-6 lg:p-8'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center'>
            <span className='text-white'>The Zerone </span>
            <span className='text-[#48d0ff]'>Gallery</span>
          </h2>
          <div className='flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr'>
  {highlightImages.map((image, index) => (
    <div
      key={index}
      className='relative w-full h-0 pb-[75%] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105'
    >
      <img
        src={image.src}
        alt={image.alt}
        className='absolute w-full h-full object-cover'
      />
    </div>
  ))}
</div>

        </section>


        <div className='text-center mt-12 md:mt-20 px-4'>
          <h1 className='text-[#48d0ff] text-3xl md:text-5xl mb-3 md:mb-3'>
            <span className='text-white'>Previous </span> Issues
          </h1>
          <Zerone_Carousel />
        </div>
      </div>
    </div>
  );
}

export default Zerone;
