const en = {
  title: "Language System Demo",
  description: "This is a simple multilingual React app",
  button: "Change Language",
  header: {
    logo: "Ebralidze",
    nav: {
      home: "Home",
      blog: "Blog",
      contact: "Contact",
    },
    mobileMenu: "More",
    availableBadge: "Available for work",
    social: {
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    languageToggle: {
      en: "KA",
      ka: "EN",
    },
    logoAria: "Nikoloz Ebralidze logo",
    navAria: "Primary",
  },
  home: {
    heroSection: {
      greeting: "Hi, I'm",
      name: "Nikoloz Ebralidze",
      title: "Software Engineer",
      description: {
        main: "Full-stack developer with a strong backend foundation. React, TypeScript, NestJS, and PostgreSQL on live products. Author of Authforge, an open-source Node.js auth library.",
      },
      cta: {
        primary: "Contact Me",
        secondary: "See My Work",
      },
      profileAlt: "Nikoloz Ebralidze profile photo",
      badge: "Open to new opportunities",
      bento: {
        stackLabel: "Main stack",
        statValue: "2",
        statLabel: "years building & shipping",
      },
    },
    exploreWork: {
      heading: "Experience",
      dateRange: "2025 - Present",
      projects: {
        earthVoyage: {
          title: "Earth Voyage",
          role: "Software Engineer · Full-time, Remote",
          period: "May 2025 - Present",
          description:
            "Live postcard platform for the US market. Pixel-perfect UI from Figma, PDF generation, and NestJS APIs for auth and core product logic.",
          highlights: [
            "Ship production features across React, TypeScript, NestJS, and PostgreSQL",
            "Build responsive UI from Figma; improve performance on key flows",
            "Contribute to PDF generation for printable postcards",
            "Collaborate in weekly agile sprints with senior engineers",
          ],
          imageAlt: "Earth Voyage platform",
        },
        tourlify: {
          title: "Tourlify",
          role: "Backend Developer · Part-time, Remote",
          period: "June 2025 - February 2026",
          description:
            "Backend for a travel-focused social platform. REST APIs, JWT auth, and schemas across PostgreSQL and MongoDB.",
          highlights: [
            "Designed REST APIs, JWT auth, and core data models",
            "Optimized schemas across PostgreSQL and MongoDB",
            "Later improved responsive UI performance and joined code reviews",
          ],
          imageAlt: "Tourlify platform",
        },
      },
    },
    featuredProjects: {
      heading: "Featured Projects",
      seeAll: "See all projects",
      projects: {
        authforge: {
          title: "Authforge",
          tagline: "Open-source Node.js auth library",
          description:
            "Authentication and user-management library for Node.js inspired by ASP.NET Core Identity. User lifecycle, roles, JWT refresh rotation, lockout, and email verification in one package.",
          imageAlt: "Authforge project mark",
          highlights: [
            "UserManager and RoleManager with pluggable hasher, email, and token services",
            "JWT + refresh-token rotation, hashed tokens, and security_stamp invalidation",
            "NestJS module and Express middleware; TypeScript strict throughout",
          ],
        },
        f1AeroLab: {
          title: "F1 AeroLab",
          tagline: "Full-stack aerodynamics simulator",
          description:
            "Educational platform where you tune F1 car parameters and watch aerodynamic forces update live over WebSocket, with charts across a full speed range.",
          imageAlt: "F1 AeroLab project mark",
          highlights: [
            "Next.js frontend with Zustand, Socket.io, and live Recharts graphs",
            "NestJS backend: REST + WebSocket simulation, Prisma, and Swagger docs",
            "Preset CRUD, EN/KA i18n, and SEO across Learn and Build pages",
          ],
        },
        hotel: {
          title: "Hotel Management System",
          tagline: "ASP.NET Core Web API",
          description:
            "Backend-only hotel workflow API covering bookings, guests, invoices, reporting, and admin logic, written entirely by me as coursework I fully own.",
          imageAlt: "Hotel Management System preview",
          highlights: [
            "C#, ASP.NET Core, Entity Framework, and SQL Server",
            "JWT authentication with role-based access control",
            "Clean separation across booking, payment, and reporting flows",
          ],
        },
        inboxify: {
          title: "Inboxify",
          tagline: "Full-stack email platform",
          description:
            "Gmail-inspired email app built end-to-end: auth, compose, send, drafts, and delete. Lives on GitHub only; not deployed yet.",
          imageAlt: "Inboxify email platform preview",
          highlights: [
            "React + Node.js + PostgreSQL ownership front to back",
            "Account auth, composition, sending, drafts, and deletion",
            "Honest status: repository only, not deployed",
          ],
        },
        platrack: {
          title: "Platrack",
          tagline: "Multi-platform search engine",
          description:
            "Unified search UI designed to aggregate YouTube, TikTok, Wikipedia, and Spotify. YouTube search is live; the other sources were scoped but not fully shipped.",
          imageAlt: "Platrack search platform interface",
          highlights: [
            "React + Node.js with REST API design end to end",
            "Third-party API integration and result aggregation",
            "Honest scope: YouTube works; others remain unfinished",
          ],
        },
      },
    },
    cta: {
      heading: "Let's build something",
      description:
        "Available for full-stack or backend roles: remote, hybrid, or on-site. Say hello and tell me what you're building.",
      emailLabel: "nikaebralidze21@gmail.com",
      social: {
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: {
        who: {
          question: "What kind of developer are you?",
          answer:
            "Full-stack with a strong backend foundation. I love backend most, but I'm genuinely full-stack and prefer full-stack roles when I have the choice, owning features end-to-end from database design to UI.",
        },
        learning: {
          question: "How do you approach learning?",
          answer:
            "As a developer, I constantly strive to learn new things and work on a wide range of projects. I aim to develop my knowledge across multiple fields, rather than in a linear fashion, so that I can evolve into an experienced and highly skilled software engineer.",
        },
        experience: {
          question: "How much experience do you have?",
          answer:
            "About 2 years coding total: roughly one year personal/learning and one year professional. I'm a Software Engineer at Earth Voyage (live US postcard product) and previously was a Backend Developer at Tourlify.",
        },
        stack: {
          question: "What stacks do you work in?",
          answer:
            "Core stacks I work in confidently: Node.js / NestJS / Express + TypeScript, React, PostgreSQL, MongoDB, and C# / ASP.NET Core / Entity Framework / SQL Server. I'm also deepening NestJS, Docker, and AI-assisted workflows, not Java or Spring.",
        },
        roles: {
          question: "What roles are you looking for?",
          answer:
            "Priority order: full-stack (React + Node.js / NestJS), backend Node.js / NestJS, .NET / C# backend, then strong frontend-heavy React roles. Remote, hybrid, or on-site, open to any arrangement.",
        },
        authforge: {
          question: "What is Authforge?",
          answer:
            "My strongest signal right now: an open-source Node.js authentication library I authored, inspired by ASP.NET Core Identity. It covers UserManager/RoleManager, JWT refresh rotation, lockout, email verification, and NestJS + Express integration. v1 is public on GitHub; npm publish is planned.",
        },
        location: {
          question: "Where are you based, and what languages do you speak?",
          answer:
            "Based in Tbilisi, Georgia. Georgian is native; English is B2 for professional reading, writing, and speaking, and I'm actively improving.",
        },
      },
    },
  },
  footer: {
    socMedia: {
      linkedin: "LinkedIn",
      gmail: "Gmail",
      github: "Github",
      facebook: "Facebook",
    },
    copyright: "© 2026 Ebralidze. All rights reserved.",
    signature: {
      design: "Design & Code by ME",
      updated: "Last Updated: Jan 2026",
    },
  },
};

export default en;
