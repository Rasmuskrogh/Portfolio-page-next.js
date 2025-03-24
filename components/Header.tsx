"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Ikoner för hamburgermeny
import Link from "next/link";
import NavLinks from "@/components/NavLinks"; // Importera den nya NavLinks-komponenten

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Endast ett state för att styra menyns öppning/stängning

  // Funktion för att växla mellan öppning och stängning
  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Växla mellan true/false
  };

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
          onClick={toggleMenu}
          className="md:hidden text-gray-900"
          aria-label="Öppna meny"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all ease-in-out duration-500 ${
          isOpen ? " max-h-[136px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Header;
