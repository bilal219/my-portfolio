export const personalInfo = {
  name: "Muhammad Bilal Yousaf",
  title: "Full Stack Software Engineer",
  location: "Lahore, Pakistan",
  phone: "+92-309-2280331",
  email: "bilalmughal1309@gmail.com",
  linkedin: "https://linkedin.com/in/muhammad-bilal-yousaf-dev",
  website: "https://muhammad-bilal-yousaf.vercel.app",
  bio: "Full Stack Software Engineer with 4+ years of experience building production SaaS applications with React, Next.js, Node.js, and GraphQL, and more recently Angular and ASP.NET Core.",
  avatar: "/avatar.jpg",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/MBilal0219",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/muhammad-bilal-yousaf-dev",
    icon: "linkedin",
  },
];

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Same groups and wording as the CV so ATS keyword matching lines up.
export const skills: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "C#", "PHP", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "Recoil",
      "Tailwind CSS",
      "Ant Design",
      "shadcn/ui",
      "SASS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "ASP.NET Core Web API",
      "Strapi CMS",
      "Laravel",
      "RESTful APIs",
      "GraphQL",
      "Webhooks",
      "JWT",
      "OAuth",
    ],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    title: "AI & Security",
    items: [
      "AI-Powered Search",
      "Prompt-Based Querying",
      "Fully Homomorphic Encryption (FHE)",
      "Data Encryption",
      "Access Control",
    ],
  },
  {
    title: "Payments",
    items: ["Stripe Subscriptions", "One-Time Payments", "Cancellations", "Stripe Webhooks"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3)",
      "Docker",
      "CI/CD",
      "PM2",
      "cPanel",
      "Git",
      "Agile/Scrum",
      "Figma",
      "Adobe XD",
      "Cursor",
      "Claude",
    ],
  },
];

