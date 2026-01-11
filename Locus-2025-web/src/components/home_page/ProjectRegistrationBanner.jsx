import { ExternalLink, Info, Trophy, X } from "lucide-react";
import { useState } from "react";

export default function ProjectRegistrationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleRegisterClick = () => {
    // Open Google Form in new tab - Replace with actual form URL
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
    <div className='fixed bottom-0 left-0 right-0 z-50 py-3 px-4 sm:px-6 lg:px-8 pointer-events-none'>
      <div className='max-w-6xl mx-auto pointer-events-auto'>
        {/* Main banner container with enhanced effects */}
        <div className='relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-[#48d0ff]/50 backdrop-blur-lg shadow-2xl shadow-[#48d0ff]/20'>
          {/* Animated gradient background */}
          <div className='absolute inset-0 bg-gradient-to-r from-black via-[#0a1525] to-black' />

          {/* Multiple animated glow layers for depth */}
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(72,208,255,0.2)_0%,_transparent_50%)] animate-pulse' />
          <div
            className='absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(34,184,207,0.15)_0%,_transparent_50%)] animate-pulse'
            style={{ animationDelay: "0.5s" }}
          />

          {/* Animated border glow */}
          <div
            className='absolute inset-0 rounded-2xl sm:rounded-3xl'
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(72,208,255,0.5), transparent)",
              backgroundSize: "200% 100%",
              animation: "shimmer 3s infinite linear",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              padding: "2px",
            }}
          />

          {/* Top edge intense glow */}
          <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#48d0ff] to-transparent opacity-80' />

          {/* Content */}
          <div className='relative z-10 py-3 sm:py-4 px-4 sm:px-6'>
            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className='absolute top-2 right-2 p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all z-20'
              aria-label='Close banner'
            >
              <X className='w-4 h-4' />
            </button>

            {/* ===== MOBILE LAYOUT ===== */}
            <div className='flex flex-col items-center gap-3 sm:hidden pr-8'>
              <p className='text-white text-sm font-semibold text-center drop-shadow-lg'>
                Register Projects for{" "}
                <span className='text-[#48d0ff] font-extrabold text-base animate-pulse'>
                  LOCUS 2026
                </span>{" "}
                & Win Prizes!
              </p>
              <div className='flex items-center gap-2 w-full max-w-sm'>
                <button
                  onClick={handleDetailsClick}
                  className='flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold
                           bg-white/10 text-white border-2 border-white/30 
                           hover:bg-white/20 hover:border-[#48d0ff]/50
                           active:scale-95 transition-all duration-200
                           shadow-lg hover:shadow-[#48d0ff]/20'
                >
                  Details
                </button>
                <button
                  onClick={handleRegisterClick}
                  className='flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold
                           bg-gradient-to-r from-[#48d0ff] via-[#22b8cf] to-[#48d0ff] text-black
                           bg-size-200 animate-gradient
                           shadow-lg shadow-[#48d0ff]/50
                           hover:shadow-2xl hover:shadow-[#48d0ff]/60 
                           active:scale-95 transition-all duration-200
                           border-2 border-[#48d0ff]/50'
                >
                  Register Now
                  <ExternalLink className='w-4 h-4' />
                </button>
              </div>
            </div>

            {/* ===== DESKTOP LAYOUT ===== */}
            <div className='hidden sm:flex items-center justify-between gap-6 pr-8'>
              {/* Left section - Icon and main text */}
              <div className='flex items-center gap-4'>
                {/* Trophy icon with pulsing glow */}
                <div className='relative flex-shrink-0'>
                  <div className='absolute inset-0 bg-[#48d0ff] blur-2xl opacity-60 rounded-full scale-150 animate-pulse' />
                  <div className='relative bg-gradient-to-br from-[#48d0ff] via-[#22b8cf] to-[#0891b2] p-3 rounded-xl shadow-xl shadow-[#48d0ff]/50 border-2 border-[#48d0ff]/30'>
                    <Trophy
                      className='w-6 h-6 text-black animate-bounce'
                      style={{ animationDuration: "2s" }}
                    />
                  </div>
                </div>

                {/* Text content with enhanced styling */}
                <div className='flex items-center gap-3'>
                  <h3 className='text-white font-bold text-base md:text-lg drop-shadow-lg'>
                    Register Your Projects for{" "}
                    <span className='text-[#48d0ff] font-extrabold text-lg md:text-xl bg-gradient-to-r from-[#48d0ff] to-[#22b8cf] bg-clip-text text-transparent animate-pulse'>
                      LOCUS 2026
                    </span>
                  </h3>
                  <span className='text-[#48d0ff]/50 text-xl'>|</span>
                  <p className='text-gray-300 text-sm font-semibold flex items-center gap-1.5'>
                    <Trophy className='w-4 h-4 text-yellow-400 animate-pulse' />
                    <span className='text-yellow-400'>Win Cash Prizes!</span>
                  </p>
                </div>
              </div>

              {/* Right section - Buttons */}
              <div className='flex items-center gap-3'>
                <button
                  onClick={handleDetailsClick}
                  className='group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-semibold text-sm
                           bg-white/10 text-white border-2 border-white/30 
                           hover:bg-white/20 hover:border-[#48d0ff]/50 hover:text-[#48d0ff]
                           transition-all duration-200 ease-out
                           shadow-lg hover:shadow-[#48d0ff]/30'
                >
                  <Info className='w-4 h-4 transition-transform group-hover:scale-110' />
                  <span>Details</span>
                </button>

                <button
                  onClick={handleRegisterClick}
                  className='group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm
                           bg-gradient-to-r from-[#48d0ff] via-[#22b8cf] to-[#48d0ff] text-black
                           bg-size-200 animate-gradient
                           hover:from-[#5dd8ff] hover:via-[#2fc9e0] hover:to-[#5dd8ff]
                           transition-all duration-200 ease-out
                           shadow-xl shadow-[#48d0ff]/50
                           hover:shadow-2xl hover:shadow-[#48d0ff]/70
                           hover:scale-105 active:scale-100
                           border-2 border-[#48d0ff]/50
                           relative overflow-hidden'
                >
                  <span className='relative z-10'>Register Now</span>
                  <ExternalLink className='w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />

                  {/* Button shine effect */}
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700' />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom edge intense glow */}
          <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#48d0ff]/80 to-transparent' />
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}
