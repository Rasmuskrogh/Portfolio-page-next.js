import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="h-[40vh] flex flex-col items-start justify-start bg-[#323131] text-white relative">
        <div className="pl-4 pt-4 md:pl-4 pr-28">
          <h1 className="text-6xl md:text-7xl font-league-spartan mb-4 font-bold">
            <span className="inline-block">Rasmus</span>{" "}
            <span className="inline-block">Krogh-Andersen</span>
          </h1>
          <p className="text-2xl md:text-3xl font-lato tracking-wider">
            <span className="inline-block">FRONTEND DEVELOPER</span> |{" "}
            <span className="inline-block">WEB DEVELOPER</span>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#fb6f4c] text-black">
        <div className="pl-8 md:pl-16 pr-8 md:pr-16">
          <h2 className="text-4xl md:text-5xl font-open-sans mb-8 font-bold">
            About me
          </h2>
          <p className="text-lg md:text-xl font-open-sans max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      {/* Working Experience Section */}
      <section className="py-20 bg-white text-black">
        <div className="pl-8 md:pl-16 pr-8 md:pr-16">
          <h2 className="text-4xl md:text-5xl font-open-sans mb-8 font-bold">
            Working Experience
          </h2>
          <div>
            <h3>Frontend Developer (internship)</h3>
            <h4>AIMX | October 2024 - January 2025</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus ex incidunt sunt rem nostrum ut eveniet nemo inventore
              laudantium explicabo?
            </p>
          </div>
          <div>
            <h3>Frontend Developer </h3>
            <h4>Adssets | May 2022 - January 2023</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus ex incidunt sunt rem nostrum ut eveniet nemo inventore
              laudantium explicabo?
            </p>
          </div>
          <div>
            <h3>Web Devleoper (internship)</h3>
            <h4>Nordic Web Team | eptember 2021 - May 2022</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus ex incidunt sunt rem nostrum ut eveniet nemo inventore
              laudantium explicabo?
            </p>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="py-20 bg-[#323131] text-white">
        <div className="pl-8 md:pl-16 pr-8 md:pr-16">
          <h2 className="text-4xl md:text-5xl font-open-sans mb-8 font-bold">
            Projects
          </h2>
        </div>
      </section>
      {/* Education Section */}
      <section className="py-20 bg-[#fb6f4c] text-black">
        <div className="pl-8 md:pl-16 pr-8 md:pr-16">
          <h2 className="text-4xl md:text-5xl font-open-sans mb-8 font-bold">
            Education
          </h2>
          <div>
            <h3>Lexicon</h3>
            <h4>IT-Professional - Continuing IT Education | 2024 -</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              expedita eius quas possimus accusamus sunt asperiores non impedit
              ipsum soluta.
            </p>
          </div>
          <div>
            <h3>Fullstack Bootcamp, Salt</h3>
            <h4>Fullstack Javascript Developer | 2023</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              amet eos eius ab nisi obcaecati ut quia commodi adipisci fugiat.
            </p>
          </div>
          <div>
            <h3>Medieinstitutet</h3>
            <h4>E-commerce Web Development | 2020 - 2022</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              nobis alias recusandae accusamus ut aspernatur nesciunt animi esse
              consectetur explicabo?
            </p>
          </div>
          <div>
            <h3>Malmö Music Accademy</h3>
            <h4>Mucisian, classical, vocals | 2016 - 2019</h4>
            <p>Bechelor's degree in classical music, baritone</p>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-20 bg-white text-black">
        <div className="pl-8 md:pl-16 pr-8 md:pr-16">
          <h2 className="text-4xl md:text-5xl font-open-sans mb-8 font-bold">
            Skills
          </h2>
          <div>
            <h3>Main skills:</h3>
            <ul>
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
      <section className="py-20 bg-[#323131] text-white">
        <div className="pl-8 md:pl-16 pr-8 md:pr-16">
          <h2 className="text-4xl md:text-5xl font-open-sans mb-8 font-bold">
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
