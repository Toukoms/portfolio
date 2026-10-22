insert into public.skill_translations (skill_id, locale, name)
values
  ('tools-1', 'en', 'TestComplete'),
  ('tools-1', 'fr', 'TestComplete'),
  ('tools-2', 'en', 'Azure DevOps'),
  ('tools-2', 'fr', 'Azure DevOps'),
  ('tools-3', 'en', 'TFVC'),
  ('tools-3', 'fr', 'TFVC')
on conflict (skill_id, locale) do update set name = excluded.name;
