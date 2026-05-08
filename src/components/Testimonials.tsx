import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/portfolio";

export default function Testimonials() {
  return (
    <section className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-editorial">
        <div className="mb-12">
          <p className="section-label">Mentors</p>
          <h2 className="mt-4 font-serif text-display-md font-semibold tracking-tight text-balance">
            What mentors have <span className="italic text-terracotta">said</span>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br from-cream-50 to-cream-200/60 p-7 sm:p-9"
            >
              <Quote
                size={64}
                strokeWidth={1.2}
                className="absolute -right-2 -top-3 text-terracotta/15"
              />
              <blockquote className="font-serif text-xl italic leading-relaxed text-ink sm:text-2xl text-pretty">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-ink font-serif text-sm font-semibold text-cream-50">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="font-medium text-ink">{t.name}</div>
                  <div className="text-sm text-ink-muted">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
