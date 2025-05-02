import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("Hero");
  return (
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
          <span className="inline-block">{t("frontend")}</span> |{" "}
          <span className="inline-block">{t("web")}</span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
