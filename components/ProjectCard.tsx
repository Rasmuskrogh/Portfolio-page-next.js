interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  priority: number;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getCardStyles = () => {
    switch (project.priority) {
      case 1:
        return {
          container: "h-[500px] md:h-[600px]",
          title: "text-2xl md:text-3xl lg:text-4xl",
          padding: "p-8",
          button: "px-6 py-3",
        };
      case 2:
        return {
          container: "h-[400px] md:h-[500px]",
          title: "text-xl md:text-2xl",
          padding: "p-6",
          button: "px-4 py-2",
        };
      case 3:
        return {
          container: "h-[350px] md:h-[400px]",
          title: "text-xl",
          padding: "p-6",
          button: "px-4 py-2",
        };
      default:
        return {
          container: "h-[350px] md:h-[400px]",
          title: "text-xl",
          padding: "p-6",
          button: "px-4 py-2",
        };
    }
  };

  const styles = getCardStyles();

  return (
    <div
      className={`group bg-white/10 rounded-lg shadow-lg overflow-hidden border border-gray-200/20 transition-transform transform hover:scale-[1.02] hover:shadow-xl flex flex-col ${styles.container}`}
    >
      <div className={`flex-1 ${styles.padding} flex flex-col`}>
        <h2 className={`font-semibold text-white mb-2 ${styles.title}`}>
          {project.title}
        </h2>
        <div className="flex-1 flex items-center justify-center bg-white/5 rounded-lg mb-4">
          {/* Placeholder for future image */}
          <div className="text-gray-400">Image coming soon</div>
        </div>
        <div className="flex gap-4 p-6 bg-white/5">
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
