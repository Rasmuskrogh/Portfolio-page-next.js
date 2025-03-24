export default function AboutPage() {
  return (
    <section className="container mx-auto max-w-2xl py-10 px-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Om mig</h1>
      <p className="text-gray-600 text-center mb-6">
        Jag är en passionerad frontendutvecklare med erfarenhet av moderna
        webbutvecklingsteknologier. Här kan du läsa mer om min bakgrund, mina
        erfarenheter och vad som driver mig som utvecklare.
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold">Bakgrund</h2>
          <p className="text-gray-600">
            Jag har en utbildning i webbutveckling från Medieinstitutet och har
            nyligen genomfört en intensiv frontendutvecklingskurs med Lexicon.
            Min passion för teknik började tidigt, och jag älskar att skapa
            lösningar som gör skillnad för användare.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Erfarenheter</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Frontendutvecklare på Adssets (2022)</li>
            <li>Utbildning i webbutveckling från Medieinstitutet (2 år)</li>
            <li>
              Frontendutveckling med React och TypeScript i Lexicon (2024)
            </li>
            <li>
              Erfarenhet av olika CMS-plattformar som Storyblok, Shopware och
              Magento 2
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Färdigheter</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>React & TypeScript</li>
            <li>JavaScript, HTML, CSS</li>
            <li>Vue.js, Nuxt.js</li>
            <li>MySQL, PostgreSQL</li>
            <li>Versionering med Git</li>
            <li>Erfarenhet av Node.js och Tailwind</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Mina mål</h2>
          <p className="text-gray-600">
            Jag strävar efter att bli en expert inom React och TypeScript och
            ser fram emot att bygga skalbara och användarvänliga lösningar. Jag
            vill även fortsätta utvecklas inom Node.js och moderna
            frontend-ramverk.
          </p>
        </section>
      </div>
    </section>
  );
}
