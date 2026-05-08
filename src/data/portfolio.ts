export const profile = {
  name: "Navalika Sharda",
  shortName: "Navalika",
  location: "Paris, France",
  email: "shardanavalika@gmail.com",
  phone: "+33 6 60 09 85 41",
  linkedin: "https://linkedin.com/in/navalika-sharda",
  github: "https://github.com/snavy27",
  oldSite: "https://snavy27.github.io/",
  tagline: "Engineer · Founder · Designer · Photographer",
  heroHeadline: "Hello, I'm Navalika.",
  heroSub:
    "Founding Member at Priceforce.ai (Paris fintech), leading end-to-end product development from user discovery and roadmap to launch, with hands-on experience integrating AI-powered tools and workflows into the product stack. Brings analytical depth and quantitative rigour from experiences at Arx and Wells Fargo.",
  oneLiner:
    "Founding Member - Head of Engineering & Product at Priceforce.ai. Ex-Wells Fargo & Visa. EM Lyon Grande École, top 2%.",
  about: [
    "I am the founding head of engineering & product at Priceforce.ai, an AI-powered B2B SaaS for pricing intelligence. I own customer discovery, the roadmap, the frontend, the design system, and the metrics that prove any of it works.",
    "Before Paris I was a software engineer at Wells Fargo and a Visa intern in Bangalore. From there to a Master's at EM Lyon's Grande École, top 2% of the cohort, majors in Financial Markets and Artificial Intelligence. Along the way I worked briefly as an M&A Analyst at Arx Corporate Finance and did a Corporate Finance internship at Cogent.",
    "I sit at the seam between engineering and finance - comfortable in a Python notebook, an investor memo, or a Figma file. The thing that ties it together is shipping: the discipline of moving from a fuzzy idea to something a real user can hold.",
  ],
  fun: "Engineer with a finance brain. Founder with a designer's eye. Currently building in Paris.",
};

export const whatIDo = [
  {
    title: "Product & Engineering",
    body: "I take AI-powered B2B products from customer discovery through enterprise launch, owning the React frontend, Python backend, and the adoption metrics that prove it all works.",
    accent: "terracotta" as const,
  },
  {
    title: "Quant & Finance",
    body: "Live valuation work on M&A mandates at Arx, including DCFs, trading comparables, precedent transactions, and IM/CIMs, alongside Python time-series forecasting on $5B+ portfolios from my Wells Fargo years.",
    accent: "forest" as const,
  },
  {
    title: "Design",
    body: "Interaction design and brand work for the products I ship, with sketching and photography on the side, mostly for myself.",
    accent: "gold" as const,
  },
  {
    title: "Sales & Marketing",
    body: "Founding-team sales and marketing at Priceforce, from enterprise outreach and beta pilot recruitment to the demos, brand work, and messaging that bring users in.",
    accent: "ink" as const,
  },
];

export const skills = {
  Product: [
    "Customer discovery",
    "Roadmap & prioritization",
    "Beta pilots",
    "KPI tracking",
    "0→1 launches",
  ],
  Technical: [
    "Python",
    "SQL",
    "React.js",
    "Frontend",
    "Data analysis",
    "Financial modeling",
    "Excel (advanced)",
  ],
  "AI & Tools": [
    "Claude Code",
    "Cursor",
    "v0",
    "Lovable",
    "LLM agents",
    "Gen AI integration",
    "Notion",
    "Linear",
  ],
  Languages: ["English (fluent)", "Hindi (native)", "French (intermediate)"],
};

export type Experience = {
  company: string;
  role: string;
  date: string;
  location: string;
  blurb: string;
  bullets: string[];
  tag: "current" | "past";
  accent: "terracotta" | "forest" | "gold";
};

export const experiences: Experience[] = [
  {
    company: "Priceforce.ai",
    role: "Founding Member - Head of Engineering & Product",
    date: "Sept 2025 - Present",
    location: "Paris, France",
    blurb: "AI-powered pricing intelligence for B2B.",
    bullets: [
      "Lead end-to-end product development for an AI-powered B2B SaaS platform - customer discovery, roadmap, prioritization, and shipped features from MVP through public launch.",
      "Translated qualitative interviews and beta pilots with enterprise users into product requirements, weekly KPIs, and iteration loops.",
      "Architected and shipped the full product stack: React.js frontend, Python backend, database, and visual design.",
      "Built scalable product and design workflows, deeply integrating LLM agents into both the product itself and the build process to compress iteration cycles.",
    ],
    tag: "current",
    accent: "terracotta",
  },
  {
    company: "Arx Corporate Finance",
    role: "M&A Analyst (Contract)",
    date: "Sept 2025 - Present",
    location: "Paris, France",
    blurb: "Fintech SaaS for M&A and Private Equity.",
    bullets: [
      "Built DCF, trading comparables, and precedent transaction analyses, plus the quantitative sections of investor memos and IM/CIMs on live mid-market mandates contributing to a €200M+ deal pipeline.",
      "Worked alongside senior bankers and PE/strategic buyers on live mandates, with direct exposure to how technical and executive stakeholders consume research and structure investment theses.",
    ],
    tag: "current",
    accent: "forest",
  },
  {
    company: "Cogent Communications",
    role: "Corporate Finance Analyst (Internship)",
    date: "Mar 2025 - Aug 2025",
    location: "Luxembourg",
    blurb: "Nasdaq-listed Tier 1 Telecom Infrastructure Carrier · $1B+ revenue.",
    bullets: [
      "Built and automated quantitative reporting pipelines (Excel + SQL + Python) for multi-entity datasets across EMEA and APAC.",
      "Reduced turnaround time by 30% on a $150M+ portfolio.",
    ],
    tag: "past",
    accent: "gold",
  },
  {
    company: "Wells Fargo Bank",
    role: "Software Engineer (Permanent)",
    date: "Jul 2021 - Aug 2023",
    location: "Bangalore, India",
    blurb: "Corporate & Investment Banking, $1.9T+ bank.",
    bullets: [
      "Built Python time-series forecasting models for deposit balances and interest expenses across $5B+ portfolios; improved forecast accuracy by 15-20%.",
      "Diagnosed and resolved performance and reliability issues in large-scale SQL data pipelines for capital planning and regulatory submissions, operating end-to-end in a regulated production environment.",
    ],
    tag: "past",
    accent: "terracotta",
  },
  {
    company: "Visa Inc.",
    role: "Software Developer (Internship)",
    date: "May 2020 - Jul 2020",
    location: "Bangalore, India",
    blurb: "Global payments leader, $3T+ in quarterly transaction volume.",
    bullets: [
      "Selected among the top 20 of 1,300+ applicants for a Global Internship.",
      "Served as Scrum Master and developer for a team of 6 building a financial app promoting cashless transactions using Visa APIs and NFC technology.",
    ],
    tag: "past",
    accent: "forest",
  },
];

