"use client";

import { useTranslations } from "next-intl";
import TechStackLink from "./TechStackLink";

const AboutSection = () => {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-[#fb6f4c] text-black"
      data-color="white"
    >
      <div className="px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
          {t("title")}
        </h2>
        <div className="flex flex-col lg:flex-row md:flex-row items-start gap-8">
          <div>
            <p className="text-lg sm:text-xl md:text-2xl font-open-sans">
              {t.rich("description", {
                techStackLink: (chunks) => (
                  <TechStackLink>{chunks}</TechStackLink>
                ),
              })}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-open-sans pt-4">
              {t("connect")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
