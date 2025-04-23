"use client";

import { useEffect, useState } from "react";
import ProjectsArrow from "./ProjectsArrow";

export default function ProjectArrowWrapper() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentColor, setCurrentColor] = useState<"white" | "black">("white");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      // Invertera scroll-logiken - peka uppåt när man scrollar ner
      setIsScrolled(scrolled);

      // Beräkna triangeln's position baserat på scroll och transform
      const arrowPosition = scrolled
        ? window.scrollY + window.innerHeight - 5 * 16 // 5rem i pixlar
        : window.scrollY + 280; // 280px från toppen

      // Get all sections and their colors
      const allSections = document.querySelectorAll("section");
      const sections: { color: "white" | "black"; end: number }[] = [];

      let currentEnd = 0;
      allSections.forEach((section) => {
        const height = section.getBoundingClientRect().height;
        currentEnd += height;
        // Get the color from data-color attribute, default to "white" if not set
        const color = (
          section.getAttribute("data-color") === "dark" ? "white" : "black"
        ) as "white" | "black";
        sections.push({ color, end: currentEnd });
      });

      // Find which section the arrow is in
      let newColor: "white" | "black" = "white";
      for (const section of sections) {
        if (arrowPosition <= section.end) {
          newColor = section.color;
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

  return <ProjectsArrow color={currentColor} isScrolled={isScrolled} />;
}
