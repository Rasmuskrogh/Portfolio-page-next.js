"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

const NavLinks = () => {
  const t = useTranslations("Header");
  return (
    <>
      <Link href="/projects" className="hover:text-blue-600">
        {t("projectsLink")}
      </Link>
      <Link href="/about" className="hover:text-blue-600">
        {t("aboutLink")}
      </Link>
      <Link href="/contact" className="hover:text-blue-600">
        {t("contactLink")}
      </Link>
    </>
  );
};

export default NavLinks;
