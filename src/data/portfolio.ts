export const profile = {
  name: "Navalika Sharda",
  shortName: "Navalika",
  location: "Paris, France",
  email: "shardanavalika@gmail.com",
  phone: "+33 6 60 09 85 41",
  linkedin: "https://linkedin.com/in/navalika-sharda",
  github: "https://github.com/snavy27",
  oldSite: "https://snavy27.github.io/",
  tagline: "Engineer · Analyst · Founder",
  heroHeadline: "Hello, I'm Navalika.",
  heroSub:
    "Engineer with a finance brain and a founder's instinct. I move ideas from a Python notebook, an investor memo, or a Figma file to something a real user can hold.",
  heroForward:
    "Currently in Paris - splitting time between shipping AI product at Priceforce.ai and live M&A mandates at Arx. Open to talk product, finance, data, or anything in between.",
  oneLiner:
    "Engineer-analyst at the seam of product, finance, and AI. Ex-Wells Fargo & Visa. EM Lyon Grande École, top 2%. Currently founding @ Priceforce.ai and analyst @ Arx Corporate Finance, Paris.",
  about: [
    "I work at the seam of three crafts. As a founding member at Priceforce.ai I own customer discovery, the React frontend, the Python data pipelines, and the adoption metrics that prove any of it works. As an M&A analyst at Arx Corporate Finance I build DCFs, comparables, and the quantitative sections of IM/CIMs on live mid-market mandates. The thread between them is the same: turn a fuzzy idea into something a real user can use.",
    "The path runs through Wells Fargo's Corporate & Investment Banking division - two years as a software engineer on $5B+ portfolios - then a Master's at EM Lyon's Grande École (top 2%, Financial Markets + AI), and now Paris.",
    "I am comfortable in a Python notebook, a discovery interview, an investor memo, an Agile sprint, or a Figma file. The through-line is shipping discipline: scope tightly, build the smallest thing that proves the point, then iterate against real users or real numbers.",
    "Stakeholder work runs through everything - founder-adjacent in a lean founding team at Priceforce, alongside senior bankers and PE buyers at Arx, Scrum Master for a team of six at Visa. Keep the conversation tight, write down what's decided, ship.",
  ],
  fun: "Engineer with a finance brain. Analyst with a builder's hands. Currently in Paris.",
  // Pills shown in the hero - small set so two-three roles fit on one row.
  currentRoles: [
    { label: "Founding @ Priceforce.ai", href: "#experience" },
    { label: "Analyst @ Arx", href: "#experience" },
  ],
  // Marquee strip keywords. Kept register-neutral so the page reads
  // legibly to recruiters from product, finance, engineering, or analyst lenses.
  marqueeKeywords: ["engineer", "analyst", "founder", "builder", "paris"],
};

export const whatIDo = [
  {
    title: "Product & Engineering",
    body: "I take AI-powered B2B products from customer discovery through enterprise launch - owning the React frontend, the Python backend, the data pipelines, and the adoption metrics that prove it all works.",
    accent: "terracotta" as const,
  },
  {
    title: "Finance & M&A",
    body: "Live valuation work at Arx - DCF, trading comparables, precedent transactions, and the quantitative sections of investor memos and IM/CIMs on mid-market mandates feeding a €20M+ deal pipeline.",
    accent: "forest" as const,
  },
  {
    title: "Data, ML & Pipelines",
    body: "Python time-series forecasting on $5B+ banking portfolios at Wells Fargo, SQL pipelines for capital planning and regulatory reporting, and automated quantitative reporting at Cogent that cut turnaround by 30%.",
    accent: "gold" as const,
  },
  {
    title: "Stakeholders & Delivery",
    body: "Founding member working directly with the CEO at Priceforce; gathering requirements from senior bankers and PE buyers at Arx; Scrum Master for a six-person team at Visa. Customer discovery, user stories, sprint planning, KPI reviews, and the cross-functional coordination that turns it into shipped product.",
    accent: "ink" as const,
  },
  {
    title: "Design & Brand",
    body: "Interaction design and brand work for the products I ship - visual systems, marketing pages, demo collateral - with sketching and photography on the side, mostly for myself.",
    accent: "terracotta" as const,
  },
];

