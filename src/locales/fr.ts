export default {
  splashScreen: {
    init: "Initialisation du système...",
    load: "Chargement des composants principaux...",
    connect: "Établissement de la connexion...",
    render: "Rendu des données du portfolio...",
    optimize: "Optimisation de l'interface utilisateur...",
    prepare: "Préparation de l'expérience..."
  },
  nav: {
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    contact: "Contact",
    language: {
      title: "Langues",
      en: "Anglais",
      fr: "Français"
    }
  },
  hero: {
    title: {
      start: "Créer des Expériences Numériques ",
      neon: "Immersives",
      end: " "
    },
    subtitle: "Développeur web spécialisé dans les sites et applications modernes, réactifs et interactifs.",
    cta: "Me connaître plus en détail"
  },
  about: {
    
    title: "À propos de moi",
    name: "RAHAJANIRINA Fanomezantsoa Tokiniaina",
    role: "Développeur Web",
    experience: "3 ans d'expérience",
    description: "Je suis un développeur web passionné, expert dans la création d'applications web modernes et réactives. Avec une solide base en technologies frontend et backend, j'aime concevoir des expériences utilisateur intuitives, fonctionnelles et esthétiques."
  },
  skills: {
    frontend: "Compétences Frontend",
    backend: "Compétences Backend",
    tools: "Outils & Autres"
  },
  experience: {
    title: "Expérience",
    qa: {
      title: "Stage Découverte QA Tester",
      company: "Vivetic Group Madagascar",
      date: "Octobre 2024",
      description: "Vérification que les fonctionnalités demandées dans le cahier des charges étaient correctement implémentées."
    },
    dev: {
      title: "Développeur Junior",
      company: "Express In Code",
      date: "Mai 2022 - Avril 2023",
      description: "Stage d'apprentissage d'un an : 9 mois sur site, 3 mois à distance. Création d'un site de streaming d'anime japonais."
    }
  },
  projects: {
    title: "Projets en vedette",
    tapakila: {
      title: "Tapakila",
      description: "Une application web pour rechercher des événements comme des fêtes ou des festivals près de chez vous. Encore en développement !"
    },
    weather: {
      title: "Prévisions Météo",
      description: "Une belle application météo avec des prévisions sur 14 jours, des mises à jour horaires et des cartes interactives utilisant des API modernes."
    },
    tibooks: {
      title: "Ti-books Malagasy",
      description: "Découvrez des histoires traditionnelles malgaches traduites en anglais. Explorez le riche patrimoine culturel de Madagascar avec un contenu optimisé pour le SEO."
    }
  },
  contact: {
    title: "Restons en contact",
    description: "Prêt à démarrer un nouveau projet ou simplement envie de discuter ? Envoyez-moi un message !",
    form: {
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer le message"
    }
  },
  footer: {
    rights: "© 2025 Portfolio de Tokiniaina. Tous droits réservés.",
    built: "Construit avec Next.js, React, TypeScript, TailwindCSS et ShadcnUI"
  }
} as const;
