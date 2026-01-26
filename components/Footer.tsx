import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div className="col-span-1 md:col-span-2">
          <Link
            href="/"
            className="text-3xl font-serif tracking-[0.2em] uppercase mb-8 block"
          >
            Elite
          </Link>
          <p className="max-w-sm text-zinc-500 font-light leading-relaxed">
            The world's leading model management firm representing elite fashion
            talent and commercial icons since 1998.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-6">
            Navigation
          </h4>
          <ul className="space-y-4 text-sm text-zinc-400 font-light">
            <li>
              <Link
                href="/models"
                className="hover:text-white transition-colors"
              >
                Models
              </Link>
            </li>
            <li>
              <Link
                href="/agency"
                className="hover:text-white transition-colors"
              >
                The Agency
              </Link>
            </li>
            <li>
              <Link
                href="/become-a-model"
                className="hover:text-white transition-colors"
              >
                Become a Model
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-6">
            Follow
          </h4>
          <ul className="space-y-4 text-sm text-zinc-400 font-light">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors text-zinc-400"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors text-zinc-400"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors text-zinc-400"
              >
                Vogue
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors text-zinc-400"
              >
                Behance
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-zinc-600">
          © 2026 Elite Model Management. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-zinc-600">
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
