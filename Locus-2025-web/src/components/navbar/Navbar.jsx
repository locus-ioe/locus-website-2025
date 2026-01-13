import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuRef = useRef(null);

  // Hardcoded event count - update this manually as needed
  const openEventsCount = 3;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  return (
    <header className='fixed top-0 left-0 right-0 w-full px-4 py-3 text-primary z-[100] bg-transparent'>
      <div className='flex w-full h-14 sm:h-16 md:h-18 lg:h-20 items-center justify-between rounded-full border border-zinc-800/50 bg-zinc-900/90 px-4 sm:px-6 md:px-8 backdrop-blur-md transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-2 z-[110] flex-shrink-0'
        >
          <div className='h-10 sm:h-12 md:h-14 lg:h-16 w-auto relative'>
            <img
              src='/assets/logodark.png'
              alt='Locus 2026 Logo'
              className='h-full w-auto object-contain drop-shadow-[0_0_8px_rgba(72,208,255,0.3)]'
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex items-center gap-0.5 z-[110] flex-1 justify-end'>
          {[
            ["Home", "/"],
            ["About", "/about-us"],
            ["Events", "/events"],
            ["Zerone", "/zerone"],
            ["Sponsors", "/sponsors"],
            ["Blogs", "/blogs"],
            ["Contact", "/contact-us"],
            ["Teams", "/teams"],
            ["Past LOCUS", "/past-locus"],
          ].map(([label, to]) => (
            <Link
              key={label}
              to={to}
              className='px-2.5 py-2 text-xs xl:text-sm font-medium text-zinc-300 hover:text-[#00abe6] transition-all rounded-lg hover:bg-zinc-800/40 relative whitespace-nowrap'
            >
              {label}
              {label === "Events" && openEventsCount > 0 && (
                <span className='absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-gradient-to-r from-[#00abe6] to-[#0088cc] rounded-full shadow-lg animate-pulse'>
                  {openEventsCount}
                </span>
              )}
            </Link>
          ))}
          <a
            href='https://cit-worldlink.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='px-2.5 py-2 text-xs xl:text-sm font-medium text-zinc-300 hover:text-[#00abe6] transition-all rounded-lg hover:bg-zinc-800/40 whitespace-nowrap flex items-center gap-1'
          >
            CIT-MAP
            <span className='text-[10px]'>↗</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className='lg:hidden z-[110] p-2 rounded-lg transition-colors'
          aria-label='Toggle menu'
        >
          {isMobileOpen ? <FiX size={20} className="sm:w-6 sm:h-6" /> : <FiMenu size={20} className="sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black/70 backdrop-blur-sm z-[105] lg:hidden animate-fadeIn'
            onClick={() => setIsMobileOpen(false)}
          ></div>

          {/* Mobile Menu */}
          <div className='fixed top-[4.5rem] sm:top-[5.5rem] right-4 left-4 bg-zinc-900/98 border border-zinc-800 rounded-2xl shadow-2xl z-[106] lg:hidden max-h-[calc(100vh-6rem)] sm:max-h-[calc(100vh-7rem)] overflow-y-auto animate-slideDown backdrop-blur-xl'>
            <nav className='flex flex-col p-4'>
              {[
                ["Home", "/"],
                ["About", "/about-us"],
                ["Events", "/events"],
                ["Zerone", "/zerone"],
                ["Sponsors", "/sponsors"],
                ["Blogs", "/blogs"],
                ["Contact Us", "/contact-us"],
              ].map(([label, to]) => (
                <Link
                  key={label}
                  to={to}
                  className='px-4 py-3 text-base font-medium text-primary rounded-lg transition-all active:scale-95 relative flex items-center justify-between'
                  onClick={() => setIsMobileOpen(false)}
                >
                  <span>{label}</span>
                  {label === "Events" && openEventsCount > 0 && (
                    <span className='flex items-center justify-center min-w-[24px] h-6 px-2 text-sm font-bold text-white bg-[#00abe6] rounded-full shadow-lg'>
                      {openEventsCount}
                    </span>
                  )}
                </Link>
              ))}

              <div className='h-px bg-zinc-800 my-2'></div>

              <Link
                to='/teams'
                className='px-4 py-3 text-base font-medium text-primary rounded-lg transition-all active:scale-95'
                onClick={() => setIsMobileOpen(false)}
              >
                Teams
              </Link>
              <Link
                to='/past-locus'
                className='px-4 py-3 text-base font-medium text-primary rounded-lg transition-all active:scale-95'
                onClick={() => setIsMobileOpen(false)}
              >
                Past LOCUS
              </Link>
              <a
                href='https://cit-worldlink.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-3 text-base font-medium text-primary rounded-lg transition-all active:scale-95 flex items-center justify-between'
                onClick={() => setIsMobileOpen(false)}
              >
                CIT-MAP
                <span className='text-[#00abe6]'>↗</span>
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
