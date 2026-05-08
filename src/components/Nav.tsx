import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { navItems, profile } from "../data/portfolio";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      ].join(" ")}
    >
      <div className="container-editorial">
        <div
          className={[
            "flex items-center justify-between rounded-full border px-5 py-3 transition-all duration-500",
            scrolled
              ? "border-ink/15 bg-cream-50/85 shadow-soft backdrop-blur-md"
              : "border-transparent bg-transparent",
          ].join(" ")}
        >
          <a
            href="#top"
            className="group flex items-center gap-2 font-serif text-lg font-semibold tracking-tight"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-cream-50 transition group-hover:bg-terracotta">
              <Sparkles size={16} strokeWidth={2.4} />
            </span>
            <span className="hidden sm:inline">{profile.shortName}.</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm text-ink-soft transition hover:text-ink"
              >
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream-50 transition hover:bg-terracotta sm:inline-flex"
            >
              Say hi
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-cream-50 md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-3xl border border-ink/15 bg-cream-50/95 p-3 shadow-soft backdrop-blur-md md:hidden"
            >
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-base font-medium text-ink-soft transition hover:bg-cream-200 hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-1 block rounded-2xl bg-ink px-4 py-3 text-center text-base font-medium text-cream-50"
                  >
                    Say hi
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