export const experiences = [
  {
    id: "eas-solution",
    logo: "/assets/companies/eas-solution.webp",
    company: "EAS Solution",
    position: "Full Stack Software Engineer",
    period: "May 2026 — Present",
    location: "Lahore, Pakistan",
    description:
      "Sole developer on an existing product. I build Angular components, forms, and services, extend the ASP.NET Core Web API in C#, and look after the SQL Server database.",
    technologies: [
      "Angular",
      "TypeScript",
      "C#",
      "ASP.NET Core Web API",
      "SQL Server",
      "RESTful APIs",
      "Git",
      "Cursor",
      "Claude",
    ],
    achievements: [
      "Work as the sole developer on an existing product, building Angular components, forms, and services and fixing bugs",
      "Build and extend ASP.NET Core Web APIs in C#, and handle SQL Server work including queries, tables, and schema updates",
      "Use AI-assisted development (Cursor, Claude) to ramp up quickly on the Angular and .NET stack and ship features independently",
    ],
    timeline: [
      {
        date: "May 2026",
        title: "Joined as sole developer",
        description:
          "Took over an existing Angular and ASP.NET Core product and got up to speed on the codebase.",
      },
      {
        date: "Jun 2026 — Present",
        title: "Features and fixes across the stack",
        description:
          "Shipping Angular screens and forms, new Web API endpoints in C#, and SQL Server schema changes.",
      },
    ],
  },
  {
    id: "crewlogix-technologies",
    logo: "/assets/companies/crewlogix.webp",
    company: "Crewlogix Technologies",
    position: "Full Stack Software Engineer",
    period: "Jun 2025 — May 2026",
    location: "Lahore, Pakistan",
    description:
      "Worked on H33, a secure storage SaaS. I owned file and folder management end to end, built the AI-powered search, and added Fully Homomorphic Encryption (FHE) to protect stored files.",
    technologies: [
      "Next.js",
      "Vue.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Fully Homomorphic Encryption (FHE)",
      "AI-Powered Search",
      "Access Control",
      "Tailwind CSS",
      "Git",
      "AWS",
    ],
    achievements: [
      "Owned file and folder management for a secure storage SaaS end to end: uploads, sharing, permission controls, and custom actions",
      "Developed AI-powered search with prompt-based and suggestion-based querying, with access control scoping results per user",
      "Implemented Fully Homomorphic Encryption (FHE) together with standard encryption to protect stored files and folders",
      "Optimized storage modules for stability and performance",
      "Learned Vue.js on the job and met clients weekly to demo progress and agree on next steps",
    ],
    timeline: [
      {
        date: "Jun 2025",
        title: "Joined the H33 team",
        description:
          "Started on the secure storage product, beginning with file and folder management.",
      },
      {
        date: "Jul 2025 — Aug 2025",
        title: "Encryption",
        description:
          "Added FHE alongside standard encryption for stored files and folders.",
      },
      {
        date: "Sep 2025 — May 2026",
        title: "AI search and performance",
        description:
          "Built prompt-based and suggestion-based search with per-user access control, and tuned the storage modules.",
      },
    ],
  },
  {
    id: "gtek-solutions",
    logo: "/assets/companies/gtek-solutions.webp",
    company: "GTek Solutions",
    position: "Full Stack Software Engineer",
    period: "Nov 2022 — Jun 2025",
    location: "Lahore, Pakistan",
    description:
      "Built client products with React, Next.js, Node.js, and Strapi CMS. Led the frontend for PreLabs, built the Chores module for Home School Panda, and set up Stripe billing for New Wave Car Wash.",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "Recoil",
      "Node.js",
      "Strapi CMS",
      "GraphQL",
      "RESTful APIs",
      "Stripe",
      "MongoDB",
      "MySQL",
      "Tailwind CSS",
      "Ant Design",
      "SASS",
      "AWS EC2",
      "PM2",
      "Figma",
      "Adobe XD",
    ],
    achievements: [
      "Led frontend development for PreLabs, owning the React/Next.js UI; adopted Next.js for client work after R&D",
      "Built the Chores module from scratch for Home School Panda (10K+ families) using React, Recoil, and Node.js/Strapi APIs",
      "Fixed daylight-saving-time and time-zone bugs for users across regions and handled ongoing production support",
      "Implemented Stripe billing for New Wave Car Wash: subscriptions, one-time payments, cancellations, and webhooks",
      "Built Node.js and Strapi CMS services with GraphQL and REST APIs; deployed dev servers on AWS EC2 with PM2",
      "Built the FBR and NABR websites with Stripe-powered donations",
    ],
    timeline: [
      {
        date: "Nov 2022",
        title: "Joined as Junior Developer",
        description:
          "Did R&D on Next.js and moved the team's client work onto it.",
      },
      {
        date: "Dec 2022 — Feb 2023",
        title: "FBR and NABR",
        description:
          "Built the Foundation for Biomedical Research site with Stripe donations, then its sister site for NABR.",
      },
      {
        date: "Mar 2023 — Jun 2023",
        title: "PreLabs frontend lead",
        description: "Owned the React/Next.js UI for PreLabs.",
      },
      {
        date: "Jul 2023 — Jun 2024",
        title: "Home School Panda",
        description:
          "Built the Chores module from scratch, then fixed DST and time-zone bugs and handled production support.",
      },
      {
        date: "Jul 2024 — Jun 2025",
        title: "Promoted to Full Stack Software Engineer",
        description:
          "Built the New Wave Car Wash site from Figma and Adobe XD designs and set up its Stripe billing.",
      },
    ],
  },
  {
    id: "technic-mentors",
    logo: "/assets/companies/technic-mentors.webp",
    company: "Technic Mentors",
    position: "Full Stack Developer",
    period: "Jul 2021 — Nov 2022",
    location: "Gujranwala, Pakistan",
    description:
      "Started as an intern and was promoted to Junior Developer. Helped move a C# desktop POS to a Laravel 8 and SQL web app, and built React components and client websites.",
    technologies: [
      "Laravel",
      "PHP",
      "React",
      "JavaScript",
      "C#",
      "SQL",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "cPanel",
    ],
    achievements: [
      "Started as an intern and was promoted to Junior Developer",
      "Helped migrate a C# desktop POS to a Laravel 8 and SQL web app (CapoBiz POS)",
      "Built React components for internal tools and responsive client websites",
      "Deployed Laravel apps to production on cPanel",
    ],
    timeline: [
      {
        date: "Jul 2021",
        title: "Started as Intern",
        description:
          "Worked on the CapoBiz POS rewrite in Laravel 8, SQL, and Blade.",
      },
      {
        date: "Oct 2021",
        title: "Promoted to Junior Developer",
        description: "Kept building POS features and fixing performance issues.",
      },
      {
        date: "Jan 2022 — Nov 2022",
        title: "Frontend and deployments",
        description:
          "Built React components for internal tools, shipped client websites, and handled cPanel deployments.",
      },
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  institution: "University of the Punjab",
  period: "Oct 2017 — Jul 2021",
  location: "Lahore, Pakistan",
};

export interface Project {
  id: string;
  title: string;
  /** One or two lines for project cards. */
  description: string;
  /** What the product is, for the case-study page. */
  overview: string;
  role: string;
  image: string;
  technologies: string[];
  /** What I personally built or owned. */
  contributions: string[];
  /** Short facts shown as stat chips, e.g. "10K+ families". */
  highlights?: { label: string; value: string }[];
  demo?: string;
  featured: boolean;
  company?: string;
  year?: string;
  timeline?: { date: string; title: string; description: string }[];
}

export const projects: Project[] = [
  {
    id: "home-school-panda",
    title: "Home School Panda",
    description:
      "Homeschooling platform used by 10K+ families. I built its Chores module from scratch with React and Recoil and supported it in production.",
    overview:
      "Home School Panda is an all-in-one homeschooling app: lesson planning, record keeping, and a social network for homeschool families, on web, iOS, and Android.",
    role: "Full Stack Software Engineer",
    image: "/assets/projects/home-school-panda.webp",
    technologies: [
      "React",
      "Next.js",
      "Recoil",
      "JavaScript",
      "Node.js",
      "Strapi CMS",
      "MongoDB",
    ],
    contributions: [
      "Built the Chores module from scratch, frontend and API",
      "Managed module state with Recoil",
      "Connected the UI to Node.js/Strapi APIs",
      "Fixed daylight-saving-time and time-zone bugs for families in different regions",
      "Handled production support and bug fixes for existing features",
    ],
    highlights: [
      { label: "Families", value: "10K+" },
      { label: "Module", value: "Built from scratch" },
    ],
    demo: "https://homeschoolpanda.com/",
    featured: true,
    company: "GTek Solutions",
    year: "2023 — 2024",
    timeline: [
      {
        date: "Jul 2023 — Sep 2023",
        title: "Chores module",
        description: "Designed and built the module with React, Recoil, and Strapi APIs.",
      },
      {
        date: "Oct 2023 — Dec 2023",
        title: "Time-zone fixes",
        description: "Tracked down and fixed DST and time-zone bugs.",
      },
      {
        date: "Jan 2024 — Jun 2024",
        title: "Production support",
        description: "Handled user-reported issues and ongoing fixes.",
      },
    ],
  },
  {
    id: "new-wave-car-wash",
    title: "New Wave Car Wash",
    description:
      "Website and membership billing for a car wash in Willowbrook, IL. I built the UI from Figma designs and set up Stripe subscriptions, one-time payments, cancellations, and webhooks.",
    overview:
      "New Wave Car Wash sells VIP X-Pass memberships and single washes online. The site needed to look as polished as the wash itself and handle recurring billing reliably.",
    role: "Full Stack Software Engineer",
    image: "/assets/projects/new-wave-car-wash.webp",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Stripe",
      "Webhooks",
      "Tailwind CSS",
      "Figma",
      "Adobe XD",
    ],
    contributions: [
      "Built the site from Figma and Adobe XD designs, including the animations",
      "Set up Stripe subscriptions for VIP X-Pass memberships",
      "Added one-time payments and self-serve cancellations",
      "Handled Stripe webhooks to keep membership status in sync",
    ],
    highlights: [
      { label: "Billing", value: "Stripe" },
      { label: "Model", value: "Memberships" },
    ],
    demo: "https://www.newwavecarwash.com/",
    featured: true,
    company: "GTek Solutions",
    year: "2024 — 2025",
    timeline: [
      {
        date: "Jul 2024",
        title: "UI build",
        description: "Turned the Figma and Adobe XD designs into a responsive site.",
      },
      {
        date: "Sep 2024",
        title: "Animations",
        description: "Added the motion and interactions from the designs.",
      },
      {
        date: "Nov 2024",
        title: "Stripe billing",
        description: "Subscriptions, one-time payments, cancellations, and webhooks.",
      },
    ],
  },
  {
    id: "sealpact",
    title: "SealPact",
    description:
      "SaaS platform for engineering document stamping, with automated page splitting and AI-assisted document management.",
    overview:
      "SealPact lets architects and engineers sign and seal drawings and documents digitally, then keep control of them after they are issued. The web app handles uploading, splitting, sealing, and managing those documents.",
    role: "Full Stack Software Engineer",
    image: "/assets/projects/sealpact.webp",
    technologies: ["React", "JavaScript", "RESTful APIs", "AI Document Management"],
    contributions: [
      "Worked on the document stamping flow used by design professionals",
      "Built automated page splitting so multi-page uploads become individual sealable sheets",
      "Worked on AI-assisted document management features",
    ],
    highlights: [
      { label: "Domain", value: "e-Seals" },
      { label: "Users", value: "Engineers & architects" },
    ],
    demo: "https://sealpact.com/",
    featured: true,
  },
  {
    id: "fbr-research",
    title: "Foundation for Biomedical Research",
    description:
      "Nonprofit website with Stripe-powered donations. Built with Next.js and Recoil.",
    overview:
      "FBR educates the public on the role of animal research in medical progress. The site publishes programs, news, and stories, and takes online donations.",
    role: "Full Stack Developer",
    image: "/assets/projects/fbr-research.webp",
    technologies: ["Next.js", "React", "Recoil", "Stripe", "Node.js", "RESTful APIs", "Tailwind CSS"],
    contributions: [
      "Built the site with Next.js and Recoil",
      "Integrated Stripe for one-time and recurring donations",
    ],
    demo: "https://fbresearch.org/",
    featured: true,
    company: "GTek Solutions",
    year: "2022 — 2023",
    timeline: [
      {
        date: "Dec 2022",
        title: "Build",
        description: "Started the Next.js site and Stripe integration.",
      },
      {
        date: "Feb 2023",
        title: "Launch",
        description: "Shipped the site with donations live.",
      },
    ],
  },
  {
    id: "h33-ai",
    title: "H33",
    description:
      "Secure storage SaaS. I owned file and folder management, built the AI-powered search, and added Fully Homomorphic Encryption (FHE) for stored files.",
    overview:
      "H33 is a cybersecurity platform focused on post-quantum security and AI governance. I worked on its secure storage product, where users upload, share, and search files that stay encrypted.",
    role: "Full Stack Software Engineer",
    image: "/assets/projects/h33-ai.webp",
    technologies: [
      "Next.js",
      "Vue.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "FHE",
      "AI-Powered Search",
      "Tailwind CSS",
    ],
    contributions: [
      "Owned file and folder management end to end: uploads, sharing, permission controls, and custom actions",
      "Built AI-powered search with prompt-based and suggestion-based querying",
      "Scoped search results with access control, so users only see files they are allowed to see",
      "Added Fully Homomorphic Encryption (FHE) alongside standard encryption for stored files and folders",
      "Optimized storage modules for stability and performance",
      "Learned Vue.js on the job to work across the frontend",
    ],
    highlights: [
      { label: "Encryption", value: "FHE" },
      { label: "Search", value: "AI-powered" },
      { label: "Ownership", value: "End to end" },
    ],
    demo: "https://h33.ai/",
    featured: false,
    company: "Crewlogix Technologies",
    year: "2025 — 2026",
    timeline: [
      {
        date: "Jun 2025",
        title: "File and folder management",
        description: "Uploads, sharing, permissions, and custom actions.",
      },
      {
        date: "Jul 2025 — Aug 2025",
        title: "Encryption",
        description: "FHE plus standard encryption for stored data.",
      },
      {
        date: "Sep 2025 — May 2026",
        title: "AI search and tuning",
        description:
          "Prompt-based and suggestion-based search with per-user access control, plus storage performance work.",
      },
    ],
  },
  {
    id: "prelabs",
    title: "PreLabs",
    description:
      "Website for a biomedical research support organization. I led the frontend and owned the React/Next.js UI.",
    overview:
      "PreLabs supports biomedical research organizations. Its site publishes news, a resource library, and information about its services.",
    role: "Frontend Lead",
    image: "/assets/projects/prelabs.webp",
    technologies: ["Next.js", "React", "JavaScript", "Strapi CMS", "RESTful APIs", "Tailwind CSS"],
    contributions: [
      "Led frontend development and owned the React/Next.js UI",
      "Built reusable, responsive page components",
      "Connected pages to CMS content through REST APIs",
    ],
    highlights: [{ label: "Role", value: "Frontend lead" }],
    demo: "https://www.prelabs.com/",
    featured: false,
    company: "GTek Solutions",
    year: "2023",
    timeline: [
      {
        date: "Mar 2023",
        title: "Frontend lead",
        description: "Set up the Next.js frontend and component structure.",
      },
      {
        date: "Jun 2023",
        title: "Launch",
        description: "Shipped the responsive site.",
      },
    ],
  },
  {
    id: "storiboard",
    title: "Storiboard",
    description:
      "Online collage design tool connected to third-party print and framing services, so customers get their design delivered as a physical print.",
    overview:
      "Storiboard let people lay out photos into a collage in the browser, then order it printed and framed. The order went to third-party print and framing partners for delivery.",
    role: "Full Stack Software Engineer",
    image: "/assets/projects/storiboard.webp",
    technologies: ["React", "JavaScript", "Node.js", "Third-Party APIs"],
    contributions: [
      "Worked on the in-browser collage editor",
      "Integrated third-party print and framing services for order fulfilment",
    ],
    highlights: [{ label: "Output", value: "Printed & framed" }],
    featured: false,
  },
  {
    id: "nabr-research",
    title: "National Association for Biomedical Research",
    description:
      "Sister site to FBR for NABR's policy and membership work, with Stripe payments.",
    overview:
      "NABR is a nonprofit association working on public policy for the humane use of animals in research. Its site covers policy updates, membership, and calls to action.",
    role: "Full Stack Developer",
    image: "/assets/projects/nabr-research.webp",
    technologies: ["Next.js", "React", "Recoil", "Stripe", "Node.js", "GraphQL"],
    contributions: [
      "Built the site on the same foundation as FBR",
      "Integrated Stripe payments",
      "Managed state with Recoil",
    ],
    demo: "https://www.nabr.org/",
    featured: false,
    company: "GTek Solutions",
    year: "2023",
    timeline: [
      {
        date: "Feb 2023",
        title: "Build",
        description: "Started from the FBR codebase.",
      },
      {
        date: "Apr 2023",
        title: "Launch",
        description: "Shipped the site.",
      },
    ],
  },
  {
    id: "capobiz-pos",
    title: "CapoBiz POS",
    description:
      "Web-based point of sale rebuilt from a C# desktop app in Laravel 8 and SQL.",
    overview:
      "CapoBiz is a point-of-sale system for small businesses: sales, inventory, and receipts. It started as a C# desktop app and was rebuilt for the web.",
    role: "Intern, then Junior Developer",
    image: "/assets/projects/capobiz-pos.webp",
    technologies: ["Laravel", "PHP", "SQL", "Blade", "JavaScript", "Bootstrap", "cPanel"],
    contributions: [
      "Helped migrate features from the C# desktop app to Laravel 8",
      "Built inventory, sales, and user login features",
      "Deployed the app to production on cPanel",
    ],
    demo: "https://pos.technicmentors.com/",
    featured: false,
    company: "Technic Mentors",
    year: "2021 — 2022",
    timeline: [
      {
        date: "Jul 2021",
        title: "Rewrite starts",
        description: "Began moving the desktop POS to Laravel 8 and SQL.",
      },
      {
        date: "Dec 2021",
        title: "Feature parity",
        description: "Moved over inventory, sales, and authentication.",
      },
      {
        date: "Feb 2022",
        title: "Production",
        description: "Deployed on cPanel.",
      },
    ],
  },
];
