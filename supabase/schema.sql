create table public.projects (
  id text primary key default gen_random_uuid()::text,
  title text not null,
  image text not null,
  category text not null check (category in ('web', 'mobile', 'desktop', 'other')),
  is_favorite boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.project_translations (
  project_id text not null references public.projects(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  description text not null,
  primary key (project_id, locale)
);

create table public.project_links (
  project_id text primary key references public.projects(id) on delete cascade,
  demo_url text,
  github_url text
);

create table public.project_technologies (
  project_id text not null references public.projects(id) on delete cascade,
  sort_order integer not null,
  technology text not null,
  primary key (project_id, sort_order)
);

create index projects_category_created_at_idx
  on public.projects (category, created_at desc);
create index projects_favorites_created_at_idx
  on public.projects (created_at desc)
  where is_favorite = true;

create table public.experiences (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  start_at date not null,
  end_at date,
  sort_order integer not null default 0,
  is_visible boolean not null default true
);

create table public.experience_translations (
  experience_id uuid not null references public.experiences(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  title text not null,
  description text not null,
  primary key (experience_id, locale)
);

create table public.experience_contributions (
  experience_id uuid not null references public.experiences(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  sort_order integer not null,
  contribution text not null,
  primary key (experience_id, locale, sort_order)
);

create table public.profiles (
  id text primary key,
  name text not null,
  birthday date not null
);

create table public.profile_translations (
  profile_id text not null references public.profiles(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  role text not null,
  summary text not null,
  primary key (profile_id, locale)
);

create table public.hero_translations (
  profile_id text not null references public.profiles(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  subtitle text not null,
  highlight_workflows text not null,
  highlight_delivery text not null,
  highlight_quality text not null,
  primary key (profile_id, locale)
);

create table public.biography_translations (
  profile_id text not null references public.profiles(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  paragraph_1 text not null,
  paragraph_2 text not null,
  paragraph_3 text not null,
  primary key (profile_id, locale)
);

create table public.contacts (
  id text primary key,
  profile_id text not null unique references public.profiles(id) on delete cascade,
  phone text not null,
  website text not null,
  email text not null,
  location text not null,
  form_action text not null
);

create table public.contact_translations (
  contact_id text not null references public.contacts(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  avatar_alt text not null,
  primary key (contact_id, locale)
);

create table public.social_links (
  contact_id text not null references public.contacts(id) on delete cascade,
  platform text not null check (platform in ('github', 'linkedin', 'facebook')),
  url text not null,
  primary key (contact_id, platform)
);

create table public.educations (
  id text primary key,
  profile_id text not null references public.profiles(id) on delete cascade,
  institution text not null,
  location text not null,
  degree text not null,
  start_label text not null,
  end_label text not null,
  sort_order integer not null
);

create table public.skill_groups (
  id text primary key,
  profile_id text not null references public.profiles(id) on delete cascade,
  section text not null check (section in ('frontend', 'backend', 'tools')),
  sort_order integer not null
);

create table public.skill_group_translations (
  skill_group_id text not null references public.skill_groups(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  category text not null,
  primary key (skill_group_id, locale)
);

create table public.skills (
  id text primary key,
  skill_group_id text not null references public.skill_groups(id) on delete cascade,
  sort_order integer not null
);

create table public.skill_translations (
  skill_id text not null references public.skills(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  name text not null,
  primary key (skill_id, locale)
);

create table public.distinctions (
  id text primary key,
  profile_id text not null references public.profiles(id) on delete cascade,
  organization text not null,
  date_label text not null,
  sort_order integer not null
);

create table public.distinction_translations (
  distinction_id text not null references public.distinctions(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  name text not null,
  description text not null,
  primary key (distinction_id, locale)
);

create table public.certifications (
  id text primary key,
  profile_id text not null references public.profiles(id) on delete cascade,
  organization text not null,
  year_label text not null,
  url text not null,
  sort_order integer not null
);

create table public.certification_translations (
  certification_id text not null references public.certifications(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  name text not null,
  primary key (certification_id, locale)
);

create table public.languages (
  id text primary key,
  profile_id text not null references public.profiles(id) on delete cascade,
  sort_order integer not null
);

create table public.language_translations (
  language_id text not null references public.languages(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  name text not null,
  level text not null,
  description text not null,
  primary key (language_id, locale)
);

create table public.case_studies (
  id text primary key,
  sort_order integer not null
);

create table public.case_study_section_translations (
  id text not null,
  locale text not null check (locale in ('en', 'fr')),
  eyebrow text not null,
  title text not null,
  description text not null,
  primary key (id, locale)
);

create table public.case_study_summaries (
  case_study_id text not null references public.case_studies(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  name text not null,
  type text not null,
  context text not null,
  role text not null,
  primary key (case_study_id, locale)
);

create table public.case_study_outcomes (
  case_study_id text not null references public.case_studies(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  constraint_text text not null,
  decision text not null,
  outcome text not null,
  next_step text not null,
  primary key (case_study_id, locale)
);

alter table public.projects enable row level security;
alter table public.project_translations enable row level security;
alter table public.project_links enable row level security;
alter table public.project_technologies enable row level security;
alter table public.experiences enable row level security;
alter table public.experience_translations enable row level security;
alter table public.experience_contributions enable row level security;
alter table public.profiles enable row level security;
alter table public.profile_translations enable row level security;
alter table public.hero_translations enable row level security;
alter table public.biography_translations enable row level security;
alter table public.contacts enable row level security;
alter table public.contact_translations enable row level security;
alter table public.social_links enable row level security;
alter table public.educations enable row level security;
alter table public.skill_groups enable row level security;
alter table public.skill_group_translations enable row level security;
alter table public.skills enable row level security;
alter table public.skill_translations enable row level security;
alter table public.distinctions enable row level security;
alter table public.distinction_translations enable row level security;
alter table public.certifications enable row level security;
alter table public.certification_translations enable row level security;
alter table public.languages enable row level security;
alter table public.language_translations enable row level security;
alter table public.case_studies enable row level security;
alter table public.case_study_section_translations enable row level security;
alter table public.case_study_summaries enable row level security;
alter table public.case_study_outcomes enable row level security;

grant select on
  public.projects,
  public.project_translations,
  public.project_links,
  public.project_technologies,
  public.experiences,
  public.experience_translations,
  public.experience_contributions,
  public.profiles,
  public.profile_translations,
  public.hero_translations,
  public.biography_translations,
  public.contacts,
  public.contact_translations,
  public.social_links,
  public.educations,
  public.skill_groups,
  public.skill_group_translations,
  public.skills,
  public.skill_translations,
  public.distinctions,
  public.distinction_translations,
  public.certifications,
  public.certification_translations,
  public.languages,
  public.language_translations,
  public.case_studies,
  public.case_study_section_translations,
  public.case_study_summaries,
  public.case_study_outcomes
to anon, authenticated;

create policy "Public can read projects" on public.projects
  for select to anon, authenticated using (true);
create policy "Public can read project translations" on public.project_translations
  for select to anon, authenticated using (true);
create policy "Public can read project links" on public.project_links
  for select to anon, authenticated using (true);
create policy "Public can read project technologies" on public.project_technologies
  for select to anon, authenticated using (true);
create policy "Public can read experiences" on public.experiences
  for select to anon, authenticated using (true);
create policy "Public can read experience translations" on public.experience_translations
  for select to anon, authenticated using (true);
create policy "Public can read experience contributions" on public.experience_contributions
  for select to anon, authenticated using (true);
create policy "Public can read profiles" on public.profiles
  for select to anon, authenticated using (true);
create policy "Public can read profile translations" on public.profile_translations
  for select to anon, authenticated using (true);
create policy "Public can read hero translations" on public.hero_translations
  for select to anon, authenticated using (true);
create policy "Public can read biography translations" on public.biography_translations
  for select to anon, authenticated using (true);
create policy "Public can read contacts" on public.contacts
  for select to anon, authenticated using (true);
create policy "Public can read contact translations" on public.contact_translations
  for select to anon, authenticated using (true);
create policy "Public can read social links" on public.social_links
  for select to anon, authenticated using (true);
create policy "Public can read educations" on public.educations
  for select to anon, authenticated using (true);
create policy "Public can read skill groups" on public.skill_groups
  for select to anon, authenticated using (true);
create policy "Public can read skill group translations" on public.skill_group_translations
  for select to anon, authenticated using (true);
create policy "Public can read skills" on public.skills
  for select to anon, authenticated using (true);
create policy "Public can read skill translations" on public.skill_translations
  for select to anon, authenticated using (true);
create policy "Public can read distinctions" on public.distinctions
  for select to anon, authenticated using (true);
create policy "Public can read distinction translations" on public.distinction_translations
  for select to anon, authenticated using (true);
create policy "Public can read certifications" on public.certifications
  for select to anon, authenticated using (true);
create policy "Public can read certification translations" on public.certification_translations
  for select to anon, authenticated using (true);
create policy "Public can read languages" on public.languages
  for select to anon, authenticated using (true);
create policy "Public can read language translations" on public.language_translations
  for select to anon, authenticated using (true);
create policy "Public can read case studies" on public.case_studies
  for select to anon, authenticated using (true);
create policy "Public can read case study section translations" on public.case_study_section_translations
  for select to anon, authenticated using (true);
create policy "Public can read case study summaries" on public.case_study_summaries
  for select to anon, authenticated using (true);
create policy "Public can read case study outcomes" on public.case_study_outcomes
  for select to anon, authenticated using (true);

notify pgrst, 'reload schema';
