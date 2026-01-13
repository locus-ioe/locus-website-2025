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
      <div className='mx-auto flex max-w-7xl h-14 sm:h-16 md:h-18 lg:h-20 items-center justify-between rounded-full border border-zinc-800 bg-zinc-900/95 px-3 sm:px-4 md:px-6 backdrop-blur-sm transition-all duration-300 shadow-lg'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-2 z-[110] group'
        >
          <div className='h-10 sm:h-12 md:h-14 lg:h-16 w-auto relative'>
            <img
              src='/assets/logodark.png'
              alt='Locus 2026 Logo'
              className='h-full w-auto object-contain transition-all duration-300 group-hover:scale-105 lg:group-hover:scale-110 group-hover:brightness-110 drop-shadow-[0_0_6px_rgba(72,208,255,0.2)] sm:drop-shadow-[0_0_8px_rgba(72,208,255,0.3)] group-hover:drop-shadow-[0_0_10px_rgba(72,208,255,0.4)] lg:group-hover:drop-shadow-[0_0_12px_rgba(72,208,255,0.5)]'
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex items-center gap-1 z-[110]'>
          {[
            ["Home", "/"],
            ["About", "/about-us"],
            ["Events", "/events"],
            ["Zerone", "/zerone"],
            ["Sponsors", "/sponsors"],
          ].map(([label, to]) => (
            <Link
              key={label}
              to={to}
              className='px-3 py-2 text-sm font-medium text-primary transition-colors hover:text-[#00abe6] rounded-lg hover:bg-zinc-800/50 relative'
            >
              {label}
              {label === "Events" && openEventsCount > 0 && (
                <span className='absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-bold text-white bg-[#00abe6] rounded-full shadow-lg animate-pulse'>
                  {openEventsCount}
                </span>
              )}
            </Link>
          ))}

          {/* More Dropdown */}
          <div
            className='relative'
            ref={menuRef}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary transition-colors hover:text-[#00abe6] rounded-lg hover:bg-zinc-800/50'
            >
              More
              <FiChevronDown
                className={`transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isMenuOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl z-[120] overflow-hidden'>
                <Link
                  to='/blogs'
                  className='block px-4 py-3 text-sm text-primary hover:bg-zinc-800 hover:text-[#00abe6] transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  to='/contact-us'
                  className='block px-4 py-3 text-sm text-primary hover:bg-zinc-800 hover:text-[#00abe6] transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <div className='h-px bg-zinc-800 my-1'></div>
                <Link
                  to='/past-locus'
                  className='block px-4 py-3 text-sm text-primary hover:bg-zinc-800 hover:text-[#00abe6] transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Past LOCUS
                </Link>
                <a
                  href='https://cit-worldlink.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block px-4 py-3 text-sm text-primary hover:bg-zinc-800 hover:text-[#00abe6] transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  CIT-MAP
                </a>
                <Link
                  to='/teams'
                  className='block px-4 py-3 text-sm text-primary hover:bg-zinc-800 hover:text-[#00abe6] transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Teams
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className='lg:hidden z-[110] p-2 rounded-lg hover:bg-zinc-800 transition-colors'
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
                // ["Calendar", "/calendar"], Hidden for now , still under development
                ["Zerone", "/zerone"],
                ["Sponsors", "/sponsors"],
                ["Blogs", "/blogs"],
                ["Contact Us", "/contact-us"],
              ].map(([label, to]) => (
                <Link
                  key={label}
                  to={to}
                  className='px-4 py-3 text-base font-medium text-primary hover:text-[#00abe6] hover:bg-zinc-800/50 rounded-lg transition-all active:scale-95 relative flex items-center justify-between'
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
                className='px-4 py-3 text-base font-medium text-primary hover:text-[#00abe6] hover:bg-zinc-800/50 rounded-lg transition-all active:scale-95'
                onClick={() => setIsMobileOpen(false)}
              >
                Teams
              </Link>
              <Link
                to='/past-locus'
                className='px-4 py-3 text-base font-medium text-primary hover:text-[#00abe6] hover:bg-zinc-800/50 rounded-lg transition-all active:scale-95'
                onClick={() => setIsMobileOpen(false)}
              >
                Past LOCUS
              </Link>
              <a
                href='https://cit-worldlink.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-3 text-base font-medium text-primary hover:text-[#00abe6] hover:bg-zinc-800/50 rounded-lg transition-all active:scale-95 flex items-center justify-between'
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