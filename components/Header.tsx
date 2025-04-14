"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Ikoner för hamburgermeny
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsOpening(true);
      setIsMenuOpen(true);
      setTimeout(() => {
        setIsOpening(false);
      }, 300);
    } else {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300);
    }
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
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
      {(isMenuOpen || isClosing) && (
        <div
          className={`fixed inset-0 bg-black/90 backdrop-blur-sm transition-all duration-300 ${
            isClosing ? "opacity-0" : isOpening ? "opacity-0" : "opacity-100"
          }`}
          onClick={closeMenu}
        >
          <div
            className="absolute inset-0 flex flex-col items-center justify-center space-y-8 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Close menu"
            >
              <FiX size={28} />
            </button>
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
