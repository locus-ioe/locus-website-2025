import { useEffect, useState } from "react"
import { Link } from "react-router-dom" 
import { Menu } from 'lucide-react'

import { Button } from "./Button"
import { Sheet, SheetContent, SheetTrigger } from "./Sheet"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className=" w-full px-4 py-3 text-primary">
      <div
        className={`mx-auto flex max-w-7xl h-20  items-center justify-around rounded-full border border-zinc-800 bg-zinc-900/95 px-4 py-2 backdrop-blur-sm transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3"> {/* Changed href to to */}
          <div className="h-[80%] w-auto pt-2">
          <img
              src="/assets/home/logo.png"
              alt="Locus 2025 Logo"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 mr-4 md:flex">
          {[
            ["Home", "/"],
            ["About Us", "/about-us"],
            ["Events", "/events"],
            ["Past Locus", "/past-locus"],
            ["Sponsors", "/sponsors"],
            ["Contact Us", "/contact-us"],
          ].map(([label, to]) => ( 
            <Link
              key={label}
              to={to} 
              className="text-md md:text-base lg:text-lg font-medium text-primary transition-colors hover:text-[#4CD6C0]/80 whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-16 w-16 text-primary" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-zinc-900">
            <nav className="flex flex-col gap-4">
              {[
                ["Home", "/"],
                ["About Us", "/about-us"],
                ["Events", "/events"],
                ["Past Locus", "/past-locus"],
                ["Sponsors", "/sponsors"],
                ["Contact Us", "/contact-us"],
              ].map(([label, to]) => ( 
                <Link
                  key={label}
                  to={to}
                  className="text-lg font-medium text-primary transition-colors hover:text-[#4CD6C0]/80 whitespace-nowrap"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

