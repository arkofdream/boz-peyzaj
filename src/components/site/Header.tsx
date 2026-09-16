import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/projeler", label: "Projeler" },
  { to: "/hakkimizda", label: "Stüdyo" },
  { to: "/iletisim", label: "İletişim" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Pages that start with a full-bleed dark hero image/video
  const hasDarkHero = currentPath === "/" || currentPath.startsWith("/projeler/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route changes
  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  const isLightText = hasDarkHero && !scrolled;
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-[#0d120f]/90 shadow-2xl backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4.5 lg:px-10">
        <Link to="/" className="group flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className="font-display text-2xl font-bold tracking-[0.2em] text-offwhite transition-colors duration-300">
              TERRA
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-moss transition-transform duration-300 group-hover:scale-150" />
          </div>
          <span className="mt-1 font-mono text-[9px] font-medium uppercase tracking-[0.45em] text-sand/75 transition-colors duration-300">
            Peyzaj Mimarlığı
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => {
            const isActive =
              item.to === "/" ? currentPath === "/" : currentPath.startsWith(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "group relative py-1 text-[12px] font-medium uppercase tracking-[0.22em] transition-colors duration-300",
                  isActive ? "font-semibold text-offwhite" : "text-offwhite/75 hover:text-offwhite",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[2px] w-0 bg-terracotta transition-all duration-300 group-hover:w-full",
                    isActive && "w-full",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/iletisim"
            className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-offwhite backdrop-blur-sm transition-all duration-300 hover:border-forest hover:bg-forest hover:text-sand sm:inline-flex"
          >
            <span>Proje Başlat</span>
            <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            aria-label="Menü"
            onClick={() => setOpen((v) => !v)}
            className="p-1.5 text-offwhite transition-colors md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b border-white/15 bg-[#0d120f]/98 px-6 py-8 shadow-2xl backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-xl uppercase tracking-[0.16em] text-offwhite transition-colors hover:text-terracotta"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/iletisim"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-sand shadow-lg"
              >
                <span>Proje Başlat</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
