import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const kurumsalItems = [
  { to: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { to: "/projeler", label: "Projelerimiz" },
  { to: "/vizyonumuz", label: "Vizyonumuz" },
  { to: "/misyonumuz", label: "Misyonumuz" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [kurumsalOpen, setKurumsalOpen] = useState(false);
  const [mobileKurumsalOpen, setMobileKurumsalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const hasDarkHero = currentPath === "/" || currentPath.startsWith("/projeler/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setKurumsalOpen(false);
    setMobileKurumsalOpen(false);
  }, [currentPath]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setKurumsalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isLightText = hasDarkHero && !scrolled;

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setKurumsalOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setKurumsalOpen(false), 150);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/50 bg-white/90 shadow-sm backdrop-blur-xl"
          : hasDarkHero
            ? "border-b border-transparent bg-transparent"
            : "border-b border-border/30 bg-white/80 backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="flex flex-col leading-none">
            <span
              className={cn(
                "font-display text-xl font-bold tracking-[0.12em] transition-colors duration-300 sm:text-2xl",
                isLightText ? "text-white" : "text-foreground",
              )}
            >
              BOZ PEYZAJ
            </span>
            <span
              className={cn(
                "mt-0.5 text-[9px] font-medium uppercase tracking-[0.35em] transition-colors duration-300",
                isLightText ? "text-white/60" : "text-muted-foreground",
              )}
            >
              Peyzaj Mimarlığı
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {/* Anasayfa */}
          <Link
            to="/"
            className={cn(
              "relative py-1 text-[12px] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
              currentPath === "/"
                ? isLightText
                  ? "font-semibold text-white"
                  : "font-semibold text-foreground"
                : isLightText
                  ? "text-white/70 hover:text-white"
                  : "text-foreground/60 hover:text-foreground",
            )}
          >
            Anasayfa
            <span
              className={cn(
                "absolute bottom-0 left-0 h-[1.5px] w-0 bg-olive transition-all duration-300 group-hover:w-full",
                currentPath === "/" && "w-full",
              )}
            />
          </Link>

          {/* Kurumsal Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              type="button"
              onClick={() => setKurumsalOpen((v) => !v)}
              className={cn(
                "flex items-center gap-1 py-1 text-[12px] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
                kurumsalItems.some((item) => currentPath === item.to)
                  ? isLightText
                    ? "font-semibold text-white"
                    : "font-semibold text-foreground"
                  : isLightText
                    ? "text-white/70 hover:text-white"
                    : "text-foreground/60 hover:text-foreground",
              )}
            >
              Kurumsal
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-300",
                  kurumsalOpen && "rotate-180",
                )}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={cn(
                "absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-300",
                kurumsalOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0",
              )}
            >
              <div className="min-w-[220px] overflow-hidden rounded-xl border border-border/50 bg-white/95 shadow-xl backdrop-blur-xl">
                <div className="p-2">
                  {kurumsalItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={cn(
                        "block rounded-lg px-4 py-2.5 text-[12px] font-medium uppercase tracking-[0.15em] transition-all duration-200",
                        currentPath === item.to
                          ? "bg-forest/10 text-forest"
                          : "text-foreground/70 hover:bg-secondary hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* İletişim */}
          <Link
            to="/iletisim"
            className={cn(
              "relative py-1 text-[12px] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
              currentPath === "/iletisim"
                ? isLightText
                  ? "font-semibold text-white"
                  : "font-semibold text-foreground"
                : isLightText
                  ? "text-white/70 hover:text-white"
                  : "text-foreground/60 hover:text-foreground",
            )}
          >
            İletişim
          </Link>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/iletisim"
            className={cn(
              "hidden items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 sm:inline-flex lg:inline-flex",
              isLightText
                ? "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                : "border border-foreground/10 bg-foreground text-white hover:bg-foreground/90",
            )}
          >
            <Phone size={13} />
            <span>Teklif Al</span>
          </Link>

          <button
            type="button"
            aria-label="Menü"
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "p-1.5 transition-colors lg:hidden",
              isLightText ? "text-white" : "text-foreground",
            )}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 lg:hidden",
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="border-t border-border/50 bg-white/98 px-6 py-8 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {/* Anasayfa */}
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 font-display text-base font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-secondary"
            >
              Anasayfa
            </Link>

            {/* Kurumsal Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileKurumsalOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-display text-base font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-secondary"
              >
                <span>Kurumsal</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "transition-transform duration-300",
                    mobileKurumsalOpen && "rotate-180",
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  mobileKurumsalOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="ml-4 space-y-1 border-l-2 border-olive/30 pl-4 py-2">
                  {kurumsalItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground",
                        currentPath === item.to && "bg-forest/5 text-forest font-semibold",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* İletişim */}
            <Link
              to="/iletisim"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 font-display text-base font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-secondary"
            >
              İletişim
            </Link>

            {/* CTA */}
            <div className="mt-4 pt-4 border-t border-border/50">
              <Link
                to="/iletisim"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-forest py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-colors hover:bg-forest/90"
              >
                <Phone size={14} />
                <span>Ücretsiz Teklif Al</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
