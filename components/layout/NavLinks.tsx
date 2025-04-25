"use client";
// import { useTranslations } from "next-intl";

import { NavLinksProps } from "@/types";

const NavLinks = ({ onClose }: NavLinksProps) => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose?.();
    }
  };

  return (
    <div className="flex flex-col space-y-8">
      <button
        onClick={() => handleScroll("about")}
        className="text-white hover:text-gray-300 transition-colors text-xl"
      >
        About Me
      </button>
      <button
        onClick={() => handleScroll("experience")}
        className="text-white hover:text-gray-300 transition-colors text-xl"
      >
        Work Experience
      </button>
      <button
        onClick={() => handleScroll("projects")}
        className="text-white hover:text-gray-300 transition-colors text-xl"
      >
        Projects
      </button>
      <button
        onClick={() => handleScroll("education")}
        className="text-white hover:text-gray-300 transition-colors text-xl"
      >
        Education
      </button>
      <button
        onClick={() => handleScroll("techstack")}
        className="text-white hover:text-gray-300 transition-colors text-xl"
      >
        Tech Stack
      </button>
      <button
        onClick={() => handleScroll("contact")}
        className="text-white hover:text-gray-300 transition-colors text-xl"
      >
        Contact
      </button>
    </div>
  );
};

export default NavLinks;
