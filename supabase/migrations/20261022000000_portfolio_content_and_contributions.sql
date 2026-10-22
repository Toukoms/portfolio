create table if not exists public.portfolio_content (
  id text primary key,
  content jsonb not null check (jsonb_typeof(content) = 'object'),
  updated_at timestamptz not null default now()
);

alter table public.portfolio_content enable row level security;

grant select on public.portfolio_content to anon, authenticated;

drop policy if exists "Public can read portfolio content"
  on public.portfolio_content;
create policy "Public can read portfolio content"
  on public.portfolio_content for select
  to anon, authenticated
  using (true);

alter table public.experiences
  add column if not exists contributions_en text[] not null default '{}',
  add column if not exists contributions_fr text[] not null default '{}';

update public.experiences
set
  description_en = 'OBS Manager is a security operations platform for remote site monitoring, area inspections, access management, and door control.',
  description_fr = 'OBS Manager est une plateforme d''opérations de sécurité pour la surveillance à distance, l''inspection des zones, la gestion des accès et le contrôle des portes.',
  contributions_en = array[
    'Tested standalone-server, microservices, and client-only installation configurations.',
    'Validated module licensing and access to video, audio, alarms, wall screens, and access control.',
    'Tested service availability and whether user permissions matched assigned areas and modules.'
  ],
  contributions_fr = array[
    'Testé les configurations d''installation en serveur autonome, microservices et client seul.',
    'Validé les licences et l''accès aux modules vidéo, audio, alarmes, murs d''écrans et contrôle d''accès.',
    'Testé la disponibilité des services et l''adéquation des permissions utilisateurs aux zones et modules.'
  ]
where sort_order = 1
  and title_en = 'QA Automation Engineer';

update public.experiences
set
  description_en = 'Grade''Up is an educational marketplace connecting families with teachers for tutoring and at-home academic support.',
  description_fr = 'Grade''Up est une marketplace éducative qui met en relation des familles et des enseignants pour du soutien scolaire.',
  contributions_en = array[
    'Developed family course-request, teacher-application and selection, and lesson-scheduling features.',
    'Implemented teaching-hour tracking and bill generation based on lessons delivered.',
    'Implemented teacher payment calculations based on completed lessons and hours.'
  ],
  contributions_fr = array[
    'Développé les demandes de cours des familles, les candidatures et la sélection des enseignants, ainsi que la planification des cours.',
    'Mis en place le suivi des heures de cours et la génération des factures selon les cours dispensés.',
    'Mis en place le calcul des paiements aux enseignants selon les cours et les heures effectués.'
  ]
where sort_order = 2
  and title_en = 'Web Developer Next.js (Freelance)';

update public.experiences
set
  description_en = 'Vispacem is a SaaS CRM/ERP platform centralizing business, financial, administrative, operational, HR, analytics, automation, and AI-related functions.',
  description_fr = 'Vispacem est une plateforme SaaS CRM/ERP qui centralise les fonctions commerciales, financières, administratives, opérationnelles, RH, analytiques, d''automatisation et d''IA.',
  contributions_en = array[
    'Generated quote PDFs from the quote composition and sent quotes by email.',
    'Implemented temporary-token verification so recipients could view, accept, or refuse emailed quotes.',
    'Worked on retrieving company contacts from documents and adding, editing, and removing contacts.'
  ],
  contributions_fr = array[
    'Généré des PDF à partir des devis composés et envoyé les devis par e-mail.',
    'Mis en place la vérification par jeton temporaire permettant aux destinataires de consulter, accepter ou refuser les devis reçus par e-mail.',
    'Travaillé sur la récupération des contacts d''entreprise depuis des documents, ainsi que leur ajout, modification et suppression.'
  ]
where sort_order = 3
  and title_en = 'FullStack Developer Next.js';

update public.experiences
set
  description_en = 'A one-month discovery internship focused on checking delivered functionality against the requirements document.',
  description_fr = 'Stage découverte d''un mois consacré à la vérification des fonctionnalités livrées par rapport au cahier des charges.',
  contributions_en = array[
    'Verified that requested functionality had been correctly implemented.'
  ],
  contributions_fr = array[
    'Vérifié que les fonctionnalités demandées avaient été correctement implémentées.'
  ]
