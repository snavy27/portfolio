import { motion } from "framer-motion";
import { profile, whatIDo } from "../data/portfolio";

const accentMap = {
  terracotta: "bg-terracotta-tint text-terracotta-dark border-terracotta/40",
  forest: "bg-forest-tint text-forest-dark border-forest/40",
  gold: "bg-gold-tint text-ink border-gold/50",
  ink: "bg-ink text-cream-50 border-ink",
} as const;

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-24 sm:py-32"
    >
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* LEFT: section label and oneliner */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="section-label">About</p>
              <h2 className="mt-5 font-serif text-display-md font-semibold tracking-tight text-balance">
                A short version of <span className="italic text-terracotta">a longer</span> story.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft text-pretty">
                {profile.oneLiner}
              </p>
            </div>
          </div>

          {/* RIGHT: paragraphs + cards */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {profile.about.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="font-serif text-xl leading-relaxed text-ink sm:text-2xl text-pretty"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 rounded-3xl border-l-4 border-terracotta bg-cream-50 px-6 py-5 font-serif text-lg italic text-ink-soft sm:text-xl"
            >
              {profile.fun}
            </motion.blockquote>

            {/* What I do tiles */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whatIDo.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="editorial-card flex flex-col gap-3"
                >
                  <span
                    className={[
                      "inline-flex w-fit items-center rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest",
                      accentMap[item.accent],
                    ].join(" ")}
                  >
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft text-pretty">
                    {item.body}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
