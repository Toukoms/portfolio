-- Projects and work history. Localized and repeating fields are kept in related tables.

insert into public.projects (id, title, image, category, is_favorite)
values
  ('ti-books', 'Ti-Books', 'https://2zw74dh6lj.ufs.sh/f/R8NxhbQ5cV9Zl6894UH5vTmxzPJN7KMWrZ23jV8nE49bIFXS', 'web', true),
  ('webinart', 'WebInArt', 'https://2zw74dh6lj.ufs.sh/f/R8NxhbQ5cV9Z41ZZ4JUCykYG1biQH925m7apTtExFfLSqug6', 'web', true),
  ('damoya', 'Damoya', 'https://2zw74dh6lj.ufs.sh/f/R8NxhbQ5cV9Z1irGmd3LOgboFmPGVa8fBxrUy4Yiq0SlMcsA', 'web', false),
  ('py-snake', 'Py-Snake', 'https://2zw74dh6lj.ufs.sh/f/R8NxhbQ5cV9ZsY6Zr1PTvCPthkgo03FyQjUBWHAqi6feS7l2', 'desktop', false),
  ('anime-dl', 'Anime-DL', 'https://2zw74dh6lj.ufs.sh/f/R8NxhbQ5cV9ZgD9MTR6aGUxHQND2At9nRbFB0wk1yzS65Wrd', 'other', true)
on conflict (id) do update set title = excluded.title, image = excluded.image, category = excluded.category, is_favorite = excluded.is_favorite;

insert into public.project_translations (project_id, locale, description)
values
  ('ti-books', 'en', 'Discover traditional Malagasy stories translated into English. Explore the rich cultural heritage of Madagascar through SEO-optimized content, easily found on Google by searching "Tibooks Malagasy".'),
  ('ti-books', 'fr', 'Découvrez des contes traditionnels malgaches traduits en anglais. Explorez le riche patrimoine culturel de Madagascar grâce à un contenu optimisé pour le SEO, facilement trouvable sur Google en recherchant "Tibooks Malagasy".'),
  ('webinart', 'en', 'A platform to host and sell webinars. Organizers can publish their online events, set up ticket sales, and accept secure payments, while attendees can browse webinars and book their spot in a few clicks.'),
  ('webinart', 'fr', 'Une plateforme pour héberger et vendre des webinaires. Les organisateurs peuvent publier leurs événements en ligne, mettre en place la vente de billets et accepter des paiements sécurisés, tandis que les participants peuvent parcourir les webinaires et réserver leur place en quelques clics.'),
  ('damoya', 'en', 'A restaurant website that lets customers browse the menu and place orders remotely, with online payment, so they can order from anywhere without calling or visiting the restaurant.'),
  ('damoya', 'fr', 'Un site de restaurant qui permet aux clients de consulter le menu et de passer commande à distance, avec paiement en ligne, afin de commander de n''importe où sans appeler ni se déplacer au restaurant.'),
  ('py-snake', 'en', 'A classic snake game built to practice Python and algorithmic thinking: game loop, collision detection and snake movement logic.'),
  ('py-snake', 'fr', 'Un jeu de snake classique créé pour pratiquer Python et la logique algorithmique : boucle de jeu, détection de collisions et logique de déplacement du serpent.'),
  ('anime-dl', 'en', 'A command-line tool, built with Python, to download anime episodes from VoirAnime. It scrapes the site for episode links and downloads them directly from the terminal.'),
  ('anime-dl', 'fr', 'Un outil en ligne de commande, développé en Python, pour télécharger des épisodes d''animes depuis VoirAnime. Il récupère les liens des épisodes sur le site et les télécharge directement depuis le terminal.')
on conflict (project_id, locale) do update set description = excluded.description;

insert into public.project_links (project_id, demo_url, github_url)
values
  ('ti-books', 'https://ti-books.vercel.app/', 'https://github.com/toukoms/ti-books'),
  ('webinart', 'https://webinart.vercel.app', 'https://github.com/Toukoms/web-in-art'),
  ('damoya', 'https://damoya.vercel.app/', 'https://github.com/Toukoms/damoya'),
  ('py-snake', null, 'https://github.com/Toukoms/Py-snake'),
  ('anime-dl', null, 'https://github.com/Toukoms/anime-dl/')
