import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-neutral text-brand-primary pt-24 pb-12 px-6 md:px-12 border-t border-brand-primary/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div className="col-span-1 md:col-span-2">
          <Link
            href="/"
            className="text-3xl font-serif tracking-[0.2em] uppercase mb-8 block hover:text-brand-accent-hard transition-colors text-brand-primary"
          >
            linea12
          </Link>
          <p className="max-w-sm text-brand-primary/60 font-light leading-relaxed">
            Leading model management firm representing elite fashion talent and
            commercial icons since 1998.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-6 text-brand-accent-soft">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm text-brand-secondary font-light">
            <li>
              <Link
                href="/models"
                className="hover:text-brand-accent-hard transition-colors"
              >
                Models
              </Link>
            </li>
            <li>
              <Link
                href="/agency"
                className="hover:text-brand-accent-hard transition-colors"
              >
                The Agency
              </Link>
            </li>
            <li>
              <Link
                href="/become-a-model"
                className="hover:text-brand-accent-hard transition-colors"
              >
                Become a Model
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-brand-accent-hard transition-colors text-brand-primary/70"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-6 text-brand-accent-soft">
            Follow
          </h4>
          <ul className="space-y-4 text-sm text-brand-secondary font-light">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors text-brand-secondary"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors text-brand-secondary"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors text-brand-secondary"
              >
                Vogue
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors text-brand-secondary"
              >
                Behance
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-brand-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-brand-primary/50">
          © 2026 linea12 management. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-brand-primary/50">
          <Link
            href="/privacy"
            className="hover:text-brand-accent-hard transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-brand-accent-hard transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
