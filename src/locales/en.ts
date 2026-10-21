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
    },
  },
  hero: {
    title: {
      start: "Creating",
      neon: "Immersive",
      end: "Digital Experiences",
    },
    subtitle:
      "Web developer specializing in modern, responsive, and interactive websites and applications.",
    cta: "Learn more about me",
  },
  about: {
    title: "About Me",
    birth: "Born on ",
    role: "Web Developer",
    experience: "years of experience",
    biography: {
      title: "BIOGRAPHY",
      p1: "I'm a passionate web developer with expertise in creating modern, responsive web applications. With a strong foundation in both frontend and backend technologies, I love crafting intuitive user experiences that are both functional and visually appealing.",
      p2: "My journey in web development began in my 15 years old, and I've been leveling up my skills ever since. I specialize in React and TypeScript, and I'm constantly exploring new technologies and frameworks to enhance my development arsenal.",
      p3: "When I'm not coding, you can find me exploring new design trends, watching movies, or leveling up in my favorite RPG games.",
    },
  },
  skills: {
    frontend: "Frontend Skills",
    backend: "Backend Skills",
    tools: "Tools & Other",
  },
  experience: {
    title: "Experiences",
    present: "Present",
  },
  projects: {
    title: "Top Projects",
    description:
      "Here are some of my best projects, blending clean code, great design, and smooth interactions. Each project showcases my passion and my skills.",
    more: "View More Projects",
    cta: "Click to learn more about this project",
  },
  contact: {
    title: "Let's Connect",
    subtitle: "GET IN TOUCH",
    description:
      "Ready to start a new project or just want to chat? Send me a message!",
    form: {
      title: "Contact Form",
      sending: "Sending...",
      success: "Message Sent!",
      successMessage: "Thanks for reaching out. I'll get back to you soon.",
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
