export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Paper {
  title: string;
  publication: string;
  year: string;
  authors: string;
  abstract?: string;
  link?: string;
}

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  link?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  about: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  papers: Paper[];
  blog: BlogPost[];
  social: {
    linkedin: string;
    github?: string;
    email?: string;
  };
}