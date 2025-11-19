
export enum Language {
  EN = 'EN',
  CN = 'CN',
}

export interface Project {
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  pdfPath?: string; // Optional - only projects with PDFs have this
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string[]; // Short version for card
  fullDetails: string; // Long version for modal
}

export interface SkillItem {
  name: string;
  level: string;
  description: string; // Detailed description
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Volunteer {
  role: string;
  organization: string;
  period: string;
  description: string;
  link?: string;
}

export interface Content {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    volunteer: string;
    schoolActivity: string;
    resume: string;
  };
  hero: {
    name: string;
    title: string;
    subtitle: string;
    intro: string;
    cta: string;
    contactInfo: string;
  };
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  volunteer: Volunteer[];
  schoolActivity: Volunteer[];
  resumePath: string;
}

export interface DataStore {
  [Language.EN]: Content;
  [Language.CN]: Content;
}
