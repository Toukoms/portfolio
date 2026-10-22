-- Split localized and repeating data into tables by domain scope.
do $$
begin
  if to_regclass('public.projects') is not null
     and to_regclass('public.projects_legacy') is null then
    alter table public.projects rename to projects_legacy;
  end if;

  if to_regclass('public.projects_category_created_at_idx') is not null
     and to_regclass('public.projects_legacy_category_created_at_idx') is null then
    alter index public.projects_category_created_at_idx
      rename to projects_legacy_category_created_at_idx;
  end if;

  if to_regclass('public.projects_favorites_created_at_idx') is not null
     and to_regclass('public.projects_legacy_favorites_created_at_idx') is null then
    alter index public.projects_favorites_created_at_idx
      rename to projects_legacy_favorites_created_at_idx;
  end if;

  if to_regclass('public.experiences') is not null
     and to_regclass('public.experiences_legacy') is null then
    alter table public.experiences rename to experiences_legacy;
  end if;
end
$$;

drop table if exists public.portfolio_content;

do $$
begin
  if to_regclass('public.experiences_legacy') is not null then
    alter table public.experiences_legacy
      add column if not exists start_at date,
      add column if not exists end_at date,
      add column if not exists contributions_en text[] not null default '{}',
      add column if not exists contributions_fr text[] not null default '{}';
  end if;

  if to_regclass('public.experiences_legacy') is not null and exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'experiences_legacy'
      and column_name = 'period_en'
  ) then
    execute $migration$
      update public.experiences_legacy
      set
        start_at = coalesce(
          start_at,
          to_date(btrim(split_part(period_en, '-', 1)), 'FMMonth YYYY')
        ),
        end_at = case
          when end_at is not null then end_at
          when position('-' in period_en) = 0 then null
          when lower(btrim(split_part(period_en, '-', 2))) = 'present' then null
          else to_date(btrim(split_part(period_en, '-', 2)), 'FMMonth YYYY')
        end
      where start_at is null
    $migration$;
  end if;
end
$$;

