export type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  priority: number; // 1 = featured, 2 = secondary, 3 = tertiary
};
