import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, ArrowUpRight, ChevronRight, Compass, Sparkles, Trees, PenTool, Ruler } from "lucide-react";
import { projects, detailImage } from "@/lib/projects";
import { Reveal } from "@/components/site/Reveal";
import { LaptopMockup, PhoneMockup } from "@/components/site/Mockups";
import { ProjectCatalog } from "@/components/site/ProjectCatalog";
import {
  TopoContourBackground,
  MasterplanCroquis,
  ElevationSectionCroquis,
  BuildingSilhouetteSketch,
  TreeClusterSketch,
  GraphicScaleBar,
} from "@/components/site/ArchitecturalCroquis";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TERRA — Peyzaj Mimarlığı & Dış Mekân Tasarımı" },
      {
        name: "description",
        content:
          "TERRA Peyzaj Mimarlığı; villa bahçeleri, otel avluları ve kamusal alanlar için doğayla uyumlu, heykelsi ve yaşayan dış mekânlar tasarlar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "TERRA — Peyzaj Mimarlığı" },
      {
        property: "og:description",
        content:
          "Arazinin hafızasını koruyan, iklime uyumlu ve zamanla olgunlaşan peyzaj mimarlığı.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    n: "01",
    t: "Peyzaj Mimarlığı",
    d: "Topoğrafya analizinden uygulama çizimlerine kadar araziyle bütünleşen mekânsal kurgu.",
    tag: "Tasarım",
  },
  {
    n: "02",
    t: "Bitkisel Tasarım",
    d: "Akdeniz ve Ege iklimine dayanıklı, su tüketimini minimize eden mevsimsel bitki paletleri.",
    tag: "Ekoloji",
  },
  {
    n: "03",
    t: "Su ve Yansıma Öğeleri",
    d: "Yansıma havuzları, taş kanallar ve mikro-klima oluşturan sessiz su yüzeyleri.",
    tag: "Mimari",
  },
  {
    n: "04",
    t: "Peyzaj Aydınlatması",
    d: "Gece gökyüzünü koruyan, düşük seviyeli ve malzeme dokusunu vurgulayan ışık senaryoları.",
    tag: "Aydınlatma",
  },
  {
    n: "05",
    t: "Uygulama Yönetimi",
    d: "Şantiye denetimi, taş ve sert zemin işçiliği ile sertifikalı fidan temini kontrolü.",
    tag: "Şantiye",
  },
  {
    n: "06",
    t: "Olgunlaşma Danışmanlığı",
    d: "İlk üç yıl boyunca mevsimlik budama, toprak besleme ve gelişim takibi.",
    tag: "Sürdürülebilirlik",
  },
];

const stats = [
  { k: "18", l: "Yıl Deneyim", note: "2008'den günümüze" },
  { k: "140+", l: "Tamamlanan Proje", note: "Konut, otel, kamusal" },
  { k: "9", l: "Ulusal Ödül", note: "Peyzaj ve kentsel tasarım" },
  { k: "260.000 m²", l: "Tasarlanan Alan", note: "Toplam arazi ölçeği" },
];

