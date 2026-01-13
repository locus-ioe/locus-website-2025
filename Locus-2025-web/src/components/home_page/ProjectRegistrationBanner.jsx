import { ExternalLink, Info, Trophy, X } from "lucide-react";
import { useState } from "react";

export default function ProjectRegistrationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleRegisterClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdIWGmHp0jM6ssnBObs_O4hxWNLg0V-OQhyxyE4aq5lV3xqzg/viewform?usp=sharing&ouid=107588023255304084224",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleDetailsClick = () => {
    window.open(
      "https://docs.google.com/document/d/1lSgEUf6q5nPp_cUEg7dxEEHL0O_uEU-WHkiLtW5yJvM/edit?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (!isVisible) return null;

  return (
    <div className='w-full py-6 px-4'>
      <div className='max-w-3xl mx-auto'>
        <div className='relative rounded-xl border border-[#48d0ff]/30 bg-gray-900/60 backdrop-blur-sm p-5 shadow-lg'>
          <button
            onClick={() => setIsVisible(false)}
            className='absolute top-2 right-2 p-1 rounded text-white/50 hover:text-white hover:bg-white/10 transition-all'
            aria-label='Close'
          >
            <X className='w-4 h-4' />
          </button>

          <div className='flex flex-col sm:flex-row items-center gap-4 pr-6'>
            <div className='flex-shrink-0'>
              <div className='bg-gradient-to-br from-[#48d0ff] to-[#0891b2] p-3 rounded-lg'>
                <Trophy className='w-7 h-7 text-black' />
              </div>
            </div>
            
            <div className='flex-1 text-center sm:text-left'>
              <h3 className='text-white text-base font-semibold mb-1'>
                Register for <span className='text-[#48d0ff]'>LOCUS 2026</span> Projects
              </h3>
              <p className='text-gray-400 text-sm'>Win cash prizes!</p>
            </div>
            
            <div className='flex gap-2'>
              <button
                onClick={handleDetailsClick}
                className='inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all'
              >
                <Info className='w-3.5 h-3.5' />
                Info
              </button>
              <button
                onClick={handleRegisterClick}
                className='inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[#48d0ff] text-black hover:bg-[#5dd8ff] transition-all'
              >
                Register
                <ExternalLink className='w-3.5 h-3.5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
