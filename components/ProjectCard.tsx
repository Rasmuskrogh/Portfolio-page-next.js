"use client";

import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  priority: number;
  image_url: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Logga projektinformationen
    console.log("Project:", project);

    // Ta bort eventuell site-images/ från början av image_url och lägg till .png
    const cleanImageUrl =
      project.image_url?.replace(/^site-images\//, "") + ".png";
    console.log("Clean image URL:", cleanImageUrl);

    // Använd Supabase's getPublicUrl funktion med den rensade URL:en
    const imageUrl = cleanImageUrl
      ? supabase.storage.from("site-images").getPublicUrl(cleanImageUrl).data
          .publicUrl
      : null;
    console.log("Final image URL:", imageUrl);
  }, [project]);

  const getCardStyles = () => {
    switch (project.priority) {
      case 1:
        return {
          container: "w-full",
          title: "text-2xl md:text-3xl lg:text-4xl",
          padding: "p-8",
          button: "px-6 py-3",
          imageContainer: "w-full aspect-[16/9]",
          buttonMargin: "mt-2",
        };
      case 2:
        return {
          container: "w-full",
          title: "text-xl md:text-2xl",
          padding: "p-6",
          button: "px-4 py-2",
          imageContainer: "w-full aspect-[16/9]",
          buttonMargin: "mt-2",
        };
      case 3:
        return {
          container: "w-full",
          title: "text-xl",
          padding: "p-6",
          button: "px-4 py-2",
          imageContainer: "w-full aspect-[16/9]",
          buttonMargin: "mt-2",
        };
      default:
        return {
          container: "w-full md:w-1/2 lg:w-1/3",
          title: "text-xl",
          padding: "p-6",
          button: "px-4 py-2",
          imageContainer: "w-full aspect-[16/9]",
          buttonMargin: "mt-2",
        };
    }
  };

  const styles = getCardStyles();

  // Ta bort eventuell site-images/ från början av image_url och lägg till .png
  const cleanImageUrl =
    project.image_url?.replace(/^site-images\//, "") + ".png";

  // Använd Supabase's getPublicUrl funktion med den rensade URL:en
  const imageUrl = cleanImageUrl
    ? supabase.storage.from("site-images").getPublicUrl(cleanImageUrl).data
        .publicUrl
    : null;

  return (
    <div
      className={`group bg-white/10 rounded-lg shadow-lg overflow-hidden border border-gray-200/20 transition-transform transform hover:scale-[1.02] hover:shadow-xl flex flex-col w-full ${styles.container}`}
    >
      <div className={`flex flex-col w-full ${styles.padding}`}>
        <h2 className={`font-semibold text-white mb-2 ${styles.title}`}>
          {project.title}
        </h2>
        <div className="flex flex-col w-full">
          <div
            className={`relative overflow-hidden rounded-lg bg-white/5 w-full ${styles.imageContainer}`}
          >
            {imageUrl && !imageError ? (
              <div className="absolute inset-0 w-full">
                <Image
                  src={imageUrl}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    console.error("Image load error:", e);
                    setImageError(true);
                  }}
                  priority={project.priority === 1}
                  loading={project.priority === 1 ? "eager" : "lazy"}
                  unoptimized
                />
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                {imageError ? "Image unavailable" : "Image coming soon"}
              </div>
            )}
          </div>
        </div>
        <div
          className={`${styles.buttonMargin} flex gap-4 p-6 bg-white/5 w-full`}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full text-center border font-semibold border-[#fb6f4c] bg-[#fb6f4c] text-black rounded-md hover:bg-[#fb6f4c]/80 transition ${styles.button}`}
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
