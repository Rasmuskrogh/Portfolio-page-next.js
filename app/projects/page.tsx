import Link from "next/link";
import { getTranslations } from "next-intl/server"; // För server-side translation
import { supabase } from "@/lib/supabase"; // Supabase-klienten importeras här

export default async function ProjectsPage() {
  const t = await getTranslations("Projects");

  // Kontrollera om koden körs här
  console.log("Fetching projects...");

  // Hämta data från Supabase
  const { data: projects, error } = await supabase.from("Projects").select("*");

  if (error) {
    console.error("Error fetching projects:", error.message);
    return <p>Det gick inte att ladda projekten.</p>;
  }

  console.log("Projects fetched:", projects);

  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">{t("title")}</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        {t("short")}
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-[1.02] hover:shadow-xl flex flex-col"
          >
            <div className="flex-1 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
            </div>
            <div className="flex gap-4 p-6 bg-gray-100">
              <Link
                href={`/projects/${project.slug}`}
                className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Läs mer
              </Link>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
              >
                Besök
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
