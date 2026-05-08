import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";

const cardAccent = {
  terracotta: "from-terracotta/15 to-transparent",
  forest: "from-forest/15 to-transparent",
  gold: "from-gold/20 to-transparent",
} as const;

const badgeAccent = {
  terracotta: "bg-terracotta-tint text-terracotta-dark",
  forest: "bg-forest-tint text-forest-dark",
  gold: "bg-gold-tint text-ink",
} as const;

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-editorial">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="mt-4 font-serif text-display-md font-semibold tracking-tight text-balance">
              Projects, <span className="italic text-terracotta">shipped</span>.
            </h2>
          </div>
          <p className="max-w-md text-base text-ink-soft text-pretty">
            A small, opinionated list. Reach out if you want to talk about any
            of these in detail.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-ink/10 bg-cream-50 transition-all duration-300 hover:-translate-y-1 hover:border-ink/30"
            >
              {/* Decorative top frame - playful editorial */}
              <div
                className={[
                  "relative aspect-[16/10] w-full overflow-hidden border-b border-ink/10 bg-gradient-to-br",
                  cardAccent[p.accent],
                ].join(" ")}
              >
                <ProjectGlyph index={i} accent={p.accent} />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-ink/15 bg-cream-50/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft backdrop-blur">
                    project · {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="flex grow flex-col p-6">
                <h3 className="font-serif text-2xl font-semibold leading-tight tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-soft">{p.subtitle}</p>
                <p className="mt-4 grow text-sm leading-relaxed text-ink-soft text-pretty">
                  {p.body}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className={[
                        "rounded-full px-2.5 py-1 text-[11px] font-medium",
                        badgeAccent[p.accent],
                      ].join(" ")}
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink underline-offset-4 hover:text-terracotta hover:underline"
                  >
                    Explore <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectGlyph({
  index,
  accent,
}: {
  index: number;
  accent: "terracotta" | "forest" | "gold";
}) {
  const stroke =
    accent === "terracotta"
      ? "#b04e35"
      : accent === "forest"
        ? "#2a4530"
        : "#a78848";

  // A handful of editorial mark glyphs that rotate with index
  const variants = [
    // Concentric arcs
    <g key="g0">
      <circle cx="50%" cy="55%" r="60" fill="none" stroke={stroke} strokeWidth="1.4" />
      <circle cx="50%" cy="55%" r="40" fill="none" stroke={stroke} strokeWidth="1.4" />
      <circle cx="50%" cy="55%" r="22" fill="none" stroke={stroke} strokeWidth="1.4" />
      <circle cx="50%" cy="55%" r="6" fill={stroke} />
    </g>,
    // Stepped chart
    <g key="g1" transform="translate(0,8)">
      <polyline
        points="40,140 80,120 120,130 160,90 200,100 240,60 280,70"
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <line x1="40" y1="160" x2="280" y2="160" stroke={stroke} strokeWidth="1" opacity="0.4" />
    </g>,
    // Brackets
    <g key="g2">
      <text
        x="50%"
        y="58%"
        textAnchor="middle"
        fontFamily="JetBrains Mono, ui-monospace, monospace"
        fontSize="100"
        fill={stroke}
        opacity="0.85"
      >
        {"{ }"}
      </text>
    </g>,
    // Stars cluster
    <g key="g3">
      {[
        [80, 100],
        [200, 80],
        [260, 150],
        [120, 160],
      ].map(([x, y], i) => (
        <path
          key={i}
          d={`M ${x} ${y - 12} l 3 9 l 9 3 l -9 3 l -3 9 l -3 -9 l -9 -3 l 9 -3 z`}
          fill={stroke}
          opacity={0.4 + i * 0.15}
        />
      ))}
    </g>,
    // Big arrow
    <g key="g4">
      <path
        d="M 60 130 L 240 130"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 220 110 L 240 130 L 220 150"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>,
    // Camera/photo glyph
    <g key="g5">
      <rect
        x="80"
        y="80"
        width="160"
        height="100"
        rx="10"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
      />
      <circle cx="160" cy="130" r="28" fill="none" stroke={stroke} strokeWidth="2" />
      <circle cx="160" cy="130" r="12" fill={stroke} opacity="0.4" />
      <rect x="200" y="68" width="30" height="14" rx="3" fill={stroke} opacity="0.7" />
    </g>,
  ];

  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid meet">
      {variants[index % variants.length]}
    </svg>
  );
}
