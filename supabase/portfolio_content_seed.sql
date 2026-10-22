-- Profile and case-study content, stored in scope-specific relational tables.

insert into public.profiles (id, name, birthday)
values
  ('primary', 'RAHAJANIRINA Fanomezantsoa Tokiniaina', '2005-06-09')
on conflict (id) do update set name = excluded.name, birthday = excluded.birthday;

insert into public.profile_translations (profile_id, locale, role, summary)
values
  ('primary', 'en', 'Web Application Developer', 'I build web application workflows for real-world services, including tutoring requests through lesson scheduling and billing, and quote creation with temporary-token access. In my current QA role, I test installation configurations, module access, service availability, and user permissions. I am looking for a web application developer role focused on building and validating dependable product features.'),
  ('primary', 'fr', 'Développeur d''applications web', 'Je développe des fonctionnalités web pour des services concrets : demandes de tutorat jusqu''à la planification et la facturation des cours, et création de devis avec accès par jeton temporaire. Dans mon poste actuel en assurance qualité, je teste différentes configurations d''installation, l''accès aux modules, la disponibilité des services et les permissions utilisateurs. Je recherche un poste de développeur d''applications web centré sur la création et la validation de fonctionnalités fiables.')
on conflict (profile_id, locale) do update set role = excluded.role, summary = excluded.summary;

insert into public.hero_translations (profile_id, locale, subtitle, highlight_workflows, highlight_delivery, highlight_quality)
values
  ('primary', 'en', 'I build reliable web applications for everyday business workflows.', 'Product workflows', 'Feature delivery', 'Quality testing'),
  ('primary', 'fr', 'Je crée des applications web fiables pour les processus métier du quotidien.', 'Processus métier', 'Livraison de fonctionnalités', 'Tests qualité')
on conflict (profile_id, locale) do update set subtitle = excluded.subtitle, highlight_workflows = excluded.highlight_workflows, highlight_delivery = excluded.highlight_delivery, highlight_quality = excluded.highlight_quality;

insert into public.biography_translations (profile_id, locale, paragraph_1, paragraph_2, paragraph_3)
values
  ('primary', 'en', 'I focus on building web application features around real product workflows, with experience spanning development and quality assurance.', 'My development work includes tutoring requests, teacher selection, lesson scheduling, billing, and quote creation with recipient review and approval.', 'In my current QA role, I test installation configurations, module access, service availability, and user permissions.'),
  ('primary', 'fr', 'Je me concentre sur la création de fonctionnalités web adaptées aux processus réels d''un produit, avec une expérience en développement et en assurance qualité.', 'Mes travaux de développement couvrent les demandes de tutorat, le choix des enseignants, la planification des cours, la facturation et la création de devis avec consultation et validation par les destinataires.', 'Dans mon poste actuel en assurance qualité, je teste les configurations d''installation, l''accès aux modules, la disponibilité des services et les permissions utilisateurs.')
on conflict (profile_id, locale) do update set paragraph_1 = excluded.paragraph_1, paragraph_2 = excluded.paragraph_2, paragraph_3 = excluded.paragraph_3;

insert into public.contacts (id, profile_id, phone, website, email, location, form_action)
values
  ('primary', 'primary', '+261 32 48 995 32', 'https://www.tokiniaina.dev', 'contact@tokiniaina.dev', 'Antananarivo, Madagascar', 'https://formspree.io/f/xzzedwbp')
on conflict (id) do update set profile_id = excluded.profile_id, phone = excluded.phone, website = excluded.website, email = excluded.email, location = excluded.location, form_action = excluded.form_action;

insert into public.contact_translations (contact_id, locale, avatar_alt)
values
  ('primary', 'en', 'Portrait of Tokiniaina'),
  ('primary', 'fr', 'Portrait de Tokiniaina')
on conflict (contact_id, locale) do update set avatar_alt = excluded.avatar_alt;

insert into public.social_links (contact_id, platform, url)
values
  ('primary', 'github', 'https://github.com/toukoms'),
  ('primary', 'linkedin', 'https://www.linkedin.com/in/fanomezantsoa-tokiniaina/'),
  ('primary', 'facebook', 'https://www.facebook.com/toki.niana.39/')
