import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <section className="container mx-auto max-w-2xl py-10 px-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">{t("title")}</h1>
      <p className="text-gray-600 text-center mb-6">{t("description")}</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">{t("backgroundHeader")}</h2>
          <p className="text-gray-600">{t("background")}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">{t("experienceHeader")}</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>{t("experience.1")}</li>
            <li>{t("experience.2")}</li>
            <li>{t("experience.3")}</li>
            <li>{t("experience.4")}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">{t("skillsHeader")}</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>{t("skills.1")}</li>
            <li>{t("skills.2")}</li>
            <li>{t("skills.3")}</li>
            <li>{t("skills.4")}</li>
            <li>{t("skills.5")}</li>
            <li>{t("skills.6")}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">{t("goalsHeader")}</h2>
          <p className="text-gray-600">{t("goals")}</p>
        </section>
      </div>
    </section>
  );
}
