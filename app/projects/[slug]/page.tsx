import { supabase } from "@/lib/supabase";
import Image from "next/image";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data: project, error } = await supabase
    .from("Projects")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (error) {
    console.error("Error fetching project:", error.message);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl">Project not found</h1>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl mb-8">{project.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.images.map((image: string, index: number) => (
            <div key={index} className="relative aspect-video">
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
