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

notify pgrst, 'reload schema';
