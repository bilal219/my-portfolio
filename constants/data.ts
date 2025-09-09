export const personalInfo = {
  name: "Muhammad Bilal Yousaf",
  title: "Full Stack Developer",
  location: "DHA Ph#9 Town, Lahore, Punjab",
  phone: "+92-309-2280331",
  email: "bilalmughal1309@gmail.com",
  linkedin: "https://linkedin.com/in/muhammad-bilalyousaf-dev",
  bio: "I build pixel-perfect, engaging, and accessible digital experiences. Currently focused on developing scalable SaaS applications with modern web technologies.",
  avatar: "/avatar.jpg"
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/muhammad-bilal-yousaf",
    icon: "github"
  },
  {
    name: "LinkedIn", 
    url: "https://linkedin.com/in/muhammad-bilalyousaf-dev",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:bilalmughal1309@gmail.com",
    icon: "email"
  }
];

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export const experiences = [
  {
    id: "gtek-solutions",
    company: "GTek Solutions",
    position: "Full Stack Software Engineer",
    period: "Nov 2022 — Present",
    location: "Lahore, Punjab, Pakistan",
    description: "Gripped modern technologies like Next.js, Strapi, GraphQL, Sass, Recoil, Tailwind CSS, and Ant Design to develop scalable, robust full-stack solutions. Led frontend development projects and developed modules from scratch using advanced state management techniques.",
    technologies: ["Next.js", "React", "JavaScript", "Recoil", "Node.js", "Strapi CMS", "REST APIs", "GraphQL", "Stripe", "MongoDB", "MySQL", "Tailwind CSS", "Ant Design", "Shadcn", "SASS", "Git", "AWS", "PM2", "Figma", "Adobe XD"],
    achievements: [
      "Started working on Next.js after R&D and transitioned into building client projects",
      "Developed FBR project using a Stripe backend, followed by its sibling project NBR",
      "Led the frontend development of the PreLabs project, incorporating React.js and Next.js",
      "Worked on the main product, Home School Panda (HSP), and developed the Chores module from scratch",
      "Transitioned to the New Wave Car Wash project, implementing animations and UI design",
      "Integrated Stripe payment solutions including subscriptions, one-time payments, cancellation, and webhook handling",
      "Managed AWS EC2 deployments for development environment using PM2 for process management"
    ],
    timeline: [
      {
        date: "Nov 2022",
        title: "Started as Full Stack Software Engineer",
        description: "Began working with modern technologies and started R&D on Next.js"
      },
      {
        date: "Dec 2022 - Feb 2023",
        title: "FBR & NBR Projects",
        description: "Developed Foundation of Biomedical Research (FBR) project using Stripe backend, followed by National Association of Biomedical Research (NABR)"
      },
      {
        date: "Mar 2023 - Jun 2023",
        title: "PreLabs Project Lead",
        description: "Led frontend development incorporating React.js and Next.js for high-quality, responsive UI components"
      },
      {
        date: "Jul 2023 - Dec 2023",
        title: "Home School Panda (HSP)",
        description: "Developed Chores module from scratch using Recoil for state management, handled user-related issues and DST-related bugs"
      },
      {
        date: "Jan 2024 - Present",
        title: "New Wave Car Wash",
        description: "Implemented animations, designed UI according to Figma/Adobe XD, integrated comprehensive Stripe payment solutions"
      }
    ]
  },
  {
    id: "technic-mentors",
    company: "Technic Mentors",
    position: "Full Stack Developer",
    period: "Jul 2021 — Nov 2022",
    location: "Gujranwala, Punjab, Pakistan",
    description: "Started as an intern and contributed to the development and deployment of a complete POS system using Laravel 8, SQL, and Blade templates. Promoted to Junior Developer and built interactive front-end components using React.",
    technologies: ["Laravel", "React", "JavaScript", "C#", "SQL", "HTML", "CSS", "Bootstrap"],
    achievements: [
      "Developed complete POS system migrating functionality from C# desktop application",
      "Built interactive front-end components using React for enhanced user experience",
      "Developed and deployed several static websites for clients",
      "Deployed applications on cPanel with proper configuration",
      "Promoted from Intern to Junior Developer"
    ],
    timeline: [
      {
        date: "Jul 2021",
        title: "Started as Intern",
        description: "Began contributing to POS system development using Laravel 8, SQL, and Blade templates"
      },
      {
        date: "Oct 2021",
        title: "Promoted to Junior Developer",
        description: "Continued enhancing POS system, adding new features and improving performance"
      },
      {
        date: "Jan 2022 - Nov 2022",
        title: "Frontend & Deployment Focus",
        description: "Built React components for internal tools, developed static websites, and managed cPanel deployments"
      }
    ]
  }
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  institution: "University of the Punjab",
  period: "Oct 2017 — Jul 2021",
  location: "Punjab, Pakistan"
};

