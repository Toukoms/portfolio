export type PortfolioLocale = "en" | "fr";

export interface LocalizedText {
  en: string;
  fr: string;
}

export interface ResumeContent {
  name: string;
  role: LocalizedText;
  profile: LocalizedText;
  hero: {
    subtitle: LocalizedText;
    highlights: {
      workflows: LocalizedText;
      delivery: LocalizedText;
      quality: LocalizedText;
    };
  };
  biography: {
    p1: LocalizedText;
    p2: LocalizedText;
    p3: LocalizedText;
  };
  birthday: string;
  contact: {
    phone: string;
    website: string;
    email: string;
    location: string;
    formAction: string;
    avatar: { alt: LocalizedText };
    social: {
      github: string;
      linkedin: string;
      facebook: string;
    };
  };
  education: Array<{
    institution: string;
    location: string;
    degree: string;
    start: string;
    end: string;
  }>;
  skills: Array<{
    section: "frontend" | "backend" | "tools";
    category: LocalizedText;
    items: LocalizedText[];
  }>;
  distinctions: Array<{
    name: string;
    organization: string;
    date: string;
    description: string;
  }>;
  certifications: Array<{
    name: string;
    organization: string;
    year: string;
    url: string;
  }>;
  languages: Array<{
    name: string;
    level: string;
    description: string;
  }>;
}

export interface CaseStudy {
  id: string;
  name: LocalizedText;
  type: LocalizedText;
  context: LocalizedText;
  role: LocalizedText;
  constraint: LocalizedText;
  decision: LocalizedText;
  outcome: LocalizedText;
  next: LocalizedText;
}

export interface CaseStudiesContent {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  items: CaseStudy[];
}
