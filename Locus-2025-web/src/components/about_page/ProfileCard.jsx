import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import locuslogo from "../../assets/about/logo.png";
import { useState } from "react";

const ProfileCard = ({
  imageUrl,
  name,
  designation,
  facebook,
  twitter,
  instagram,
  linkedin,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className='w-full max-w-md mx-auto h-[400px]'
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className='relative w-full h-full transition-transform duration-700'
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front Side */}
        <div 
          className='absolute inset-0 rounded-xl border-2 border-gray-700/50 hover:border-[#48d0ff] transition-all duration-500 bg-gradient-to-b from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-3 flex flex-col hover:shadow-[0_0_30px_rgba(72,208,255,0.4)]'
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className='relative flex-1 overflow-hidden rounded-lg border-2 border-gray-700/50 transition-all duration-500'>
            <img
              src={imageUrl}
              alt={name}
              className='w-full h-full object-cover object-center'
            />
          </div>
          <div className='p-4 flex flex-col gap-2'>
            <div className='flex items-center gap-2 text-[#48d0ff]/80 text-xs font-medium'>
              <img src={locuslogo} alt='Locus Logo' className='w-5 h-5 object-contain' />
              <span className='uppercase tracking-wide'>{designation}</span>
            </div>
            <h3 className='text-lg font-bold text-white transition-colors duration-300'>
              {name}
            </h3>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className='absolute inset-0 rounded-xl border-2 border-[#48d0ff] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm p-8 flex flex-col items-center justify-center gap-6 shadow-[0_0_40px_rgba(72,208,255,0.6)]'
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h3 className='text-2xl font-bold text-[#48d0ff] text-center'>{name}</h3>
          <p className='text-gray-300 text-sm uppercase tracking-wide'>{designation}</p>
          <div className='flex gap-3 mt-4'>
            {[{icon: Facebook, link: facebook, color: 'hover:bg-blue-600 hover:border-blue-600'}, 
              {icon: Twitter, link: twitter, color: 'hover:bg-blue-400 hover:border-blue-400'}, 
              {icon: Instagram, link: instagram, color: 'hover:bg-pink-600 hover:border-pink-600'}, 
              {icon: Linkedin, link: linkedin, color: 'hover:bg-blue-700 hover:border-blue-700'}].map(({icon: Icon, link, color}, i) => (
              <a
                key={i}
                href={link || "#"}
                target='_blank'
                rel='noopener noreferrer'
                className={`p-2 rounded-full bg-[#48d0ff]/10 backdrop-blur-sm border border-[#48d0ff]/50 text-[#48d0ff] transition-all duration-300 hover:scale-110 ${color} ${!link && "pointer-events-none opacity-30"}`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
