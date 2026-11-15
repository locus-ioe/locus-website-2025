import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const primaryLinks = [["Home", "/"], ["About", "/about-us"], ["Events", "/events"], ["Sponsors", "/sponsors"], ["Contact", "/contact-us"]];

  useEffect(() => {
    const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) setIsMenuOpen(false); };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileOpen]);

  const menuItems = <>{primaryLinks.map(([label, to]) => <Link key={label} to={to} className='px-4 py-3 text-base font-medium text-primary rounded-lg transition-all active:scale-95 hover:bg-[#8d2b8f]/15 hover:text-[#f0bbf3] relative flex items-center justify-between' onClick={() => setIsMobileOpen(false)}><span>{label}</span></Link>)}<div className='h-px bg-[#8d2b8f]/20 my-1'></div><Link to='/zerone' className='px-4 py-3 text-base font-medium text-primary rounded-lg transition-all active:scale-95 hover:bg-[#8d2b8f]/15 hover:text-[#f0bbf3]' onClick={() => setIsMobileOpen(false)}>Zerone</Link><Link to='/blogs' className='px-4 py-3 text-base font-medium text-primary rounded-lg transition-all active:scale-95 hover:bg-[#8d2b8f]/15 hover:text-[#f0bbf3]' onClick={() => setIsMobileOpen(false)}>Blogs</Link><Link to='/teams' className='px-4 py-3 text-base font-medium text-primary rounded-lg transition-all active:scale-95 hover:bg-[#8d2b8f]/15 hover:text-[#f0bbf3]' onClick={() => setIsMobileOpen(false)}>Teams</Link><Link to='/past-locus' className='px-4 py-3 text-base font-medium text-primary rounded-lg transition-all active:scale-95 hover:bg-[#8d2b8f]/15 hover:text-[#f0bbf3]' onClick={() => setIsMobileOpen(false)}>Past LOCUS</Link><a href='https://cit-worldlink.netlify.app/' target='_blank' rel='noopener noreferrer' className='px-4 py-3 text-base font-medium text-primary rounded-lg transition-all active:scale-95 hover:bg-[#8d2b8f]/15 hover:text-[#f0bbf3] flex items-center justify-between' onClick={() => setIsMobileOpen(false)}>CIT-MAP <span className='text-[#df7fe6]'>↗</span></a></>;

  return (
    <header className='fixed top-0 left-0 right-0 w-full px-4 py-3 text-primary z-[100] bg-transparent'>
      <div className='mx-auto flex max-w-7xl h-16 sm:h-[4.5rem] md:h-20 lg:h-24 items-center justify-between rounded-full border border-[#8d2b8f]/30 bg-[#0d0515]/95 px-3 sm:px-4 md:px-6 backdrop-blur-xl transition-all duration-300 shadow-[0_12px_38px_rgba(45,10,46,0.45)]'>
        <Link to='/' className='flex items-center gap-2 z-[110]'><div className='relative inline-block h-14 sm:h-16 md:h-[4.5rem] lg:h-[5.5rem]'><img src='/assets/navbar_2.png' alt='Locus 2027 Logo' className='block h-full w-auto object-contain' /><span aria-hidden='true' className='absolute left-[23%] top-1/4 h-[56%] w-[2%] rounded-full bg-[#0d0515]' /></div></Link>
        <nav className='hidden lg:flex items-center gap-1 z-[110]'>
          {primaryLinks.map(([label, to]) => <Link key={label} to={to} className='px-3 py-2 text-sm font-medium text-primary/90 transition-colors rounded-lg relative hover:bg-[#8d2b8f]/15 hover:text-[#f0bbf3]'>{label}</Link>)}
          <div className='relative' ref={menuRef}><button onClick={() => setIsMenuOpen(!isMenuOpen)} className='flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary/90 transition-colors rounded-lg hover:bg-[#8d2b8f]/15 hover:text-[#f0bbf3]'>More <FiChevronDown className={`transition-transform ${isMenuOpen ? "rotate-180" : ""}`} /></button>{isMenuOpen && <div className='absolute right-0 mt-2 w-48 bg-[#13071d]/98 border border-[#8d2b8f]/30 rounded-lg shadow-[0_18px_40px_rgba(20,3,26,0.55)] z-[120] overflow-hidden backdrop-blur-xl'><Link to='/zerone' className='block px-4 py-3 text-sm text-primary transition-colors hover:bg-[#8d2b8f]/15 hover:text-[#f0bbf3]' onClick={() => setIsMenuOpen(false)}>Zerone</Link><Link to='/blogs' className='block px-4 py-3 text-sm text-primary transition-colors hover:bg-[#8d2b8f]/15 hover:text-[#f0bbf3]' onClick={() => setIsMenuOpen(false)}>Blogs</Link><div className='h-px bg-[#8d2b8f]/20 my-1'></div><Link to='/teams' className='block px-4 py-3 text-sm text-primary transition-colors hover:bg-[#8d2b8f]/15 hover:text-[#f0bbf3]' onClick={() => setIsMenuOpen(false)}>Teams</Link><Link to='/past-locus' className='block px-4 py-3 text-sm text-primary transition-colors hover:bg-[#8d2b8f]/15 hover:text-[#f0bbf3]' onClick={() => setIsMenuOpen(false)}>Past LOCUS</Link><a href='https://cit-worldlink.netlify.app/' target='_blank' rel='noopener noreferrer' className='block px-4 py-3 text-sm text-primary transition-colors hover:bg-[#8d2b8f]/15 hover:text-[#f0bbf3]' onClick={() => setIsMenuOpen(false)}>CIT-MAP</a></div>}</div>
        </nav>
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className='lg:hidden z-[110] p-2 rounded-lg transition-colors hover:bg-[#8d2b8f]/15 hover:text-[#f0bbf3]' aria-label='Toggle menu'>{isMobileOpen ? <FiX size={20} className="sm:w-6 sm:h-6" /> : <FiMenu size={20} className="sm:w-6 sm:h-6" />}</button>
      </div>
      {isMobileOpen && <><div className='fixed inset-0 bg-[#08020c]/80 backdrop-blur-sm z-[105] lg:hidden animate-fadeIn' onClick={() => setIsMobileOpen(false)}></div><div className='fixed top-[5.5rem] sm:top-[6rem] right-4 left-4 bg-[#13071d]/98 border border-[#8d2b8f]/30 rounded-2xl shadow-[0_22px_50px_rgba(20,3,26,0.65)] z-[106] lg:hidden max-h-[calc(100vh-7rem)] sm:max-h-[calc(100vh-7.5rem)] overflow-y-auto animate-slideDown backdrop-blur-xl'><nav className='flex flex-col p-2'>{menuItems}</nav></div></>}
    </header>
  );
}
