
export default {
  splashScreen: {
    init: "Initializing system...",
    load: "Loading core components...",
    connect: "Establishing connection...",
    render: "Rendering portfolio data...",
    optimize: "Optimizing user interface...",
    prepare: "Preparing experience..."
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    language: {
      title: "Languages",
      fr: "French",
      en: "English"
    }
  },
  hero: {
    title: {
      start: "Creating",
      neon: "Immersive",
      end: "Digital Experiences"
    },
    subtitle: "Web developer specializing in modern, responsive, and interactive websites and applications.",
    cta: "Learn more about me"
  },
  about: {
    title: "About Me",
    name: "RAHAJANIRINA Fanomezantsoa Tokiniaina",
    role: "Web Developer",
    experience: "3 years of experience",
    description: "I'm a passionate web developer with expertise in creating modern, responsive web applications. With a strong foundation in both frontend and backend technologies, I love crafting intuitive user experiences that are both functional and visually appealing."
  },
  skills: {
    frontend: "Frontend Skills",
    backend: "Backend Skills",
    tools: "Tools & Other"
  },
  experience: {
    title: "Experience",
    qa: {
      title: "Discovery Internship QA Tester",
      company: "Vivetic Group Madagascar",
      date: "October 2024",
      description: "Verified that requested functionalities in the requirements document were correctly implemented."
    },
    dev: {
      title: "Junior Developer",
      company: "Express In Code",
      date: "May 2022 - April 2023",
      description: "One-year learning internship: 9 months on site, 3 months remote. Created a Japanese anime streaming website."
    }
  },
  projects: {
    title: "Featured Projects",
    tapakila: {
      title: "Tapakila",
      description: "An event web application to search events like parties or festivals near you. It is still in development!"
    },
    weather: {
      title: "Weather Forecast",
      description: "A beautiful weather app with 14-day forecasts, hourly updates, and interactive maps using modern APIs."
    },
    tibooks: {
      title: "Ti-books Malagasy",
      description: "Discover traditional Malagasy stories translated into English. Explore the rich cultural heritage of Madagascar with SEO-optimized content."
    }
  },
  contact: {
    title: "Let's Connect",
    description: "Ready to start a new project or just want to chat? Send me a message!",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message"
    }
  },
  footer: {
    rights: "© 2025 Tokiniaina Portfolio. All rights reserved.",
    built: "Built with Next.js, React, TypeScript, TailwindCSS, and ShadcnUI"
  }
} as const;
