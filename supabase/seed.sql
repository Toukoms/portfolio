insert into public.projects (
  title, description_en, description_fr, image, category,
  technologies, demo_url, github_url, is_favorite
) values
  (
    'Ti-Books',
    'Discover traditional Malagasy stories translated into English. Explore the rich cultural heritage of Madagascar through SEO-optimized content, easily found on Google by searching "Tibooks Malagasy".',
    'Découvrez des contes traditionnels malgaches traduits en anglais. Explorez le riche patrimoine culturel de Madagascar grâce à un contenu optimisé pour le SEO, facilement trouvable sur Google en recherchant "Tibooks Malagasy".',
    'https://2zw74dh6lj.ufs.sh/f/R8NxhbQ5cV9Zl6894UH5vTmxzPJN7KMWrZ23jV8nE49bIFXS',
    'web',
    array['Next.js', 'Shadcn', 'Firebase', 'Supabase'],
    'https://ti-books.vercel.app/',
    'https://github.com/toukoms/ti-books',
    true
  ),
  (
    'WebInArt',
    'A platform to host and sell webinars. Organizers can publish their online events, set up ticket sales, and accept secure payments, while attendees can browse webinars and book their spot in a few clicks.',
    'Une plateforme pour héberger et vendre des webinaires. Les organisateurs peuvent publier leurs événements en ligne, mettre en place la vente de billets et accepter des paiements sécurisés, tandis que les participants peuvent parcourir les webinaires et réserver leur place en quelques clics.',
    'https://2zw74dh6lj.ufs.sh/f/R8NxhbQ5cV9Z41ZZ4JUCykYG1biQH925m7apTtExFfLSqug6',
    'web',
    array['Next.js', 'Shadcn', 'Stripe', 'Supabase'],
    'https://webinart.vercel.app',
    'https://github.com/Toukoms/web-in-art',
    true
  ),
  (
    'Damoya',
    'A restaurant website that lets customers browse the menu and place orders remotely, with online payment, so they can order from anywhere without calling or visiting the restaurant.',
    'Un site de restaurant qui permet aux clients de consulter le menu et de passer commande à distance, avec paiement en ligne, afin de commander de n''importe où sans appeler ni se déplacer au restaurant.',
    'https://2zw74dh6lj.ufs.sh/f/R8NxhbQ5cV9Z1irGmd3LOgboFmPGVa8fBxrUy4Yiq0SlMcsA',
    'web',
    array['Next.js', 'Shadcn', 'Stripe', 'Supabase'],
    'https://damoya.vercel.app/',
    'https://github.com/Toukoms/damoya',
    false
  ),
  (
    'Py-Snake',
    'A classic snake game built to practice Python and algorithmic thinking: game loop, collision detection and snake movement logic.',
    'Un jeu de snake classique créé pour pratiquer Python et la logique algorithmique : boucle de jeu, détection de collisions et logique de déplacement du serpent.',
    'https://2zw74dh6lj.ufs.sh/f/R8NxhbQ5cV9ZsY6Zr1PTvCPthkgo03FyQjUBWHAqi6feS7l2',
    'desktop',
    array['Python'],
    null,
    'https://github.com/Toukoms/Py-snake',
    false
  ),
  (
    'Anime-DL',
    'A command-line tool, built with Python, to download anime episodes from VoirAnime. It scrapes the site for episode links and downloads them directly from the terminal.',
    'Un outil en ligne de commande, développé en Python, pour télécharger des épisodes d''animes depuis VoirAnime. Il récupère les liens des épisodes sur le site et les télécharge directement depuis le terminal.',
    'https://2zw74dh6lj.ufs.sh/f/R8NxhbQ5cV9ZgD9MTR6aGUxHQND2At9nRbFB0wk1yzS65Wrd',
    'other',
    array['Python', 'BeautifulSoup4', 'HTTPX'],
    null,
    'https://github.com/Toukoms/anime-dl/',
    true
  );

-- -------- Experiences --------

