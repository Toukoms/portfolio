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
    },
  },
  hero: {
    title: {
      start: "Créer des Expériences Numériques ",
      neon: "Immersives",
      end: " ",
    },
    subtitle:
      "Développeur web spécialisé dans les sites et applications modernes, réactifs et interactifs.",
    cta: "Me connaître plus en détail",
  },
  about: {
    title: "À propos de moi",
    birth: "Né le ",
    role: "Développeur Web",
    experience: "ans d'expérience",
    biography: {
      title: "BIOGRAPHIE",
      p1: "Je suis un développeur web passionné, expert dans la création d'applications web modernes et réactives. Avec une solide base en technologies frontend et backend, j'aime créer des expériences utilisateur intuitives qui sont à la fois fonctionnelles et visuellement attrayantes.",
      p2: "Mon parcours dans le développement web a commencé à mes 15 ans, et depuis, je n'ai cessé d'améliorer mes compétences. Je suis spécialisé en React et TypeScript, et j'explore constamment de nouvelles technologies et frameworks pour enrichir mon arsenal de développement.",
      p3: "Quand je ne code pas, vous pouvez me trouver en train d'explorer les nouvelles tendances du design, de regarder des films, ou de monter de niveau dans mes jeux RPG préférés.",
    },
  },
  skills: {
    frontend: "Compétences Frontend",
    backend: "Compétences Backend",
    tools: "Outils & Autres",
  },
  experience: {
    title: "Expériences",
    present: "Aujourd’hui",
  },
  projects: {
    title: "Top Projets",
    description:
      "Voici quelques-uns de mes meilleurs projets, alliant code propre, design soigné et interactions fluides. Chaque projet met en valeur ma passion et mes compétences.",
    more: "Voir Plus de Projets",
    cta: "Cliquez pour en savoir plus sur ce projet",
  },
  contact: {
    title: "Connectons-nous",
    subtitle: "ENTRER EN CONTACT",
    description:
      "Prêt à démarrer un nouveau projet ou simplement discuter ? Envoyez-moi un message !",
    form: {
      title: "Formulaire de Contact",
      sending: "Envoi en cours...",
      success: "Message Envoyé !",
      successMessage: "Merci de m'avoir contacté. Je vous répondrai bientôt.",
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
    rights: "© 2025 Portfolio de Tokiniaina. Tous droits réservés.",
    built: "Construit avec Next.js, React, TypeScript, TailwindCSS et ShadcnUI",
  },
} as const;
