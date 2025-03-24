"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Ikoner för hamburgermeny

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Rasmus.dev
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <NavLinks />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900"
          aria-label="Öppna meny"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (syns bara när isOpen är true) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

// Återanvändbara navigationslänkar
const NavLinks = () => (
  <>
    <Link href="/projects" className="hover:text-blue-600">
      Projekt
    </Link>
    <Link href="/about" className="hover:text-blue-600">
      Om mig
    </Link>
    <Link href="/contact" className="hover:text-blue-600">
      Kontakt
    </Link>
  </>
);

export default Header;
