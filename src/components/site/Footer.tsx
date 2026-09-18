import { Link } from "@tanstack/react-router";
import { Mail, Phone, Instagram, ArrowUpRight } from "lucide-react";

const footerNav = [
  { to: "/", label: "Anasayfa" },
  { to: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { to: "/projeler", label: "Projelerimiz" },
  { to: "/vizyonumuz", label: "Vizyonumuz" },
  { to: "/misyonumuz", label: "Misyonumuz" },
  { to: "/iletisim", label: "İletişim" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-anthracite text-offwhite">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="space-y-5 lg:col-span-5">
            <div>
              <span className="font-display text-3xl font-bold tracking-[0.1em] text-white">
                BOZ PEYZAJ
              </span>
              <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-olive">
                Peyzaj Mimarlığı
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Doğayı ve modern mimariyi buluşturan, yaşam alanlarınızı profesyonel peyzaj tasarımıyla dönüştüren premium peyzaj mimarlığı stüdyosu.
            </p>
            <div className="pt-1">
              <Link
                to="/iletisim"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-olive transition-colors hover:text-white"
              >
                <span>Bizimle İletişime Geçin</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
              Sayfalar
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="transition-colors hover:text-olive"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
              İletişim
            </p>
            <div className="mt-5 space-y-4 text-sm text-white/60">
              <div className="flex items-center gap-3">
                <Phone size={15} className="shrink-0 text-olive" />
                <a
                  href="tel:+905300000000"
                  className="transition-colors hover:text-white"
                >
                  +90 530 000 00 00
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="shrink-0 text-olive" />
                <a
                  href="mailto:info@bozpeyzaj.com"
                  className="transition-colors hover:text-white"
                >
                  info@bozpeyzaj.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={15} className="shrink-0 text-olive" />
                <a
                  href="https://instagram.com/bozpeyzaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  @bozpeyzaj
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/30">
            © {new Date().getFullYear()} BOZ PEYZAJ. Tüm Hakları Saklıdır.
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/30">
            Peyzaj Mimarlığı & Dış Mekân Tasarımı
          </p>
        </div>
      </div>
    </footer>
  );
}