create table if not exists public.projects (
  id text primary key default gen_random_uuid()::text,
  title text not null,
  image text not null,
  category text not null check (category in ('web', 'mobile', 'desktop', 'other')),
  is_favorite boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.project_translations (
  project_id text not null references public.projects(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  description text not null,
  primary key (project_id, locale)
);

create table if not exists public.project_links (
  project_id text primary key references public.projects(id) on delete cascade,
  demo_url text,
  github_url text
);

create table if not exists public.project_technologies (
  project_id text not null references public.projects(id) on delete cascade,
  sort_order integer not null,
  technology text not null,
  primary key (project_id, sort_order)
);

create index if not exists projects_category_created_at_idx
  on public.projects (category, created_at desc);
create index if not exists projects_favorites_created_at_idx
  on public.projects (created_at desc)
  where is_favorite = true;

create table if not exists public.experiences (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  start_at date not null,
  end_at date,
  sort_order integer not null default 0,
  is_visible boolean not null default true
);

create table if not exists public.experience_translations (
  experience_id uuid not null references public.experiences(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  title text not null,
  description text not null,
  primary key (experience_id, locale)
);

create table if not exists public.experience_contributions (
  experience_id uuid not null references public.experiences(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  sort_order integer not null,
  contribution text not null,
  primary key (experience_id, locale, sort_order)
);

create table if not exists public.profiles (
  id text primary key,
  name text not null,
  birthday date not null,
  resume_url text not null
);

create table if not exists public.profile_translations (
  profile_id text not null references public.profiles(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  role text not null,
  experience text not null,
  summary text not null,
  primary key (profile_id, locale)
);

create table if not exists public.hero_translations (
  profile_id text not null references public.profiles(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  subtitle text not null,
  highlight_workflows text not null,
  highlight_delivery text not null,
  highlight_quality text not null,
  primary key (profile_id, locale)
);

create table if not exists public.biography_translations (
  profile_id text not null references public.profiles(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  paragraph_1 text not null,
  paragraph_2 text not null,
  paragraph_3 text not null,
  primary key (profile_id, locale)
);

create table if not exists public.contacts (
  id text primary key,
  profile_id text not null unique references public.profiles(id) on delete cascade,
  phone text not null,
  website text not null,
  email text not null,
  location text not null,
  form_action text not null,
  avatar_src text not null
);

create table if not exists public.contact_translations (
  contact_id text not null references public.contacts(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  avatar_alt text not null,
  primary key (contact_id, locale)
);

create table if not exists public.social_links (
  contact_id text not null references public.contacts(id) on delete cascade,
  platform text not null check (platform in ('github', 'linkedin', 'facebook')),
  url text not null,
  primary key (contact_id, platform)
);

create table if not exists public.educations (
  id text primary key,
  profile_id text not null references public.profiles(id) on delete cascade,
  institution text not null,
  location text not null,
  degree text not null,
  start_label text not null,
  end_label text not null,
  sort_order integer not null
);

create table if not exists public.skill_groups (
  id text primary key,
  profile_id text references public.profiles(id) on delete cascade,
  section text not null check (section in ('frontend', 'backend', 'tools')),
  sort_order integer not null
);

alter table public.skill_groups
  add column if not exists profile_id text references public.profiles(id) on delete cascade;

create table if not exists public.skill_group_translations (
  skill_group_id text not null references public.skill_groups(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  category text not null,
  primary key (skill_group_id, locale)
);

create table if not exists public.skills (
  id text primary key,
  skill_group_id text not null references public.skill_groups(id) on delete cascade,
  sort_order integer not null
);

create table if not exists public.skill_translations (
  skill_id text not null references public.skills(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  name text not null,
  primary key (skill_id, locale)
);

create table if not exists public.distinctions (
  id text primary key,
  profile_id text not null references public.profiles(id) on delete cascade,
  organization text not null,
  date_label text not null,
  sort_order integer not null
);

create table if not exists public.distinction_translations (
  distinction_id text not null references public.distinctions(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  name text not null,
  description text not null,
  primary key (distinction_id, locale)
);

create table if not exists public.certifications (
  id text primary key,
  profile_id text not null references public.profiles(id) on delete cascade,
  organization text not null,
  year_label text not null,
  url text not null,
  sort_order integer not null
);

create table if not exists public.certification_translations (
  certification_id text not null references public.certifications(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  name text not null,
  primary key (certification_id, locale)
);

create table if not exists public.languages (
  id text primary key,
  profile_id text not null references public.profiles(id) on delete cascade,
  sort_order integer not null
);

create table if not exists public.language_translations (
  language_id text not null references public.languages(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  name text not null,
  level text not null,
  description text not null,
  primary key (language_id, locale)
);

create table if not exists public.case_studies (
  id text primary key,
  sort_order integer not null
);

create table if not exists public.case_study_section_translations (
  id text not null,
  locale text not null check (locale in ('en', 'fr')),
  eyebrow text not null,
  title text not null,
  description text not null,
  primary key (id, locale)
);

create table if not exists public.case_study_summaries (
  case_study_id text not null references public.case_studies(id) on delete cascade,
  locale text not null check (locale in ('en', 'fr')),
  name text not null,
  type text not null,
  context text not null,
  role text not null,
  primary key (case_study_id, locale)
);

create table if not exists public.case_study_outcomes (
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

do $$
declare
  existing_policy record;
begin
  for existing_policy in
    select tablename, policyname
    from pg_policies
    where schemaname = 'public'
      and tablename = any(array[
        'projects', 'project_translations', 'project_links',
        'project_technologies', 'experiences', 'experience_translations',
        'experience_contributions', 'profiles', 'profile_translations',
        'hero_translations', 'biography_translations', 'contacts',
        'contact_translations', 'social_links', 'educations',
        'skill_groups', 'skill_group_translations', 'skills',
        'skill_translations', 'distinctions', 'distinction_translations',
        'certifications', 'certification_translations', 'languages',
        'language_translations', 'case_studies',
        'case_study_section_translations', 'case_study_summaries',
        'case_study_outcomes'
      ])
  loop
    execute format(
      'drop policy if exists %I on public.%I',
      existing_policy.policyname,
      existing_policy.tablename
    );
  end loop;
end
$$;

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


do $$
begin
if to_regclass('public.projects_legacy') is not null then
insert into public.projects (id, title, image, category, is_favorite, created_at)
select id, title, image, category, is_favorite, created_at
from public.projects_legacy
on conflict (id) do nothing;

insert into public.project_translations (project_id, locale, description)
select id, 'en', description_en from public.projects_legacy
union all
select id, 'fr', description_fr from public.projects_legacy
on conflict (project_id, locale) do update
set description = excluded.description;

insert into public.project_links (project_id, demo_url, github_url)
select id, demo_url, github_url from public.projects_legacy
on conflict (project_id) do update
set demo_url = excluded.demo_url, github_url = excluded.github_url;

insert into public.project_technologies (project_id, sort_order, technology)
select p.id, technology.sort_order::integer, technology.name
from public.projects_legacy p
cross join lateral unnest(p.technologies) with ordinality as technology(name, sort_order)
on conflict (project_id, sort_order) do update
set technology = excluded.technology;
end if;

if to_regclass('public.experiences_legacy') is not null then
insert into public.experiences (id, company, start_at, end_at, sort_order, is_visible)
select id, company, start_at, end_at, sort_order, is_visible
from public.experiences_legacy
on conflict (id) do nothing;

insert into public.experience_translations (experience_id, locale, title, description)
select id, 'en', title_en, description_en from public.experiences_legacy
union all
select id, 'fr', title_fr, description_fr from public.experiences_legacy
on conflict (experience_id, locale) do update
set title = excluded.title, description = excluded.description;

insert into public.experience_contributions (experience_id, locale, sort_order, contribution)
select e.id, 'en', item.sort_order::integer, item.contribution
from public.experiences_legacy e
cross join lateral unnest(e.contributions_en) with ordinality as item(contribution, sort_order)
on conflict (experience_id, locale, sort_order) do update
set contribution = excluded.contribution;

insert into public.experience_contributions (experience_id, locale, sort_order, contribution)
select e.id, 'fr', item.sort_order::integer, item.contribution
from public.experiences_legacy e
cross join lateral unnest(e.contributions_fr) with ordinality as item(contribution, sort_order)
on conflict (experience_id, locale, sort_order) do update
set contribution = excluded.contribution;
end if;
end
$$;

drop table if exists public.projects_legacy;
drop table if exists public.experiences_legacy;

-- Profile and case-study content, stored in scope-specific relational tables.

insert into public.profiles (id, name, birthday, resume_url)
values
  ('primary', 'RAHAJANIRINA Fanomezantsoa Tokiniaina', '2005-06-09', '/CV_RAHAJANIRINA_Tokiniaina__Developer.pdf')
on conflict (id) do update set name = excluded.name, birthday = excluded.birthday, resume_url = excluded.resume_url;

update public.skill_groups
set profile_id = 'primary'
where profile_id is null;

alter table public.skill_groups
  alter column profile_id set not null;

insert into public.profile_translations (profile_id, locale, role, experience, summary)
values
  ('primary', 'en', 'Web Application Developer', '2+ years across software development and QA', 'I build web application workflows for real-world services, including tutoring requests through lesson scheduling and billing, and quote creation with temporary-token access. In my current QA role, I test installation configurations, module access, service availability, and user permissions. I am looking for a web application developer role focused on building and validating dependable product features.'),
  ('primary', 'fr', 'Développeur d''applications web', '2+ ans en développement logiciel et assurance qualité', 'Je développe des fonctionnalités web pour des services concrets : demandes de tutorat jusqu''à la planification et la facturation des cours, et création de devis avec accès par jeton temporaire. Dans mon poste actuel en assurance qualité, je teste différentes configurations d''installation, l''accès aux modules, la disponibilité des services et les permissions utilisateurs. Je recherche un poste de développeur d''applications web centré sur la création et la validation de fonctionnalités fiables.')
on conflict (profile_id, locale) do update set role = excluded.role, experience = excluded.experience, summary = excluded.summary;

insert into public.hero_translations (profile_id, locale, subtitle, highlight_workflows, highlight_delivery, highlight_quality)
values
  ('primary', 'en', 'I build reliable web applications for everyday business workflows.', 'Product workflows', 'Feature delivery', 'Quality testing'),
  ('primary', 'fr', 'Je crée des applications web fiables pour les processus métier du quotidien.', 'Processus métier', 'Livraison de fonctionnalités', 'Tests qualité')
on conflict (profile_id, locale) do update set subtitle = excluded.subtitle, highlight_workflows = excluded.highlight_workflows, highlight_delivery = excluded.highlight_delivery, highlight_quality = excluded.highlight_quality;

insert into public.biography_translations (profile_id, locale, paragraph_1, paragraph_2, paragraph_3)
values
  ('primary', 'en', 'I focus on building web application features around real product workflows, with experience spanning development and quality assurance.', 'My development work includes tutoring requests, teacher selection, lesson scheduling, billing, and quote creation with recipient review and approval.', 'In my current QA role, I test installation configurations, module access, service availability, and user permissions.'),
  ('primary', 'fr', 'Je me concentre sur la création de fonctionnalités web adaptées aux processus réels d''un produit, avec une expérience en développement et en assurance qualité.', 'Mes travaux de développement couvrent les demandes de tutorat, le choix des enseignants, la planification des cours, la facturation et la création de devis avec consultation et validation par les destinataires.', 'Dans mon poste actuel en assurance qualité, je teste les configurations d''installation, l''accès aux modules, la disponibilité des services et les permissions utilisateurs.')
on conflict (profile_id, locale) do update set paragraph_1 = excluded.paragraph_1, paragraph_2 = excluded.paragraph_2, paragraph_3 = excluded.paragraph_3;

insert into public.contacts (id, profile_id, phone, website, email, location, form_action, avatar_src)
values
  ('primary', 'primary', '+261 32 48 995 32', 'https://www.tokiniaina.dev', 'contact@tokiniaina.dev', 'Antananarivo, Madagascar', 'https://formspree.io/f/xzzedwbp', '/pdp.jpg')
on conflict (id) do update set profile_id = excluded.profile_id, phone = excluded.phone, website = excluded.website, email = excluded.email, location = excluded.location, form_action = excluded.form_action, avatar_src = excluded.avatar_src;

insert into public.contact_translations (contact_id, locale, avatar_alt)
values
  ('primary', 'en', 'Portrait of Tokiniaina'),
  ('primary', 'fr', 'Portrait de Tokiniaina')
on conflict (contact_id, locale) do update set avatar_alt = excluded.avatar_alt;

insert into public.social_links (contact_id, platform, url)
values
  ('primary', 'github', 'https://github.com/toukoms'),
  ('primary', 'linkedin', 'https://www.linkedin.com/in/fanomezantsoa-tokiniaina/'),
  ('primary', 'facebook', 'https://www.facebook.com/toki.niana.39/')
on conflict (contact_id, platform) do update set url = excluded.url;

insert into public.educations (id, profile_id, institution, location, degree, start_label, end_label, sort_order)
values
  ('education-1', 'primary', 'Haute Ecole d''Informatique (HEI)', 'Madagascar', 'Degree in Génie Logiciel', 'Novembre 2024', 'Novembre 2026', 1),
  ('education-2', 'primary', 'Institut Supérieur des Sciences et de Technologie de Mahajanga (ISSTM)', 'Madagascar', 'Degree in Génie Électronique et Informatique', 'Novembre 2021', 'Novembre 2023', 2),
  ('education-3', 'primary', 'Lycée Technique FMA', 'Antanimasaja, Mahajanga, Madagascar', 'BACC Comptabilité', '2018', '2021', 3)
on conflict (id) do update set profile_id = excluded.profile_id, institution = excluded.institution, location = excluded.location, degree = excluded.degree, start_label = excluded.start_label, end_label = excluded.end_label, sort_order = excluded.sort_order;

insert into public.skill_groups (id, profile_id, section, sort_order)
values
  ('frontend', 'primary', 'frontend', 1),
  ('backend', 'primary', 'backend', 2),
  ('tools', 'primary', 'tools', 3)
on conflict (id) do update set profile_id = excluded.profile_id, section = excluded.section, sort_order = excluded.sort_order;

insert into public.skill_group_translations (skill_group_id, locale, category)
values
  ('frontend', 'en', 'Web application development'),
  ('frontend', 'fr', 'Développement web'),
  ('backend', 'en', 'Data & payments'),
  ('backend', 'fr', 'Données et paiements'),
  ('tools', 'en', 'Quality assurance'),
  ('tools', 'fr', 'Assurance qualité')
on conflict (skill_group_id, locale) do update set category = excluded.category;

insert into public.skills (id, skill_group_id, sort_order)
values
  ('frontend-1', 'frontend', 1),
  ('frontend-2', 'frontend', 2),
  ('frontend-3', 'frontend', 3),
  ('frontend-4', 'frontend', 4),
  ('backend-1', 'backend', 1),
  ('backend-2', 'backend', 2),
  ('backend-3', 'backend', 3),
  ('tools-1', 'tools', 1),
  ('tools-2', 'tools', 2),
  ('tools-3', 'tools', 3)
on conflict (id) do update set skill_group_id = excluded.skill_group_id, sort_order = excluded.sort_order;

insert into public.skill_translations (skill_id, locale, name)
values
  ('frontend-1', 'en', 'Next.js'),
  ('frontend-1', 'fr', 'Next.js'),
  ('frontend-2', 'en', 'React'),
  ('frontend-2', 'fr', 'React'),
  ('frontend-3', 'en', 'TypeScript'),
  ('frontend-3', 'fr', 'TypeScript'),
  ('frontend-4', 'en', 'Tailwind CSS'),
  ('frontend-4', 'fr', 'Tailwind CSS'),
  ('backend-1', 'en', 'Supabase'),
  ('backend-1', 'fr', 'Supabase'),
  ('backend-2', 'en', 'PostgreSQL'),
  ('backend-2', 'fr', 'PostgreSQL'),
  ('backend-3', 'en', 'Stripe'),
  ('backend-3', 'fr', 'Stripe'),
  ('tools-1', 'en', 'Functional testing'),
  ('tools-1', 'fr', 'Tests fonctionnels'),
  ('tools-2', 'en', 'Installation testing'),
  ('tools-2', 'fr', 'Tests d''installation'),
  ('tools-3', 'en', 'Role-based access testing'),
  ('tools-3', 'fr', 'Tests des accès par rôle')
on conflict (skill_id, locale) do update set name = excluded.name;

insert into public.distinctions (id, profile_id, organization, date_label, sort_order)
values
  ('distinction-1', 'primary', 'Google Developer Group (GDG) Mahajanga', 'Décembre 2022', 1),
  ('distinction-2', 'primary', 'Alliance Voahary Gasy', 'Novembre 2025', 2)
on conflict (id) do update set profile_id = excluded.profile_id, organization = excluded.organization, date_label = excluded.date_label, sort_order = excluded.sort_order;

insert into public.distinction_translations (distinction_id, locale, name, description)
values
  ('distinction-1', 'en', 'Hackathon DevFest 2022 Mahajanga', '1re place avec GoShare, une application mobile de partage d''actualités mondiales sur divers thèmes (technologie, environnement, etc.).'),
  ('distinction-1', 'fr', 'Hackathon DevFest 2022 Mahajanga', '1re place avec GoShare, une application mobile de partage d''actualités mondiales sur divers thèmes (technologie, environnement, etc.).'),
  ('distinction-2', 'en', 'Hackathon Alliance Voahary Gasy, Antananarivo', '3e place avec GoLaw, une application mobile et un back-office web visant à diffuser les lois en version numérique.'),
  ('distinction-2', 'fr', 'Hackathon Alliance Voahary Gasy, Antananarivo', '3e place avec GoLaw, une application mobile et un back-office web visant à diffuser les lois en version numérique.')
on conflict (distinction_id, locale) do update set name = excluded.name, description = excluded.description;

insert into public.certifications (id, profile_id, organization, year_label, url, sort_order)
values
  ('certification-1', 'primary', 'Coursera', '2026', 'https://www.coursera.org/account/accomplishments/specialization/NMSQC1AUPOBR', 1),
  ('certification-2', 'primary', 'Coursera', '2026', 'https://www.coursera.org/account/accomplishments/specialization/5B61461XM9PY', 2)
on conflict (id) do update set profile_id = excluded.profile_id, organization = excluded.organization, year_label = excluded.year_label, url = excluded.url, sort_order = excluded.sort_order;

insert into public.certification_translations (certification_id, locale, name)
values
  ('certification-1', 'en', 'Software Quality Assurance and Testing Certification'),
  ('certification-1', 'fr', 'Software Quality Assurance and Testing Certification'),
  ('certification-2', 'en', 'Meta Front-End Developer Certification'),
  ('certification-2', 'fr', 'Meta Front-End Developer Certification')
on conflict (certification_id, locale) do update set name = excluded.name;

insert into public.languages (id, profile_id, sort_order)
values
  ('language-1', 'primary', 1),
  ('language-2', 'primary', 2)
on conflict (id) do update set profile_id = excluded.profile_id, sort_order = excluded.sort_order;

insert into public.language_translations (language_id, locale, name, level, description)
values
  ('language-1', 'en', 'French', 'B2', 'Lecture, rédaction et communication professionnelle.'),
  ('language-1', 'fr', 'Français', 'B2', 'Lecture, rédaction et communication professionnelle.'),
  ('language-2', 'en', 'English', 'B1', 'Lecture de documentation technique, rédaction et communication basique.'),
  ('language-2', 'fr', 'Anglais', 'B1', 'Lecture de documentation technique, rédaction et communication basique.')
on conflict (language_id, locale) do update set name = excluded.name, level = excluded.level, description = excluded.description;

insert into public.case_study_section_translations (id, locale, eyebrow, title, description)
values
  ('case-studies', 'en', 'SELECTED WORK', 'Case studies', 'Two examples from my development roles, grounded in the work recorded for each project. No unverified impact metrics or team-wide results are claimed.'),
  ('case-studies', 'fr', 'PROJETS SÉLECTIONNÉS', 'Études de cas', 'Deux exemples issus de mes expériences en développement, fondés sur les travaux décrits pour chaque projet. Aucun indicateur d''impact non vérifié ni résultat collectif ne m''est attribué.')
on conflict (id, locale) do update set eyebrow = excluded.eyebrow, title = excluded.title, description = excluded.description;

insert into public.case_studies (id, sort_order)
values
  ('gradeup', 1),
  ('vispacem', 2)
on conflict (id) do update set sort_order = excluded.sort_order;

insert into public.case_study_summaries (case_study_id, locale, name, type, context, role)
values
  ('gradeup', 'en', 'Grade''Up', 'Education marketplace · Freelance Next.js role', 'A tutoring marketplace connects families seeking academic support with teachers.', 'I developed features across the family course-request flow, teacher applications and selection, and lesson scheduling.'),
  ('gradeup', 'fr', 'Grade''Up', 'Marketplace éducative · Développement freelance avec Next.js', 'Une marketplace de cours particuliers met en relation des familles en recherche de soutien scolaire et des enseignants.', 'J''ai développé des fonctionnalités pour les demandes de cours des familles, les candidatures et la sélection des enseignants, ainsi que la planification des cours.'),
  ('vispacem', 'en', 'Vispacem', 'CRM/ERP · Full-stack Next.js role', 'A SaaS CRM/ERP platform centralizes business, financial, administrative, and operational functions. I contributed to its quote and company-contact workflows.', 'I worked on quote generation and sending, as well as retrieving company contacts from documents and adding, editing, and removing contacts.'),
  ('vispacem', 'fr', 'Vispacem', 'CRM/ERP · Développement full-stack avec Next.js', 'Une plateforme SaaS CRM/ERP centralise des fonctions commerciales, financières, administratives et opérationnelles. J''ai contribué aux processus de devis et de gestion des contacts d''entreprise.', 'J''ai travaillé sur la génération et l''envoi des devis, ainsi que sur la récupération des contacts depuis des documents et leur ajout, modification et suppression.')
on conflict (case_study_id, locale) do update set name = excluded.name, type = excluded.type, context = excluded.context, role = excluded.role;

insert into public.case_study_outcomes (case_study_id, locale, constraint_text, decision, outcome, next_step)
values
  ('gradeup', 'en', 'Billing and teacher payment calculations needed to use lessons actually delivered and hours completed, rather than scheduled lessons.', 'I implemented hour tracking and based bill generation and teacher payment calculations on completed lessons and hours.', 'The recorded delivery covers the tutoring workflow from course request and teacher selection through scheduling, hour tracking, billing, and teacher payment calculations.', 'The project record contains no usage or financial outcome metrics. I would next measure billing/payment reconciliation discrepancies and the time from lesson completion to calculation.'),
  ('gradeup', 'fr', 'La facturation et le calcul des paiements aux enseignants devaient se baser sur les cours dispensés et les heures effectuées, et non sur les cours planifiés.', 'J''ai mis en place le suivi des heures et fondé la génération des factures ainsi que le calcul des paiements sur les cours et heures effectués.', 'Les livrables décrits couvrent le parcours de tutorat, de la demande de cours et du choix de l''enseignant à la planification, au suivi des heures, à la facturation et au calcul des paiements.', 'La fiche du projet ne fournit aucun indicateur d''usage ou de résultat financier. Je mesurerais ensuite les écarts de rapprochement facture/paiement et le délai entre un cours terminé et son calcul.'),
  ('vispacem', 'en', 'Recipients needed to receive a quote by email and then view, accept, or refuse it through temporary-token verification.', 'I generated the PDF from the composed quote and used temporary-token verification for the recipient''s follow-up actions.', 'Delivered work includes quote PDF generation, email sending, token-verified viewing and responses, and company-contact management.', 'The project record provides no measured results. I would next track quote delivery and response rates, plus the accuracy of contact details extracted from documents.'),
  ('vispacem', 'fr', 'Les destinataires devaient recevoir un devis par e-mail, puis pouvoir le consulter, l''accepter ou le refuser après vérification par jeton temporaire.', 'J''ai généré le PDF à partir du devis composé et utilisé la vérification par jeton temporaire pour les actions du destinataire.', 'Les travaux livrés comprennent la génération PDF du devis, son envoi par e-mail, sa consultation et les réponses après vérification par jeton, ainsi que la gestion des contacts d''entreprise.', 'La fiche du projet ne fournit aucun résultat mesuré. Je suivrais ensuite les taux de livraison et de réponse des devis, ainsi que la précision des contacts extraits des documents.')
on conflict (case_study_id, locale) do update set constraint_text = excluded.constraint_text, decision = excluded.decision, outcome = excluded.outcome, next_step = excluded.next_step;

notify pgrst, 'reload schema';
