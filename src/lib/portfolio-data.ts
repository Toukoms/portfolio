import { getSupabaseClient } from "@/lib/supabase";
import { ExperienceRecord } from "@/types/experience";
import { ProjectProps } from "@/types/project";
import {
  CaseStudiesContent,
  LocalizedText,
  PortfolioLocale,
  ResumeContent,
} from "@/types/portfolio-content";

type LocalizedRow = { locale: PortfolioLocale };

function localizedField<T extends LocalizedRow, K extends keyof T>(
  rows: T[],
  field: K
): LocalizedText {
  const en = rows.find((row) => row.locale === "en")?.[field];
  const fr = rows.find((row) => row.locale === "fr")?.[field];
  if (typeof en !== "string" || typeof fr !== "string") {
    throw new Error(`Missing localized ${String(field)} content.`);
  }
  return { en, fr };
}

function throwQueryError(error: { message: string } | null, resource: string) {
  if (error) {
    throw new Error(`Unable to load ${resource}: ${error.message}`);
  }
}

function requireData<T>(data: T | null, resource: string): T {
  if (data === null) {
    throw new Error(`Unable to load ${resource}: no data was returned.`);
  }
  return data;
}

interface ProjectRow {
  id: string;
  title: string;
  image: string;
  category: ProjectProps["category"];
  is_favorite: boolean;
  created_at: string;
  project_translations: Array<{ locale: PortfolioLocale; description: string }>;
  project_links: { demo_url: string | null; github_url: string | null } | null;
  project_technologies: Array<{ sort_order: number; technology: string }>;
}

interface ExperienceRow {
  id: string;
  company: string;
  start_at: string;
  end_at: string | null;
  sort_order: number;
  experience_translations: Array<{
    locale: PortfolioLocale;
    title: string;
    description: string;
  }>;
  experience_contributions: Array<{
    locale: PortfolioLocale;
    sort_order: number;
    contribution: string;
  }>;
}

interface ProfileRow {
  id: string;
  name: string;
  birthday: string;
  resume_url: string;
  profile_translations: Array<{
    locale: PortfolioLocale;
    role: string;
    experience: string;
    summary: string;
  }>;
  hero_translations: Array<{
    locale: PortfolioLocale;
    subtitle: string;
    highlight_workflows: string;
    highlight_delivery: string;
    highlight_quality: string;
  }>;
  biography_translations: Array<{
    locale: PortfolioLocale;
    paragraph_1: string;
    paragraph_2: string;
    paragraph_3: string;
  }>;
  contacts: {
    phone: string;
    website: string;
    email: string;
    location: string;
    form_action: string;
    avatar_src: string;
    contact_translations: Array<{
      locale: PortfolioLocale;
      avatar_alt: string;
    }>;
    social_links: Array<{ platform: "github" | "linkedin" | "facebook"; url: string }>;
  } | null;
  educations: Array<{
    institution: string;
    location: string;
    degree: string;
    start_label: string;
    end_label: string;
    sort_order: number;
  }>;
  skill_groups: Array<{
    section: "frontend" | "backend" | "tools";
    sort_order: number;
    skill_group_translations: Array<{
      locale: PortfolioLocale;
      category: string;
    }>;
    skills: Array<{
      sort_order: number;
      skill_translations: Array<{ locale: PortfolioLocale; name: string }>;
    }>;
  }>;
  distinctions: Array<{
    organization: string;
    date_label: string;
    sort_order: number;
    distinction_translations: Array<{
      locale: PortfolioLocale;
      name: string;
      description: string;
    }>;
  }>;
  certifications: Array<{
    organization: string;
    year_label: string;
    url: string;
    sort_order: number;
    certification_translations: Array<{
      locale: PortfolioLocale;
      name: string;
    }>;
  }>;
  languages: Array<{
    sort_order: number;
    language_translations: Array<{
      locale: PortfolioLocale;
      name: string;
      level: string;
      description: string;
    }>;
  }>;
}

interface CaseStudyRow {
  id: string;
  sort_order: number;
  case_study_summaries: Array<{
    locale: PortfolioLocale;
    name: string;
    type: string;
    context: string;
    role: string;
  }>;
  case_study_outcomes: Array<{
    locale: PortfolioLocale;
    constraint_text: string;
    decision: string;
    outcome: string;
    next_step: string;
  }>;
}

interface CaseStudySectionRow {
  locale: PortfolioLocale;
  eyebrow: string;
  title: string;
  description: string;
}

