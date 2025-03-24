import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="container mx-auto max-w-2xl py-10 px-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Kontakt</h1>
      <p className="text-gray-600 text-center mb-6">
        Hör gärna av dig via e-post eller sociala medier!
      </p>

      {/* Kontaktformulär (Client Component) */}
      <ContactForm />

      {/* Sociala länkar */}
      <div className="mt-8 text-center">
        <p className="text-gray-600">Eller hitta mig på:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://github.com/RasmusKrogh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rasmus-krogh-andersen-7b4a421b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
