export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  priority: number;
  image_url: string;
  technologies: string[];
}

export interface ProjectCardProps {
  project: Project;
}

export interface ProjectArrowProps {
  color: "white" | "black";
  isScrolled: boolean;
}

export interface NavLinksProps {
  onClose?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  target?: string;
  rel?: string;
}

export interface EmailData {
  name: string;
  email: string;
  message: string;
}