on conflict (project_id) do update set demo_url = excluded.demo_url, github_url = excluded.github_url;

insert into public.project_technologies (project_id, sort_order, technology)
values
  ('ti-books', 1, 'Next.js'),
  ('ti-books', 2, 'Shadcn'),
  ('ti-books', 3, 'Firebase'),
  ('ti-books', 4, 'Supabase'),
  ('webinart', 1, 'Next.js'),
  ('webinart', 2, 'Shadcn'),
  ('webinart', 3, 'Stripe'),
  ('webinart', 4, 'Supabase'),
  ('damoya', 1, 'Next.js'),
  ('damoya', 2, 'Shadcn'),
  ('damoya', 3, 'Stripe'),
  ('damoya', 4, 'Supabase'),
  ('py-snake', 1, 'Python'),
  ('anime-dl', 1, 'Python'),
  ('anime-dl', 2, 'BeautifulSoup4'),
  ('anime-dl', 3, 'HTTPX')
on conflict (project_id, sort_order) do update set technology = excluded.technology;

insert into public.experiences (id, company, start_at, end_at, sort_order)
values
  ('10000000-0000-4000-8000-000000000001', 'Genius At Work', '2026-06-01', null, 1),
  ('10000000-0000-4000-8000-000000000002', 'Grade''Up - Paris, France (Remote)', '2026-01-01', '2026-05-31', 2),
  ('10000000-0000-4000-8000-000000000003', 'Genius At Work', '2025-05-01', '2026-01-31', 3),
  ('10000000-0000-4000-8000-000000000004', 'Vivetic Group Madagascar', '2024-10-01', '2024-10-31', 4),
  ('10000000-0000-4000-8000-000000000005', 'Express In Code', '2022-05-01', '2023-04-30', 5)
on conflict (id) do update set company = excluded.company, start_at = excluded.start_at, end_at = excluded.end_at, sort_order = excluded.sort_order;

insert into public.experience_translations (experience_id, locale, title, description)
values
  ('10000000-0000-4000-8000-000000000001', 'en', 'QA Automation Engineer', 'OBS Manager is a security operations platform for remote site monitoring, area inspections, access management, and door control.'),
  ('10000000-0000-4000-8000-000000000001', 'fr', 'Ingénieur QA Automatisation', 'OBS Manager est une plateforme d''opérations de sécurité pour la surveillance à distance, l''inspection des zones, la gestion des accès et le contrôle des portes.'),
  ('10000000-0000-4000-8000-000000000002', 'en', 'Web Developer Next.js (Freelance)', 'Grade''Up is an educational marketplace connecting families with teachers for tutoring and at-home academic support.'),
  ('10000000-0000-4000-8000-000000000002', 'fr', 'Développeur Web Next.js (Freelance)', 'Grade''Up est une marketplace éducative qui met en relation des familles et des enseignants pour du soutien scolaire.'),
  ('10000000-0000-4000-8000-000000000003', 'en', 'FullStack Developer Next.js', 'Vispacem is a SaaS CRM/ERP platform centralizing business, financial, administrative, operational, HR, analytics, automation, and AI-related functions. Company contact details are fetched through the Pappers API.'),
  ('10000000-0000-4000-8000-000000000003', 'fr', 'Développeur FullStack Next.js', 'Vispacem est une plateforme SaaS CRM/ERP qui centralise les fonctions commerciales, financières, administratives, opérationnelles, RH, analytiques, d''automatisation et d''IA. Les coordonnées des entreprises sont récupérées via l''API Pappers.'),
  ('10000000-0000-4000-8000-000000000004', 'en', 'Discovery Internship - QA Tester', 'A one-month discovery internship focused on checking delivered functionality against the requirements document.'),
  ('10000000-0000-4000-8000-000000000004', 'fr', 'Stage Découverte - QA Testeur', 'Stage découverte d''un mois consacré à la vérification des fonctionnalités livrées par rapport au cahier des charges.'),
  ('10000000-0000-4000-8000-000000000005', 'en', 'Junior Developer', 'A one-year learning internship, with nine months on-site and three months remote, focused on web development.'),
  ('10000000-0000-4000-8000-000000000005', 'fr', 'Développeur Junior', 'Stage d''apprentissage d''un an, dont neuf mois sur site et trois mois à distance, consacré au développement web.')
