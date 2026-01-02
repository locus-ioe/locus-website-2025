import { ExternalLink, Info, Trophy } from 'lucide-react';

export default function ProjectRegistrationBanner() {
  const handleRegisterClick = () => {
    // Open Google Form in new tab - Replace with actual form URL
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdIWGmHp0jM6ssnBObs_O4hxWNLg0V-OQhyxyE4aq5lV3xqzg/viewform?usp=sharing&ouid=107588023255304084224', '_blank', 'noopener,noreferrer');
  };

  const handleDetailsClick = () => {
    window.open('https://docs.google.com/document/d/1lSgEUf6q5nPp_cUEg7dxEEHL0O_uEU-WHkiLtW5yJvM/edit?usp=sharing', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main banner container with smooth rounded edges */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 backdrop-blur-sm">
          
          {/* Subtle gradient background matching site theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-[#0a1525]/80 to-black/40" />
          
          {/* Soft glow accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_rgba(72,208,255,0.08)_0%,_transparent_70%)]" />
          
          {/* Top edge glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#48d0ff]/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 py-4 sm:py-5 px-4 sm:px-8">
            
            {/* ===== MOBILE LAYOUT (simplified) ===== */}
            <div className="flex flex-col items-center gap-3 sm:hidden">
              <p className="text-white text-sm font-medium text-center">
                Register Projects for <span className="text-[#48d0ff] font-bold">LOCUS 2026</span> & Win Prizes!
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDetailsClick}
                  className="px-4 py-2 rounded-xl text-sm font-medium
                           bg-white/5 text-white/90 border border-white/10 
                           hover:bg-white/10"
                >
                  Details
                </button>
                <button
                  onClick={handleRegisterClick}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold
                           bg-gradient-to-r from-[#48d0ff] to-[#22b8cf] text-black
                           shadow-lg shadow-[#48d0ff]/25"
                >
                  Register Now
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* ===== DESKTOP LAYOUT ===== */}
            <div className="hidden sm:flex items-center justify-between gap-6">
              {/* Left section - Icon and main text */}
              <div className="flex items-center gap-4">
                {/* Trophy icon with subtle glow */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-[#48d0ff] blur-xl opacity-30 rounded-full scale-150" />
                  <div className="relative bg-gradient-to-br from-[#48d0ff] to-[#0891b2] p-2.5 rounded-xl shadow-lg shadow-[#48d0ff]/20">
                    <Trophy className="w-5 h-5 text-black" />
                  </div>
                </div>

                {/* Text content */}
                <div className="flex items-center gap-3">
                  <h3 className="text-white font-semibold text-base md:text-lg">
                    Register Your Projects for{' '}
                    <span className="text-[#48d0ff] font-bold">LOCUS 2026</span>
                  </h3>
                  <span className="text-white/30">|</span>
                  <p className="text-gray-400 text-sm flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-yellow-500" />
                    <span>Win Cash Prizes!</span>
                  </p>
                </div>
              </div>

              {/* Right section - Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDetailsClick}
                  className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-medium text-sm
                           bg-white/5 text-white/90 border border-white/10 
                           hover:bg-white/10 hover:border-white/20 hover:text-white
                           transition-all duration-200 ease-out"
                >
                  <Info className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                  <span>Details</span>
                </button>

                <button
                  onClick={handleRegisterClick}
                  className="group inline-flex items-center gap-1.5 px-5 py-2 rounded-xl font-semibold text-sm
                           bg-gradient-to-r from-[#48d0ff] to-[#22b8cf] text-black
                           hover:from-[#5dd8ff] hover:to-[#2fc9e0]
                           transition-all duration-200 ease-out
                           shadow-lg shadow-[#48d0ff]/25
                           hover:shadow-xl hover:shadow-[#48d0ff]/30"
                >
                  <span>Register Now</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom edge glow */}
          <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#48d0ff]/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}
