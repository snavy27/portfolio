import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { education, certifications } from "../data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-24 bg-cream-200/40 py-24 sm:py-32"
    >
      <div className="container-editorial">
        <div className="mb-12">
          <p className="section-label">Education</p>
          <h2 className="mt-4 font-serif text-display-md font-semibold tracking-tight text-balance">
            <span className="italic text-terracotta">Where</span> I trained.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((e, i) => (
            <motion.article
              key={e.school}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="rounded-3xl border border-ink/10 bg-cream-50 p-7 sm:p-8"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-ink/15 bg-cream-200">
                  <GraduationCap size={18} />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                  {e.date}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold tracking-tight">
                {e.school}
              </h3>
              <p className="mt-1 text-sm font-medium text-ink-soft">
                {e.degree} · {e.location}
              </p>

              <ul className="mt-5 grid gap-2 text-sm leading-relaxed text-ink-soft text-pretty">
                {e.details.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-ink/10 bg-cream-50 p-6 sm:p-8"
        >
          <div className="mb-5 flex items-center gap-2 text-ink-muted">
            <Award size={16} />
            <span className="font-mono text-xs uppercase tracking-widest">
              Certifications
            </span>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="flex flex-col gap-1 rounded-2xl border border-ink/10 bg-cream-200/60 px-4 py-3 transition hover:border-ink/30 hover:bg-cream-200"
              >
                <span className="font-medium leading-snug text-ink">
                  {c.name}
                </span>
                {(c.issuer || c.date) && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                    {c.issuer}
                    {c.issuer && c.date ? " · " : ""}
                    {c.date}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
