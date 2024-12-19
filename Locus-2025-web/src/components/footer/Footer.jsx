import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Button } from "../navbar/Button"

export function Footer() {
  return (
    <footer className="relative mt-20 text-primary bg-zinc-900">

      {/* Content */}
      <div className="relative bg-zinc/10 px-4 pb-8">
       
        {/* Footer Content */}
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:mt-20 sm:grid-cols-3 ">
          {/* Left Section */}
          <div className="text-center my-auto sm:text-left">
            <Button variant="outline" className="rounded-full bg-primary text-black border-primary px-6 py-2 text-sm  hover:bg-primary hover:text-[#003329] sm:px-8 sm:py-3 sm:text-base" style={{ fontFamily: "'Arial', sans-serif" }}>
              Brochure
            </Button>
            <div className="mt-4">
              <h3 className="text-lg font-semibold sm:text-xl" style={{ fontFamily: "'Arial', sans-serif" }}>IOE PULCHOWK</h3>
              <p className="mt-1 text-xs  sm:text-sm" style={{ fontFamily: "'Helvetica', sans-serif" }}>Pulchowk, Lalitpur</p>
              <p className="text-xs  sm:text-sm" style={{ fontFamily: "'Helvetica', sans-serif" }}>Nepal</p>
            </div>
          </div>

          {/* Center Section */}
          
         <img
                src="/assets/home/footerlogo.png"
                alt="Locus 2025 Logo"
                className="h-25 w-auto mx-auto"
              />
         
          {/* Right Section */}
          <div className="text-center my-auto sm:text-right">
            <h3 className="text-lg font-semibold  sm:text-xl" style={{ fontFamily: "'Arial', sans-serif" }}>CONTACT US</h3>
            <p className="mt-1 text-xs  sm:text-sm" style={{ fontFamily: "'Helvetica', sans-serif" }}>locus@ioe.edu.np</p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold sm:text-xl" style={{ fontFamily: "'Arial', sans-serif" }}>FOLLOW US</h4>
              <div className="mt-2 flex justify-center gap-4 sm:justify-end">
                <Link to="#" className="">
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link to="#" className="">
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link to="#" className="">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mx-auto mt-12 max-w-7xl text-primary text-center text-xs sm:mt-16 sm:text-sm" style={{ fontFamily: "'Helvetica', sans-serif" }}>
          <p className="flex items-center text-bold justify-center gap-1 ">
            MADE WITH <span className="text-red-500">❤</span> BY LOST
          </p>
          <p className="mt-1 ">©COPYRIGHT 2024, PULCHOWK ENGINEERING CAMPUS</p>
        </div>
      </div>
    </footer>
  )
}

