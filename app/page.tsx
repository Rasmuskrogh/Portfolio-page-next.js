import Contact from "@/components/Contact";
import ProjectArrowWrapper from "@/components/projects/ProjectArrowWrapper";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Hero from "@/components/Hero";

export default async function Home() {
  return (
    <main className="w-full">
      <ProjectArrowWrapper />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <TechStack />
      <Contact />
    </main>
  );
}