export const projects = [
  {
    id: "capobiz-pos",
    title: "Capobiz (POS)",
    description: "A comprehensive Point of Sale system developed using Laravel 8, SQL, and Blade templates. Migrated functionality from a C# desktop application to a modern web-based solution with enhanced performance and user experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    technologies: ["Laravel", "PHP", "SQL", "Blade", "JavaScript", "HTML", "CSS", "Bootstrap"],
    demo: "https://pos.technicmentors.com/",
    featured: true,
    company: "Technic Mentors",
    year: "2021-2022",
    timeline: [
      {
        date: "Jul 2021",
        title: "Project Initiation",
        description: "Started development of web-based POS system as intern"
      },
      {
        date: "Sep 2021",
        title: "Core Features Development",
        description: "Implemented inventory management, sales tracking, and user authentication"
      },
      {
        date: "Dec 2021",
        title: "Migration & Testing",
        description: "Successfully migrated C# desktop functionality to web platform"
      },
      {
        date: "Feb 2022",
        title: "Production Deployment",
        description: "Deployed on cPanel with proper configuration and optimization"
      }
    ]
  },
  {
    id: "fbr-research",
    title: "FBR (Foundation of Biomedical Research)",
    description: "A comprehensive biomedical research platform with Stripe payment integration, user authentication, and role-based access control. Built with Next.js and modern web technologies for optimal performance.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    technologies: ["Next.js", "React", "JavaScript", "Stripe", "Node.js", "REST APIs", "Tailwind CSS"],
    demo: "https://fbresearch.org/",
    featured: true,
    company: "GTek Solutions",
    year: "2022-2023",
    timeline: [
      {
        date: "Dec 2022",
        title: "Project Start",
        description: "Began development with Next.js and Stripe backend integration"
      },
      {
        date: "Jan 2023",
        title: "Payment System",
        description: "Implemented comprehensive Stripe payment solutions"
      },
      {
        date: "Feb 2023",
        title: "Launch & Optimization",
        description: "Deployed platform and optimized for user experience"
      }
    ]
  },
  {
    id: "nabr-research",
    title: "NABR (National Association of Biomedical Research)",
    description: "Sibling project to FBR, applying advanced state management techniques with Recoil and ensuring optimal user experience. Features comprehensive research tools and collaboration features.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
    technologies: ["Next.js", "React", "JavaScript", "Recoil", "Stripe", "Node.js", "GraphQL"],
    demo: "https://www.nabr.org/",
    featured: true,
    company: "GTek Solutions",
    year: "2023",
    timeline: [
      {
        date: "Feb 2023",
        title: "Project Initiation",
        description: "Started development building on FBR project experience"
      },
      {
        date: "Mar 2023",
        title: "State Management",
        description: "Implemented advanced Recoil state management patterns"
      },
      {
        date: "Apr 2023",
        title: "Production Ready",
        description: "Completed development with enhanced user experience features"
      }
    ]
  },
  {
    id: "prelabs",
    title: "PreLabs",
    description: "Led the frontend development incorporating React.js and Next.js to deliver high-quality, responsive UI components. Features modern design patterns and optimal performance optimization.",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=400&h=300&fit=crop",
    technologies: ["Next.js", "React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    demo: "https://www.prelabs.com/",
    featured: true,
    company: "GTek Solutions",
    year: "2023",
    timeline: [
      {
        date: "Mar 2023",
        title: "Frontend Leadership",
        description: "Took lead role in frontend development architecture"
      },
      {
        date: "May 2023",
        title: "UI Component Library",
        description: "Developed reusable, responsive UI component system"
      },
      {
        date: "Jun 2023",
        title: "Performance Optimization",
        description: "Optimized application for high-quality user experience"
      }
    ]
  },
  {
    id: "home-school-panda",
    title: "HSP (Home School Panda)",
    description: "Worked on the main product and developed the Chores module from scratch using Recoil for state management. Ensured seamless interaction between frontend and backend systems, handled DST-related bugs and user experience improvements.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    technologies: ["Next.js", "React", "Recoil", "JavaScript", "Node.js", "MongoDB"],
    demo: "https://app.homeschoolpanda.com/",
    featured: true,
    company: "GTek Solutions", 
    year: "2023",
    timeline: [
      {
        date: "Jul 2023",
        title: "Chores Module Development",
        description: "Built complete chores management system from scratch"
      },
      {
        date: "Sep 2023",
        title: "State Management",
        description: "Implemented Recoil for efficient state management"
      },
      {
        date: "Nov 2023",
        title: "Bug Fixes & Optimization",
        description: "Resolved DST-related bugs and improved user experience across time zones"
      }
    ]
  },
  {
    id: "new-wave-car-wash",
    title: "New Wave Car Wash",
    description: "Implemented animations and designed UI according to Figma and Adobe XD designs. Integrated comprehensive Stripe payment solutions including subscriptions, one-time payments, cancellation, and webhook handling.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    technologies: ["Next.js", "React", "JavaScript", "Stripe", "Tailwind CSS", "Figma", "Adobe XD"],
    demo: "https://www.newwavecarwash.com/",
    featured: true,
    company: "GTek Solutions",
    year: "2024",
    timeline: [
      {
        date: "Jan 2024",
        title: "UI/UX Implementation",
        description: "Translated Figma and Adobe XD designs into responsive web interface"
      },
      {
        date: "Mar 2024",
        title: "Animation & Interactions",
        description: "Added smooth animations and interactive elements"
      },
      {
        date: "May 2024",
        title: "Payment Integration",
        description: "Implemented full Stripe payment ecosystem with subscriptions and webhooks"
      }
    ]
  }
];