export const skills = {
  "Product & Delivery": [
    "Customer discovery",
    "Roadmap & prioritization",
    "User stories & functional specs",
    "Beta pilots",
    "KPI tracking",
    "Stakeholder coordination",
    "Agile / Scrum",
    "Sprint planning",
    "Backlog grooming",
    "Retrospectives",
    "0→1 launches",
  ],
  Engineering: [
    "Python",
    "SQL (advanced)",
    "React.js",
    "REST APIs",
    "Frontend",
    "C / C++",
    "Postman",
    "Excel (advanced)",
  ],
  "Data & ML": [
    "Time-series forecasting",
    "Machine learning",
    "Statistical analysis",
    "Data pipelines",
    "Financial modeling",
    "Scenario & sensitivity analysis",
    "BI & data analysis tooling",
  ],
  "Finance & Banking": [
    "M&A advisory",
    "DCF & valuation",
    "Trading comparables",
    "Precedent transactions",
    "IM / CIM",
    "Capital planning",
    "Regulatory reporting",
    "Payments (Visa APIs, NFC)",
  ],
  "AI & Tools": [
    "Claude Code",
    "Cursor",
    "v0",
    "Lovable",
    "LLM agents",
    "Model Context Protocol",
    "Gen AI integration",
    "Notion",
    "Figma",
    "JIRA / Confluence",
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
    blurb: "AI-powered pricing intelligence for B2B. Parent company: Arx.",
    bullets: [
      "Founding member working directly with the CEO in a lean founding team; co-built Priceforce.ai from idea to live product, leading product and engineering execution from MVP through public launch.",
      "Run customer discovery interviews and beta pilots with B2B enterprise users; translate qualitative findings into user stories, functional specs, and a prioritized backlog reviewed weekly with the team.",
      "Coordinate across customers, partners, and engineering via weekly KPI reviews and feedback loops to keep multi-stakeholder delivery on track.",
      "Architected and shipped the full product stack: React frontend, Python backend, database, and the AI-powered data pipelines that clean, unify, and normalize unstructured supplier data across formats - plus interaction design and brand work for the product.",
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
      "Build DCF, trading comparables, and precedent transaction analyses on live mid-market M&A mandates contributing to a €20M+ deal pipeline.",
      "Produce the quantitative sections of investor memos and IM/CIMs - financial modelling, scenario analysis, sensitivity tables - gathering requirements directly from senior stakeholders and translating them into structured deliverables.",
      "Work alongside senior bankers and PE/strategic buyers on live mandates, with direct exposure to how technical and executive stakeholders consume research and structure investment theses.",
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
      "Built and automated quantitative reporting pipelines (Excel + SQL + Python) for multi-entity datasets across EMEA and APAC, reducing turnaround time by 30% on a $150M+ portfolio.",
      "Analyzed monthly P&L and balance sheet variances for a $150M+ revenue portfolio.",
    ],
    tag: "past",
    accent: "gold",
  },
  {
    company: "Wells Fargo Bank",
    role: "Software Engineer (Permanent)",
    date: "Jul 2021 - Aug 2023",
    location: "Bangalore, India",
    blurb: "Corporate & Investment Banking division of a $1.9T+ bank.",
    bullets: [
      "Built Python time-series forecasting models for deposit balances and interest expenses across $5B+ portfolios; improved forecast accuracy by 15-20% using historical trend analysis, and documented outputs for downstream business consumers.",
      "Diagnosed and resolved performance and reliability issues in large-scale SQL data pipelines for capital planning and regulatory submissions, operating end-to-end in a tightly regulated production environment.",
      "Partnered with project managers, QA, and business analysts across the SDLC - supporting development monitoring, testing, user acceptance, and change management for releases into the banking production environment.",
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
      "Scrum Master leading a team of 6 - ran daily stand-ups, sprint planning, and retrospectives to ship a financial app for cashless transactions using Visa APIs and NFC technology.",
      "Selected among the top 20 of 1,300+ applicants for the Global Internship.",
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
      "Courses: Advanced Machine Learning, Data Analytics, Statistics, Strategic Decision-Making, Project Management, Valuation, Corporate Finance.",
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
    body: "Founding-member build for European smartphone wholesale traders and distributors. Customer discovery → React frontend → Python backend → AI-powered data pipelines that unify and normalize unstructured supplier data. Shipped from MVP to public launch and adopted by enterprise users.",
    tags: ["React", "Python", "Data pipelines", "LLM agents", "0→1", "B2B SaaS"],
    accent: "terracotta",
  },
  {
    title: "M&A Quant Pack",
    subtitle: "Live deal models @ Arx Corporate Finance",
    body: "DCF, trading comparables, and precedent transaction analyses, plus the quantitative sections of investor memos and IM/CIMs - financial modelling, scenario analysis, sensitivity tables - on live mid-market mandates feeding a €20M+ pipeline.",
    tags: ["DCF", "Comps", "IM/CIM", "Excel", "M&A"],
    accent: "forest",
  },
  {
    title: "Reporting Pipelines",
    subtitle: "Automated quantitative reporting @ Cogent",
    body: "Excel + SQL + Python pipelines for multi-entity datasets across EMEA and APAC; cut turnaround time by 30% on a $150M+ portfolio. Plus monthly P&L and balance-sheet variance analysis on the same book.",
    tags: ["Python", "SQL", "Excel", "Automation"],
    accent: "gold",
  },
  {
    title: "Forecasting at Wells Fargo",
    subtitle: "Time-series for $5B+ portfolios",
    body: "Python time-series forecasting models for deposit balances and interest expenses; 15-20% accuracy improvement against historical baselines, used for capital planning and regulatory submissions in a regulated banking production environment.",
    tags: ["Python", "Time series", "ML", "Banking"],
    accent: "terracotta",
  },
  {
    title: "Cashless Payments App",
    subtitle: "Visa Global Internship · top 20 of 1,300+",
    body: "Scrum Master and developer for a six-person team building a payments app on Visa APIs and NFC, encouraging cashless adoption post-pandemic. Ran the Agile ceremonies - stand-ups, sprint planning, retrospectives - alongside development.",
    tags: ["Visa APIs", "NFC", "Agile", "Scrum"],
    accent: "forest",
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
  { name: "AI in Finance", issuer: "Coursera", date: "2025" },
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
