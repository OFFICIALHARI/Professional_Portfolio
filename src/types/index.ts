export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  image: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}