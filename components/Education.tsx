"use client";

import Timeline from "@/components/Timeline";
import { useTranslations } from "next-intl";

function Education() {
  const t = useTranslations("Education");
  return (
    <section
      id="education"
      className="py-12 md:py-20 bg-[#fb6f4c] text-black"
      data-color="white"
    >
      <div className="px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
          {t("title")}
        </h2>
        <Timeline
          backgroundColor="orange"
          items={[
            {
              type: "education",
              title: t("lexiconTitle"),
              subtitle: "Lexicon",
              period: "2024",
              description: t.raw("lexiconDescription"),
              skills: t.raw("lexiconSkills"),
            },
            {
              type: "education",
              title: t("saltTitle"),
              subtitle: "Salt",
              period: "2023",
              description: t.raw("saltDescription"),
              skills: t.raw("saltSkills"),
            },
            {
              type: "education",
              title: t("medieTitle"),
              subtitle: "Medieinstitutet",
              period: "2020 - 2022",
              description: t.raw("medieDescription"),
              skills: t.raw("medieSkills"),
            },
            {
              type: "education",
              title: t("malmoTitle"),
              subtitle: "Malmö Music Academy",
              period: "2016 - 2019",
              description: t.raw("malmoDescription"),
              skills: t.raw("malmoSkills"),
            },
          ]}
        />
      </div>
    </section>
  );
}

export default Education;
