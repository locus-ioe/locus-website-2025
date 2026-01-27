import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "../navbar/Button";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/locus_ioe/",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/locus.ioe",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/locusioe/",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='relative mt-20 border-t border-white/5 bg-black/40 backdrop-blur-xl text-zinc-400 overflow-hidden'>
      {/* Home page matching background effects */}
      <div className='absolute inset-0 -z-10 pointer-events-none'>
        <div className='absolute -top-24 -left-24 w-96 h-96 bg-[#48d0ff]/5 rounded-full blur-[100px] animate-pulse' />
        <div
          className='absolute -bottom-24 -right-24 w-96 h-96 bg-[#2a9fd6]/5 rounded-full blur-[100px] animate-pulse'
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className='relative px-4 py-16 sm:py-24'>
        {/* Footer Content */}
        <div className='mx-auto grid max-w-7xl gap-12 px-4 sm:grid-cols-3 items-center'>
          {/* Left Section - Prospectus, Discord & Location */}
          <div className='flex flex-col items-center sm:items-start space-y-6'>
            <Link
              to='https://drive.google.com/file/d/1iuojrPjMg9csqBPB95S8DtCOksBIJjX4/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='px-8 py-3 bg-[#48d0ff]/10 text-[#48d0ff] border border-[#48d0ff]/30 rounded-lg font-semibold text-sm uppercase tracking-wider transition-colors hover:bg-[#48d0ff]/20'>
                Prospectus
              </button>
            </Link>

            <Link
              to='https://discord.gg/locus'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='px-8 py-3 bg-[#48d0ff]/10 text-[#48d0ff] border border-[#48d0ff]/30 rounded-lg font-semibold text-sm uppercase tracking-wider transition-colors hover:bg-[#48d0ff]/20'>
                Join Discord
              </button>
            </Link>

            <div className='text-center sm:text-left space-y-3'>
              <h3 className='text-lg font-bold sm:text-xl font-arial tracking-[0.1em] text-white'>
                IOE PULCHOWK
              </h3>
              <div className='space-y-1 font-helvetica text-sm sm:text-base opacity-60'>
                <p>Pulchowk, Lalitpur</p>
                <p>Nepal</p>
              </div>
            </div>
          </div>

          {/* Center Section - Logo */}
          <div className='flex justify-center items-center group'>
            <img
              src='/assets/home/footer_logo_2026.png'
              alt='LOCUS 2026 Logo'
              className='h-36 w-auto object-contain transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110 drop-shadow-[0_0_15px_rgba(72,208,255,0.2)]'
            />
          </div>

          {/* Right Section - Contact & Follow Us */}
          <div className='flex flex-col items-center sm:items-end space-y-12'>
            <div className='text-center sm:text-right'>
              <h3 className='text-lg font-bold sm:text-xl font-arial tracking-[0.1em] text-white'>
                CONTACT US
              </h3>
              <a
                href='mailto:locus@ioe.edu.np'
                className='mt-3 text-sm sm:text-base flex items-center justify-center sm:justify-end gap-3 hover:text-[#48d0ff] transition-colors duration-500 font-helvetica'
              >
                <Mail className='h-5 w-5' />
                <span className='tracking-wide'>locus@ioe.edu.np</span>
              </a>
            </div>

            <div className='text-center sm:text-right'>
              <h3 className='text-lg font-bold sm:text-xl font-arial tracking-[0.1em] text-[#48d0ff]'>
                FOLLOW US
              </h3>
              <div className='mt-5 flex justify-center gap-5 sm:justify-end'>
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      to={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3.5 rounded-full bg-zinc-900/50 border border-white/5 text-zinc-400 transition-all duration-500 hover:text-[#48d0ff] hover:border-[#48d0ff]/40 hover:bg-[#48d0ff]/5 hover:-translate-y-1.5'
                      title={social.name}
                    >
                      <Icon className='h-5 w-5' />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mx-auto mt-24 max-w-7xl border-t border-white/5 pt-12 font-helvetica flex flex-col sm:flex-row justify-between items-center gap-4 px-4'>
          <p className='flex items-center justify-center sm:justify-start gap-3 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-zinc-500'>
            MADE WITH{" "}
            <span className='text-red-500 animate-pulse text-base sm:text-lg'>
              ❤
            </span>{" "}
            BY LOST
          </p>
          <p className='text-[10px] sm:text-xs uppercase tracking-[0.3em] opacity-30 text-center sm:text-right'>
            ©COPYRIGHT {year}, PULCHOWK ENGINEERING CAMPUS
          </p>
        </div>
      </div>
    </footer>
  );
}