function mapProject(row: ProjectRow, locale: PortfolioLocale): ProjectProps {
  const link = row.project_links;
  return {
    id: row.id,
    title: row.title,
    description: localizedField(row.project_translations, "description")[locale],
    image: row.image,
    category: row.category,
    technologies: row.project_technologies
      .sort((a, b) => a.sort_order - b.sort_order)
      .map(({ technology }) => technology),
    demoUrl: link?.demo_url ?? undefined,
    githubUrl: link?.github_url ?? undefined,
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
      "id, title, image, category, is_favorite, created_at, project_translations(locale, description), project_links(demo_url, github_url), project_technologies(sort_order, technology)"
    )
    .eq("is_favorite", true)
    .order("created_at", { ascending: false })
    .limit(3)
    .returns<ProjectRow[]>();
  throwQueryError(error, "featured projects");
  return requireData(data, "featured projects").map((row) =>
    mapProject(row, locale)
  );
}

export async function getProjectsByCategory(
  category: ProjectProps["category"],
  locale: PortfolioLocale
): Promise<ProjectProps[]> {
  const { data, error } = await getSupabaseClient()
    .from("projects")
    .select(
      "id, title, image, category, is_favorite, created_at, project_translations(locale, description), project_links(demo_url, github_url), project_technologies(sort_order, technology)"
    )
    .eq("category", category)
    .order("created_at", { ascending: false })
    .returns<ProjectRow[]>();
  throwQueryError(error, `${category} projects`);
  return requireData(data, `${category} projects`).map((row) =>
    mapProject(row, locale)
  );
}

export async function getExperiences(): Promise<ExperienceRecord[]> {
  const { data, error } = await getSupabaseClient()
    .from("experiences")
    .select(
      "id, company, start_at, end_at, sort_order, experience_translations(locale, title, description), experience_contributions(locale, sort_order, contribution)"
    )
    .eq("is_visible", true)
    .order("sort_order", { ascending: true })
    .returns<ExperienceRow[]>();
  throwQueryError(error, "experiences");

  return requireData(data, "experiences").map((row) => {
    const en = row.experience_translations.find(
      (translation) => translation.locale === "en"
    );
    const fr = row.experience_translations.find(
      (translation) => translation.locale === "fr"
    );
    if (!en || !fr) {
      throw new Error(`Experience ${row.id} is missing a translation.`);
    }
    const contributions = (locale: PortfolioLocale) =>
      row.experience_contributions
        .filter((contribution) => contribution.locale === locale)
        .sort((a, b) => a.sort_order - b.sort_order)
        .map(({ contribution }) => contribution);

    return {
      id: row.id,
      company: row.company,
      start_at: row.start_at,
      end_at: row.end_at,
      sort_order: row.sort_order,
      title_en: en.title,
      title_fr: fr.title,
      description_en: en.description,
      description_fr: fr.description,
      contributions_en: contributions("en"),
      contributions_fr: contributions("fr"),
    };
  });
}

