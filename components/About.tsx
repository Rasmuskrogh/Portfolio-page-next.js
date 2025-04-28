"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import TechStackLink from "./TechStackLink";
import Button from "./ui/Button";

const About = () => {
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
          {/* Textdelen */}
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

            <div className="flex gap-12 pt-4 justify-center">
              <Button
                href="https://github.com/rasmuskrogh"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
              >
                Github
              </Button>
              <Button
                href="https://www.linkedin.com/in/rasmus-krogh-andersen-7b4a421b9/"
                target="_blank"
                rel="noopener noreferrer"
                variant="dark"
              >
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Bilden */}
          <div className="w-60 h-60 rounded-full overflow-hidden shrink-0 self-center">
            <Image
              src="/IMG_20211016_170425_Bokeh (1).jpg"
              alt="Portrait of me"
              className="w-full h-full object-cover"
              width={240}
              height={240}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
