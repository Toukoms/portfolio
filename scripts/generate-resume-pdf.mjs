import { existsSync } from "node:fs";
import { createWriteStream } from "node:fs";
import { finished } from "node:stream/promises";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";
import PDFDocument from "pdfkit";
import resume from "../src/data/resume.json" with { type: "json" };

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
const [{ data: experiences, error: experienceError }, { data: projects, error: projectError }] =
  await Promise.all([
    supabase
      .from("experiences")
      .select(
        "title_fr, company, start_at, end_at, description_fr, sort_order"
      )
      .eq("is_visible", true)
      .order("sort_order", { ascending: true }),
    supabase
      .from("projects")
      .select("title, description_fr, technologies, demo_url, github_url")
      .eq("is_favorite", true)
      .order("created_at", { ascending: false })
      .limit(3),
  ]);

if (experienceError) {
  throw new Error(`Unable to load resume experiences: ${experienceError.message}`);
}
if (projectError) {
  throw new Error(`Unable to load resume projects: ${projectError.message}`);
}

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
if (experiences.length) {
  writeSectionTitle("Expériences");
  for (const [index, experience] of experiences.entries()) {
    if (index === 2 && doc.y > 350 && doc.y < 650) {
      doc.addPage();
    }
    writeEntryHeading(
      experience.company,
      `${formatMonth(experience.start_at)} – ${
        experience.end_at ? formatMonth(experience.end_at) : "Aujourd’hui"
      }`
    );
    writeBody(experience.title_fr, { indent: 2, color: colors.accent });
    writeBody(experience.description_fr, { indent: 2 });
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
      .text(`${skill.category}: `, margin, doc.y, {
        continued: true,
        lineBreak: false,
      });
    doc
      .font("Helvetica")
      .fontSize(8.5)
      .fillColor(colors.muted)
      .text(skill.items.join(", "), { width: contentWidth });
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
