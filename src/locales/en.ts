export default {
  splashScreen: {
    init: "Initializing system...",
    load: "Loading core components...",
    connect: "Establishing connection...",
    render: "Rendering portfolio data...",
    optimize: "Optimizing user interface...",
    prepare: "Preparing experience...",
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    language: {
      fr: "French",
      en: "English",
      select: "Select language",
    },
    menu: "Menu",
  },
  hero: {
    cta: "Explore my work",
  },
  about: {
    eyebrow: "CHARACTER PROFILE",
    title: "About Me",
    birth: "Born on ",
    biography: {
      title: "BIOGRAPHY",
    },
  },
  skills: {
    frontend: "Web Application Development",
    backend: "Data & Payments",
    tools: "Quality Assurance",
  },
  experience: {
    title: "Experiences",
    present: "Present",
  },
  projects: {
    eyebrow: "PROJECT SELECTION",
    title: "Top Projects",
    description:
      "Selected projects showing web application features, integrations, and product workflows.",
    more: "View More Projects",
    cta: "Click to learn more about this project",
  },
  projectDialog: {
    technologies: "Technologies used",
    demo: "Live demo",
    code: "View code",
  },
  caseStudies: {
    labels: {
      context: "Context",
      role: "My role",
      constraint: "Requirement",
      decision: "Implementation decision",
      outcome: "Delivered",
      next: "What I would measure next",
    },
    items: [
      {
        name: "Grade'Up",
        type: "Education marketplace · Freelance Next.js role",
        context:
          "A tutoring marketplace connects families seeking academic support with teachers.",
        role:
          "I developed features across the family course-request flow, teacher applications and selection, and lesson scheduling.",
        constraint:
          "Billing and teacher payment calculations needed to use lessons actually delivered and hours completed, rather than scheduled lessons.",
        decision:
          "I implemented hour tracking and based bill generation and teacher payment calculations on completed lessons and hours.",
        outcome:
          "The recorded delivery covers the tutoring workflow from course request and teacher selection through scheduling, hour tracking, billing, and teacher payment calculations.",
        next:
          "The project record contains no usage or financial outcome metrics. I would next measure billing/payment reconciliation discrepancies and the time from lesson completion to calculation.",
      },
      {
        name: "Vispacem",
        type: "CRM/ERP · Full-stack Next.js role",
        context:
          "A SaaS CRM/ERP platform centralizes business, financial, administrative, and operational functions. I contributed to its quote and company-contact workflows.",
        role:
          "I worked on quote generation and sending, as well as retrieving company contacts from documents and adding, editing, and removing contacts.",
        constraint:
          "Recipients needed to receive a quote by email and then view, accept, or refuse it through temporary-token verification.",
        decision:
          "I generated the PDF from the composed quote and used temporary-token verification for the recipient's follow-up actions.",
        outcome:
          "Delivered work includes quote PDF generation, email sending, token-verified viewing and responses, and company-contact management.",
        next:
          "The project record provides no measured results. I would next track quote delivery and response rates, plus the accuracy of contact details extracted from documents.",
      },
    ],
  },
  contact: {
    title: "Let's Connect",
    subtitle: "GET IN TOUCH",
    socialLinks: "SOCIAL LINKS",
    description:
      "Ready to start a new project or just want to chat? Send me a message!",
    form: {
      title: "Contact Form",
      sending: "Sending...",
      success: "Message Sent!",
      successMessage: "Thanks for reaching out. I'll get back to you soon.",
      error: "Your message could not be sent. Please try again or email me directly.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
    },
    dialog: {
      title: "Dialog",
    },
    info: {
      title: "Contact Information",
    },
    dialogLines: [
      "Hello there! How can I help you today?",
      "Feel free to share your project ideas or questions.",
      "I'll get back to you as soon as possible!",
    ],
  },
  footer: {
    rights: "© 2025 Tokiniaina Portfolio. All rights reserved.",
    built: "Built with Next.js, React, TypeScript, TailwindCSS, and ShadcnUI",
  },
} as const;
