import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experiences } from "../data/portfolio";

const dotAccent = {
  terracotta: "bg-terracotta",
  forest: "bg-forest",
  gold: "bg-gold",
} as const;

const cardAccent = {
  terracotta: "hover:border-terracotta/50",
  forest: "hover:border-forest/50",
  gold: "hover:border-gold/60",
} as const;

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 bg-cream-200/40 py-24 sm:py-32"
    >
      <div className="container-editorial">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Experience</p>
            <h2 className="mt-4 font-serif text-display-md font-semibold tracking-tight text-balance">
              Where I&apos;ve <span className="italic text-terracotta">spent my hours</span>.
            </h2>
          </div>
          <p className="max-w-md text-base text-ink-soft text-pretty">
            Five years across software, finance and product - three continents
            and one stubborn refusal to specialise too narrowly.
          </p>
        </div>

        <ol className="relative">
          {/* Vertical timeline line */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-3 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-ink/30 via-ink/15 to-transparent sm:left-4"
          />

          {experiences.map((exp, i) => (
            <motion.li
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="relative pl-12 sm:pl-16 [&:not(:last-child)]:pb-10"
            >
              {/* Dot */}
              <span
                className={[
                  "absolute left-0 top-2 grid h-7 w-7 place-items-center rounded-full border border-ink bg-cream-50 sm:left-1",
                ].join(" ")}
              >
                <span className={["h-2.5 w-2.5 rounded-full", dotAccent[exp.accent]].join(" ")} />
              </span>

              <article
                className={[
                  "rounded-3xl border border-ink/10 bg-cream-50 p-6 transition-all duration-300 sm:p-8",
                  cardAccent[exp.accent],
                ].join(" ")}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                      {exp.company}
                    </h3>
                    {exp.tag === "current" && (
                      <span className="rounded-full bg-terracotta/15 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-terracotta-dark">
                        Current
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                    {exp.date}
                  </span>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-ink-soft">
                  <span className="font-medium text-ink">{exp.role}</span>
                  <span className="h-1 w-1 rounded-full bg-ink/30" />
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>

                <p className="mt-4 font-serif italic text-ink-soft">{exp.blurb}</p>

                <ul className="mt-5 grid gap-3">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-ink-soft text-pretty sm:text-[15px]"
                    >
                      <span
                        className={[
                          "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                          dotAccent[exp.accent],
                        ].join(" ")}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
