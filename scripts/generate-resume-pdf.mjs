import { existsSync } from "node:fs";
import { createWriteStream } from "node:fs";
import { finished } from "node:stream/promises";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";
import PDFDocument from "pdfkit";

const localEnvPath = fileURLToPath(new URL("../.env.local", import.meta.url));
if (existsSync(localEnvPath)) {
  process.loadEnvFile(localEnvPath);
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
  );
}

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});
const [
  { data: profile, error: profileError },
  { data: experienceRows, error: experienceError },
  { data: projectRows, error: projectError },
] = await Promise.all([
  supabase
    .from("profiles")
    .select(
      "id, name, profile_translations(locale, role, summary), contacts(phone, website, email, location, social_links(platform, url)), educations(institution, location, degree, start_label, end_label, sort_order), skill_groups(section, sort_order, skill_group_translations(locale, category), skills(sort_order, skill_translations(locale, name))), distinctions(organization, date_label, sort_order, distinction_translations(locale, name, description)), certifications(organization, year_label, url, sort_order, certification_translations(locale, name)), languages(sort_order, language_translations(locale, name, level, description))"
    )
    .eq("id", "primary")
    .single(),
  supabase
    .from("experiences")
    .select(
      "id, company, start_at, end_at, sort_order, experience_translations(locale, title, description), experience_contributions(locale, sort_order, contribution)"
    )
    .eq("is_visible", true)
    .order("sort_order", { ascending: true }),
  supabase
    .from("projects")
    .select(
      "title, created_at, project_translations(locale, description), project_links(demo_url, github_url), project_technologies(sort_order, technology)"
    )
    .eq("is_favorite", true)
    .order("created_at", { ascending: false })
    .limit(3),
]);

if (profileError) {
  throw new Error(`Unable to load resume profile: ${profileError.message}`);
}
if (experienceError) {
  throw new Error(`Unable to load resume experiences: ${experienceError.message}`);
}
if (projectError) {
  throw new Error(`Unable to load resume projects: ${projectError.message}`);
}
if (!experienceRows || !projectRows) {
  throw new Error("Unable to load resume content: no data was returned.");
}

function localizedField(rows, field) {
  const en = rows.find((row) => row.locale === "en")?.[field];
  const fr = rows.find((row) => row.locale === "fr")?.[field];
  if (typeof en !== "string" || typeof fr !== "string") {
    throw new Error(`Missing localized ${field} content.`);
  }
  return { en, fr };
}

if (!profile) {
  throw new Error("Unable to load resume profile: no data was returned.");
}
const contact = profile.contacts;
if (!contact) {
  throw new Error("Portfolio profile is missing contact details.");
}
const social = {
  github: contact.social_links.find((link) => link.platform === "github")?.url,
  linkedin: contact.social_links.find((link) => link.platform === "linkedin")?.url,
};
if (!social.github || !social.linkedin) {
  throw new Error("Portfolio profile is missing a social link.");
}

const resume = {
  name: profile.name,
  role: localizedField(profile.profile_translations, "role"),
  profile: localizedField(profile.profile_translations, "summary"),
  contact: {
    phone: contact.phone,
    website: contact.website,
    email: contact.email,
    location: contact.location,
    social,
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
      category: localizedField(group.skill_group_translations, "category"),
      items: group.skills
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((skill) => localizedField(skill.skill_translations, "name")),
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
      const english = translations.find((translation) => translation.locale === "en");
      if (!english) {
        throw new Error("A language is missing its English translation.");
      }
      return {
        name: localizedField(translations, "name").fr,
        level: english.level,
        description: english.description,
      };
    }),
};

const experiences = experienceRows.map((experience) => {
  const translations = experience.experience_translations;
  const contributions = experience.experience_contributions
    .filter((contribution) => contribution.locale === "fr")
    .sort((a, b) => a.sort_order - b.sort_order)
    .map(({ contribution }) => contribution);
  return {
    company: experience.company,
    start_at: experience.start_at,
    end_at: experience.end_at,
    title_fr: localizedField(translations, "title").fr,
    description_fr: localizedField(translations, "description").fr,
    contributions_fr: contributions,
  };
});

const projects = projectRows.map((project) => ({
  title: project.title,
  description_fr: localizedField(project.project_translations, "description").fr,
  technologies: project.project_technologies
    .sort((a, b) => a.sort_order - b.sort_order)
    .map(({ technology }) => technology),
  demo_url: project.project_links?.demo_url,
  github_url: project.project_links?.github_url,
}));

const outputPath = new URL(
  "../public/CV_RAHAJANIRINA_Tokiniaina__Developer.pdf",
  import.meta.url
);
const margin = 42;
const pageWidth = 595.28;
const contentWidth = pageWidth - margin * 2;
const bottom = 790;
let sectionsWritten = 0;
const colors = {
  ink: "#18212F",
  muted: "#596579",
  accent: "#087E8B",
  rule: "#D7E0E8",
  header: "#142333",
  white: "#FFFFFF",
};

const doc = new PDFDocument({
  size: "A4",
  margins: { top: margin, right: margin, bottom: margin, left: margin },
  bufferPages: true,
  info: {
    Title: `CV - ${resume.name}`,
    Author: resume.name,
    Subject: "Curriculum vitae",
  },
});

const output = createWriteStream(outputPath);
doc.pipe(output);

function ensureSpace(height) {
  if (doc.y + height > bottom) {
    doc.addPage();
  }
}

