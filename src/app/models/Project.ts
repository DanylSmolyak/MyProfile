export interface Project {
  id: number;
  title: string;
  fullDescription: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl: string;
  demoUrl?: string;
}
