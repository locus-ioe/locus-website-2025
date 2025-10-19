import { useState, useEffect } from 'react'
import { MdOutlineEventAvailable } from "react-icons/md"
import Card from './Card'
import Badge from './Badge'

const EventsTimeline = ({ title, items }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const getMonthColor = (month) => {
    switch (month) {
      case 'Asoj':
        return 'from-blue-500 to-indigo-600'
      case 'Kartik':
        return 'from-cyan-500 to-blue-600'
      case 'Mangsir':
        return 'from-purple-500 to-pink-600'
      case 'Poush':
        return 'from-orange-500 to-red-600'
      case 'Magh':
        return 'from-green-500 to-emerald-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getMonthBorderColor = (month) => {
    switch (month) {
      case 'Asoj':
        return 'border-blue-500'
      case 'Kartik':
        return 'border-cyan-500'
      case 'Mangsir':
        return 'border-purple-500'
      case 'Poush':
        return 'border-orange-500'
      case 'Magh':
        return 'border-green-500'
      default:
        return 'border-gray-500'
    }
  }

  return (
    <div className="relative w-full">
      {/* Header */}
      <div className="flex justify-center mb-12">
        <div className={`
          px-6 py-3 rounded-xl border-2 border-gray-700
          bg-gradient-to-r from-indigo-500 to-purple-600
          text-white font-bold text-sm md:text-base
          hover:scale-105 transition-all duration-300
          shadow-lg hover:shadow-xl
          flex items-center gap-3 z-10 relative
        `}>
          <MdOutlineEventAvailable className="w-5 h-5" />
          {title}
        </div>
      </div>

      {/* Tree Structure */}
      <div className="relative">
        {/* Main Trunk - Vertical Line */}
        <div
          className={`
            absolute w-1 bg-gradient-to-b from-indigo-500 to-purple-600 z-0
            ${isMobile ? 'left-6' : 'left-1/2 transform -translate-x-1/2'}
          `}
          style={{
            height: isMobile ? `${items.length * 14.2}rem` : `${items.length * 10.8}rem`,
            top: '0px'
          }}
        />

        {/* Tree Items Container */}
        <div className="relative z-10">
          {items.map((item, index) => {
            const Icon = item.icon
            const monthColor = getMonthColor(item.month)
            const borderColor = getMonthBorderColor(item.month)

            return (
              <div
                key={`${item.month}-${index}`}
                className={`relative ${isMobile ? 'mb-16' : 'mb-8'}`}
                style={{
                  marginTop: index === 0 ? '20px' : '0px',
                  height: isMobile ? '10.5rem' : '9rem'
                }}
              >
                {/* Branch Line - Horizontal */}
                <div
                  className={`
                    absolute h-0.5 z-0
                    bg-gradient-to-r ${monthColor}
                    ${isMobile
                      ? 'left-6 top-8'
                      : `${index % 2 === 0 ? 'left-1/2' : 'right-1/2'} top-8`
                    }
                  `}
                  style={{
                    width: isMobile ? '40px' : 'clamp(48px, 5vw, 80px)'
                  }}
                />

                {/* Node Circle */}
                <div
                  className={`
                    absolute w-4 h-4 rounded-full z-10
                    bg-gradient-to-r ${monthColor}
                    shadow-lg border-2 border-gray-900
                    hover:scale-150 transition-transform duration-200
                    ${isMobile
                      ? 'left-6 -ml-2 top-6'
                      : `${index % 2 === 0 ? 'left-1/2 -ml-2' : 'right-1/2 -mr-2'} top-6`
                    }
                  `}
                />

                {/* Tree Item Card */}
                <div className={`
                  absolute top-0 w-full
                  ${isMobile
                    ? 'left-16 max-w-[calc(100%-5rem)]'
                    : `max-w-sm ${index % 2 === 0
                      ? 'left-1/2 ml-12 md:ml-18'
                      : 'right-1/2 mr-12 md:mr-18'
                    }`
                  }
                `}>
                  <Card
                    variant="default"
                    size="md"
                    interactive={true}
                    hoverEffect="lift"
                    className={`
                      relative group   
                      ${isMobile
                        ? `${borderColor} border-l-4`
                        : `${index % 2 !== 0
                          ? `${borderColor} border-r-4`
                          : `${borderColor} border-l-4`
                        }`
                      }
                      hover:border-green-500
                    `}
                  >
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2">
                            {Icon && <Icon className="w-5 h-5 text-blue-400" />}
                            <h3 className="text-sm md:text-lg font-semibold text-white">
                              {item.event}
                            </h3>
                          </div>
                          <p className="text-xs md:text-base text-gray-400 font-medium">
                            {item.month}
                          </p>
                        </div>
                        <Badge className="self-start shrink-0">
                          {item.date}
                        </Badge>
                      </div>
                      <p className="text-xs md:text-base text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EventsTimeline