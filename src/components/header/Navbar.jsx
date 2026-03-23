// components/header/Navbar.jsx
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import NavLinks from "./Navlinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = document.querySelector("header")?.offsetHeight || 0;

    if (section) {
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 10;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`w-full z-50 bg-sec fixed top-0 left-0 md:px-0 px-2  shadow-sm transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
          } ${isScrolled ? 'py-3 shadow-lg' : 'py-4 shadow-sm'}`}
      >
        <nav className="max-w-7xl  mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks onScrollTo={handleScrollTo} />
            <button className="px-6 py-2.5 border text-white font-medium text-sm rounded-full  transition-all duration-200 shadow-lg cursor-pointer hover:shadow-xl transform hover:-translate-y-0.5">
              JOIN NOW
            </button>
          </div>

         
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 px-4 py-6">
            <div className="flex flex-col space-y-4 mb-4">
              <NavLinks onScrollTo={handleScrollTo} isMobile={true} />
            </div>
            <button className="w-full px-6 py-3 border text-white text-base hover:shadow-xl transform hover:-translate-y-0.5">
              JOIN NOW
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;