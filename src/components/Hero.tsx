import { motion } from "framer-motion";
import { ArrowDownRight, MapPin, Sparkles, Briefcase } from "lucide-react";
import { profile } from "../data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="top"
      // Section uses overflow-visible so badges around the photo box can poke
      // out, but the photo's frame uses overflow-hidden so the portrait NEVER
      // overlaps with screenshots or text outside it.
      className="relative isolate overflow-visible pb-16 pt-32 sm:pb-24 sm:pt-36 lg:pb-32 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-40" />

      <svg
        aria-hidden
        className="pointer-events-none absolute left-2 top-24 -z-10 hidden h-24 w-40 text-terracotta sm:block"
        viewBox="0 0 200 80"
        fill="none"
      >
        <path
          d="M5 40 Q 30 5, 55 40 T 105 40 T 155 40 T 195 40"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className="container-editorial">
        <motion.div {...fadeUp(0)} className="section-label mb-8">
          A portfolio · est. 2026
        </motion.div>

        {/* Main grid: text left, portrait right.
            On mobile: photo on top, text below.
            Photo box owns its column so nothing else overlaps it. */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT: text */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <motion.div {...fadeUp(0.05)} className="mb-5 flex flex-wrap items-center gap-2">
              <span className="pill">
                <span className="h-2 w-2 animate-pulse rounded-full bg-terracotta" />
                Currently in {profile.location}
              </span>
              {profile.currentRoles.map((role) => (
                <a key={role.label} href={role.href} className="pill hover:bg-cream-200">
                  <Briefcase size={12} /> {role.label}
                </a>
              ))}
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-display-xl font-semibold tracking-tight text-ink text-balance"
            >
              Hello, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic">Navalika</span>
                <svg
                  aria-hidden
                  className="absolute -bottom-2 left-0 z-0 h-5 w-full text-terracotta"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M2 8 Q 50 2, 100 8 T 198 8"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </motion.h1>

            <motion.p
              {...fadeUp(0.18)}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl text-pretty"
            >
              {profile.heroSub}
            </motion.p>

            <motion.div {...fadeUp(0.26)} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                See selected work
                <ArrowDownRight size={16} />
              </a>
              <a href={`mailto:${profile.email}`} className="btn-ghost">
                Get in touch
              </a>
            </motion.div>

            <motion.p
              {...fadeUp(0.3)}
              className="mt-5 max-w-xl font-sans text-xs tracking-[0.18em] text-ink-muted"
            >
              {profile.heroForward}
            </motion.p>

            {/* Stat strip - number-driven, drawn from real engagements */}
            <motion.dl
              {...fadeUp(0.38)}
              className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-7 border-t border-ink/15 pt-7 sm:grid-cols-4"
            >
              <Stat label="Portfolios forecasted" value="$5B+" sub="Wells Fargo" />
              <Stat label="M&A pipeline" value="€20M+" sub="Arx" />
              <Stat label="Reporting time cut" value="30%" sub="Cogent" />
              <Stat label="EM Lyon cohort" value="Top 2%" sub="Grande École" />
            </motion.dl>
          </div>

          {/* RIGHT: portrait photo box */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <HeroPortraitBox />
          </div>
        </div>

        {/* Marquee strip - never inside the photo box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative mt-16 overflow-hidden border-y border-ink/15 py-4 sm:mt-20"
        >
          <div className="flex animate-marquee whitespace-nowrap font-serif text-2xl italic text-ink-soft sm:text-3xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div className="flex shrink-0 items-center gap-10 pr-10" key={i}>
                {profile.marqueeKeywords.map((word) => (
                  <span key={word} className="flex items-center gap-10">
                    <Tag>{word}</Tag>
                    <Dot />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">{label}</dt>
      <dd className="mt-2 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {value}
      </dd>
      {sub && (
        <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-muted/70">
          {sub}
        </div>
      )}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-ink">{children}</span>;
}

function Dot() {
  return <span className="text-terracotta">✦</span>;
}

/**
 * Editorial portrait frame.
 *
 * Workspace rule (CLAUDE.md): "increase the height and width of the box of
 * hero section, make sure screenshots never overlap with the image, make
 * everything responsive."
 *
 * Implementation:
 *  - Generous portrait aspect (4/5) with explicit min-heights at every
 *    breakpoint so the photo is large at every screen size.
 *  - `overflow-hidden` on the inner frame so the photo can never bleed out.
 *  - All decorative overlays (badge, status pill, sparkle) are absolutely
 *    positioned OUTSIDE the clipping frame, anchored to the box edges with
 *    negative offsets - so screenshots, captions, or other UI never overlap
 *    the photo itself.
 */
function HeroPortraitBox() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[560px]"
    >
      {/* Soft offset shadow card behind the frame - adds depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-[36px] bg-terracotta/25 sm:translate-x-4 sm:translate-y-4"
      />

      {/* The photo frame. Everything inside is clipped. */}
      <div
        className={[
          "relative aspect-[4/5] w-full overflow-hidden rounded-[36px]",
          "border-2 border-ink bg-cream-200",
          "shadow-soft",
          // Min size so the box is never tiny - per CLAUDE.md rule
          "min-h-[420px] sm:min-h-[500px] md:min-h-[560px] lg:min-h-[600px]",
        ].join(" ")}
      >
        {/* Soft warm gradient backdrop visible behind the photo edges */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 30% 20%, #f6d8cb 0%, #f3ecdc 50%, #e8dcc1 100%)",
          }}
        />

        {/* The photo - fills the frame, never escapes it */}
        <img
          src="./navalika.png"
          alt="Navalika Sharda - engineer, founder, designer based in Paris"
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full select-none object-cover"
          draggable={false}
        />

        {/* Subtle warm tint over the photo to match palette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "linear-gradient(180deg, rgba(250,246,238,0) 60%, rgba(26,22,20,0.18) 100%)",
          }}
        />
      </div>

      {/* Floating badge - outside the frame, top-right */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute -right-3 top-6 z-10 hidden select-none rounded-full border border-ink bg-cream-50 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink shadow-editorial-sm sm:flex sm:items-center sm:gap-2"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-terracotta" />
        Currently shipping
      </motion.div>

      {/* Location pill - outside the frame, bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        className="absolute -bottom-4 -left-3 z-10 hidden select-none items-center gap-2 rounded-full border border-ink bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cream-50 shadow-editorial-sm sm:flex"
      >
        <MapPin size={12} className="text-terracotta-soft" />
        Paris · 11ème
      </motion.div>

      {/* Decorative sparkle outside the frame */}
      <Sparkles
        size={28}
        strokeWidth={1.4}
        className="absolute -left-4 -top-2 hidden text-terracotta sm:block"
      />
    </motion.div>
  );
}
