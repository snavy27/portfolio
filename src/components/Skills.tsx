import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

const groupAccent = [
  "border-terracotta/30 bg-terracotta-tint/50",
  "border-forest/30 bg-forest-tint/40",
  "border-gold/40 bg-gold-tint/40",
  "border-ink/15 bg-cream-200/60",
];

export default function Skills() {
  const groups = Object.entries(skills);
  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-editorial">
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Toolkit</p>
            <h2 className="mt-4 font-serif text-display-md font-semibold tracking-tight text-balance">
              The things I <span className="italic text-terracotta">reach for</span>.
            </h2>
          </div>
          <p className="max-w-md text-base text-ink-soft text-pretty">
            A working set, refreshed often. The list shifts each year - a
            healthy sign, I think.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {groups.map(([group, items], gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: gi * 0.06 }}
              className={[
                "rounded-3xl border p-6 sm:p-7",
                groupAccent[gi % groupAccent.length],
              ].join(" ")}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-xl font-semibold tracking-tight">
                  {group}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                  0{gi + 1} / 0{groups.length}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-ink/15 bg-cream-50 px-3 py-1.5 text-sm text-ink-soft transition hover:-translate-y-0.5 hover:border-ink/40 hover:text-ink"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
