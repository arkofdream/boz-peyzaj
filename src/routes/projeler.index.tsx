import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, BookOpen, Compass, Filter, Layers, Sparkles } from "lucide-react";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/site/Reveal";
import {
  BuildingSilhouetteSketch,
  TreeClusterSketch,
} from "@/components/site/ArchitecturalCroquis";
import { ProjectCatalog } from "@/components/site/ProjectCatalog";
import { TopoContourBackground, GraphicScaleBar } from "@/components/site/ArchitecturalCroquis";

export const Route = createFileRoute("/projeler/")({
  head: () => ({
    meta: [
      { title: "Projeler — BOZ PEYZAJ Arşivi & Kataloğu" },
      {
        name: "description",
        content:
          "Villa bahçeleri, kamusal parklar, otel avluları ve kentsel açık alanlar: BOZ PEYZAJ proje levhaları, şablonları ve malzeme kartelaları.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Projeler & Katalog — BOZ PEYZAJ" },
      {
        property: "og:description",
        content:
          "Mimari çizim ölçekleri, bitkisel tasarımlar ve malzeme paletleriyle zenginleştirilmiş peyzaj kataloğu.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"catalog" | "grid">("catalog");
  const categories = ["Tümü", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [filter, setFilter] = useState("Tümü");
  const list = filter === "Tümü" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background pattern-overlay pt-32 text-foreground lg:pt-40">
      {/* Topographic Background Overlay */}
      <TopoContourBackground opacity={0.25} />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-forest/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-2/3 h-96 w-96 rounded-full bg-terracotta/15 blur-3xl" />

      {/* Header & View Mode Switcher */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-moss/30 bg-moss/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
              <Sparkles size={12} className="text-primary" />
              Mimari Arşiv & Katalog
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary/70">
              (VOL. 2025/26 · {projects.length} LEVHA)
            </span>
          </div>

          {/* Catalog vs Grid Switcher */}
          <div className="flex items-center gap-1.5 rounded-full border border-border bg-card/90 p-1.5 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setViewMode("catalog")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                viewMode === "catalog"
                  ? "bg-forest text-primary shadow-sm"
                  : "text-foreground/70 hover:text-on-image"
              }`}
            >
              <BookOpen size={13} />
              <span>Katalog & Şablonlar</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-terracotta text-on-image shadow-sm"
                  : "text-foreground/70 hover:text-on-image"
              }`}
            >
              <Layers size={13} />
              <span>Galeri Izgarası</span>
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h1 className="font-display text-5xl font-bold tracking-tight text-foreground lg:text-7xl">
              Peyzaj Levhaları & Arşiv
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/75">
              Toprağın, iklimin ve mimarinin buluştuğu noktada; zamansız estetik ve ekolojik
              duyarlılıkla kurgulanmış peyzaj projelerimiz. Çizim ölçekleri, bitki türleri ve
              malzeme kartelalarıyla monografi formatında inceleyin.
            </p>
          </div>
          <div className="hidden pb-2 lg:block">
            <GraphicScaleBar />
          </div>
        </div>
      </section>

      {/* VIEW 1: FULL INTERACTIVE CATALOG & TEMPLATES LOOKBOOK */}
      {viewMode === "catalog" && (
        <div className="mt-12">
          <ProjectCatalog />
        </div>
      )}

      {/* VIEW 2: FILTERABLE ARCHITECTURAL GALLERY GRID */}
      {viewMode === "grid" && (
        <div className="relative z-10">
          {/* Categories Filter Tabs */}
          <section className="mx-auto max-w-[1400px] px-6 pt-12 lg:px-10">
            <div className="flex flex-wrap items-center gap-2.5 border-t border-border pt-8">
              <div className="mr-2 hidden items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-primary sm:inline-flex">
                <Filter size={13} />
                <span>Tipoloji:</span>
              </div>

              {categories.map((c) => {
                const isActive = filter === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setFilter(c)}
                    className={`rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                      isActive
                        ? "bg-forest font-semibold text-primary shadow-md"
                        : "border border-border bg-card/80 text-foreground/75 hover:border-forest hover:bg-forest/10 hover:text-on-image"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Asymmetrical Editorial Projects Layout */}
          <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-14">
              {list.map((p, i) => {
                const colSpan =
                  i % 4 === 0
                    ? "md:col-span-8"
                    : i % 4 === 1
                      ? "md:col-span-4"
                      : i % 4 === 2
                        ? "md:col-span-6"
                        : "md:col-span-6";

                const aspectClass =
                  i % 4 === 0 ? "aspect-[16/10]" : i % 4 === 1 ? "aspect-[4/5]" : "aspect-[16/11]";

                return (
                  <Reveal key={p.slug} delay={i * 70} className={colSpan}>
                    <Link
                      to="/projeler/$slug"
                      params={{ slug: p.slug }}
                      className="group block overflow-hidden rounded-3xl border border-border bg-card/80 p-4 backdrop-blur-md transition-all duration-500 hover:border-forest/50 hover:bg-secondary hover:shadow-2xl sm:p-5"
                    >
                      {/* Media container with Blueprint crosshairs */}
                      <div
                        className={`relative ${aspectClass} w-full overflow-hidden rounded-2xl bg-anthracite`}
                      >
                        {/* Blueprint Watermark Stamp */}
                        <div className="pointer-events-none absolute left-3 top-3 z-20 font-mono text-[10px] text-on-image/50">
                          +
                        </div>
                        <div className="pointer-events-none absolute right-3 top-3 z-20 font-mono text-[10px] text-on-image/50">
                          +
                        </div>

                        <img
                          src={p.cover}
                          alt={p.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        />

                        {/* Gradient Overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />

                        {/* Top Architectural Badges */}
                        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-forest/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-md">
                            {p.plateNo}
                          </span>
                          <span className="rounded-full bg-card/95 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground backdrop-blur-md">
                            {p.drawingScale}
                          </span>
                        </div>

                        {/* Hover Arrow Float */}
                        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-on-image shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>

                      {/* Metadata below image */}
                      <div className="mt-5 px-1 pb-2">
                        {/* Template Tag & Coordinates */}
                        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-warm-yellow">
                          <span>{p.templateName}</span>
                          <span className="text-on-image/50">{p.coordinates}</span>
                        </div>

                        <div className="mt-2 flex items-baseline justify-between gap-4">
                          <h2 className="font-display text-2xl font-bold text-foreground transition-colors group-hover:text-primary lg:text-3xl">
                            {p.title}
                          </h2>
                          <span className="shrink-0 font-mono text-xs text-on-image/60">
                            {p.area} · {p.elevation}
                          </span>
                        </div>

                        <p className="mt-1 font-sans text-xs uppercase tracking-[0.15em] text-moss">
                          {p.location} · {p.year}
                        </p>

                        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-foreground/75">
                          {p.summary}
                        </p>

                        {/* Plant & Material Sample Swatches Preview */}
                        <div className="mt-5 space-y-2.5 border-t border-border pt-3.5">
                          {/* Plants mini row */}
                          {p.plants && p.plants.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                              <span className="font-mono text-[10px] uppercase tracking-wider text-primary/60">
                                Bitkiler:
                              </span>
                              {p.plants.slice(0, 3).map((pl) => (
                                <span
                                  key={pl.name}
                                  className="rounded-md bg-forest/40 px-2 py-0.5 text-primary"
                                >
                                  {pl.name}
                                </span>
                              ))}
                              {p.plants.length > 3 && (
                                <span className="text-[10px] text-on-image/50">
                                  +{p.plants.length - 3}
                                </span>
                              )}
                            </div>
                          )}

                          {/* Materials mini row */}
                          {p.materials && p.materials.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 text-[11px]">
                              <span className="font-mono text-[10px] uppercase tracking-wider text-primary/60">
                                Malzeme:
                              </span>
                              {p.materials.map((mat) => (
                                <span
                                  key={mat.name}
                                  className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-0.5 text-foreground"
                                >
                                  <span
                                    className="h-2 w-2 rounded-full border border-on-image/30"
                                    style={{ backgroundColor: mat.color }}
                                  />
                                  <span>{mat.name}</span>
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
