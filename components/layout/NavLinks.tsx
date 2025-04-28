"use client";
import { useTranslations } from "next-intl";

import { NavLinksProps } from "@/types";

const NavLinks = ({ onClose }: NavLinksProps) => {
  const t = useTranslations("Header");
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
        {t("aboutLink")}
      </button>
      <button
        onClick={() => handleScroll("experience")}
        className="text-white hover:text-gray-300 transition-colors text-xl"
      >
        {t("workLink")}
      </button>
      <button
        onClick={() => handleScroll("projects")}
        className="text-white hover:text-gray-300 transition-colors text-xl"
      >
        {t("projectsLink")}
      </button>
      <button
        onClick={() => handleScroll("education")}
        className="text-white hover:text-gray-300 transition-colors text-xl"
      >
        {t("educationLink")}
      </button>
      <button
        onClick={() => handleScroll("techstack")}
        className="text-white hover:text-gray-300 transition-colors text-xl"
      >
        {t("techStackLink")}
      </button>
      <button
        onClick={() => handleScroll("contact")}
        className="text-white hover:text-gray-300 transition-colors text-xl"
      >
        {t("contactLink")}
      </button>
    </div>
  );
};

export default NavLinks;
