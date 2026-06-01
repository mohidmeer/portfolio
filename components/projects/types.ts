export interface ProjectImage {
  title: string;
  image: string;
}

export interface CaseStudy {
  overview: string;
  role: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  features: string[];
}

export interface Project {
  logo: string;
  title: string;
  subtitle: string;
  description: string;
  github?: string;
  images: ProjectImage[];
  stack: string[];
  caseStudy: CaseStudy;
}
