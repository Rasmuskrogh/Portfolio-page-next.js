//import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import ProjectArrowWrapper from "@/components/projects/ProjectArrowWrapper";
// import Link from "next/link";
import { supabase } from "@/lib/supabase";
import ProjectCard from "@/components/projects/ProjectCard";
import TechStackLink from "@/components/TechStackLink";
import TechStack from "@/components/TechStack";
import { Project } from "@/types";
import Button from "@/components/ui/Button";
import Timeline from "@/components/Timeline";

//import { useTranslation } from "react-i18next";

export default async function Home() {
  /* const t = useTranslations("Home"); */
  const { data: projects, error } = await supabase
    .from("Projects")
    .select("id, title, description, link, priority, image_url, technologies")
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
          <Timeline
            backgroundColor="white"
            items={[
              {
                type: "work",
                title: "Frontend Developer (internship)",
                subtitle: "AIMX",
                period: "October 2024 - January 2025",
                description: [
                  "Built a workload function in Flutter",
                  "Created a scheduled function that fetches Base64-encoded data from an API once a day",
                  "Decoded data to Float32 format and converted it to CSV files",
                  "Implemented database integration for data storage",
                ],
                skills: [
                  "Flutter",
                  "API Integration",
                  "Data Processing",
                  "Database",
                  "React.js",
                  "TypeScript",
                ],
              },
              {
                type: "work",
                title: "Frontend Developer",
                subtitle: "Adssets",
                period: "May 2022 - January 2023",
                description: [
                  "Created and updated banners using HTML, CSS, and JavaScript",
                  "Managed database entries using MySQL Workbench",
                  "Conducted code reviews for colleagues merge requests",
                  "Prepared and delivered presentations for clients",
                ],
                skills: ["HTML", "CSS", "JavaScript", "MySQL", "Code Review"],
              },
              {
                type: "work",
                title: "Web Developer (internship)",
                subtitle: "Nordic Web Team",
                period: "September 2021 - May 2022",
                description: [
                  "Set up and developed headless frontends using PWA Studio and React.js with Magento 2 as the backend",
                  "Developed Vue.js and Nuxt.js applications with Storyblok or Shopware as the backend",
                ],
                skills: [
                  "React.js",
                  "Vue.js",
                  "Nuxt.js",
                  "Magento",
                  "Storyblok",
                  "Shopware",
                  "CSS",
                ],
              },
            ]}
          />
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
          <Timeline
            backgroundColor="orange"
            items={[
              {
                type: "education",
                title: "IT-Professional - Continuing IT Education",
                subtitle: "Lexicon",
                period: "2024",
                description: [
                  "Learned and applied HTML5, CSS, JavaScript, and React with TypeScript",
                  "Completed both individual and group projects based on Figma designs or predefined requirements",
                  "Built responsive user interfaces from scratch, with focus on component-based architecture",
                  "Integrated REST APIs and worked with local storage for data handling",
                  "Practiced agile methodologies including daily standups, retrospectives, and sprint planning",
                ],
                skills: [
                  "React",
                  "TypeScript",
                  "HTML5",
                  "CSS",
                  "JavaScript",
                  "REST APIs",
                  "Agile",
                ],
              },
              {
                type: "education",
                title: "Fullstack Bootcamp",
                subtitle: "Salt",
                period: "2023",
                description: [
                  "Mob programming with focus on DOM manipulation, Node.js and REST APIs",
                  "Worked with regular expressions and validation using Zod and Joi",
                  "Developed applications using TypeScript",
                  "Practiced test-driven development (TDD) using Jest and Cypress",
                ],
                skills: [
                  "TypeScript",
                  "Node.js",
                  "REST APIs",
                  "TDD",
                  "Jest",
                  "Cypress",
                ],
              },
              {
                type: "education",
                title: "Web Development",
                subtitle: "Medieinstitutet",
                period: "2020 - 2022",
                description: [
                  "Comprehensive education in modern web development",
                  "Hands-on experience with various web technologies and frameworks",
                  "Project-based learning with real-world applications",
                ],
                skills: [
                  "Web Development",
                  "Frontend",
                  "Backend",
                  "Project Management",
                ],
              },
              {
                type: "education",
                title: "Classical Music",
                subtitle: "Malmö Music Academy",
                period: "2016 - 2019",
                description: [
                  "Bachelor's degree in classical music (baritone)",
                  "Extensive training in vocal performance and music theory",
                  "Regular performances in various settings",
                ],
                skills: ["Vocal Performance", "Music Theory", "Stage Presence"],
              },
            ]}
          />
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
