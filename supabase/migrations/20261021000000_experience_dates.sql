alter table public.experiences
  add column start_at date,
  add column end_at date;

update public.experiences
set
  start_at = to_date(
    btrim(split_part(period_en, '-', 1)),
    'FMMonth YYYY'
  ),
  end_at = case
    when position('-' in period_en) > 0
      and lower(btrim(split_part(period_en, '-', 2))) = 'present' then null
    when position('-' in period_en) > 0 then to_date(
      btrim(split_part(period_en, '-', 2)),
      'FMMonth YYYY'
    )
    else to_date(btrim(period_en), 'FMMonth YYYY')
  end;

alter table public.experiences
  alter column start_at set not null,
  drop column period_en,
  drop column period_fr;
