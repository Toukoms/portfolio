export interface ExperienceRecord {
  id: string;
  employment_type: "full_time" | "freelance" | "internship" | "other";
  title_en: string;
  title_fr: string;
  company: string;
  start_at: string;
  end_at: string | null;
  description_en: string;
  description_fr: string;
  contributions_en: string[];
  contributions_fr: string[];
  sort_order: number;
}
