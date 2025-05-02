"use client";

import { useEffect, useState } from "react";
import ProjectsArrow from "./ProjectsArrow";

export default function ProjectArrowWrapper() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentColor, setCurrentColor] = useState<"white" | "black">("white");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);

      // Om vi är toppscrollade, använd alltid vit färg
      if (!scrolled) {
        setCurrentColor("white");
        return;
      }

      // Beräkna triangeln's position baserat på scroll och transform
      // const arrowPosition = window.scrollY + window.innerHeight - 5 * 16; // 5rem i pixlar

      // Get all sections and their colors
      const allSections = document.querySelectorAll("section");
      const sections: { color: "white" | "black"; end: number }[] = [];

      allSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const start = rect.top + window.scrollY;
        const end = start + rect.height;
        const color = (
          section.getAttribute("data-color") === "dark" ? "white" : "black"
        ) as "white" | "black";
        sections.push({ color, end });
      });

      // Find which section the arrow is in
      let newColor: "white" | "black" = "white";
      for (const section of sections) {
        if (280 <= section.end) {
          // Changed to use fixed position
          newColor = section.color;
          break;
        }
      }

      setCurrentColor(newColor);
    };

    window.addEventListener("scroll", handleScroll);
    // Kör direkt för att sätta initiala värden
    requestAnimationFrame(handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <ProjectsArrow color={currentColor} isScrolled={isScrolled} />;
}
