import { getSupabaseClient } from "@/lib/supabase";
import { ExperienceRecord } from "@/types/experience";
import { ProjectProps } from "@/types/project";
import {
  CaseStudiesContent,
  LocalizedText,
  ResumeContent,
} from "@/types/portfolio-content";

type PortfolioLocale = "en" | "fr";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isLocalizedText(value: unknown): value is LocalizedText {
  return (
    isRecord(value) &&
    typeof value.en === "string" &&
    typeof value.fr === "string"
  );
}

function hasStringFields(value: unknown, fields: string[]): boolean {
  return isRecord(value) && fields.every((field) => typeof value[field] === "string");
}

function isResumeContent(value: unknown): value is ResumeContent {
  if (!isRecord(value) || !isRecord(value.contact) || !isRecord(value.hero)) {
    return false;
  }

  const contact = value.contact;
  const hero = value.hero;
  const biography = value.biography;
  const highlights = hero.highlights;

  return (
    typeof value.name === "string" &&
    isLocalizedText(value.role) &&
    isLocalizedText(value.experience) &&
    isLocalizedText(value.profile) &&
    isLocalizedText(hero.subtitle) &&
    isRecord(highlights) &&
    isLocalizedText(highlights.workflows) &&
    isLocalizedText(highlights.delivery) &&
    isLocalizedText(highlights.quality) &&
    isRecord(biography) &&
    isLocalizedText(biography.p1) &&
    isLocalizedText(biography.p2) &&
    isLocalizedText(biography.p3) &&
    typeof value.birthday === "string" &&
    typeof value.resumeUrl === "string" &&
    typeof contact.phone === "string" &&
    typeof contact.website === "string" &&
    typeof contact.email === "string" &&
    typeof contact.location === "string" &&
    typeof contact.formAction === "string" &&
    isRecord(contact.avatar) &&
    typeof contact.avatar.src === "string" &&
    isLocalizedText(contact.avatar.alt) &&
    isRecord(contact.social) &&
    typeof contact.social.github === "string" &&
    typeof contact.social.linkedin === "string" &&
    typeof contact.social.facebook === "string" &&
    Array.isArray(value.education) &&
    value.education.every((item) =>
      hasStringFields(item, [
        "institution",
        "location",
        "degree",
        "start",
        "end",
      ])
    ) &&
    Array.isArray(value.skills) &&
    value.skills.every(
      (skill) =>
        isRecord(skill) &&
        ["frontend", "backend", "tools"].includes(String(skill.section)) &&
        isLocalizedText(skill.category) &&
        Array.isArray(skill.items) &&
        skill.items.every(isLocalizedText)
    ) &&
    Array.isArray(value.distinctions) &&
    value.distinctions.every((item) =>
      hasStringFields(item, ["name", "organization", "date", "description"])
    ) &&
    Array.isArray(value.certifications) &&
    value.certifications.every((item) =>
      hasStringFields(item, ["name", "organization", "year", "url"])
    ) &&
    Array.isArray(value.languages) &&
    value.languages.every((item) =>
      hasStringFields(item, ["name", "level", "description"])
    )
  );
}

function isCaseStudiesContent(value: unknown): value is CaseStudiesContent {
  if (!isRecord(value) || !Array.isArray(value.items)) {
    return false;
  }

  return (
    isLocalizedText(value.eyebrow) &&
    isLocalizedText(value.title) &&
    isLocalizedText(value.description) &&
    value.items.every(
      (item) =>
        isRecord(item) &&
        typeof item.id === "string" &&
        isLocalizedText(item.name) &&
        isLocalizedText(item.type) &&
        isLocalizedText(item.context) &&
        isLocalizedText(item.role) &&
        isLocalizedText(item.constraint) &&
        isLocalizedText(item.decision) &&
        isLocalizedText(item.outcome) &&
        isLocalizedText(item.next)
    )
  );
}

function mapProject(
  row: {
    id: string;
    title: string;
    description_en: string;
    description_fr: string;
    image: string;
    category: ProjectProps["category"];
    technologies: string[];
    demo_url: string | null;
    github_url: string | null;
    is_favorite: boolean;
    created_at: string;
  },
  locale: PortfolioLocale
): ProjectProps {
  return {
    id: row.id,
    title: row.title,
    description: locale === "fr" ? row.description_fr : row.description_en,
    image: row.image,
    category: row.category,
    technologies: row.technologies,
    demoUrl: row.demo_url ?? undefined,
    githubUrl: row.github_url ?? undefined,
    isFavorite: row.is_favorite,
    createdAt: row.created_at,
  };
}

export async function getFavoriteProjects(
  locale: PortfolioLocale
): Promise<ProjectProps[]> {
  const { data, error } = await getSupabaseClient()
    .from("projects")
    .select(
      "id, title, description_en, description_fr, image, category, technologies, demo_url, github_url, is_favorite, created_at"
    )
    .eq("is_favorite", true)
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    throw new Error(`Unable to load featured projects: ${error.message}`);
  }

  return data.map((row) => mapProject(row, locale));
}

export async function getProjectsByCategory(
  category: ProjectProps["category"],
  locale: PortfolioLocale
): Promise<ProjectProps[]> {
  const { data, error } = await getSupabaseClient()
    .from("projects")
    .select(
      "id, title, description_en, description_fr, image, category, technologies, demo_url, github_url, is_favorite, created_at"
    )
    .eq("category", category)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Unable to load ${category} projects: ${error.message}`);
  }

  return data.map((row) => mapProject(row, locale));
}

export async function getExperiences(): Promise<ExperienceRecord[]> {
  const { data, error } = await getSupabaseClient()
    .from("experiences")
    .select(
      "id, title_en, title_fr, company, start_at, end_at, description_en, description_fr, contributions_en, contributions_fr, sort_order"
    )
    .eq("is_visible", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Unable to load experiences: ${error.message}`);
  }

  return data;
}

async function getContent(contentId: string): Promise<unknown> {
  const { data, error } = await getSupabaseClient()
    .from("portfolio_content")
    .select("content")
    .eq("id", contentId)
    .single();

  if (error) {
    throw new Error(`Unable to load ${contentId} content: ${error.message}`);
  }

  return data.content;
}

export async function getResumeContent(): Promise<ResumeContent> {
  const content = await getContent("profile");
  if (!isResumeContent(content)) {
    throw new Error("Portfolio profile content has an invalid format.");
  }
  return content;
}

export async function getCaseStudiesContent(): Promise<CaseStudiesContent> {
  const content = await getContent("case-studies");
  if (!isCaseStudiesContent(content)) {
    throw new Error("Portfolio case study content has an invalid format.");
  }
  return content;
}
