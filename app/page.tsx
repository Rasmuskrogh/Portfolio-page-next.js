import ContactForm from "@/components/ContactForm";
import ProjectArrowWrapper from "@/components/projects/ProjectArrowWrapper";
import TechStack from "@/components/TechStack";
// import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default async function Home() {
  return (
    <main className="w-full">
      <ProjectArrowWrapper />
      {/* Hero Section */}
      <section
        className="h-[18rem] flex flex-col items-start justify-start bg-[#323131] text-white relative"
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
      <About />

      {/* Working Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <Education />

      {/* Tech Stack Section */}
      <TechStack />

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
