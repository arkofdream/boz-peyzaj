import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import { BuildingSilhouetteSketch } from "./ArchitecturalCroquis";

export function Footer() {
  return (
    <footer className="relative border-t border-anthracite/15 bg-anthracite text-offwhite overflow-hidden">
      {/* Vector City/Landscape Silhouette Skyline in Footer */}
      <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-40 opacity-5 flex items-end justify-between">
        <BuildingSilhouetteSketch className="w-1/3" />
        <BuildingSilhouetteSketch className="w-1/3 scale-x-[-1]" />
      </div>
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand & Manifesto */}
          <div className="space-y-6 lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="font-display text-4xl font-bold tracking-[0.18em] text-offwhite">
                TERRA
              </span>
              <span className="h-2 w-2 rounded-full bg-terracotta" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-sand/80">
              Peyzaj Mimarlığı Stüdyosu
            </p>
            <p className="max-w-md text-sm leading-relaxed text-offwhite/70">
              Arazinin topoğrafyasını, yerel bitki örtüsünü ve ışığını derinlemesine okuyarak; iklim
              krizine dirençli, zamanla olgunlaşan ve yaşayan dış mekânlar kurguluyoruz.
            </p>
            <div className="pt-2">
              <Link
                to="/iletisim"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-warm-yellow transition-colors hover:text-offwhite"
              >
                <span>Bizimle Tanışın</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-sand/60">Keşfet</p>
            <ul className="mt-6 space-y-3.5 text-sm tracking-wide text-offwhite/80">
              <li>
                <Link to="/" className="transition-colors hover:text-terracotta">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/projeler" className="transition-colors hover:text-terracotta">
                  Projeler & Portfolyo
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="transition-colors hover:text-terracotta">
                  Stüdyo & Yaklaşım
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="transition-colors hover:text-terracotta">
                  İletişim & Randevu
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-sand/60">Stüdyo</p>
            <div className="mt-6 space-y-4 text-sm text-offwhite/80">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-moss" />
                <span className="leading-relaxed">Mustafa Bey Cad. No 12, Alsancak, İzmir</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-moss" />
                <a
                  href="mailto:studio@terrapeyzaj.com"
                  className="transition-colors hover:text-warm-yellow"
                >
                  studio@terrapeyzaj.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-moss" />
                <a href="tel:+902320000000" className="transition-colors hover:text-warm-yellow">
                  +90 232 000 00 00
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-offwhite/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-offwhite/40">
            © {new Date().getFullYear()} TERRA Peyzaj Mimarlığı. Tüm Hakları Saklıdır.
          </p>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.25em] text-offwhite/40">
            <span>İzmir</span>
            <span className="h-1 w-1 rounded-full bg-offwhite/30" />
            <span>Bodrum</span>
            <span className="h-1 w-1 rounded-full bg-offwhite/30" />
            <span>İstanbul</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
