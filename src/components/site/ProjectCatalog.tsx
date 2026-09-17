import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Droplets,
  Layers,
  Sparkles,
} from "lucide-react";
import { projects, landscapeTemplates, type Project, type LandscapeTemplate } from "@/lib/projects";
import { Reveal } from "@/components/site/Reveal";
import { TopoContourBackground, GraphicScaleBar } from "@/components/site/ArchitecturalCroquis";

export function ProjectCatalog() {
  const [activeTab, setActiveTab] = useState<"lookbook" | "templates">("lookbook");
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeTemplateIdx, setActiveTemplateIdx] = useState(0);

  const currentProject: Project = projects[activeProjectIdx] || projects[0]!;
  const currentTemplate: LandscapeTemplate =
    landscapeTemplates[activeTemplateIdx] || landscapeTemplates[0]!;

  const prevProject = () => {
    setActiveProjectIdx((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setActiveProjectIdx((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary to-background py-28 text-foreground lg:py-36">
      {/* Background Topo & Blueprint Grid */}
      <TopoContourBackground opacity={0.25} />
      <div className="pointer-events-none absolute inset-0 croquis-grid opacity-30" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-forest/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-terracotta/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2 rounded-full bg-moss/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.25em] text-moss">
                <BookOpen size={13} className="text-primary" />
                Mimari Portfolyo Kataloğu
              </span>
              <span className="hidden font-mono text-xs text-foreground/40 sm:inline">
                VOL. 2025/26
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Peyzaj Levhaları & Şablonlar
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-foreground/70 sm:text-base">
              Müşterilerimiz ve mimari iş ortaklarımız için hazırlanan interaktif proje katalog
              sayfaları, malzeme kartelaları ve iklime duyarlı peyzaj şablonları.
            </p>
          </div>

          {/* View Mode Toggle & Scale bar */}
          <div className="flex flex-col items-end gap-3 sm:flex-row sm:items-center">
            <div className="hidden lg:block">
              <GraphicScaleBar />
            </div>

            <div className="flex items-center gap-2 rounded-full border border-border bg-card/90 p-1.5 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setActiveTab("lookbook")}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  activeTab === "lookbook"
                    ? "bg-terracotta text-on-image shadow-md"
                    : "text-foreground/70 hover:text-on-image"
                }`}
              >
                <Layers size={14} />
                <span>Proje Levhaları ({projects.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("templates")}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  activeTab === "templates"
                    ? "bg-forest text-primary shadow-md"
                    : "text-foreground/70 hover:text-on-image"
                }`}
              >
                <Compass size={14} />
                <span>Peyzaj Şablonları ({landscapeTemplates.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: ARCHITECTURAL LOOKBOOK / CATALOG FOLIO SPREAD */}
        {/* ========================================================= */}
        {activeTab === "lookbook" && (
          <div className="mt-14 space-y-8">
            {/* Folio Plate Card */}
            <div className="relative rounded-3xl border border-border bg-card/95 p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-12">
              {/* Folio Top Technical Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                <div className="flex items-center gap-4">
                  <span className="rounded-md bg-forest/80 px-2.5 py-1 text-primary font-bold">
                    {currentProject.plateNo}
                  </span>
                  <span>{currentProject.drawingScale}</span>
                  <span className="hidden sm:inline text-on-image/40">|</span>
                  <span className="hidden sm:inline">{currentProject.elevation}</span>
                </div>
                <div className="flex items-center gap-4 text-foreground/70">
                  <span>{currentProject.coordinates}</span>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] text-warm-yellow">
                    {currentProject.category}
                  </span>
                </div>
              </div>

              {/* Spread Main Content */}
              <div className="mt-8 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
                {/* Left: Large Catalog Image with Corner Crosshairs (7 cols) */}
                <div className="relative overflow-hidden rounded-2xl bg-anthracite lg:col-span-7">
                  {/* Corner Crosshairs */}
                  <div className="pointer-events-none absolute left-3 top-3 z-20 font-mono text-xs text-on-image/50">
                    +
                  </div>
                  <div className="pointer-events-none absolute right-3 top-3 z-20 font-mono text-xs text-on-image/50">
                    +
                  </div>
                  <div className="pointer-events-none absolute bottom-3 left-3 z-20 font-mono text-xs text-on-image/50">
                    +
                  </div>
                  <div className="pointer-events-none absolute bottom-3 right-3 z-20 font-mono text-xs text-on-image/50">
                    +
                  </div>

                  <div className="group relative aspect-[16/11] h-full w-full overflow-hidden">
                    <img
                      src={currentProject.cover}
                      alt={currentProject.title}
                      className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay & Stamp */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-on-image">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">
                          {currentProject.templateName}
                        </span>
                        <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl">
                          {currentProject.title}
                        </h3>
                        <p className="text-xs text-on-image/75 sm:text-sm">
                          {currentProject.location} · {currentProject.area}
                        </p>
                      </div>

                      <Link
                        to="/projeler/$slug"
                        params={{ slug: currentProject.slug }}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta text-on-image shadow-lg transition-transform hover:scale-110"
                        title="Proje Dosyasını Aç"
                      >
                        <ArrowUpRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right: Technical Spec, Plant Palette & Materials (5 cols) */}
                <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
                        Tasarım Özeti & Hikâye
                      </span>
                      <span className="font-mono text-xs text-primary/60">
                        Yıl: {currentProject.year}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/85">
                      {currentProject.summary}
                    </p>
                  </div>

                  {/* Plant Palette (Bitki Kartelası) */}
                  <div className="rounded-xl border border-border bg-card/80 p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.18em] text-primary">
                      <span>Bitkisel Palet</span>
                      <span className="text-[10px] text-foreground/50">
                        {currentProject.plants.length} Tür
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {currentProject.plants.map((pl) => (
                        <div
                          key={pl.name}
                          className="rounded-lg bg-card/90 p-2.5 text-left border border-on-image/5"
                        >
                          <p className="font-display text-xs font-semibold text-on-image">
                            {pl.name}
                          </p>
                          <p className="italic text-[10px] text-moss">{pl.botanical}</p>
                          <span className="mt-1 inline-block rounded bg-secondary px-1.5 py-0.5 font-mono text-[9px] text-primary/80">
                            {pl.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Material & Texture Swatches (Malzeme Kartelası) */}
                  <div className="rounded-xl border border-border bg-card/80 p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.18em] text-primary">
                      <span>Materyal Numuneleri</span>
                      <span className="text-[10px] text-foreground/50">Doğal & Yapısal</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {currentProject.materials.map((mat) => (
                        <div
                          key={mat.name}
                          className="rounded-lg bg-card/90 p-2.5 text-center border border-on-image/5"
                        >
                          <div
                            className="mx-auto mb-1.5 h-4 w-4 rounded-full border border-on-image/20 shadow-inner"
                            style={{ backgroundColor: mat.color }}
                          />
                          <p className="truncate font-display text-[11px] font-semibold text-on-image">
                            {mat.name}
                          </p>
                          <p className="truncate text-[9px] text-foreground/60">{mat.texture}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Link Action */}
                  <div className="pt-2">
                    <Link
                      to="/projeler/$slug"
                      params={{ slug: currentProject.slug }}
                      className="group flex w-full items-center justify-center gap-3 rounded-full bg-forest py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary shadow-lg transition-all duration-300 hover:bg-forest/80 hover:text-on-image"
                    >
                      <span>Proje Detay Dosyasına Git</span>
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Plate Pagination & Arrows */}
              <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={prevProject}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground transition-colors hover:bg-secondary"
                    aria-label="Önceki Levha"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={nextProject}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground transition-colors hover:bg-secondary"
                    aria-label="Sonraki Levha"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <span className="font-mono text-xs text-primary">
                    {activeProjectIdx + 1} / {projects.length}
                  </span>
                </div>

                {/* Thumbnails Navigator */}
                <div className="hidden gap-2 sm:flex">
                  {projects.map((p, idx) => (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => setActiveProjectIdx(idx)}
                      className={`h-10 w-16 overflow-hidden rounded-md border transition-all ${
                        idx === activeProjectIdx
                          ? "border-terracotta ring-2 ring-terracotta/40 opacity-100 scale-105"
                          : "border-on-image/20 opacity-50 hover:opacity-80"
                      }`}
                    >
                      <img src={p.cover} alt={p.title} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: LANDSCAPE DESIGN TEMPLATES (PEYZAJ ŞABLONLARI) */}
        {/* ========================================================= */}
        {activeTab === "templates" && (
          <div className="mt-14 space-y-10">
            {/* Quick Template Selector Chips */}
            <div className="flex flex-wrap gap-2.5">
              {landscapeTemplates.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTemplateIdx(idx)}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                    idx === activeTemplateIdx
                      ? "bg-forest font-bold text-primary shadow-lg ring-1 ring-sand/30"
                      : "border border-border bg-card/80 text-foreground/70 hover:bg-secondary hover:text-on-image"
                  }`}
                >
                  {t.title}
                </button>
              ))}
            </div>

            {/* Template Featured Detail Card */}
            <div className="rounded-3xl border border-border bg-card/95 p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                {/* Left: Template Visual & Badges (6 cols) */}
                <div className="space-y-6 lg:col-span-6">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-anthracite">
                    <img
                      src={currentTemplate.image}
                      alt={currentTemplate.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-terracotta px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-on-image">
                        {currentTemplate.category}
                      </span>
                      <span className="rounded-full bg-forest px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                        {currentTemplate.climateZone}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="font-mono text-xs uppercase tracking-wider text-primary">
                        Su Tüketim Stratejisi
                      </p>
                      <p className="font-display text-lg font-bold text-on-image">
                        {currentTemplate.waterNeed}
                      </p>
                    </div>
                  </div>

                  {/* Template Characteristics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border bg-card/80 p-4">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-primary/70">
                        Bakım İhtiyacı
                      </span>
                      <p className="mt-1 font-display text-base font-bold text-on-image">
                        {currentTemplate.maintenanceLevel} Bakım
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-card/80 p-4">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-primary/70">
                        Uygulama Alanı
                      </span>
                      <p className="mt-1 font-display text-base font-bold text-on-image">
                        {currentTemplate.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Technical Description, Key Plants & Materials (6 cols) */}
                <div className="flex flex-col justify-between space-y-6 lg:col-span-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
                      Peyzaj Tipolojisi Şablonu
                    </span>
                    <h3 className="mt-2 font-display text-3xl font-bold text-on-image sm:text-4xl">
                      {currentTemplate.title}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-primary/80">
                      {currentTemplate.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                      {currentTemplate.description}
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2.5">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                      Şablon Karakteristikleri:
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {currentTemplate.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start gap-2 text-xs text-foreground/85"
                        >
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-moss" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Plants Tag Cloud */}
                  <div className="rounded-xl border border-border bg-card/80 p-4">
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                      Önerilen Karakter Bitkileri:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {currentTemplate.keyPlants.map((kp) => (
                        <span
                          key={kp}
                          className="rounded-md bg-forest/80 px-2.5 py-1 text-xs text-foreground"
                        >
                          {kp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Materials Tag Cloud */}
                  <div className="rounded-xl border border-border bg-card/80 p-4">
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                      Uyumlu Mimari Malzemeler:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {currentTemplate.materials.map((mat) => (
                        <span
                          key={mat}
                          className="rounded-md bg-secondary px-2.5 py-1 text-xs text-primary"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      to="/iletisim"
                      className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-terracotta py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-on-image shadow-lg transition-all duration-300 hover:bg-terracotta/90"
                    >
                      <span>Bu Şablonu Projenize Uygulayın</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
