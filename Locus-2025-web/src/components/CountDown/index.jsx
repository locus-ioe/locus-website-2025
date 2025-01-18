import { useEffect, useState } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import resolveConfig from 'tailwindcss/resolveConfig';  // to resolve the screen breakpoints in tailwind config
import tailwindConfig from '../../../tailwind.config.js'  

// returns the screen size
function useScreenSize() {
    const fullConfig=resolveConfig(tailwindConfig)    // resolve the tailwind config
    const breakPoints=fullConfig.theme.screens

    const breakPointValues = Object.keys(breakPoints).reduce((acc, key) =>{
        acc[key]=parseInt(breakPoints[key].replace("px",""), 10);
        return acc;
    }, {})

    const determineScreenSize = (width) => {
        if (width>breakPointValues.md) return 'lg';
        if (width>breakPointValues.sm) return 'md';
        if (width>480) return 'sm';
        return 'xs';
    }
    const [screen, setScreen] = useState(determineScreenSize(window.innerWidth))

    const handleResize = () =>{
        const currentSize=window.innerWidth
        setScreen(determineScreenSize(currentSize))
        
    } 
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

  return screen;
}

export default function CountDown({ to }) {
  const screenSize=useScreenSize()
  useEffect(() =>{console.log(screenSize)}, [screenSize])
  
  const sizeBasedStyling = {
    'xs': {
        labelStyle: {
            fontSize: 14,
            fontWeight: 800,
            textTransform: "uppercase",
            fontFamily: "Arial, san-serif",
            color: "hsl(var(--primary))"
        },
        digitBlockStyle: {
            width:  30,
            height: 50,
            fontSize: 20,
            color: "hsl(var(--primary))",
        },
        separatorStyle: {
            color: "hsl(var(--primary))",
            size: 3
        }
    },

    'sm': {
        labelStyle: {
            fontSize: 14,
            fontWeight: 800,
            textTransform: "uppercase",
            fontFamily: "Arial, san-serif",
            color: "hsl(var(--primary))"
        },
        digitBlockStyle: {
            width: 40,
            height: 50,
            fontSize: 24,
            color: "hsl(var(--primary))",
        },
        separatorStyle: {
            color: "hsl(var(--primary))",
            size: 3
        }
    },
    'md': {
        labelStyle: {
            fontSize: 14,
            fontWeight: 800,
            textTransform: "uppercase",
            fontFamily: "Arial, san-serif",
            color: "hsl(var(--primary))"
        },
        digitBlockStyle: {
            width: 60,
            height: 80,
            fontSize: 45,
            color: "hsl(var(--primary))",
        },
        separatorStyle: {
            color: "hsl(var(--primary))",
            size: 4
        }
    },
    'lg': {
        labelStyle: {
            fontSize: 14,
            fontWeight: 800,
            textTransform: "uppercase",
            fontFamily: "Arial, san-serif",
            color: "hsl(var(--primary))"
        },
        digitBlockStyle: {
            width: 80,
            height: 100,
            fontSize: 50,
            color: "hsl(var(--primary))",
        },
        separatorStyle: {
            color: "hsl(var(--primary))",
            size: 6
        }
    }


  }
  return (
    <FlipClockCountdown
      to={to}
      labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
      dividerStyle={{color: '#3b3b3b', size: '1px'}}
      className='m-auto'
      duration={0.7}
      hideOnComplete={false}
      {...sizeBasedStyling[screenSize]}
    >Its here</FlipClockCountdown>
  );
}
