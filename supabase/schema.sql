create table public.projects (
  id text primary key default gen_random_uuid(),
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
  start_at date not null,
  end_at date,
  description_en text not null,
  description_fr text not null,
  contributions_en text[] not null default '{}',
  contributions_fr text[] not null default '{}',
  sort_order integer not null default 0,
  is_visible boolean not null default true
);

create table public.portfolio_content (
  id text primary key,
  content jsonb not null check (jsonb_typeof(content) = 'object'),
  updated_at timestamptz not null default now()
);

alter table public.projects enable row level security;
alter table public.experiences enable row level security;
alter table public.portfolio_content enable row level security;

grant select on public.projects, public.experiences to anon, authenticated;
grant select on public.portfolio_content to anon, authenticated;

create policy "Public can read projects"
  on public.projects for select
  to anon, authenticated
  using (true);

create policy "Public can read experiences"
  on public.experiences for select
  to anon, authenticated
  using (true);

create policy "Public can read portfolio content"
  on public.portfolio_content for select
  to anon, authenticated
  using (true);

notify pgrst, 'reload schema';