on conflict (contact_id, platform) do update set url = excluded.url;

insert into public.educations (id, profile_id, institution, location, degree, start_label, end_label, sort_order)
values
  ('education-1', 'primary', 'Haute Ecole d''Informatique (HEI)', 'Madagascar', 'Degree in Génie Logiciel', 'Novembre 2024', 'Novembre 2026', 1),
  ('education-2', 'primary', 'Institut Supérieur des Sciences et de Technologie de Mahajanga (ISSTM)', 'Madagascar', 'Degree in Génie Électronique et Informatique', 'Novembre 2021', 'Novembre 2023', 2),
  ('education-3', 'primary', 'Lycée Technique FMA', 'Antanimasaja, Mahajanga, Madagascar', 'BACC Comptabilité', '2018', '2021', 3)
on conflict (id) do update set profile_id = excluded.profile_id, institution = excluded.institution, location = excluded.location, degree = excluded.degree, start_label = excluded.start_label, end_label = excluded.end_label, sort_order = excluded.sort_order;

insert into public.skill_groups (id, profile_id, section, sort_order)
values
  ('frontend', 'primary', 'frontend', 1),
  ('backend', 'primary', 'backend', 2),
  ('tools', 'primary', 'tools', 3)
on conflict (id) do update set profile_id = excluded.profile_id, section = excluded.section, sort_order = excluded.sort_order;

insert into public.skill_group_translations (skill_group_id, locale, category)
values
  ('frontend', 'en', 'Web application development'),
  ('frontend', 'fr', 'Développement web'),
  ('backend', 'en', 'Data & payments'),
  ('backend', 'fr', 'Données et paiements'),
  ('tools', 'en', 'Quality assurance'),
  ('tools', 'fr', 'Assurance qualité')
on conflict (skill_group_id, locale) do update set category = excluded.category;

insert into public.skills (id, skill_group_id, sort_order)
values
  ('frontend-1', 'frontend', 1),
  ('frontend-2', 'frontend', 2),
  ('frontend-3', 'frontend', 3),
  ('frontend-4', 'frontend', 4),
  ('backend-1', 'backend', 1),
  ('backend-2', 'backend', 2),
  ('backend-3', 'backend', 3),
  ('tools-1', 'tools', 1),
  ('tools-2', 'tools', 2),
  ('tools-3', 'tools', 3)
on conflict (id) do update set skill_group_id = excluded.skill_group_id, sort_order = excluded.sort_order;

insert into public.skill_translations (skill_id, locale, name)
values
  ('frontend-1', 'en', 'Next.js'),
  ('frontend-1', 'fr', 'Next.js'),
  ('frontend-2', 'en', 'React'),
  ('frontend-2', 'fr', 'React'),
  ('frontend-3', 'en', 'TypeScript'),
  ('frontend-3', 'fr', 'TypeScript'),
  ('frontend-4', 'en', 'Tailwind CSS'),
  ('frontend-4', 'fr', 'Tailwind CSS'),
  ('backend-1', 'en', 'Supabase'),
  ('backend-1', 'fr', 'Supabase'),
  ('backend-2', 'en', 'PostgreSQL'),
  ('backend-2', 'fr', 'PostgreSQL'),
  ('backend-3', 'en', 'Stripe'),
  ('backend-3', 'fr', 'Stripe'),
  ('tools-1', 'en', 'TestComplete'),
  ('tools-1', 'fr', 'TestComplete'),
  ('tools-2', 'en', 'Azure DevOps'),
  ('tools-2', 'fr', 'Azure DevOps'),
  ('tools-3', 'en', 'TFVC'),
  ('tools-3', 'fr', 'TFVC')
on conflict (skill_id, locale) do update set name = excluded.name;

insert into public.distinctions (id, profile_id, organization, date_label, sort_order)
values
  ('distinction-1', 'primary', 'Google Developer Group (GDG) Mahajanga', 'Décembre 2022', 1),
  ('distinction-2', 'primary', 'Alliance Voahary Gasy', 'Novembre 2025', 2)
on conflict (id) do update set profile_id = excluded.profile_id, organization = excluded.organization, date_label = excluded.date_label, sort_order = excluded.sort_order;

