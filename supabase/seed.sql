insert into public.projects (
  id, title, description_en, description_fr, image, category, technologies,
  is_favorite
) values (
  'local-test-project',
  'Local Supabase Test Project',
  'This sample project verifies that the English description is served from local Supabase.',
  'Ce projet exemple vérifie que la description française provient de Supabase local.',
  'https://images.unsplash.com/photo-1518770660439-4636190af475',
  'web',
  array['Next.js', 'Supabase'],
  true
);

insert into public.experiences (
  title_en, title_fr, company, period_en, period_fr,
  description_en, description_fr, sort_order
) values
  (
    'Discovery Internship - QA Tester',
    'Stage Découverte - QA Testeur',
    'Vivetic Group Madagascar',
    'October 2024',
    'Octobre 2024',
    'Verified that requested functionalities in the requirements document were correctly implemented.',
    'Vérification que les fonctionnalités demandées dans le cahier des charges étaient correctement implémentées.',
    1
  ),
  (
    'Junior Developer',
    'Développeur Junior',
    'Express In Code',
    'May 2022 - April 2023',
    'Mai 2022 - Avril 2023',
    'One-year learning internship: 9 months on site, 3 months remote. Created a Japanese anime streaming website.',
    'Stage d''apprentissage d''un an : 9 mois sur site, 3 mois à distance. Création d''un site de streaming d''anime japonais.',
    2
  );
