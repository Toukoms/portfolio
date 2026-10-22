alter table public.experiences
  add column employment_type text;

update public.experiences
set employment_type = case id
  when '10000000-0000-4000-8000-000000000001' then 'full_time'
  when '10000000-0000-4000-8000-000000000002' then 'freelance'
  when '10000000-0000-4000-8000-000000000003' then 'full_time'
  when '10000000-0000-4000-8000-000000000004' then 'internship'
  when '10000000-0000-4000-8000-000000000005' then 'internship'
  else 'other'
end;

alter table public.experiences
  alter column employment_type set not null,
  add constraint experiences_employment_type_check
    check (employment_type in ('full_time', 'freelance', 'internship', 'other'));
