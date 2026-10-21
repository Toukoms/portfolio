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
  description_en, description_fr, sort_order
) values
  (
    'QA Automation Engineer',
    'Ingénieur QA Automatisation',
    'Genius At Work',
    '2026-06-01',
    null, -- present
    'OBS Manager is a security operations platform that lets agents remotely monitor sites, perform area inspections, manage access and control doors from a centralized interface. Tested different installation configurations (standalone server, microservices, client-only) to ensure reliable installation and operation. Validated module licensing and feature access across video, audio, alarms, wall screens and access control. Tested service availability and user permissions, ensuring each user could access the appropriate areas and modules according to their role.',
    'OBS Manager est une plateforme d''opérations de sécurité permettant aux agents de surveiller des sites à distance, d''effectuer des inspections de zones, de gérer les accès et de contrôler les portes depuis une interface centralisée. Test de différentes configurations d''installation (serveur autonome, microservices, client seul) pour garantir une installation et un fonctionnement fiables. Validation des licences de modules et de l''accès aux fonctionnalités (vidéo, audio, alarmes, murs d''écrans et contrôle d''accès). Test de la disponibilité des services et des permissions utilisateurs, afin que chaque utilisateur accède aux zones et modules adaptés à son rôle.',
    1
  ),
  (
    'Web Developer Next.js (Freelance)',
    'Développeur Web Next.js (Freelance)',
    'Grade''Up - Paris, France (Remote)',
    '2026-01-01',
    '2026-05-31',
    'Grade''Up is an educational marketplace connecting families with teachers for tutoring and at-home academic support. Developed features supporting the tutoring workflow, from family course requests and teacher applications to teacher selection and lesson scheduling. Implemented business workflows for tracking completed teaching hours and generating bills based on lessons delivered. Developed the teacher payment workflow, using completed lessons and hours to calculate the amounts owed to teachers.',
    'Grade''Up est une marketplace éducative qui met en relation des familles et des enseignants pour du soutien scolaire à domicile. Développement des fonctionnalités du parcours de cours particuliers, de la demande de cours par les familles et des candidatures des enseignants jusqu''à la sélection de l''enseignant et la planification des cours. Mise en place des workflows métier de suivi des heures effectuées et de génération des factures selon les cours dispensés. Développement du workflow de paiement des enseignants, en utilisant les cours et heures réalisés pour calculer les montants dus.',
    2
  ),
  (
    'FullStack Developer Next.js',
    'Développeur FullStack Next.js',
    'Genius At Work',
    '2025-05-01',
    '2026-01-31',
    'Vispacem is a SaaS CRM/ERP platform that centralizes business, financial, administrative, operational, HR, analytics, automation and AI-related functions. Worked on the quote process: PDF generation from the quote composition, and sending quotes by email with temporary-token verification so the recipient can view, accept or refuse them. Also worked on company contacts (fetching from documents, adding, editing and removing).',
    'Vispacem est une plateforme SaaS CRM/ERP qui centralise les fonctions commerciales, financières, administratives, opérationnelles, RH, analytiques, d''automatisation et d''IA. Travail sur le processus de devis : génération de PDF à partir de la composition du devis, et envoi par e-mail avec vérification par jeton temporaire pour que le destinataire puisse consulter, accepter ou refuser le devis. Travail également sur les contacts d''entreprise (récupération depuis des documents, ajout, modification et suppression).',
    3
  ),
  (
    'Discovery Internship - QA Tester',
    'Stage Découverte - QA Testeur',
    'Vivetic Group Madagascar',
    '2024-10-01',
    '2024-10-31',
    'Verified that requested functionalities in the requirements document were correctly implemented.',
    'Vérification que les fonctionnalités demandées dans le cahier des charges étaient correctement implémentées.',
    4
  ),
  (
    'Junior Developer',
    'Développeur Junior',
    'Express In Code',
    '2022-05-01',
    '2023-04-30',
    'One-year learning internship: 9 months on site, 3 months remote. Created a Japanese anime streaming website.',
    'Stage d''apprentissage d''un an : 9 mois sur site, 3 mois à distance. Création d''un site de streaming d''anime japonais.',
    5
  );
