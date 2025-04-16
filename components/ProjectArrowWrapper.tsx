"use client";

import { useEffect, useState } from "react";
import ProjectsArrow from "./ProjectsArrow";

export default function ProjectArrowWrapper() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentColor, setCurrentColor] = useState<"white" | "black">("white");

  useEffect(() => {
    const handleScroll = () => {
      // Invertera scroll-logiken - peka uppåt när man scrollar ner
      setIsScrolled(window.scrollY > 0);

      // Hämta viewportens höjd
      //const viewportHeight = window.innerHeight;

      // Triangeln är fixed 280px från toppen
      const arrowTopOffset = 280;

      // Beräkna var triangeln befinner sig på sidan
      const arrowPosition = window.scrollY + arrowTopOffset;

      // Definiera färgerna och deras gränser
      const sections = [
        { color: "white", end: 0 }, // Hero
        { color: "black", end: 0 }, // About
        { color: "black", end: 0 }, // Working Experience
        { color: "white", end: 0 }, // Projects
        { color: "black", end: 0 }, // Education
        { color: "black", end: 0 }, // Skills
        { color: "white", end: 0 }, // Contact
      ];

      // Beräkna var varje sektion slutar
      const allSections = document.querySelectorAll("section");
      let currentEnd = 0;

      allSections.forEach((section, index) => {
        currentEnd += section.getBoundingClientRect().height;
        sections[index].end = currentEnd;
      });

      // Hitta vilken sektion triangeln befinner sig i
      let newColor: "white" | "black" = "white";
      for (let i = 0; i < sections.length; i++) {
        if (arrowPosition <= sections[i].end) {
          newColor = sections[i].color as "white" | "black";
          break;
        }
      }

      setCurrentColor(newColor);
    };

    window.addEventListener("scroll", handleScroll);
    // Kör direkt för att sätta initiala värden
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-[280px] right-8 z-50 project-arrow">
      <ProjectsArrow
        direction={isScrolled ? "down" : "up"}
        color={currentColor}
      />
    </div>
  );
}
