"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Ikoner för hamburgermeny
import NavLinks from "@/components/layout/NavLinks";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[rgba(0,0,0,0.8)] backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <div>
          <h1
            className={`text-white text-xl sm:text-2xl md:text-3xl font-bold transition-all duration-300 whitespace-nowrap ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            Rasmus Krogh-Andersen
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <button
            onClick={toggleMenu}
            className="text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.8)] backdrop-blur-sm z-[100]"
          onClick={closeMenu}
        >
          <div className="fixed inset-0 flex flex-col items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeMenu();
              }}
              className="fixed top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close menu"
            >
              <FiX size={28} />
            </button>
            <div
              className="flex flex-col items-center space-y-8"
              onClick={(e) => e.stopPropagation()}
            >
              <NavLinks onClose={closeMenu} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
