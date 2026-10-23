insert into public.skills (id, skill_group_id, sort_order)
values
  ('tools-6', 'tools', 2),
  ('tools-7', 'tools', 3)
on conflict (id) do update
set skill_group_id = excluded.skill_group_id,
    sort_order = excluded.sort_order;

insert into public.skill_translations (skill_id, locale, name)
values
  ('tools-6', 'en', 'Playwright'),
  ('tools-6', 'fr', 'Playwright'),
  ('tools-7', 'en', 'Vitest'),
  ('tools-7', 'fr', 'Vitest')
on conflict (skill_id, locale) do update
set name = excluded.name;

notify pgrst, 'reload schema';
