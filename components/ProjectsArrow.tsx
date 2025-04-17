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
      className="fixed right-0 pr-8 z-50 transition-all duration-300"
      style={{
        transform: isScrolled
          ? `translateY(calc(100vh - 5rem))`
          : "translateY(280px)",
      }}
    >
      <div
        className="flex flex-row items-center gap-2 align-center cursor-pointer hover:opacity-80 transition-opacity"
        onClick={handleClick}
      >
        <h3
          className={`text-5xl self-center pb-2 font-semibold transition-opacity duration-300 text-white ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          Projects
        </h3>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-300 ${
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