export type Education = {
  school: string;
  degree: string;
  date: string;
  location: string;
  details: string[];
};

export const education: Education[] = [
  {
    school: "EM Lyon Business School",
    degree: "Master's in Management - Grande École",
    date: "2023 - Present",
    location: "Lyon, France",
    details: [
      "GPA 4.0 / 4.0 - Top 2% of cohort",
      "Majors: Financial Markets · Artificial Intelligence",
      "Courses: Advanced Machine Learning, Data Analytics, Statistics, Strategic Decision-Making, Project Management.",
    ],
  },
  {
    school: "Birla Institute of Technology, Mesra",
    degree: "B.E. in Computer Science & Engineering",
    date: "2017 - 2021",
    location: "Ranchi, India",
    details: ["First Class with Distinction.", "CGPA 8.0 / 10."],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  body: string;
  tags: string[];
  link?: string;
  accent: "terracotta" | "forest" | "gold";
};

export const projects: Project[] = [
  {
    title: "Priceforce.ai",
    subtitle: "AI-powered pricing intelligence for B2B",
    body: "Founding-member build: customer discovery → React frontend → Python backend → LLM-agent automations. Shipped from MVP to public launch and adopted by enterprise users.",
    tags: ["React", "Python", "LLM agents", "0→1", "B2B SaaS"],
    accent: "terracotta",
  },
  {
    title: "M&A Quant Pack",
    subtitle: "Live deal models @ Arx Corporate Finance",
    body: "DCF, trading comparables, precedent transactions and the quantitative sections of IM/CIMs on live mid-market mandates feeding a €200M+ pipeline.",
    tags: ["DCF", "Comps", "Excel", "M&A"],
    accent: "forest",
  },
  {
    title: "Reporting Pipelines",
    subtitle: "Automated quantitative reporting @ Cogent",
    body: "Excel + SQL + Python pipelines for multi-entity datasets across EMEA and APAC; cut turnaround time by 30% on a $150M+ portfolio.",
    tags: ["Python", "SQL", "Automation"],
    accent: "gold",
  },
  {
    title: "Forecasting at Wells Fargo",
    subtitle: "Time-series for $5B+ portfolios",
    body: "Python time-series models for deposit balances & interest expenses; 15-20% accuracy improvement against historical baselines, used for capital planning.",
    tags: ["Python", "Time series", "Banking"],
    accent: "terracotta",
  },
  {
    title: "Cashless Payments App",
    subtitle: "Visa Global Internship · top 20 of 1,300+",
    body: "Scrum Master and dev for a team of 6 building a payments app on top of Visa APIs and NFC, encouraging cashless adoption post-pandemic.",
    tags: ["React", "Visa APIs", "NFC"],
    accent: "forest",
  },
  {
    title: "Sketches & Photography",
    subtitle: "Side practice",
    body: "I draw and photograph for myself, mostly. The discipline of looking at things carefully helps me design better products.",
    tags: ["Illustration", "Photography"],
    accent: "gold",
  },
];

export type Certification = {
  name: string;
  issuer?: string;
  date?: string;
};

export const certifications: Certification[] = [
  {
    name: "Claude with Google Cloud's Vertex AI",
    issuer: "Anthropic",
    date: "May 2026",
  },
  { name: "Claude in Amazon Bedrock", issuer: "Anthropic", date: "May 2026" },
  {
    name: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    date: "May 2026",
  },
  { name: "DCF Modeling", issuer: "Coursera", date: "May 2025" },
];

export const testimonials = [
  {
    quote:
      "I had an opportunity to work with Navalika at Visa internship Hackathon 2020. She was the scrum master of the project which she did a great job. She also was a great help to the team in the development of the product. I am sure she would shine on any assignment she takes on.",
    name: "Chandru Venugopal",
    role: "Engineer at Visa",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
