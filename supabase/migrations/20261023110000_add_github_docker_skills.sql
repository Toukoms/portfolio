alter table public.skill_groups
  drop constraint if exists skill_groups_section_check;

alter table public.skill_groups
  add constraint skill_groups_section_check
  check (
    section in (
      'frontend',
      'backend',
      'developer_tools',
      'quality_assurance'
    )
  );

update public.skill_groups
set section = 'quality_assurance'
where id = 'tools';

insert into public.skill_groups (id, profile_id, section, sort_order)
values ('developer-tools', 'primary', 'developer_tools', 4)
on conflict (id) do update
set profile_id = excluded.profile_id,
    section = excluded.section,
    sort_order = excluded.sort_order;

insert into public.skill_group_translations (skill_group_id, locale, category)
values
  ('tools', 'en', 'Quality assurance'),
  ('tools', 'fr', 'Assurance qualité'),
  ('developer-tools', 'en', 'Developer tools'),
  ('developer-tools', 'fr', 'Outils de développement')
on conflict (skill_group_id, locale) do update
set category = excluded.category;

insert into public.skills (id, skill_group_id, sort_order)
values
  ('tools-4', 'tools', 4),
  ('tools-5', 'tools', 5)
on conflict (id) do update
set skill_group_id = excluded.skill_group_id,
    sort_order = excluded.sort_order;

insert into public.skill_translations (skill_id, locale, name)
values
  ('tools-4', 'en', 'GitHub'),
  ('tools-4', 'fr', 'GitHub'),
  ('tools-5', 'en', 'Docker'),
  ('tools-5', 'fr', 'Docker')
on conflict (skill_id, locale) do update
set name = excluded.name;

update public.skills
set skill_group_id = 'developer-tools',
    sort_order = case id
      when 'tools-2' then 1
      when 'tools-3' then 2
      when 'tools-4' then 3
      when 'tools-5' then 4
    end
where id in ('tools-2', 'tools-3', 'tools-4', 'tools-5');

notify pgrst, 'reload schema';