insert into public.experiences (
  title_en, title_fr, company, start_at, end_at,
  description_en, description_fr, contributions_en, contributions_fr, sort_order
) values
  (
    'QA Automation Engineer',
    'Ingénieur QA Automatisation',
    'Genius At Work',
    '2026-06-01',
    null, -- present
    'OBS Manager is a security operations platform for remote site monitoring, area inspections, access management, and door control.',
    'OBS Manager est une plateforme d''opérations de sécurité pour la surveillance à distance, l''inspection des zones, la gestion des accès et le contrôle des portes.',
    array[
      'Tested standalone-server, microservices, and client-only installation configurations.',
      'Validated module licensing and access to video, audio, alarms, wall screens, and access control.',
      'Tested service availability and whether user permissions matched assigned areas and modules.'
    ],
    array[
      'Testé les configurations d''installation en serveur autonome, microservices et client seul.',
      'Validé les licences et l''accès aux modules vidéo, audio, alarmes, murs d''écrans et contrôle d''accès.',
      'Testé la disponibilité des services et l''adéquation des permissions utilisateurs aux zones et modules.'
    ],
    1
  ),
  (
    'Web Developer Next.js (Freelance)',
    'Développeur Web Next.js (Freelance)',
    'Grade''Up - Paris, France (Remote)',
    '2026-01-01',
    '2026-05-31',
    'Grade''Up is an educational marketplace connecting families with teachers for tutoring and at-home academic support.',
    'Grade''Up est une marketplace éducative qui met en relation des familles et des enseignants pour du soutien scolaire.',
    array[
      'Developed family course-request, teacher-application and selection, and lesson-scheduling features.',
      'Implemented teaching-hour tracking and bill generation based on lessons delivered.',
      'Implemented teacher payment calculations based on completed lessons and hours.'
    ],
    array[
      'Développé les demandes de cours des familles, les candidatures et la sélection des enseignants, ainsi que la planification des cours.',
      'Mis en place le suivi des heures de cours et la génération des factures selon les cours dispensés.',
      'Mis en place le calcul des paiements aux enseignants selon les cours et les heures effectués.'
    ],
    2
  ),
  (
    'FullStack Developer Next.js',
    'Développeur FullStack Next.js',
    'Genius At Work',
    '2025-05-01',
    '2026-01-31',
    'Vispacem is a SaaS CRM/ERP platform centralizing business, financial, administrative, operational, HR, analytics, automation, and AI-related functions.',
    'Vispacem est une plateforme SaaS CRM/ERP qui centralise les fonctions commerciales, financières, administratives, opérationnelles, RH, analytiques, d''automatisation et d''IA.',
    array[
      'Generated quote PDFs from the quote composition and sent quotes by email.',
      'Implemented temporary-token verification so recipients could view, accept, or refuse emailed quotes.',
      'Worked on retrieving company contacts from documents and adding, editing, and removing contacts.'
    ],
    array[
      'Généré des PDF à partir des devis composés et envoyé les devis par e-mail.',
      'Mis en place la vérification par jeton temporaire permettant aux destinataires de consulter, accepter ou refuser les devis reçus par e-mail.',
      'Travaillé sur la récupération des contacts d''entreprise depuis des documents, ainsi que leur ajout, modification et suppression.'
    ],
    3
  ),
  (
    'Discovery Internship - QA Tester',
    'Stage Découverte - QA Testeur',
    'Vivetic Group Madagascar',
    '2024-10-01',
    '2024-10-31',
    'A one-month discovery internship focused on checking delivered functionality against the requirements document.',
    'Stage découverte d''un mois consacré à la vérification des fonctionnalités livrées par rapport au cahier des charges.',
    array['Verified that requested functionality had been correctly implemented.'],
    array['Vérifié que les fonctionnalités demandées avaient été correctement implémentées.'],
    4
  ),
  (
    'Junior Developer',
    'Développeur Junior',
    'Express In Code',
    '2022-05-01',
    '2023-04-30',
    'A one-year learning internship, with nine months on-site and three months remote, focused on web development.',
    'Stage d''apprentissage d''un an, dont neuf mois sur site et trois mois à distance, consacré au développement web.',
    array['Created a Japanese anime streaming website.'],
    array['Créé un site de streaming d''anime japonais.'],
    5
  );
