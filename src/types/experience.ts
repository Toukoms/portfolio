export interface ExperienceRecord {
  id: string;
  title_en: string;
  title_fr: string;
  company: string;
  start_at: string;
  end_at: string | null;
  description_en: string;
  description_fr: string;
  sort_order: number;
}
