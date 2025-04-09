"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

const NavLinks = () => {
  const t = useTranslations("Header");
  return (
    <>
      <Link
        href="/projects"
        className="text-white text-2xl hover:text-gray-300 transition-colors"
      >
        {t("projectsLink")}
      </Link>
      <Link
        href="/about"
        className="text-white text-2xl hover:text-gray-300 transition-colors"
      >
        {t("aboutLink")}
      </Link>
      <Link
        href="/contact"
        className="text-white text-2xl hover:text-gray-300 transition-colors"
      >
        {t("contactLink")}
      </Link>
    </>
  );
};

export default NavLinks;
