import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // Import Menu Icon
import { Button } from "./Button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./Sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu dropdown
  const menuRef = useRef(null); // Ref for dropdown menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu if click is outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full px-4 py-3 text-primary">
      <div
        className={`mx-auto flex max-w-7xl h-20 items-center justify-around rounded-full border border-zinc-800 bg-zinc-900/95 px-4 py-2 backdrop-blur-sm transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-[80%] w-auto pt-2">
            <img src="/assets/home/locus2026_small.png" alt="Locus 2026 Logo" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 mr-4 md:flex">
          {[
            ["Home", "/"],
            ["About Us", "/about-us"],
            ["Events", "/events"],
            ["Zerone", "/zerone"],
            ["Blogs", "/blogs"],
            ["Sponsors", "/sponsors"],
            ["Contact Us", "/contact-us"],
          ].map(([label, to]) => (
            <Link
              key={label}
              to={to}
              className="text-md md:text-base lg:text-lg font-medium text-primary transition-colors hover:text-[#00abe6]/80 whitespace-nowrap"
            >
              {label}
            </Link>
          ))}

          {/* Menu Icon with Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-md md:text-base lg:text-lg font-medium text-primary transition-colors hover:text-[#00abe6]/80 whitespace-nowrap"
            >
              <FiMenu size={24} /> {/* Menu Icon */}
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-zinc-900 rounded-md shadow-lg z-10">
                <Link
                  to="/past-locus"
                  className="block px-4 py-2 text-primary hover:bg-zinc-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Past LOCUS
                </Link>
                <a
                  href="https://www.cit.locus.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-primary hover:bg-zinc-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CIT-MAP
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Navigation - Hidden on larger screens */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden lg:hidden">
              <FiMenu size={24} /> {/* Menu Icon for Mobile */}
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-64 bg-zinc-900 md:hidden lg:hidden"
          >
            <nav className="flex flex-col gap-4">
              {[
                ["Home", "/"],
                ["About Us", "/about-us"],
                ["Events", "/events"],
                ["Zerone", "/zerone"],
                ["Blogs", "/blogs"],
                ["Sponsors", "/sponsors"],
                ["Contact Us", "/contact-us"],
              ].map(([label, to]) => (
                <SheetClose asChild key={label}>
                  <Link
                    to={to}
                    className="text-lg font-medium text-primary transition-colors hover:text-[#00abe6]/80 whitespace-nowrap"
                  >
                    {label}
                  </Link>
                </SheetClose>
              ))}

              {/* Dropdown Links for Mobile */}
              <SheetClose asChild>
                <Link
                  to="/past-locus"
                  className="text-lg font-medium text-primary transition-colors hover:text-[#00abe6]/80 whitespace-nowrap"
                >
                  Past LOCUS
                </Link>
              </SheetClose>
              <a
                href="https://www.cit.locus.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-primary transition-colors hover:text-[#00abe6]/80 whitespace-nowrap"
              >
                CIT-MAP
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
