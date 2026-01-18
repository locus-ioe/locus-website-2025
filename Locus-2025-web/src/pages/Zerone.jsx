import Image_content from "../components/about_page/Image_content";
import ProfileCard from "../components/about_page/ProfileCard";
import { aboutUsHistory } from "../data/zerone";
import committee_data from "../data/zeronecommittee.json";
import { Link } from "react-router-dom";
import Zerone_Carousel from "../components/zerone_crasuel/Zerone_Crasuel";
import { ArrowRight } from "lucide-react";

const zeroneevent = "/assets/zerone/cover.png";
const technicalevent = "/assets/zerone/cover.png";

const highlightImages = [
  { src: "/assets/zerone/Gallery/cute.jpg", alt: "Locus Highlight 8" },
  { src: "/assets/zerone/Gallery/magazine.jpg", alt: "Locus Highlight 9" },
  { src: "/assets/zerone/Gallery/KUU00022.jpg", alt: "Locus Highlight 1" },
  { src: "/assets/zerone/Gallery/KUU00060.jpg", alt: "Locus Highlight 2" },
  { src: "/assets/zerone/Gallery/The Zerone 2025.JPG", alt: "Locus Highlight 3" },
  { src: "/assets/zerone/Gallery/zerone 2020.png", alt: "Locus Highlight 4" },
  { src: "/assets/zerone/Gallery/zerone 2023.png", alt: "Locus Highlight 5" },
  { src: "/assets/zerone/Gallery/zerone 2024.png", alt: "Locus Highlight 6" },
  { src: "/assets/zerone/Gallery/zerone stall 2024.png", alt: "Locus Highlight 7" },
];

function Zerone() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        {/* Header Section */}
        <div className='text-center mb-12 sm:mb-16 mt-8 sm:mt-12'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight'>
            <span className='text-[#48d0ff]'>The</span>
            <span className='text-white'> Zerone 2025</span>
          </h1>
          <div className='mt-6 sm:mt-8 flex justify-center'>
            <div className='h-1 bg-gradient-to-r from-transparent via-[#48d0ff] to-transparent w-3/4 sm:w-1/2 rounded-full' />
          </div>
        </div>

        {/* About History Section */}
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
              <span className='text-[#48d0ff]'>The Zerone 2025 </span>
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

        {/* Zerone Highlights Section */}
        <div className='mt-20 sm:mt-28'>
          <div className='text-center mb-10 sm:mb-16'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight'>
              <span className='text-white'>Zerone </span>
              <span className='text-[#48d0ff]'>Highlights</span>
            </h1>
            <div className='mt-6 sm:mt-8 flex justify-center'>
              <div className='h-1 bg-gradient-to-r from-transparent via-[#48d0ff] to-transparent w-3/4 sm:w-1/2 rounded-full' />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto'>
            {[{url: 'https://medium.com/zerone-magazine/tagged/blogging-competition', img: zeroneevent, title: 'Blogging Competition'},
              {url: 'https://medium.com/zerone-magazine/tagged/technical-competition', img: technicalevent, title: 'Technical Competition'}].map((item, idx) => (
              <Link
                key={idx}
                to={item.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative bg-gradient-to-b from-gray-900/90 to-gray-800/90 rounded-xl overflow-hidden border-2 border-gray-700/50 hover:border-[#48d0ff] transition-all duration-500 hover:shadow-[0_0_30px_rgba(72,208,255,0.4)] hover:scale-105'
              >
                <div className='relative h-64 sm:h-72 overflow-hidden'>
                  <img
                    src={item.img}
                    alt={item.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500' />
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border-2 shadow-lg bg-red-500/20 text-red-300 border-red-500/60'>
                      Closed
                    </span>
                  </div>
                </div>
                <div className='p-5 sm:p-6 space-y-3'>
                  <h3 className='text-lg sm:text-xl font-bold text-white group-hover:text-[#48d0ff] transition-colors duration-300'>
                    {item.title}
                  </h3>
                  <button className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#48d0ff]/10 border border-[#48d0ff]/40 text-[#48d0ff] text-sm font-semibold hover:bg-[#48d0ff] hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(72,208,255,0.5)]'>
                    <span>Learn More</span>
                    <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className='mt-20 sm:mt-28'>
          <div className='text-center mb-10 sm:mb-16'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight'>
              <span className='text-white'>The Zerone </span>
              <span className='text-[#48d0ff]'>Gallery</span>
            </h1>
            <div className='mt-6 sm:mt-8 flex justify-center'>
              <div className='h-1 bg-gradient-to-r from-transparent via-[#48d0ff] to-transparent w-3/4 sm:w-1/2 rounded-full' />
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            {highlightImages.map((image, index) => (
              <div
                key={index}
                className='group relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-gray-700/50 hover:border-[#48d0ff] transition-all duration-500 hover:shadow-[0_0_30px_rgba(72,208,255,0.4)] hover:scale-105'
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Previous Issues Section */}
        <div className='mt-20 sm:mt-28'>
          <div className='text-center mb-10 sm:mb-16'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight'>
              <span className='text-white'>Previous </span>
              <span className='text-[#48d0ff]'>Issues</span>
            </h1>
            <div className='mt-6 sm:mt-8 flex justify-center'>
              <div className='h-1 bg-gradient-to-r from-transparent via-[#48d0ff] to-transparent w-3/4 sm:w-1/2 rounded-full' />
            </div>
          </div>
          <Zerone_Carousel />
        </div>
      </div>
    </div>
  );
}

export default Zerone;
