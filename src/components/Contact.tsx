import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-24 text-cream-50 sm:py-32"
    >
      {/* Decorative grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#faf6ee" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-editorial relative">
        <p className="section-label !text-cream-300/80 [&::before]:!bg-cream-50/30">
          Contact
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-4 max-w-4xl font-serif text-display-lg font-semibold tracking-tight text-balance"
        >
          Have a project, a problem, or just want to{" "}
          <span className="italic text-terracotta-soft">talk shop</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-cream-200 text-pretty"
        >
          I&apos;m generally easy to reach. Email is fastest. LinkedIn works
          too. I read everything and reply to most of it.
        </motion.p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <ContactCard
            href={`mailto:${profile.email}`}
            icon={<Mail size={18} />}
            label="Email"
            value={profile.email}
            primary
          />
          <ContactCard
            href={profile.linkedin}
            icon={<Linkedin size={18} />}
            label="LinkedIn"
            value="linkedin.com/in/navalika-sharda"
          />
          <ContactCard
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            icon={<Phone size={18} />}
            label="Phone"
            value={profile.phone}
          />
          <ContactCard
            href="#"
            icon={<MapPin size={18} />}
            label="Based in"
            value={profile.location}
            staticItem
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
  primary,
  staticItem,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  primary?: boolean;
  staticItem?: boolean;
}) {
  const Component: any = staticItem ? "div" : "a";
  return (
    <Component
      {...(!staticItem ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
      className={[
        "group flex items-center justify-between rounded-3xl border px-6 py-5 transition-all duration-300",
        primary
          ? "border-terracotta bg-terracotta text-cream-50 hover:bg-terracotta-dark"
          : "border-cream-50/15 bg-cream-50/[0.04] text-cream-100 hover:border-cream-50/40 hover:bg-cream-50/[0.08]",
        staticItem ? "cursor-default" : "",
      ].join(" ")}
    >
      <div className="flex items-center gap-4">
        <span
          className={[
            "grid h-10 w-10 place-items-center rounded-2xl",
            primary ? "bg-cream-50/20" : "bg-cream-50/10",
          ].join(" ")}
        >
          {icon}
        </span>
        <div>
          <div className="font-mono text-[11px] uppercase tracking-widest opacity-70">
            {label}
          </div>
          <div className="mt-0.5 font-serif text-lg font-medium">{value}</div>
        </div>
      </div>
      {!staticItem && (
        <ArrowUpRight
          size={20}
          className="opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
        />
      )}
    </Component>
  );
}