insert into public.distinction_translations (distinction_id, locale, name, description)
values
  ('distinction-1', 'en', 'Hackathon DevFest 2022 Mahajanga', '1re place avec GoShare, une application mobile de partage d''actualités mondiales sur divers thèmes (technologie, environnement, etc.).'),
  ('distinction-1', 'fr', 'Hackathon DevFest 2022 Mahajanga', '1re place avec GoShare, une application mobile de partage d''actualités mondiales sur divers thèmes (technologie, environnement, etc.).'),
  ('distinction-2', 'en', 'Hackathon Alliance Voahary Gasy, Antananarivo', '3e place avec GoLaw, une application mobile et un back-office web visant à diffuser les lois en version numérique.'),
  ('distinction-2', 'fr', 'Hackathon Alliance Voahary Gasy, Antananarivo', '3e place avec GoLaw, une application mobile et un back-office web visant à diffuser les lois en version numérique.')
on conflict (distinction_id, locale) do update set name = excluded.name, description = excluded.description;

insert into public.certifications (id, profile_id, organization, year_label, url, sort_order)
values
  ('certification-1', 'primary', 'Coursera', '2026', 'https://www.coursera.org/account/accomplishments/specialization/NMSQC1AUPOBR', 1),
  ('certification-2', 'primary', 'Coursera', '2026', 'https://www.coursera.org/account/accomplishments/specialization/5B61461XM9PY', 2)
on conflict (id) do update set profile_id = excluded.profile_id, organization = excluded.organization, year_label = excluded.year_label, url = excluded.url, sort_order = excluded.sort_order;

insert into public.certification_translations (certification_id, locale, name)
values
  ('certification-1', 'en', 'Software Quality Assurance and Testing Certification'),
  ('certification-1', 'fr', 'Software Quality Assurance and Testing Certification'),
  ('certification-2', 'en', 'Meta Front-End Developer Certification'),
  ('certification-2', 'fr', 'Meta Front-End Developer Certification')
on conflict (certification_id, locale) do update set name = excluded.name;

insert into public.languages (id, profile_id, sort_order)
values
  ('language-1', 'primary', 1),
  ('language-2', 'primary', 2)
on conflict (id) do update set profile_id = excluded.profile_id, sort_order = excluded.sort_order;

insert into public.language_translations (language_id, locale, name, level, description)
values
  ('language-1', 'en', 'French', 'B2', 'Lecture, rédaction et communication professionnelle.'),
  ('language-1', 'fr', 'Français', 'B2', 'Lecture, rédaction et communication professionnelle.'),
  ('language-2', 'en', 'English', 'B1', 'Lecture de documentation technique, rédaction et communication basique.'),
  ('language-2', 'fr', 'Anglais', 'B1', 'Lecture de documentation technique, rédaction et communication basique.')
on conflict (language_id, locale) do update set name = excluded.name, level = excluded.level, description = excluded.description;

insert into public.case_study_section_translations (id, locale, eyebrow, title, description)
values
  ('case-studies', 'en', 'SELECTED WORK', 'Case studies', 'Two examples from my development roles, grounded in the work recorded for each project. No unverified impact metrics or team-wide results are claimed.'),
  ('case-studies', 'fr', 'PROJETS SÉLECTIONNÉS', 'Études de cas', 'Deux exemples issus de mes expériences en développement, fondés sur les travaux décrits pour chaque projet. Aucun indicateur d''impact non vérifié ni résultat collectif ne m''est attribué.')
on conflict (id, locale) do update set eyebrow = excluded.eyebrow, title = excluded.title, description = excluded.description;

insert into public.case_studies (id, sort_order)
values
  ('gradeup', 1),
  ('vispacem', 2)
on conflict (id) do update set sort_order = excluded.sort_order;

