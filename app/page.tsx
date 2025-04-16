import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";
//import { useTranslation } from "react-i18next";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="h-[40vh] flex flex-col items-start justify-start bg-[#323131] text-white relative">
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
      <section className="py-12 md:py-20 bg-[#fb6f4c] text-black">
        <div className="px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row md:flex-row items-start gap-8">
            {/* Textdelen */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
                About me
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-open-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Bilden */}
            <div className="w-60 h-60 rounded-full overflow-hidden shrink-0 self-center">
              <img
                src="/IMG_20211016_170425_Bokeh (1).jpg"
                alt="Portrait of me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Working Experience Section */}
      <section className="py-12 md:py-20 bg-white text-black">
        <div className="px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
            Working Experience
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
              <li>Conducted code reviews for colleagues' merge requests</li>
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
      <section className="py-12 md:py-20 bg-[#323131] text-white">
        <div className="px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
            Projects
          </h2>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 md:py-20 bg-[#fb6f4c] text-black">
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
              <li>Bachelor's degree in classical music (baritone)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-20 bg-white text-black">
        <div className="px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
            Skills
          </h2>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Main skills:
            </h3>
            <ul className="text-lg sm:text-xl md:text-2xl">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Typescript</li>
              <li>PostgreSQL</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-[#323131] text-white">
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
