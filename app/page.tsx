// import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";
// import { useTranslation } from "react-i18next";

export default function Home() {
  // const t = useTranslations("Home");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[40vh] flex flex-col items-start justify-start bg-[#323131] text-white relative">
        <div className="pl-4 pt-4 md:pl-8 lg:pl-16 pr-20 md:pr-24 lg:pr-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pr-8 font-league-spartan mb-2 md:mb-4 font-bold">
            <span className="inline-block">Rasmus</span>{" "}
            <span className="inline-block">Krogh-Andersen</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-lato tracking-wider">
            <span className="inline-block">FRONTEND DEVELOPER</span> |{" "}
            <span className="inline-block">WEB DEVELOPER</span>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-[#fb6f4c] text-black">
        <div className="px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
            About me
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-open-sans max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
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
              <li>
                Set up and developed headless frontends:
                <ul className="list-disc pl-6">
                  <li>WordPress with WooCommerce</li>
                  <li>Shopify</li>
                  <li>Magento</li>
                </ul>
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
              Web Developer (internship)
            </h3>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold italic">
              Nordic Web Team | September 2021 - May 2022
            </h4>
            <ul className="text-lg sm:text-xl md:text-2xl list-disc pl-4 md:pl-6">
              <li>
                Set up and developed headless frontends:
                <ul className="list-disc pl-6">
                  <li>WordPress with WooCommerce</li>
                  <li>Shopify</li>
                  <li>Magento</li>
                </ul>
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
                </ul>
              </li>
              <li>Validation with Zod and Joi</li>
              <li>TypeScript</li>
              <li>Test-driven development (TDD) using Jest and Cypress</li>
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

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Kontakt</h3>
              <p className="text-sm md:text-base">
                <a
                  href="mailto:johanna@johannasjoberg.se"
                  className="hover:text-blue-400 transition"
                >
                  johanna@johannasjoberg.se
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">
                Sociala Medier
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/johannasjoberg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base hover:text-blue-400 transition"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/johanna-sjoberg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base hover:text-blue-400 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">
                © 2024 Johanna Sjöberg
              </h3>
              <p className="text-xs md:text-sm text-gray-400">
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
