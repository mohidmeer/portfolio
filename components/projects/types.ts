export interface ProjectImage {
  title: string;
  image: string;
}

export interface Project {
  logo: string;
  title: string;
  subtitle: string;
  description: string;
  github: string;
  images: ProjectImage[];
  stack: string[];
}
