import { getSupabaseClient } from "@/lib/supabase";
import { ExperienceRecord } from "@/types/experience";
import { ProjectProps } from "@/types/project";

type PortfolioLocale = "en" | "fr";

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
      "id, title_en, title_fr, company, period_en, period_fr, description_en, description_fr, sort_order"
    )
    .eq("is_visible", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`Unable to load experiences: ${error.message}`);
  }

  return data;
}