export async function getResumeContent(): Promise<ResumeContent> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("profiles")
    .select(
      "id, name, birthday, resume_url, profile_translations(locale, role, experience, summary), hero_translations(locale, subtitle, highlight_workflows, highlight_delivery, highlight_quality), biography_translations(locale, paragraph_1, paragraph_2, paragraph_3), contacts(phone, website, email, location, form_action, avatar_src, contact_translations(locale, avatar_alt), social_links(platform, url)), educations(institution, location, degree, start_label, end_label, sort_order), skill_groups(section, sort_order, skill_group_translations(locale, category), skills(sort_order, skill_translations(locale, name))), distinctions(organization, date_label, sort_order, distinction_translations(locale, name, description)), certifications(organization, year_label, url, sort_order, certification_translations(locale, name)), languages(sort_order, language_translations(locale, name, level, description))"
    )
    .eq("id", "primary")
    .single()
    .returns<ProfileRow>();
  throwQueryError(error, "profile");

  const profile = requireData(data, "profile");
  const contact = profile.contacts;
  if (!contact) {
    throw new Error("Portfolio profile is missing contact details.");
  }
  const social = {
    github: contact.social_links.find((link) => link.platform === "github")?.url,
    linkedin: contact.social_links.find((link) => link.platform === "linkedin")?.url,
    facebook: contact.social_links.find((link) => link.platform === "facebook")?.url,
  };
  if (!social.github || !social.linkedin || !social.facebook) {
    throw new Error("Portfolio profile is missing a social link.");
  }

  return {
    name: profile.name,
    role: localizedField(profile.profile_translations, "role"),
    experience: localizedField(profile.profile_translations, "experience"),
    profile: localizedField(profile.profile_translations, "summary"),
    hero: {
      subtitle: localizedField(profile.hero_translations, "subtitle"),
      highlights: {
        workflows: localizedField(profile.hero_translations, "highlight_workflows"),
        delivery: localizedField(profile.hero_translations, "highlight_delivery"),
        quality: localizedField(profile.hero_translations, "highlight_quality"),
      },
    },
    biography: {
      p1: localizedField(profile.biography_translations, "paragraph_1"),
      p2: localizedField(profile.biography_translations, "paragraph_2"),
      p3: localizedField(profile.biography_translations, "paragraph_3"),
    },
    birthday: profile.birthday,
    resumeUrl: profile.resume_url,
    contact: {
      phone: contact.phone,
      website: contact.website,
      email: contact.email,
      location: contact.location,
      formAction: contact.form_action,
      avatar: {
        src: contact.avatar_src,
        alt: localizedField(contact.contact_translations, "avatar_alt"),
      },
      social: {
        github: social.github,
        linkedin: social.linkedin,
        facebook: social.facebook,
      },
    },
    education: profile.educations
      .sort((a, b) => a.sort_order - b.sort_order)
      .map(({ institution, location, degree, start_label, end_label }) => ({
        institution,
        location,
        degree,
        start: start_label,
        end: end_label,
      })),
    skills: profile.skill_groups
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((group) => ({
        section: group.section,
        category: localizedField(group.skill_group_translations, "category"),
        items: group.skills
          .sort((a, b) => a.sort_order - b.sort_order)
          .map((skill) =>
            localizedField(skill.skill_translations, "name")
          ),
      })),
    distinctions: profile.distinctions
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((item) => ({
        name: localizedField(item.distinction_translations, "name").fr,
        organization: item.organization,
        date: item.date_label,
        description: localizedField(item.distinction_translations, "description").fr,
      })),
    certifications: profile.certifications
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((item) => ({
        name: localizedField(item.certification_translations, "name").fr,
        organization: item.organization,
        year: item.year_label,
        url: item.url,
      })),
    languages: profile.languages
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((item) => {
        const translations = item.language_translations;
        const preferred = translations.find(
          (translation) => translation.locale === "en"
        );
        if (!preferred) {
          throw new Error("A language is missing its English translation.");
        }
        return {
          name: localizedField(translations, "name").fr,
          level: preferred.level,
          description: preferred.description,
        };
      }),
  };
}

export async function getCaseStudiesContent(): Promise<CaseStudiesContent> {
  const supabase = getSupabaseClient();
  const [studiesResult, sectionResult] = await Promise.all([
    supabase
      .from("case_studies")
      .select(
        "id, sort_order, case_study_summaries(locale, name, type, context, role), case_study_outcomes(locale, constraint_text, decision, outcome, next_step)"
      )
      .order("sort_order", { ascending: true })
      .returns<CaseStudyRow[]>(),
    supabase
      .from("case_study_section_translations")
      .select("locale, eyebrow, title, description")
      .eq("id", "case-studies")
      .returns<CaseStudySectionRow[]>(),
  ]);
  const { data, error } = studiesResult;
  const { data: sectionRows, error: sectionError } = sectionResult;
  throwQueryError(sectionError, "case study section");
  throwQueryError(error, "case studies");

  const section = requireData(sectionRows, "case study section");
  const header = {
    eyebrow: localizedField(section, "eyebrow"),
    title: localizedField(section, "title"),
    description: localizedField(section, "description"),
  };

  return {
    ...header,
    items: requireData(data, "case studies").map((study) => {
      const summaries = study.case_study_summaries;
      const outcomes = study.case_study_outcomes;
      return {
        id: study.id,
        name: localizedField(summaries, "name"),
        type: localizedField(summaries, "type"),
        context: localizedField(summaries, "context"),
        role: localizedField(summaries, "role"),
        constraint: localizedField(outcomes, "constraint_text"),
        decision: localizedField(outcomes, "decision"),
        outcome: localizedField(outcomes, "outcome"),
        next: localizedField(outcomes, "next_step"),
      };
    }),
  };
}
