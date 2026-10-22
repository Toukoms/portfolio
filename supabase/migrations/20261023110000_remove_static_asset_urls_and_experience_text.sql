alter table public.profiles
  drop column if exists resume_url;

alter table public.contacts
  drop column if exists avatar_src;

alter table public.profile_translations
  drop column if exists experience;
