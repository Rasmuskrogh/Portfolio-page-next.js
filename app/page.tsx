import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-5xl font-extrabold text-gray-900">{t("title")} 👋</h1>
      <p className="mt-4 text-lg text-gray-600">{t("short")}</p>
      <div className="mt-6 flex space-x-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
        >
          {t("projectsButton")}
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border border-gray-600 text-gray-900 rounded-md hover:bg-gray-200"
        >
          {t("contactButton")}
        </a>
      </div>
    </section>
  );
}