where sort_order = 4
  and title_en = 'Discovery Internship - QA Tester';

update public.experiences
set
  description_en = 'A one-year learning internship, with nine months on-site and three months remote, focused on web development.',
  description_fr = 'Stage d''apprentissage d''un an, dont neuf mois sur site et trois mois à distance, consacré au développement web.',
  contributions_en = array[
    'Created a Japanese anime streaming website.'
  ],
  contributions_fr = array[
    'Créé un site de streaming d''anime japonais.'
  ]
where sort_order = 5
  and title_en = 'Junior Developer';

insert into public.portfolio_content (id, content) values
(
  'profile',
  $profile$
  {
    "name": "RAHAJANIRINA Fanomezantsoa Tokiniaina",
    "role": {
      "en": "Web Application Developer",
      "fr": "Développeur d'applications web"
    },
    "experience": {
      "en": "2+ years across software development and QA",
      "fr": "2+ ans en développement logiciel et assurance qualité"
    },
    "profile": {
      "en": "I build web application workflows for real-world services, including tutoring requests through lesson scheduling and billing, and quote creation with temporary-token access. In my current QA role, I test installation configurations, module access, service availability, and user permissions. I am looking for a web application developer role focused on building and validating dependable product features.",
      "fr": "Je développe des fonctionnalités web pour des services concrets : demandes de tutorat jusqu'à la planification et la facturation des cours, et création de devis avec accès par jeton temporaire. Dans mon poste actuel en assurance qualité, je teste différentes configurations d'installation, l'accès aux modules, la disponibilité des services et les permissions utilisateurs. Je recherche un poste de développeur d'applications web centré sur la création et la validation de fonctionnalités fiables."
    },
    "hero": {
      "subtitle": {
        "en": "I build reliable web applications for everyday business workflows.",
        "fr": "Je crée des applications web fiables pour les processus métier du quotidien."
      },
      "highlights": {
        "workflows": {
          "en": "Product workflows",
          "fr": "Processus métier"
        },
        "delivery": {
          "en": "Feature delivery",
          "fr": "Livraison de fonctionnalités"
        },
        "quality": {
          "en": "Quality testing",
          "fr": "Tests qualité"
        }
      }
    },
    "biography": {
      "p1": {
        "en": "I focus on building web application features around real product workflows, with experience spanning development and quality assurance.",
        "fr": "Je me concentre sur la création de fonctionnalités web adaptées aux processus réels d'un produit, avec une expérience en développement et en assurance qualité."
      },
      "p2": {
        "en": "My development work includes tutoring requests, teacher selection, lesson scheduling, billing, and quote creation with recipient review and approval.",
        "fr": "Mes travaux de développement couvrent les demandes de tutorat, le choix des enseignants, la planification des cours, la facturation et la création de devis avec consultation et validation par les destinataires."
      },
      "p3": {
        "en": "In my current QA role, I test installation configurations, module access, service availability, and user permissions.",
        "fr": "Dans mon poste actuel en assurance qualité, je teste les configurations d'installation, l'accès aux modules, la disponibilité des services et les permissions utilisateurs."
      }
    },
    "birthday": "2005-06-09",
    "resumeUrl": "/CV_RAHAJANIRINA_Tokiniaina__Developer.pdf",
    "contact": {
      "phone": "+261 32 48 995 32",
      "website": "https://www.tokiniaina.dev",
      "email": "contact@tokiniaina.dev",
      "location": "Antananarivo, Madagascar",
      "formAction": "https://formspree.io/f/xzzedwbp",
      "avatar": {
        "src": "/pdp.jpg",
        "alt": {
          "en": "Portrait of Tokiniaina",
          "fr": "Portrait de Tokiniaina"
        }
      },
      "social": {
        "github": "https://github.com/toukoms",
        "linkedin": "https://www.linkedin.com/in/fanomezantsoa-tokiniaina/",
        "facebook": "https://www.facebook.com/toki.niana.39/"
      }
    },
    "education": [
      {
        "institution": "Haute Ecole d'Informatique (HEI)",
        "location": "Madagascar",
        "degree": "Degree in Génie Logiciel",
        "start": "Novembre 2024",
        "end": "Novembre 2026"
      },
      {
        "institution": "Institut Supérieur des Sciences et de Technologie de Mahajanga (ISSTM)",
        "location": "Madagascar",
        "degree": "Degree in Génie Électronique et Informatique",
        "start": "Novembre 2021",
        "end": "Novembre 2023"
      },
      {
        "institution": "Lycée Technique FMA",
        "location": "Antanimasaja, Mahajanga, Madagascar",
        "degree": "BACC Comptabilité",
        "start": "2018",
        "end": "2021"
      }
    ],
    "skills": [
      {
        "section": "frontend",
        "category": {
          "en": "Web application development",
          "fr": "Développement web"
        },
        "items": [
          {"en": "Next.js", "fr": "Next.js"},
          {"en": "React", "fr": "React"},
          {"en": "TypeScript", "fr": "TypeScript"},
          {"en": "Tailwind CSS", "fr": "Tailwind CSS"}
        ]
      },
      {
        "section": "backend",
        "category": {
          "en": "Data & payments",
          "fr": "Données et paiements"
        },
        "items": [
          {"en": "Supabase", "fr": "Supabase"},
          {"en": "PostgreSQL", "fr": "PostgreSQL"},
          {"en": "Stripe", "fr": "Stripe"}
        ]
      },
      {
        "section": "tools",
        "category": {
          "en": "Quality assurance",
          "fr": "Assurance qualité"
        },
        "items": [
          {"en": "Functional testing", "fr": "Tests fonctionnels"},
          {"en": "Installation testing", "fr": "Tests d'installation"},
          {
            "en": "Role-based access testing",
            "fr": "Tests des accès par rôle"
          }
        ]
      }
    ],
    "distinctions": [
      {
        "name": "Hackathon DevFest 2022 Mahajanga",
        "organization": "Google Developer Group (GDG) Mahajanga",
        "date": "Décembre 2022",
        "description": "1re place avec GoShare, une application mobile de partage d'actualités mondiales sur divers thèmes (technologie, environnement, etc.)."
      },
      {
        "name": "Hackathon Alliance Voahary Gasy, Antananarivo",
        "organization": "Alliance Voahary Gasy",
        "date": "Novembre 2025",
        "description": "3e place avec GoLaw, une application mobile et un back-office web visant à diffuser les lois en version numérique."
      }
    ],
    "certifications": [
      {
        "name": "Software Quality Assurance and Testing Certification",
        "organization": "Coursera",
        "year": "2026",
        "url": "https://www.coursera.org/account/accomplishments/specialization/NMSQC1AUPOBR"
      },
      {
        "name": "Meta Front-End Developer Certification",
        "organization": "Coursera",
        "year": "2026",
        "url": "https://www.coursera.org/account/accomplishments/specialization/5B61461XM9PY"
      }
    ],
    "languages": [
      {
        "name": "Français",
        "level": "B2",
        "description": "Lecture, rédaction et communication professionnelle."
      },
      {
        "name": "Anglais",
        "level": "B1",
        "description": "Lecture de documentation technique, rédaction et communication basique."
      }
    ]
  }
  $profile$::jsonb
),
(
  'case-studies',
  $caseStudies$
  {
    "eyebrow": {
      "en": "SELECTED WORK",
      "fr": "PROJETS SÉLECTIONNÉS"
    },
    "title": {
      "en": "Case studies",
      "fr": "Études de cas"
    },
    "description": {
      "en": "Two examples from my development roles, grounded in the work recorded for each project. No unverified impact metrics or team-wide results are claimed.",
      "fr": "Deux exemples issus de mes expériences en développement, fondés sur les travaux décrits pour chaque projet. Aucun indicateur d'impact non vérifié ni résultat collectif ne m'est attribué."
    },
    "items": [
      {
        "id": "gradeup",
        "name": {"en": "Grade'Up", "fr": "Grade'Up"},
        "type": {
          "en": "Education marketplace · Freelance Next.js role",
          "fr": "Marketplace éducative · Développement freelance avec Next.js"
        },
        "context": {
          "en": "A tutoring marketplace connects families seeking academic support with teachers.",
          "fr": "Une marketplace de cours particuliers met en relation des familles en recherche de soutien scolaire et des enseignants."
        },
        "role": {
          "en": "I developed features across the family course-request flow, teacher applications and selection, and lesson scheduling.",
          "fr": "J'ai développé des fonctionnalités pour les demandes de cours des familles, les candidatures et la sélection des enseignants, ainsi que la planification des cours."
        },
        "constraint": {
          "en": "Billing and teacher payment calculations needed to use lessons actually delivered and hours completed, rather than scheduled lessons.",
          "fr": "La facturation et le calcul des paiements aux enseignants devaient se baser sur les cours dispensés et les heures effectuées, et non sur les cours planifiés."
        },
        "decision": {
          "en": "I implemented hour tracking and based bill generation and teacher payment calculations on completed lessons and hours.",
          "fr": "J'ai mis en place le suivi des heures et fondé la génération des factures ainsi que le calcul des paiements sur les cours et heures effectués."
        },
        "outcome": {
          "en": "The recorded delivery covers the tutoring workflow from course request and teacher selection through scheduling, hour tracking, billing, and teacher payment calculations.",
          "fr": "Les livrables décrits couvrent le parcours de tutorat, de la demande de cours et du choix de l'enseignant à la planification, au suivi des heures, à la facturation et au calcul des paiements."
        },
        "next": {
          "en": "The project record contains no usage or financial outcome metrics. I would next measure billing/payment reconciliation discrepancies and the time from lesson completion to calculation.",
          "fr": "La fiche du projet ne fournit aucun indicateur d'usage ou de résultat financier. Je mesurerais ensuite les écarts de rapprochement facture/paiement et le délai entre un cours terminé et son calcul."
        }
      },
      {
        "id": "vispacem",
        "name": {"en": "Vispacem", "fr": "Vispacem"},
        "type": {
          "en": "CRM/ERP · Full-stack Next.js role",
          "fr": "CRM/ERP · Développement full-stack avec Next.js"
        },
        "context": {
          "en": "A SaaS CRM/ERP platform centralizes business, financial, administrative, and operational functions. I contributed to its quote and company-contact workflows.",
          "fr": "Une plateforme SaaS CRM/ERP centralise des fonctions commerciales, financières, administratives et opérationnelles. J'ai contribué aux processus de devis et de gestion des contacts d'entreprise."
        },
        "role": {
          "en": "I worked on quote generation and sending, as well as retrieving company contacts from documents and adding, editing, and removing contacts.",
          "fr": "J'ai travaillé sur la génération et l'envoi des devis, ainsi que sur la récupération des contacts depuis des documents et leur ajout, modification et suppression."
        },
        "constraint": {
          "en": "Recipients needed to receive a quote by email and then view, accept, or refuse it through temporary-token verification.",
          "fr": "Les destinataires devaient recevoir un devis par e-mail, puis pouvoir le consulter, l'accepter ou le refuser après vérification par jeton temporaire."
        },
        "decision": {
          "en": "I generated the PDF from the composed quote and used temporary-token verification for the recipient's follow-up actions.",
          "fr": "J'ai généré le PDF à partir du devis composé et utilisé la vérification par jeton temporaire pour les actions du destinataire."
        },
        "outcome": {
          "en": "Delivered work includes quote PDF generation, email sending, token-verified viewing and responses, and company-contact management.",
          "fr": "Les travaux livrés comprennent la génération PDF du devis, son envoi par e-mail, sa consultation et les réponses après vérification par jeton, ainsi que la gestion des contacts d'entreprise."
        },
        "next": {
          "en": "The project record provides no measured results. I would next track quote delivery and response rates, plus the accuracy of contact details extracted from documents.",
          "fr": "La fiche du projet ne fournit aucun résultat mesuré. Je suivrais ensuite les taux de livraison et de réponse des devis, ainsi que la précision des contacts extraits des documents."
        }
      }
    ]
  }
  $caseStudies$::jsonb
)
on conflict (id) do nothing;

notify pgrst, 'reload schema';