insert into public.case_study_summaries (case_study_id, locale, name, type, context, role)
values
  ('gradeup', 'en', 'Grade''Up', 'Education marketplace · Freelance Next.js role', 'A tutoring marketplace connects families seeking academic support with teachers.', 'I developed features across the family course-request flow, teacher applications and selection, and lesson scheduling.'),
  ('gradeup', 'fr', 'Grade''Up', 'Marketplace éducative · Développement freelance avec Next.js', 'Une marketplace de cours particuliers met en relation des familles en recherche de soutien scolaire et des enseignants.', 'J''ai développé des fonctionnalités pour les demandes de cours des familles, les candidatures et la sélection des enseignants, ainsi que la planification des cours.'),
  ('vispacem', 'en', 'Vispacem', 'CRM/ERP · Full-stack Next.js role', 'A SaaS CRM/ERP platform centralizes business, financial, administrative, and operational functions. I contributed to its quote and company-contact workflows, with company contact details fetched through the Pappers API.', 'I worked on quote generation and sending, as well as fetching company contact details through the Pappers API and adding, editing, and removing contacts.'),
  ('vispacem', 'fr', 'Vispacem', 'CRM/ERP · Développement full-stack avec Next.js', 'Une plateforme SaaS CRM/ERP centralise des fonctions commerciales, financières, administratives et opérationnelles. J''ai contribué aux processus de devis et de gestion des contacts d''entreprise, dont les coordonnées sont récupérées via l''API Pappers.', 'J''ai travaillé sur la génération et l''envoi des devis, ainsi que sur la récupération des coordonnées des entreprises via l''API Pappers et l''ajout, la modification et la suppression des contacts.')
on conflict (case_study_id, locale) do update set name = excluded.name, type = excluded.type, context = excluded.context, role = excluded.role;

insert into public.case_study_outcomes (case_study_id, locale, constraint_text, decision, outcome, next_step)
values
  ('gradeup', 'en', 'Billing and teacher payment calculations needed to use lessons actually delivered and hours completed, rather than scheduled lessons.', 'I implemented hour tracking and based bill generation and teacher payment calculations on completed lessons and hours.', 'The recorded delivery covers the tutoring workflow from course request and teacher selection through scheduling, hour tracking, billing, and teacher payment calculations.', 'The project record contains no usage or financial outcome metrics. I would next measure billing/payment reconciliation discrepancies and the time from lesson completion to calculation.'),
  ('gradeup', 'fr', 'La facturation et le calcul des paiements aux enseignants devaient se baser sur les cours dispensés et les heures effectuées, et non sur les cours planifiés.', 'J''ai mis en place le suivi des heures et fondé la génération des factures ainsi que le calcul des paiements sur les cours et heures effectués.', 'Les livrables décrits couvrent le parcours de tutorat, de la demande de cours et du choix de l''enseignant à la planification, au suivi des heures, à la facturation et au calcul des paiements.', 'La fiche du projet ne fournit aucun indicateur d''usage ou de résultat financier. Je mesurerais ensuite les écarts de rapprochement facture/paiement et le délai entre un cours terminé et son calcul.'),
  ('vispacem', 'en', 'Recipients needed to receive a quote by email and then view, accept, or refuse it through temporary-token verification.', 'I generated the PDF from the composed quote and used temporary-token verification for the recipient''s follow-up actions.', 'Delivered work includes quote PDF generation, email sending, token-verified viewing and responses, and management of company contacts sourced through the Pappers API.', 'The project record provides no measured results. I would next track quote delivery and response rates, plus the accuracy of contact details retrieved through the Pappers API.'),
  ('vispacem', 'fr', 'Les destinataires devaient recevoir un devis par e-mail, puis pouvoir le consulter, l''accepter ou le refuser après vérification par jeton temporaire.', 'J''ai généré le PDF à partir du devis composé et utilisé la vérification par jeton temporaire pour les actions du destinataire.', 'Les travaux livrés comprennent la génération PDF du devis, son envoi par e-mail, sa consultation et les réponses après vérification par jeton, ainsi que la gestion des contacts d''entreprise récupérés via l''API Pappers.', 'La fiche du projet ne fournit aucun résultat mesuré. Je suivrais ensuite les taux de livraison et de réponse des devis, ainsi que la précision des coordonnées récupérées via l''API Pappers.')
on conflict (case_study_id, locale) do update set constraint_text = excluded.constraint_text, decision = excluded.decision, outcome = excluded.outcome, next_step = excluded.next_step;