on conflict (experience_id, locale) do update set title = excluded.title, description = excluded.description;

insert into public.experience_contributions (experience_id, locale, sort_order, contribution)
values
  ('10000000-0000-4000-8000-000000000001', 'en', 1, 'Tested standalone-server, microservices, and client-only installation configurations.'),
  ('10000000-0000-4000-8000-000000000001', 'en', 2, 'Validated module licensing and access to video, audio, alarms, wall screens, and access control.'),
  ('10000000-0000-4000-8000-000000000001', 'en', 3, 'Tested service availability and whether user permissions matched assigned areas and modules.'),
  ('10000000-0000-4000-8000-000000000001', 'fr', 1, 'Testé les configurations d''installation en serveur autonome, microservices et client seul.'),
  ('10000000-0000-4000-8000-000000000001', 'fr', 2, 'Validé les licences et l''accès aux modules vidéo, audio, alarmes, murs d''écrans et contrôle d''accès.'),
  ('10000000-0000-4000-8000-000000000001', 'fr', 3, 'Testé la disponibilité des services et l''adéquation des permissions utilisateurs aux zones et modules.'),
  ('10000000-0000-4000-8000-000000000002', 'en', 1, 'Developed family course-request, teacher-application and selection, and lesson-scheduling features.'),
  ('10000000-0000-4000-8000-000000000002', 'en', 2, 'Implemented teaching-hour tracking and bill generation based on lessons delivered.'),
  ('10000000-0000-4000-8000-000000000002', 'en', 3, 'Implemented teacher payment calculations based on completed lessons and hours.'),
  ('10000000-0000-4000-8000-000000000002', 'fr', 1, 'Développé les demandes de cours des familles, les candidatures et la sélection des enseignants, ainsi que la planification des cours.'),
  ('10000000-0000-4000-8000-000000000002', 'fr', 2, 'Mis en place le suivi des heures de cours et la génération des factures selon les cours dispensés.'),
  ('10000000-0000-4000-8000-000000000002', 'fr', 3, 'Mis en place le calcul des paiements aux enseignants selon les cours et les heures effectués.'),
  ('10000000-0000-4000-8000-000000000003', 'en', 1, 'Generated quote PDFs from the quote composition and sent quotes by email.'),
  ('10000000-0000-4000-8000-000000000003', 'en', 2, 'Implemented temporary-token verification so recipients could view, accept, or refuse emailed quotes.'),
  ('10000000-0000-4000-8000-000000000003', 'en', 3, 'Worked on fetching company contact details through the Pappers API and adding, editing, and removing contacts.'),
  ('10000000-0000-4000-8000-000000000003', 'fr', 1, 'Généré des PDF à partir des devis composés et envoyé les devis par e-mail.'),
  ('10000000-0000-4000-8000-000000000003', 'fr', 2, 'Mis en place la vérification par jeton temporaire permettant aux destinataires de consulter, accepter ou refuser les devis reçus par e-mail.'),
  ('10000000-0000-4000-8000-000000000003', 'fr', 3, 'Travaillé sur la récupération des coordonnées des entreprises via l''API Pappers, ainsi que sur l''ajout, la modification et la suppression des contacts.'),
  ('10000000-0000-4000-8000-000000000004', 'en', 1, 'Verified that requested functionality had been correctly implemented.'),
  ('10000000-0000-4000-8000-000000000004', 'fr', 1, 'Vérifié que les fonctionnalités demandées avaient été correctement implémentées.'),
  ('10000000-0000-4000-8000-000000000005', 'en', 1, 'Created a Japanese anime streaming website.'),
  ('10000000-0000-4000-8000-000000000005', 'fr', 1, 'Créé un site de streaming d''anime japonais.')
on conflict (experience_id, locale, sort_order) do update set contribution = excluded.contribution;
