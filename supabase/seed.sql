insert into public.projects (
  title, description_en, description_fr, image, category, technologies,
  is_favorite
) values (
  'Local Supabase Test Project',
  'This sample project verifies that the English description is served from local Supabase.',
  'Ce projet exemple vérifie que la description française provient de Supabase local.',
  'https://images.unsplash.com/photo-1518770660439-4636190af475',
  'web',
  array['Next.js', 'Supabase'],
  true
);

insert into public.experiences (
  title_en, title_fr, company, start_at, end_at,
  description_en, description_fr, sort_order
) values
  (
    'Discovery Internship - QA Tester',
    'Stage Découverte - QA Testeur',
    'Vivetic Group Madagascar',
    '2024-10-01',
    '2024-10-31',
    'Verified that requested functionalities in the requirements document were correctly implemented.',
    'Vérification que les fonctionnalités demandées dans le cahier des charges étaient correctement implémentées.',
    1
  ),
  (
    'Junior Developer',
    'Développeur Junior',
    'Express In Code',
    '2022-05-01',
    '2023-04-30',
    'One-year learning internship: 9 months on site, 3 months remote. Created a Japanese anime streaming website.',
    'Stage d''apprentissage d''un an : 9 mois sur site, 3 mois à distance. Création d''un site de streaming d''anime japonais.',
    2
  );
