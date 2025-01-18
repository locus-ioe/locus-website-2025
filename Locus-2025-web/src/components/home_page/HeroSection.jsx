import CountDown from '../CountDown';

export default function HeroSection() {
  return (
    <main className="min-h-[90svh] flex flex-col items-center justify-center pb-12">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto h-full flex flex-col items-center justify-center text-center">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-gray-200 mb-2  text-3xl tracking-widest">TIME TO GO...</h2>
          <CountDown to={new Date('2025-01-24T00:00:00')} />
        </div>
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <img
            src="/assets/home/small_logo.png"
            alt="Locus 2025 Logo"
            className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto transform transition-transform hover:scale-105"
          />
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-white">LOCUS </span>
              <span className="text-[#2DD4BF]">2025</span>
            </h1>
                        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-light">
              21st National Technological Festival
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

