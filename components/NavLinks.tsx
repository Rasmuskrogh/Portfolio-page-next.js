"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface NavLinksProps {
  onClose?: () => void;
}

const NavLinks = ({ onClose }: NavLinksProps) => {
  const t = useTranslations("Header");
  return (
    <>
      <Link
        href="/projects"
        className="text-white text-2xl hover:text-gray-300 transition-colors"
        onClick={onClose}
      >
        {t("projectsLink")}
      </Link>
      <Link
        href="/about"
        className="text-white text-2xl hover:text-gray-300 transition-colors"
        onClick={onClose}
      >
        {t("aboutLink")}
      </Link>
      <Link
        href="/contact"
        className="text-white text-2xl hover:text-gray-300 transition-colors"
        onClick={onClose}
      >
        {t("contactLink")}
      </Link>
    </>
  );
};

export default NavLinks;
