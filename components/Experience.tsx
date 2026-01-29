"use client";

import Timeline from "@/components/Timeline";
import { useTranslations } from "next-intl";

function Experience() {
  const t = useTranslations("Experience");
  return (
    <section
      id="experience"
      className="py-12 md:py-20 bg-white text-black"
      data-color="white"
    >
      <div className="px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
          {t("title")}
        </h2>
        <Timeline
          backgroundColor="white"
          items={[
            {
              type: "work",
              title: t("freelanceTitle"),
              subtitle: t("freelancePeriod"),
              period: t("freelancePeriod"),
              description: t.raw("freelanceDescription"),
              skills: t.raw("freelanceSkills"),
            },
            {
              type: "work",
              title: t("aimxTitle"),
              subtitle: "AIMX",
              period: t("aimxPeriod"),
              description: t.raw("aimxDescription"),
              skills: t.raw("aimxSkills"),
            },
            {
              type: "work",
              title: t("adssetsTitle"),
              subtitle: "Adssets",
              period: t("adssetsPeriod"),
              description: t.raw("adssetsDescription"),
              skills: t.raw("adssetsSkills"),
            },
            {
              type: "work",
              title: t("nordicWebTeamTitle"),
              subtitle: "Nordic Web Team",
              period: t("nordicWebTeamPeriod"),
              description: t.raw("nordicWebTeamDescription"),
              skills: t.raw("nordicWebTeamSkills"),
            },
          ]}
        />
      </div>
    </section>
  );
}

export default Experience;
