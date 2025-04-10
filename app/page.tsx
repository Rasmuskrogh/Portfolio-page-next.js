import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="h-[40vh] flex flex-col items-start justify-start bg-[#323131] text-white relative">
        <div className="pl-4 pt-4 md:pl-4 pr-28">
          <h1 className="text-6xl md:text-7xl font-league-spartan mb-4">
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
          <h2 className="text-4xl md:text-5xl font-open-sans mb-8">About me</h2>
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
          <h2 className="text-4xl md:text-5xl font-open-sans mb-8">
            Working Experience
          </h2>
        </div>
      </section>
      {/* Projects Section */}
      <section className="py-20 bg-[#323131] text-white">
        <div className="pl-8 md:pl-16 pr-8 md:pr-16">
          <h2 className="text-4xl md:text-5xl font-open-sans mb-8">Projects</h2>
        </div>
      </section>
      {/* Education Section */}
      <section className="py-20 bg-[#fb6f4c] text-black">
        <div className="pl-8 md:pl-16 pr-8 md:pr-16">
          <h2 className="text-4xl md:text-5xl font-open-sans mb-8">
            Education
          </h2>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-20 bg-white text-black">
        <div className="pl-8 md:pl-16 pr-8 md:pr-16">
          <h2 className="text-4xl md:text-5xl font-open-sans mb-8">Skills</h2>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-[#323131] text-white">
        <div className="pl-8 md:pl-16 pr-8 md:pr-16">
          <h2 className="text-4xl md:text-5xl font-open-sans mb-8">Contact</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
