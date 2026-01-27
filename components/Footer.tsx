import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-accent/30 text-brand-text pt-24 pb-12 px-6 md:px-12 border-t border-brand-primary/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-2">
          <Link
            href="/"
            className="text-3xl font-serif tracking-[0.2em] uppercase mb-8 block hover:text-brand-primary transition-all duration-500 text-brand-text group"
          >
            linea
            <span className="italic font-light group-hover:text-brand-primary transition-colors">
              12
            </span>
          </Link>
          <p className="max-w-sm text-brand-muted font-light leading-relaxed text-sm">
            Leading model management firm representing elite fashion talent and
            commercial icons. Curating extraordinary stories since 1998.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-semibold mb-8 text-brand-primary">
            Navigation
          </h4>
          <ul className="space-y-4 text-[11px] text-brand-muted font-light uppercase tracking-widest">
            <li>
              <Link
                href="/models"
                className="hover:text-brand-primary transition-colors"
              >
                Models
              </Link>
            </li>
            <li>
              <Link
                href="/agency"
                className="hover:text-brand-primary transition-colors"
              >
                The Agency
              </Link>
            </li>
            <li>
              <Link
                href="/become-a-model"
                className="hover:text-brand-primary transition-colors"
              >
                Become a Model
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-brand-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-semibold mb-8 text-brand-primary">
            Follow
          </h4>
          <ul className="space-y-4 text-[11px] text-brand-muted font-light uppercase tracking-widest">
            <li>
              <a
                href="#"
                className="hover:text-brand-primary transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-brand-primary transition-colors"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-brand-primary transition-colors"
              >
                Vogue
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-brand-primary transition-colors"
              >
                Behance
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-brand-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[9px] uppercase tracking-[0.3em] text-brand-muted font-extralight">
          © 2026 linea12 management. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] font-extralight">
          <Link
            href="/privacy"
            className="hover:text-brand-primary transition-colors text-brand-muted"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-brand-primary transition-colors text-brand-muted"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
