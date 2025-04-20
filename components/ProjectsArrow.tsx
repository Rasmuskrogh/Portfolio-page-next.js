"use client";

interface ProjectArrowProps {
  color: "white" | "black";
  isScrolled: boolean;
}

export default function ProjectsArrow({
  color,
  isScrolled,
}: ProjectArrowProps) {
  const handleClick = () => {
    if (window.scrollY === 0) {
      // Om vi är högst upp, scrolla till projects
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Om vi har scrollat, scrolla till toppen
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed right-0 pr-8 z-10 transition-all duration-700
        [transform:translateY(calc(50vh-10rem))]
        sm:[transform:translateY(calc(50vh-9rem))]
        md:[transform:translateY(calc(50vh-12rem))]
        lg:[transform:translateY(calc(50vh-14rem))]
        xl:[transform:translateY(calc(50vh-10rem))]
        [&.scrolled]:[transform:translateY(calc(100dvh-5.3rem))]
        sm:[&.scrolled]:[transform:translateY(calc(100dvh-5.3rem))]
        md:[&.scrolled]:[transform:translateY(calc(100dvh-5.3rem))]
        lg:[&.scrolled]:[transform:translateY(calc(100dvh-5.3rem))]
        xl:[&.scrolled]:[transform:translateY(calc(100dvh-5.3rem))]"
      style={{
        transform: isScrolled ? `translateY(calc(100dvh - 5.3rem))` : undefined,
      }}
    >
      <div
        className="flex flex-row items-center gap-2 align-center cursor-pointer hover:opacity-80 transition-opacity"
        onClick={handleClick}
      >
        <h3
          className={`text-3xl md:text-4xl lg:text-5xl self-center pb-2 font-semibold transition-opacity duration-300 text-white ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          Projects
        </h3>
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-300 md:w-10 md:h-10 lg:w-12 lg:h-12 ${
            !isScrolled ? "rotate-180" : ""
          }`}
        >
          <path
            d="M20 0L40 40H0L20 0Z"
            fill={color}
            className="transition-colors duration-300"
          />
        </svg>
      </div>
    </div>
  );
}