function writeSectionTitle(title) {
  if (sectionsWritten > 0) {
    doc.y += 4;
  }
  ensureSpace(28);
  sectionsWritten += 1;
  doc
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor(colors.accent)
    .text(title.toUpperCase(), margin, doc.y);
  const ruleY = doc.y + 4;
  doc
    .moveTo(margin, ruleY)
    .lineTo(pageWidth - margin, ruleY)
    .lineWidth(0.6)
    .strokeColor(colors.rule)
    .stroke();
  doc.y = ruleY + 7;
}

function writeEntryHeading(title, date) {
  ensureSpace(24);
  const y = doc.y;
  doc.font("Helvetica-Bold").fontSize(9).fillColor(colors.ink);
  doc.text(title, margin, y, { width: contentWidth - 140 });
  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor(colors.muted)
    .text(date, pageWidth - margin - 138, y, {
      width: 138,
      align: "right",
    });
  doc.y = Math.max(doc.y, y + 11);
}

function writeBody(text, options = {}) {
  const {
    indent = 0,
    color = colors.muted,
    fontSize = 8.5,
    link,
  } = options;
  doc
    .font("Helvetica")
    .fontSize(fontSize)
    .fillColor(color)
    .text(text, margin + indent, doc.y, {
      width: contentWidth - indent,
      lineGap: 1.5,
      link,
    });
  doc.y += 1;
}

function writeBullet(text) {
  ensureSpace(16);
  doc
    .font("Helvetica")
    .fontSize(8.5)
    .fillColor(colors.muted)
    .text(`- ${text}`, margin + 10, doc.y, {
      width: contentWidth - 10,
      lineGap: 1.5,
      bullet: { indent: 4 },
    });
  doc.y += 1;
}

function formatMonth(dateString) {
  const date = new Date(`${dateString}T00:00:00Z`);
  return new Intl.DateTimeFormat("fr-FR", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function writeHeader() {
  doc.rect(0, 0, pageWidth, 116).fill(colors.header);
  doc
    .font("Helvetica-Bold")
    .fontSize(24)
    .fillColor("#7EDCE2")
    .text(resume.role.fr, margin, 20);
  doc
    .font("Helvetica-Bold")
    .fontSize(14)
    .fillColor(colors.white)
    .text(resume.name, margin, 53, { width: contentWidth });
  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor("#E3EBF3")
    .text(
      `${resume.contact.location}  ·  ${resume.contact.email}  ·  ${resume.contact.phone}  ·  ${resume.contact.website}`,
      margin,
      79,
      { width: contentWidth }
    )
    .text(
      `${resume.contact.social.github}  ·  ${resume.contact.social.linkedin}`,
      margin,
      93,
      { width: contentWidth }
    )
  doc.y = 128;
}

writeHeader();
if (resume.profile?.fr) {
  writeSectionTitle("Profil");
  writeBody(resume.profile.fr);
}

if (experiences.length) {
  writeSectionTitle("Expériences");
  for (const experience of experiences) {
    writeEntryHeading(
      experience.company,
      `${formatMonth(experience.start_at)} – ${
        experience.end_at ? formatMonth(experience.end_at) : "Aujourd’hui"
      }`
    );
    writeBody(experience.title_fr, { indent: 2, color: colors.accent });
    writeBody(experience.description_fr, { indent: 2 });
    for (const contribution of experience.contributions_fr) {
      writeBullet(contribution);
    }
  }
}

if (resume.skills?.length) {
  writeSectionTitle("Compétences");
  for (const skill of resume.skills) {
    ensureSpace(14);
    doc
      .font("Helvetica-Bold")
      .fontSize(8.5)
      .fillColor(colors.ink)
      .text(`${skill.category.fr}: `, margin, doc.y, {
        continued: true,
        lineBreak: false,
      });
    doc
      .font("Helvetica")
      .fontSize(8.5)
      .fillColor(colors.muted)
      .text(
        skill.items.map((item) => item.fr).join(", "),
        { width: contentWidth }
      );
    doc.y += 1;
  }
}

if (projects.length) {
  writeSectionTitle("Projets");
  for (const project of projects) {
    writeEntryHeading(project.title, "");
    writeBody(project.technologies.join(", "), {
      indent: 2,
      color: colors.accent,
      fontSize: 8,
    });
    writeBody(project.description_fr, { indent: 2 });
    for (const url of [project.demo_url, project.github_url].filter(Boolean)) {
      writeBody(url, { indent: 2, color: colors.accent, fontSize: 8 });
    }
    doc.y += 3;
  }
}

if (resume.distinctions?.length) {
  writeSectionTitle("Distinctions");
  for (const distinction of resume.distinctions) {
    writeEntryHeading(distinction.name, distinction.date);
    writeBody(distinction.organization, {
      indent: 2,
      color: colors.accent,
    });
    writeBody(distinction.description, { indent: 2 });
    doc.y += 3;
  }
}

if (resume.education?.length) {
  writeSectionTitle("Formations");
  for (const education of resume.education) {
    writeEntryHeading(
      education.institution,
      education.end ? `${education.start} – ${education.end}` : `${education.start} –`
    );
    writeBody(`${education.degree}  ·  ${education.location}`, { indent: 2 });
    doc.y += 2;
  }
}

if (resume.certifications?.length) {
  writeSectionTitle("Certifications");
  for (const certification of resume.certifications) {
    writeEntryHeading(certification.name, certification.year);
    writeBody(certification.organization, {
      indent: 2,
      color: colors.accent,
    });
    writeBody(certification.url, {
      indent: 2,
      color: colors.accent,
      fontSize: 8,
      link: certification.url,
    });
    doc.y += 2;
  }
}

if (resume.languages?.length) {
  writeSectionTitle("Langues");
  for (const language of resume.languages) {
    writeBody(`${language.name} - ${language.level}: ${language.description}`);
  }
}

doc.end();
await finished(output);
console.log(`Generated ${outputPath.pathname}`);
