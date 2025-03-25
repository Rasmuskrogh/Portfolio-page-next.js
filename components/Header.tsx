"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Ikoner för hamburgermeny
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  // Ta bort onLanguageToggle här
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Rasmus.dev
        </Link>

        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <LanguageSwitcher />
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
