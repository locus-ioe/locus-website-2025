import React from "react";
import { Mail, MapPin, Facebook, Instagram, Twitter, ExternalLink } from "lucide-react";
import mountain from "../assets/pngwing 4.svg";
import footerlogo from "../assets/home/footer_logo_2026.png";

function Footer() {
  const handleJoinDiscord = () => {
    window.open("https://discord.gg/qWwVPgJJdM", "_blank");
  };

  const yearlatest = new Date().getFullYear();

  return (
    <footer className='relative bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden'>
      <div className='absolute inset-0 opacity-5'>
        <img src={mountain} alt='' className='w-full h-full object-cover' />
      </div>
      
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,171,230,0.1)_0%,_transparent_50%)]'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00abe6] to-white bg-clip-text text-transparent'>
            Join The Locus Community
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto mb-8 text-base leading-relaxed'>
            Be part of Nepal's largest tech community and connect with innovators, creators, and tech enthusiasts.
          </p>
          <button
            onClick={handleJoinDiscord}
            className='group inline-flex items-center gap-2 px-8 py-4 bg-[#5865F2] text-white font-semibold rounded-xl hover:bg-[#4752C4] transition-all duration-300 shadow-[0_0_30px_rgba(88,101,242,0.3)] hover:shadow-[0_0_40px_rgba(88,101,242,0.5)] hover:scale-105'
          >
            Join Us on Discord
            <ExternalLink className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
          </button>
        </div>

        <div className='h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12'></div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          <div className='text-center md:text-left space-y-4'>
            <a href='#' className='inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#00abe6] text-[#00abe6] rounded-lg hover:bg-[#00abe6] hover:text-black transition-all duration-300 font-semibold'>
              Download Brochure
              <ExternalLink className='w-4 h-4' />
            </a>
            <div className='pt-4'>
              <h3 className='text-2xl font-bold text-[#00abe6] mb-3'>IOE Pulchowk</h3>
              <div className='flex items-start justify-center md:justify-start gap-3 text-gray-300'>
                <MapPin className='w-5 h-5 flex-shrink-0 mt-1 text-[#00abe6]' />
                <div className='text-sm'>
                  <p className='font-medium'>Pulchowk, Lalitpur</p>
                  <p>Nepal</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center'>
            <div className='relative group'>
              <div className='absolute inset-0 bg-[#00abe6] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity'></div>
              <img src={footerlogo} alt='LOCUS 2026 Logo' className='relative h-36 md:h-44 w-auto drop-shadow-[0_0_20px_rgba(0,171,230,0.3)]' />
            </div>
          </div>

          <div className='text-center md:text-right space-y-8'>
            <div>
              <h3 className='text-2xl font-bold text-[#00abe6] mb-3'>Contact Us</h3>
              <div className='flex items-center justify-center md:justify-end gap-2 text-gray-300'>
                <Mail className='w-5 h-5 text-[#00abe6]' />
                <a href='mailto:locus@ioe.edu.np' className='hover:text-[#00abe6] transition-colors text-sm font-medium'>
                  locus@ioe.edu.np
                </a>
              </div>
            </div>
            <div>
              <h3 className='text-2xl font-bold text-[#00abe6] mb-4'>Follow Us</h3>
              <div className='flex gap-4 justify-center md:justify-end'>
                <a href='#' className='w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-[#00abe6] hover:border-[#00abe6] hover:scale-110 transition-all duration-300 group'>
                  <Instagram className='w-5 h-5 group-hover:scale-110 transition-transform' />
                </a>
                <a href='#' className='w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-[#00abe6] hover:border-[#00abe6] hover:scale-110 transition-all duration-300 group'>
                  <Facebook className='w-5 h-5 group-hover:scale-110 transition-transform' />
                </a>
                <a href='#' className='w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-[#00abe6] hover:border-[#00abe6] hover:scale-110 transition-all duration-300 group'>
                  <Twitter className='w-5 h-5 group-hover:scale-110 transition-transform' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8'></div>

        <div className='text-center text-gray-500 text-sm space-y-3'>
          <p className='flex items-center justify-center gap-2'>
            Made with <span className='text-red-500 animate-pulse'>❤️</span> by <span className='text-[#00abe6] font-semibold'>LOST</span>
          </p>
          <p>©Copyright {yearlatest}, Pulchowk Engineering Campus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
