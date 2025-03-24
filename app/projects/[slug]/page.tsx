interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <section className="container mx-auto py-10">
      <h1 className="text-4xl font-bold">Projekt: {params.slug}</h1>
      <p className="mt-4 text-gray-600">
        Detaljerad information om projektet "{params.slug}".
      </p>
    </section>
  );
}
