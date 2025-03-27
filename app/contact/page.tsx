import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <section className="container mx-auto max-w-2xl py-10 px-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">{t("title")}</h1>
      <p className="text-gray-600 text-center mb-6">{t("short")}</p>
      <ContactForm />
      <div className="mt-8 text-center">
        <p className="text-gray-600">{t("linksHeader")}</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://github.com/RasmusKrogh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rasmus-krogh-andersen-7b4a421b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
