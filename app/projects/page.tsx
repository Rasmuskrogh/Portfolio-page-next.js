import Link from "next/link";

const projects = [
  {
    title: "Have You Scene It?",
    description: "En filmapplikation där användare kan betygsätta filmer.",
    link: "https://havyousceneit.netlify.app/",
    slug: "have-you-scene-it",
  },
  {
    title: "Cocktail Wiki",
    description:
      "En interaktiv webbapp där du kan utforska och lära dig om olika cocktails, deras ingredienser och hur de tillagas.",
    link: "https://earnest-sunflower-1acf67.netlify.app/",
    slug: "cocktail-wiki",
  },
  {
    title: "Ashley Perl",
    description: "En personlig portfoliosida byggd för en klient.",
    link: "https://ashleyperl.com/",
    slug: "ashley-perl",
  },
];

export default function ProjectsPage() {
  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">Mina projekt</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Här är några av de projekt jag har jobbat på. Klicka på ett projekt för
        att läsa mer eller besöka det live.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.slug}
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
