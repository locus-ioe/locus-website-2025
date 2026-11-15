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
    <div className='w-full py-4 sm:py-6 px-3 sm:px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='relative rounded-xl border border-[#8d2b8f]/35 bg-[#14061a]/85 backdrop-blur-sm p-4 sm:p-5 shadow-[0_8px_24px_rgba(20,3,26,0.35)]'>
          {/* Close button at top right */}
          <button
            onClick={() => setIsVisible(false)}
            className='absolute top-2.5 right-2.5 sm:top-3 sm:right-3 p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 active:scale-95 transition-all z-10'
            aria-label='Close'
          >
            <X className='w-4 h-4' />
          </button>

          {/* Main content row with dedicated right padding so close button never overlaps */}
          <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 pr-7 sm:pr-9'>
            {/* Left: Trophy + Title */}
            <div className='flex items-center gap-3.5 sm:gap-4 min-w-0'>
              <div className='flex-shrink-0'>
                <div className='bg-gradient-to-br from-[#df7fe6] to-[#8d2b8f] p-2.5 sm:p-3 rounded-lg'>
                  <Trophy className='w-6 h-6 sm:w-7 sm:h-7 text-black' />
                </div>
              </div>

              <div className='min-w-0'>
                <h3 className='text-white text-sm sm:text-base font-semibold leading-snug'>
                  Register for <span className='text-fuchsia-300'>LOCUS 2027</span> Projects
                </h3>
                <p className='text-gray-400 text-xs sm:text-sm mt-0.5'>
                  Win cash prizes!
                </p>
              </div>
            </div>

            {/* Right: Info & Register Buttons */}
            <div className='flex items-center gap-2 sm:gap-2.5 w-full sm:w-auto flex-shrink-0'>
              <button
                onClick={handleDetailsClick}
                className='flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all active:scale-95'
              >
                <Info className='w-3.5 h-3.5' />
                <span>Info</span>
              </button>
              <button
                onClick={handleRegisterClick}
                className='flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[#8d2b8f] text-white hover:bg-[#9d36a3] transition-all active:scale-95'
              >
                <span>Register</span>
                <ExternalLink className='w-3.5 h-3.5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
