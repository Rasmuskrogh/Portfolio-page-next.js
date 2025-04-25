"use client";

import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";
import { ProjectCardProps } from "@/types";

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
          title: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
          padding: "p-4 md:p-8",
          button: "px-6 py-3",
          imageContainer: "w-full aspect-[16/9]",
          buttonMargin: "mt-2",
        };
      case 2:
        return {
          container: "w-full",
          title: "text-xl md:text-2xl",
          padding: "p-4 md:p-6",
          button: "px-4 py-2",
          imageContainer: "w-full aspect-[16/9]",
          buttonMargin: "mt-2",
        };
      case 3:
        return {
          container: "w-full",
          title: "text-xl",
          padding: "p-4 md:p-6",
          button: "px-4 py-2",
          imageContainer: "w-full aspect-[16/9]",
          buttonMargin: "mt-2",
        };
      default:
        return {
          container: "w-full",
          title: "text-xl",
          padding: "p-4 md:p-6",
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
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        className={`group bg-[#474646]/80 rounded-lg shadow-lg overflow-hidden border border-gray-200/20 transition-transform transform hover:scale-[1.02] hover:shadow-xl flex flex-col w-full ${styles.container}`}
      >
        <div className={`flex flex-col w-full ${styles.padding}`}>
          <h2 className={`font-semibold text-white mb-4 ${styles.title}`}>
            {project.title}
          </h2>
          <div className="flex flex-col w-full">
            <div
              className={`relative overflow-hidden rounded-lg bg-[#474646]/60 w-full ${styles.imageContainer}`}
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
            className={`${styles.buttonMargin} flex flex-col gap-2 p-6 bg-[#474646]/60 w-full`}
          >
            <p className="text-white/80 text-sm">
              Made using the following technologies:
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="text-white/90 text-sm bg-[#666666]/40 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
