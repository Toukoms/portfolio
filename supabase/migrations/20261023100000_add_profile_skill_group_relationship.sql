alter table public.skill_groups
  add column if not exists profile_id text;

update public.skill_groups
set profile_id = 'primary'
where profile_id is null;

alter table public.skill_groups
  alter column profile_id set not null;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conrelid = 'public.skill_groups'::regclass
      and conname = 'skill_groups_profile_id_fkey'
  ) then
    alter table public.skill_groups
      add constraint skill_groups_profile_id_fkey
      foreign key (profile_id)
      references public.profiles(id)
      on delete cascade;
  end if;
end
$$;

notify pgrst, 'reload schema';
