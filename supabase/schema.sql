create table public.projects (
  id text primary key default gen_random_uuid()::text,
  title text not null,
  description_en text not null,
  description_fr text not null,
  image text not null,
  category text not null check (category in ('web', 'mobile', 'desktop', 'other')),
  technologies text[] not null default '{}',
  demo_url text,
  github_url text,
  is_favorite boolean not null default false,
  created_at timestamptz not null default now()
);

create index projects_category_created_at_idx
  on public.projects (category, created_at desc);
create index projects_favorites_created_at_idx
  on public.projects (created_at desc)
  where is_favorite = true;

create table public.experiences (
  id uuid primary key default gen_random_uuid(),
  title_en text not null,
  title_fr text not null,
  company text not null,
  period_en text not null,
  period_fr text not null,
  description_en text not null,
  description_fr text not null,
  sort_order integer not null default 0,
  is_visible boolean not null default true
);

alter table public.projects enable row level security;
alter table public.experiences enable row level security;

grant select on public.projects, public.experiences to anon, authenticated;

create policy "Public can read projects"
  on public.projects for select
  to anon, authenticated
  using (true);

create policy "Public can read experiences"
  on public.experiences for select
  to anon, authenticated
  using (true);

insert into public.experiences (
  title_en, title_fr, company, period_en, period_fr,
  description_en, description_fr, sort_order
) values
  (
    'Discovery Internship - QA Tester',
    'Stage Découverte - QA Testeur',
    'Vivetic Group Madagascar',
    'October 2024',
    'Octobre 2024',
    'Verified that requested functionalities in the requirements document were correctly implemented.',
    'Vérification que les fonctionnalités demandées dans le cahier des charges étaient correctement implémentées.',
    1
  ),
  (
    'Junior Developer',
    'Développeur Junior',
    'Express In Code',
    'May 2022 - April 2023',
    'Mai 2022 - Avril 2023',
    'One-year learning internship: 9 months on site, 3 months remote. Created a Japanese anime streaming website.',
    'Stage d''apprentissage d''un an : 9 mois sur site, 3 mois à distance. Création d''un site de streaming d''anime japonais.',
    2
  );
