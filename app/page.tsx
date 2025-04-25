//import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import ProjectArrowWrapper from "@/components/ProjectArrowWrapper";
// import Link from "next/link";
import { supabase } from "@/lib/supabase";
import ProjectCard from "@/components/ProjectCard";
import TechStackLink from "@/components/TechStackLink";
import TechStack from "@/components/TechStack";

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  priority: number;
  image_url: string;
}

//import { useTranslation } from "react-i18next";

export default async function Home() {
  /* const t = useTranslations("Home"); */
  const { data: projects, error } = await supabase
    .from("Projects")
    .select("*")
    .returns<Project[]>();

  if (error) {
    console.error("Error fetching projects:", error.message);
    return <p>Det gick inte att ladda projekten.</p>;
  }

  return (
    <main className="w-full">
      <ProjectArrowWrapper />
      {/* Hero Section */}
      <section
        className="h-[40vh] flex flex-col items-start justify-start bg-[#323131] text-white relative"
        data-color="dark"
      >
        <div className="pl-4 pt-4 md:pl-8 lg:pl-16 pr-4 md:pr-8 lg:pr-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-league-spartan mb-2 pr-[6rem] md:mb-4 font-bold">
            <span className="inline-block">Rasmus</span>{" "}
            <span className="inline-block">Krogh-Andersen</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-lato tracking-wider">
            <span className="inline-block">FRONTEND DEVELOPER</span> |{" "}
            <span className="inline-block">WEB DEVELOPER</span>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 md:py-20 bg-[#fb6f4c] text-black"
        data-color="white"
      >
        <div className="px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row md:flex-row items-start gap-8">
            {/* Textdelen */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
                About me
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-open-sans">
                Hi! I&apos;m a former classical singer turned web developer. My
                expertise lies in frontend, especially TypeScript, React and
                Next.js, However, my <TechStackLink /> extends beyond those
                frameworks. My favourite part of coding is figuring out
                effective solutions to a big problems and then seeing my
                creation come to life. Others have described me as: adaptable,
                analytical, level headed, passionate and quick to learn.{" "}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-open-sans pt-4">
                Please reach out if you would like to chat code (or jobs!).
              </p>

              <span className="flex gap-10 pt-2 justify-center italic underline">
                <a
                  href="https://github.com/rasmuskrogh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/rasmus-krogh-andersen-7b4a421b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
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

      {/* Working Experience Section */}
      <section
        id="experience"
        className="py-12 md:py-20 bg-white text-black"
        data-color="white"
      >
        <div className="px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
            Work Experience
          </h2>
          <div className="mb-6 md:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Frontend Developer (internship)
            </h3>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold italic">
              AIMX | October 2024 - January 2025
            </h4>
            <ul className="text-lg sm:text-xl md:text-2xl list-disc pl-4 md:pl-6">
              <li>Built a workload function in Flutter</li>
              <li>
                Created a scheduled function that fetches Base64-encoded data
                from an API once a day
              </li>
              <li>
                Decoded data to Float32 format and converted it to CSV files
              </li>
              <li>Implemented database integration for data storage</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Frontend Developer
            </h3>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold italic">
              Adssets | May 2022 - January 2023
            </h4>
            <ul className="text-lg sm:text-xl md:text-2xl list-disc pl-4 md:pl-6">
              <li>
                Created and updated banners using HTML, CSS, and JavaScript
              </li>
              <li>Managed database entries using MySQL Workbench</li>
              <li>Conducted code reviews for colleagues merge requests</li>
              <li>Prepared and delivered presentations for clients</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Web Developer (internship)
            </h3>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold italic">
              Nordic Web Team | September 2021 - May 2022
            </h4>
            <ul className="text-lg sm:text-xl md:text-2xl list-disc pl-4 md:pl-6">
              <li>
                Set up and developed headless frontends:
                <ul className="list-disc pl-6">
                  <li>PWA Studio and React.js with Magento 2 as the backend</li>
                  <li>
                    Vue.js and Nuxt.js with Storyblok or Shopware as the backend
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-12 md:py-20 bg-[#323131] text-white"
        data-color="dark"
      >
        <div className="px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
            Projects
          </h2>

          {/* Priority 1 Project */}
          <div className="mb-12">
            {projects
              ?.filter((project) => project.priority === 1)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>

          {/* Priority 2 Projects */}
          <div className="grid gap-8 sm:grid-cols-2 mb-12">
            {projects
              ?.filter((project) => project.priority === 2)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>

          {/* Priority 3 Projects */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              ?.filter((project) => project.priority === 3)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-12 md:py-20 bg-[#fb6f4c] text-black"
        data-color="white"
      >
        <div className="px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
            Education
          </h2>
          <div className="mb-6 md:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Lexicon
            </h3>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold italic">
              IT-Professional - Continuing IT Education | 2024
            </h4>
            <ul className="text-lg sm:text-xl md:text-2xl list-disc pl-4 md:pl-6">
              <li>
                Learned and applied HTML5, CSS, JavaScript, and React with
                TypeScript
              </li>
              <li>
                Completed both individual and group projects based on Figma
                designs or predefined requirements
              </li>
              <li>
                Built responsive user interfaces from scratch, with focus on
                component-based architecture
              </li>
              <li>
                Integrated REST APIs and worked with local storage for data
                handling
              </li>
              <li>
                Practiced agile methodologies including daily standups,
                retrospectives, and sprint planning
              </li>
              <li>
                Managed tasks using Trello and GitHub Projects, following a
                structured backlog and to-do workflow
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Fullstack Bootcamp, Salt
            </h3>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold italic">
              Fullstack Javascript Developer | 2023
            </h4>
            <ul className="text-lg sm:text-xl md:text-2xl list-disc pl-4 md:pl-6">
              <li>
                Mob programming with focus on:
                <ul className="list-disc pl-6">
                  <li>DOM manipulation</li>
                  <li>Node.js and REST APIs</li>
                  <li>Regular expressions</li>
                  <li>Validation with Zod and Joi</li>
                  <li>TypeScript</li>
                  <li>Test-driven development (TDD) using Jest and Cypress</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Medieinstitutet
            </h3>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold italic">
              E-commerce Web Development | 2020-2022
            </h4>
            <ul className="text-lg sm:text-xl md:text-2xl list-disc pl-4 md:pl-6">
              <li>
                Trained in HTML, CSS, JavaScript, MySQL, PHP, React, and
                WordPress with WooCommerce
              </li>
              <li>Worked with agile methodologies</li>
              <li>
                Integrated third-party services such as Firebase, Strapi, and
                Stripe
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Malmö Music Academy
            </h3>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold italic">
              Musician, classical, vocals | 2016-2019
            </h4>
            <ul className="text-lg sm:text-xl md:text-2xl list-disc pl-4 md:pl-6">
              <li>Bachelor&apos;s degree in classical music (baritone)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="techstack"
        className="py-12 md:py-20 bg-white text-black"
        data-color="white"
      >
        <TechStack />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 md:py-20 bg-[#323131] text-white"
        data-color="dark"
      >
        <div className="px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
            Contact
          </h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
