import { useEffect, useState } from 'react'



function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-01-01T00:00:00')

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="flex flex-col items-center">
          <div className="bg-[#2DD4BF] w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-md flex items-center justify-center transform transition-transform hover:scale-105">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs md:text-sm mt-1 text-gray-400 uppercase tracking-wider">{key}</span>
        </div>
      ))}
    </div>
  )
}

export default function HeroSection() {
  return (
    <main className="min-h-[90svh] flex flex-col items-center justify-center pb-12">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto h-full flex flex-col items-center justify-center text-center">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-gray-200 mb-2  text-3xl tracking-widest">TIME TO GO...</h2>
          <CountdownTimer />
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

