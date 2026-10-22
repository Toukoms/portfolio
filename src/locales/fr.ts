export default {
  splashScreen: {
    init: "Initialisation du système...",
    load: "Chargement des composants principaux...",
    connect: "Établissement de la connexion...",
    render: "Rendu des données du portfolio...",
    optimize: "Optimisation de l'interface utilisateur...",
    prepare: "Préparation de l'expérience...",
  },
  nav: {
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    contact: "Contact",
    language: {
      en: "Anglais",
      fr: "Français",
      select: "Choisir la langue",
    },
    menu: "Menu",
  },
  hero: {
    cta: "Découvrir mon travail",
  },
  about: {
    eyebrow: "PROFIL",
    title: "À propos de moi",
    birth: "Né le ",
    biography: {
      title: "BIOGRAPHIE",
    },
  },
  skills: {
    frontend: "Développement d'applications web",
    backend: "Données et paiements",
    tools: "Assurance qualité",
  },
  experience: {
    title: "Expériences",
    present: "Aujourd’hui",
    duration: "ans en développement logiciel et assurance qualité",
  },
  projects: {
    eyebrow: "PROJETS SÉLECTIONNÉS",
    title: "Top Projets",
    description:
      "Une sélection de projets illustrant des fonctionnalités web, des intégrations et des processus métier.",
    more: "Voir Plus de Projets",
    cta: "Cliquez pour en savoir plus sur ce projet",
  },
  projectDialog: {
    technologies: "Technologies utilisées",
    demo: "Démo en direct",
    code: "Voir le code",
  },
  caseStudies: {
    labels: {
      context: "Contexte",
      role: "Ma contribution",
      constraint: "Besoin",
      decision: "Choix de mise en œuvre",
      outcome: "Livrables",
      next: "Mesure à suivre",
    },
    items: [
      {
        name: "Grade'Up",
        type: "Marketplace éducative · Développement freelance avec Next.js",
        context:
          "Une marketplace de cours particuliers met en relation des familles en recherche de soutien scolaire et des enseignants.",
        role:
          "J'ai développé des fonctionnalités pour les demandes de cours des familles, les candidatures et la sélection des enseignants, ainsi que la planification des cours.",
        constraint:
          "La facturation et le calcul des paiements aux enseignants devaient se baser sur les cours dispensés et les heures effectuées, et non sur les cours planifiés.",
        decision:
          "J'ai mis en place le suivi des heures et fondé la génération des factures ainsi que le calcul des paiements sur les cours et heures effectués.",
        outcome:
          "Les livrables décrits couvrent le parcours de tutorat, de la demande de cours et du choix de l'enseignant à la planification, au suivi des heures, à la facturation et au calcul des paiements.",
        next:
          "La fiche du projet ne fournit aucun indicateur d'usage ou de résultat financier. Je mesurerais ensuite les écarts de rapprochement facture/paiement et le délai entre un cours terminé et son calcul.",
      },
      {
        name: "Vispacem",
        type: "CRM/ERP · Développement full-stack avec Next.js",
        context:
          "Une plateforme SaaS CRM/ERP centralise des fonctions commerciales, financières, administratives et opérationnelles. J'ai contribué aux processus de devis et de gestion des contacts d'entreprise.",
        role:
          "J'ai travaillé sur la génération et l'envoi des devis, ainsi que sur la récupération des contacts depuis des documents et leur ajout, modification et suppression.",
        constraint:
          "Les destinataires devaient recevoir un devis par e-mail, puis pouvoir le consulter, l'accepter ou le refuser après vérification par jeton temporaire.",
        decision:
          "J'ai généré le PDF à partir du devis composé et utilisé la vérification par jeton temporaire pour les actions du destinataire.",
        outcome:
          "Les travaux livrés comprennent la génération PDF du devis, son envoi par e-mail, sa consultation et les réponses après vérification par jeton, ainsi que la gestion des contacts d'entreprise.",
        next:
          "La fiche du projet ne fournit aucun résultat mesuré. Je suivrais ensuite les taux de livraison et de réponse des devis, ainsi que la précision des contacts extraits des documents.",
      },
    ],
  },
  contact: {
    title: "Connectons-nous",
    subtitle: "ENTRER EN CONTACT",
    socialLinks: "RÉSEAUX SOCIAUX",
    description:
      "Prêt à démarrer un nouveau projet ou simplement discuter ? Envoyez-moi un message !",
    form: {
      title: "Formulaire de Contact",
      sending: "Envoi en cours...",
      success: "Message Envoyé !",
      successMessage: "Merci de m'avoir contacté. Je vous répondrai bientôt.",
      error: "Votre message n'a pas pu être envoyé. Réessayez ou contactez-moi par e-mail.",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer le Message",
    },
    dialog: {
      title: "Dialogue",
    },
    info: {
      title: "Informations de Contact",
    },
    dialogLines: [
      "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
      "N'hésitez pas à partager vos idées de projet ou vos questions.",
      "Je vous répondrai dès que possible !",
    ],
  },
  footer: {
    rights: "© {year} Portfolio de Tokiniaina. Tous droits réservés.",
    built: "Construit avec Next.js, React, TypeScript, TailwindCSS et ShadcnUI",
  },
  notFound: {
    title: "Oups ! Page introuvable",
    backHome: "Retour à l'accueil",
  },
} as const;