function Home() {
  const heroProjects = projects.slice(0, 4);
  const [heroIndex, setHeroIndex] = useState(0);
  const [mockupIndex, setMockupIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 8 second hero slider timer
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const duration = 8000;

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
    }, 50);

    timerRef.current = setTimeout(() => {
      setHeroIndex((prev) => (prev + 1) % heroProjects.length);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [heroIndex, heroProjects.length]);

  const selectHeroProject = (index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setHeroIndex(index);
  };

  const activeHero = heroProjects[heroIndex]!;
  const activeMockup = heroProjects[mockupIndex]!;

  return (
    <div className="bg-background pattern-overlay text-foreground selection:bg-terracotta selection:text-on-image">
      {/* 1. HERO SECTION WITH CINEMATIC PROJECT SLIDER & TOPO CONTOURS */}
      <section className="image-tone relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-anthracite text-foreground">
        {/* Slider Media Layers (Crossfade) */}
        {heroProjects.map((p, i) => {
          const isActive = i === heroIndex;
          return (
            <div
              key={p.slug}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                isActive
                  ? "pointer-events-auto scale-100 opacity-100"
                  : "pointer-events-none scale-105 opacity-0"
              }`}
            >
              {p.video ? (
                <video
                  src={p.video}
                  poster={p.cover}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <img src={p.cover} alt={p.title} className="h-full w-full object-cover" />
              )}
            </div>
          );
        })}

        {/* Cinematic Multi-stop Dark & Forest Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-anthracite/40 to-anthracite/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-anthracite/80 via-transparent to-anthracite/60" />

        {/* Topographic Contour Overlay on Hero */}
        <TopoContourBackground opacity={0.2} />

        {/* Hero Content Container */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pb-12 pt-32 lg:px-10 lg:pb-16 lg:pt-36">
          {/* Top Tagline & Blueprint Registration */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-moss" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-900 font-bold">
                Mimari Portfolyo · Vol. 2025/26
              </span>
            </div>

            <div className="hidden sm:block">
              <GraphicScaleBar />
            </div>
          </div>

          {/* Center Dynamic Content */}
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
              <span className="rounded-full bg-forest/90 px-3.5 py-1 font-bold text-primary backdrop-blur-md">
                {activeHero.plateNo}
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 text-neutral-900 font-bold backdrop-blur-md">
                {activeHero.category}
              </span>
              <span>{activeHero.location}</span>
              <span className="h-1 w-1 rounded-full bg-sand/60" />
              <span>{activeHero.year}</span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-[5.5rem]">
              {activeHero.title}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg">
              {activeHero.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/projeler/$slug"
                params={{ slug: activeHero.slug }}
                className="group inline-flex items-center gap-3 rounded-full bg-terracotta px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-on-image shadow-xl transition-all duration-300 hover:bg-terracotta/90 hover:shadow-2xl"
              >
                <span>Levha Detayını İncele</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/projeler"
                className="inline-flex items-center gap-2 rounded-full border border-offwhite/30 bg-anthracite/30 px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-colors hover:border-offwhite hover:bg-offwhite/10"
              >
                <span>Tüm Katalog</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Bottom Hero Interactive Project Rail */}
          <div className="border-t border-border pt-6">
            {/* Auto progress bar */}
            <div className="mb-4 h-[2px] w-full overflow-hidden bg-offwhite/20">
              <div
                className="h-full bg-terracotta transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-6">
              {heroProjects.map((p, idx) => {
                const isCurrent = idx === heroIndex;
                return (
                  <button
                    key={p.slug}
                    type="button"
                    onClick={() => selectHeroProject(idx)}
                    className={`group relative text-left transition-all duration-300 ${
                      isCurrent ? "opacity-100" : "opacity-50 hover:opacity-85"
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-primary">
                      <span>0{idx + 1}</span>
                      <span className="text-[9px] uppercase tracking-[0.15em] text-foreground/60">
                        {p.category}
                      </span>
                    </div>
                    <p className="mt-1.5 truncate font-display text-sm font-semibold text-foreground sm:text-base">
                      {p.title}
                    </p>
                    <p className="truncate text-[11px] text-foreground/70">{p.location}</p>
                    <div
                      className={`mt-2 h-0.5 w-full transition-colors ${
                        isCurrent ? "bg-sand" : "bg-transparent group-hover:bg-offwhite/30"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. MANIFESTO & CROQUIS SKETCH SECTION (RICH ARCHITECTURAL GRADIENT) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary to-background py-28 lg:py-36">
        {/* Background Vectors */}
        <div className="pointer-events-none absolute top-40 -left-64 w-[1000px] opacity-[0.03] rotate-[-5deg]"><TreeClusterSketch /></div>
        {/* Dynamic Topo Contour Lines */}
        <TopoContourBackground opacity={0.3} />

        {/* Ambient Gradient Glows */}
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-forest/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-terracotta/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <Reveal className="space-y-6 lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-moss/30 bg-moss/15 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss backdrop-blur-md">
                <Compass size={12} className="text-primary" />
                Tasarım Felsefesi & Rölöve
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Doğanın topoğrafyasıyla kurgulanan mekânlar.
              </h2>

              <p className="font-display text-xl font-medium leading-[1.4] text-primary sm:text-2xl">
                "Bir bahçe, yapıldığı gün değil; onuncu yılında gerçek ruhuna kavuşur. Bu yüzden
                projelerimizi gölgenin büyümesi, ağaçların köklenmesi ve mevsimlerin ritmi üzerine
                inşa ediyoruz."
              </p>

              <div className="space-y-4 pt-4">
                {[
                  {
                    no: "01",
                    title: "Yer Hafızası & Topoğrafya",
                    desc: "Her arazi, kendi toprağı, rüzgâr koridoru ve yerel ağaç dokusuyla hikâyesini anlatır.",
                  },
                  {
                    no: "02",
                    title: "Krokisel Geometri & Sadelik",
                    desc: "Gereksiz süsten arınmış, net geometriler ve yerel doğal taşların dingin uyumu.",
                  },
                  {
                    no: "03",
                    title: "Ekolojik Yağmur Döngüsü",
                    desc: "Kurakçıl bitkiler, yağmur hasadı ve kendi kendini onarabilen biyolojik döngüler.",
                  },
                ].map((item) => (
                  <div
                    key={item.no}
                    className="rounded-2xl border border-border bg-card/70 p-4.5 backdrop-blur-md transition-all hover:border-moss/40 hover:bg-secondary/80"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-terracotta">
                        {item.no}
                      </span>
                      <h3 className="font-display text-base font-bold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right: Masterplan Architectural Croquis Drawing */}
            <Reveal className="lg:col-span-7" delay={120}>
              <MasterplanCroquis />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS (EDITORIAL ASYMMETRIC GRID WITH BLUEPRINT AURA) */}
      <section className="relative overflow-hidden bg-background pattern-overlay py-28 lg:py-36">
        {/* Background Vectors */}
        <div className="pointer-events-none absolute bottom-0 -right-40 w-[800px] opacity-[0.04] rotate-[2deg]"><BuildingSilhouetteSketch /></div>
        <div className="pointer-events-none absolute inset-0 croquis-grid opacity-30" />
        <div className="pointer-events-none absolute right-10 top-1/4 h-96 w-96 rounded-full bg-forest/25 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-block rounded-full border border-moss/30 bg-forest/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
                Seçkiler & Levhalar
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                Öne Çıkan Çalışmalar
              </h2>
            </div>

            <Link
              to="/projeler"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary hover:text-terracotta"
            >
              <span>Tüm Projeleri Görüntüle</span>
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          {/* Asymmetric Layout */}
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Card 1: Wide Lead Card (8 cols) */}
            <Reveal className="md:col-span-8">
              <Link
                to="/projeler/$slug"
                params={{ slug: projects[0]!.slug }}
                className="group block overflow-hidden rounded-3xl border border-border bg-card/80 p-3 backdrop-blur-md transition-all duration-500 hover:border-forest/50 hover:bg-secondary hover:shadow-2xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                  {/* Corner crosshairs */}
                  <div className="pointer-events-none absolute left-3 top-3 z-20 font-mono text-xs text-on-image/50">
                    +
                  </div>
                  <div className="pointer-events-none absolute right-3 top-3 z-20 font-mono text-xs text-on-image/50">
                    +
                  </div>

                  <img
                    src={projects[0]!.cover}
                    alt={projects[0]!.title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                  <div className="absolute left-6 top-6 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-forest/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                      {projects[0]!.plateNo}
                    </span>
                    <span className="rounded-full bg-card/95 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground backdrop-blur-md">
                      {projects[0]!.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-on-image">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-warm-yellow">
                        {projects[0]!.templateName}
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl">
                        {projects[0]!.title}
                      </h3>
                      <p className="mt-1 text-xs text-primary sm:text-sm">
                        {projects[0]!.location} · {projects[0]!.area} · {projects[0]!.elevation}
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-on-image backdrop-blur-md transition-transform group-hover:scale-110">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Card 2: Tall Vertical Card (4 cols) */}
            <Reveal className="md:col-span-4" delay={100}>
              <Link
                to="/projeler/$slug"
                params={{ slug: projects[1]!.slug }}
                className="group block h-full overflow-hidden rounded-3xl border border-border bg-card/80 p-3 backdrop-blur-md transition-all duration-500 hover:border-forest/50 hover:bg-secondary hover:shadow-2xl"
              >
                <div className="relative aspect-[4/5] h-full min-h-[380px] w-full overflow-hidden rounded-2xl md:aspect-auto">
                  <div className="pointer-events-none absolute left-3 top-3 z-20 font-mono text-xs text-on-image/50">
                    +
                  </div>
                  <div className="pointer-events-none absolute right-3 top-3 z-20 font-mono text-xs text-on-image/50">
                    +
                  </div>

                  <img
                    src={projects[1]!.cover}
                    alt={projects[1]!.title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                  <div className="absolute left-6 top-6 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-forest/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                      {projects[1]!.plateNo}
                    </span>
                    <span className="rounded-full bg-card/95 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground backdrop-blur-md">
                      {projects[1]!.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-on-image">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-warm-yellow">
                        {projects[1]!.templateName}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-bold sm:text-2xl">
                        {projects[1]!.title}
                      </h3>
                      <p className="mt-1 text-xs text-primary">
                        {projects[1]!.location} · {projects[1]!.year}
                      </p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-on-image backdrop-blur-md transition-transform group-hover:scale-110">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Card 3: Tall Vertical Card (5 cols) */}
            <Reveal className="md:col-span-5" delay={150}>
              <Link
                to="/projeler/$slug"
                params={{ slug: projects[2]!.slug }}
                className="group block overflow-hidden rounded-3xl border border-border bg-card/80 p-3 backdrop-blur-md transition-all duration-500 hover:border-forest/50 hover:bg-secondary hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[16/11]">
                  <div className="pointer-events-none absolute left-3 top-3 z-20 font-mono text-xs text-on-image/50">
                    +
                  </div>
                  <div className="pointer-events-none absolute right-3 top-3 z-20 font-mono text-xs text-on-image/50">
                    +
                  </div>

                  <img
                    src={projects[2]!.cover}
                    alt={projects[2]!.title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                  <div className="absolute left-6 top-6 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-forest/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                      {projects[2]!.plateNo}
                    </span>
                    <span className="rounded-full bg-card/95 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground backdrop-blur-md">
                      {projects[2]!.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-on-image">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-warm-yellow">
                        {projects[2]!.templateName}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-bold sm:text-2xl">
                        {projects[2]!.title}
                      </h3>
                      <p className="mt-1 text-xs text-primary">
                        {projects[2]!.location} · {projects[2]!.area}
                      </p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-on-image backdrop-blur-md transition-transform group-hover:scale-110">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Card 4: Wide Card (7 cols) */}
            <Reveal className="md:col-span-7" delay={200}>
              <Link
                to="/projeler/$slug"
                params={{ slug: projects[3]!.slug }}
                className="group block overflow-hidden rounded-3xl border border-border bg-card/80 p-3 backdrop-blur-md transition-all duration-500 hover:border-forest/50 hover:bg-secondary hover:shadow-2xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                  <div className="pointer-events-none absolute left-3 top-3 z-20 font-mono text-xs text-on-image/50">
                    +
                  </div>
                  <div className="pointer-events-none absolute right-3 top-3 z-20 font-mono text-xs text-on-image/50">
                    +
                  </div>

                  <img
                    src={projects[3]!.cover}
                    alt={projects[3]!.title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                  <div className="absolute left-6 top-6 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-forest/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                      {projects[3]!.plateNo}
                    </span>
                    <span className="rounded-full bg-card/95 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground backdrop-blur-md">
                      {projects[3]!.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-on-image">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-warm-yellow">
                        {projects[3]!.templateName}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-bold sm:text-2xl">
                        {projects[3]!.title}
                      </h3>
                      <p className="mt-1 text-xs text-primary">
                        {projects[3]!.location} · {projects[3]!.year}
                      </p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-on-image backdrop-blur-md transition-transform group-hover:scale-110">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. ARCHITECTURAL CATALOG & DESIGN TEMPLATES (FOLIO SPREAD) */}
      <ProjectCatalog />

      {/* 5. LAPTOP & PHONE EXPERIENCE SECTION (DARK ANTHRACITE ATMOSPHERE) */}
      <section className="relative overflow-hidden bg-background pattern-overlay py-28 text-foreground lg:py-36">
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-forest/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-terracotta/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-moss/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
                Dijital Portfolyo Deneyimi
              </span>
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                Hareket Halindeki Peyzaj
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-foreground/70">
                Peyzaj statik bir fotoğraf değil, rüzgârla dalgalanan otlar ve gün ışığıyla devinen
                bir deneyimdir. Projelerimizi masaüstü ve mobil perspektiflerinden keşfedin.
                Ekranlara tıklayarak detay sayfalarına geçebilirsiniz.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {heroProjects.map((p, idx) => (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => setMockupIndex(idx)}
                  className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                    idx === mockupIndex
                      ? "bg-terracotta font-semibold text-on-image shadow-md"
                      : "bg-secondary text-foreground/70 hover:bg-secondary hover:text-on-image"
                  }`}
                >
                  0{idx + 1} {p.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Dual Mockup Showcase */}
          <div className="mt-12 grid min-w-0 items-center gap-12 sm:mt-16 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-8">
              <LaptopMockup project={activeMockup} />
            </Reveal>

            <Reveal className="mx-auto w-full max-w-[220px] lg:col-span-4 lg:max-w-[260px]" delay={150}>
              <PhoneMockup project={activeMockup} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION (RICH ARCHITECTURAL GRADIENT ATMOSPHERE) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary to-background py-28 text-foreground lg:py-36">
        {/* Background Vectors */}
        <div className="pointer-events-none absolute top-20 -left-40 opacity-[0.03] rotate-[15deg]"><PenTool size={600} strokeWidth={0.5} /></div>
        <div className="pointer-events-none absolute bottom-20 -right-40 opacity-[0.03] rotate-[-15deg]"><Ruler size={600} strokeWidth={0.5} /></div>
        <TopoContourBackground opacity={0.15} />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="space-y-4">
            <span className="inline-block rounded-full border border-moss/30 bg-moss/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
              Hizmet Alanlarımız
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Konsept Fikirden Yaşayan Bahçeye
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <Reveal key={s.n} delay={idx * 60}>
                <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-border bg-card/80 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-moss/40 hover:bg-secondary hover:shadow-2xl">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold tracking-[0.2em] text-terracotta">
                        {s.n}
                      </span>
                      <span className="rounded-full bg-forest/80 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {s.t}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">{s.d}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-moss opacity-0 transition-opacity group-hover:opacity-100">
                    <span>Detaylar</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SUSTAINABILITY, STATS & SECTION CROQUIS */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary to-background py-28 text-foreground lg:py-36">
        {/* Background Vectors */}
        <div className="pointer-events-none absolute top-20 -left-40 opacity-[0.03] rotate-[15deg]"><PenTool size={600} strokeWidth={0.5} /></div>
        <div className="pointer-events-none absolute bottom-20 -right-40 opacity-[0.03] rotate-[-15deg]"><Ruler size={600} strokeWidth={0.5} /></div>
        <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-moss/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <Reveal className="space-y-8 lg:col-span-6">
              <span className="inline-block rounded-full border border-moss/30 bg-forest/30 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
                Ekolojik Yaklaşım & Arazi Kesiti
              </span>
              <h2 className="font-display text-4xl font-bold leading-tight text-foreground lg:text-5xl">
                Daha az sulama, daha derin gölge.
              </h2>
              <p className="text-sm leading-relaxed text-foreground/75 lg:text-base">
                Akdeniz iklimi giderek daha sıcak ve kurak yazlar getiriyor. Peyzaj tasarımlarımızda
                sulama ihtiyacını en aza indiren drenaj ve yağmur suyu tutma stratejileri
                kullanıyoruz. Aydınlatmada karanlık gökyüzü ilkelerine bağlı kalarak faunanın
                dengesini koruyoruz.
              </p>

              {/* Section Elevation Croquis */}
              <div className="pt-2">
                <ElevationSectionCroquis />
              </div>

              <div className="grid grid-cols-2 gap-6 border-t border-border pt-8">
                {stats.map((s) => (
                  <div key={s.l} className="space-y-1">
                    <p className="font-display text-4xl font-extrabold text-moss lg:text-5xl">
                      {s.k}
                    </p>
                    <p className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                      {s.l}
                    </p>
                    <p className="text-xs text-foreground/60">{s.note}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative lg:col-span-6" delay={120}>
              <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
                <img
                  src={detailImage}
                  alt="Doğal taş ve bitkisel tasarım detayı"
                  className="h-[480px] w-full object-cover transition-transform duration-1000 hover:scale-105 lg:h-[600px]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card/95 p-6 text-foreground shadow-2xl backdrop-blur-xl sm:block lg:max-w-xs">
                <p className="font-display text-lg font-bold text-primary">%45 Su Tasarrufu</p>
                <p className="mt-1 text-xs text-foreground/75">
                  Yağmur bahçeleri ve kuraklığa dirençli yerel bitkilendirme kurgusuyla.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA (PREMIUM FOREST ATMOSPHERE) */}
      <section className="relative overflow-hidden bg-gradient-to-r from-secondary via-background to-secondary py-28 text-foreground lg:py-36">
        {/* Background Vectors */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02]"><Compass size={900} strokeWidth={0.5} /></div>
        <TopoContourBackground opacity={0.25} />
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-moss/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-terracotta/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="space-y-6">
            <span className="inline-block rounded-full bg-offwhite/15 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-primary backdrop-blur-md">
              Geleceği Birlikte Kuralım
            </span>
            <h2 className="max-w-4xl font-display text-4xl font-bold leading-tight text-foreground lg:text-6xl">
              Arazinizi birlikte dinleyelim, yaşayan bir peyzaja dönüştürelim.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-foreground/80">
              Yeni bir villa projesi, otel avlusu renovasyonu veya kurumsal açık alan tasarımı için
              stüdyomuzla iletişime geçin.
            </p>
            <div className="pt-4">
              <Link
                to="/iletisim"
                className="group inline-flex items-center gap-3 rounded-full bg-terracotta px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-on-image shadow-xl transition-all duration-300 hover:bg-terracotta/90 hover:shadow-2xl"
              >
                <span>İletişime Geçin</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
