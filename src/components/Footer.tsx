import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-cream-200/70">
      <div className="container-editorial">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-cream-50/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-serif text-sm italic">
            © {new Date().getFullYear()} {profile.name}. Designed and built in
            Paris.
          </p>
          <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-widest">
            <a href={`mailto:${profile.email}`} className="hover:text-cream-50">
              Email
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-cream-50">
              LinkedIn
            </a>
            <a href={profile.oldSite} target="_blank" rel="noreferrer" className="hover:text-cream-50">
              v1
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
