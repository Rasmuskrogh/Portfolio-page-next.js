"use client";

import { useTranslations } from "next-intl";
import { supabase } from "@/lib/supabase";
import ProjectCard from "@/components/projects/ProjectCard";
import { Project } from "@/types";
import { useEffect, useState } from "react";

function Projects() {
  const t = useTranslations("Projects");
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("Projects")
        .select(
          "id, title, description, link, priority, image_url, technologies"
        )
        .returns<Project[]>();

      if (error) {
        console.error("Error fetching projects:", error.message);
        setError(error.message);
        return;
      }

      setProjects(data || []);
    };

    fetchProjects();
  }, []);

  if (error) {
    return <p>{t("error")}</p>;
  }

  return (
    <section
      id="projects"
      className="py-12 md:py-20 bg-[#323131] text-white"
      data-color="dark"
    >
      <div className="px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-open-sans mb-6 md:mb-8 font-bold">
          {t("title")}
        </h2>

        {/* Priority 1 Project */}
        <div className="mb-12">
          {projects
            .filter((project) => project.priority === 1)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>

        {/* Priority 2 Projects */}
        <div className="grid gap-8 sm:grid-cols-2 mb-12">
          {projects
            .filter((project) => project.priority === 2)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>

        {/* Priority 3 Projects */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => project.priority === 3)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
