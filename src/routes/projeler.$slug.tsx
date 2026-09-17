import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Maximize2,
  X,
} from "lucide-react";
import { getProject, projects, landscapeTemplates } from "@/lib/projects";
import { Reveal } from "@/components/site/Reveal";
import { PhoneMockup } from "@/components/site/Mockups";
import {
  TopoContourBackground,
  ElevationSectionCroquis,
  GraphicScaleBar,
} from "@/components/site/ArchitecturalCroquis";

export const Route = createFileRoute("/projeler/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Proje Bulunamadı — TERRA Peyzaj" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.project;
    const title = `${p.title} — TERRA Peyzaj Mimarlığı`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center text-foreground">
      <h1 className="font-display text-4xl font-bold text-foreground">Proje Bulunamadı</h1>
      <p className="max-w-md text-sm text-foreground/70">
        Aradığınız proje arşivimizde yer almıyor ya da yayından kaldırılmış olabilir.
      </p>
      <Link
        to="/projeler"
        className="rounded-full bg-forest px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-forest/80"
      >
        Tüm Projeleri Görüntüle
      </Link>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const [lightbox, setLightbox] = useState<string | null>(null);

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length]!;

  const matchedTemplate =
    landscapeTemplates.find((t) =>
      project.templateName ? project.templateName.includes(t.title) : false,
    ) || landscapeTemplates[0];

  return (
    <article className="bg-background pattern-overlay text-foreground selection:bg-terracotta selection:text-on-image">
      {/* 1. CINEMATIC HERO */}
      <section className="image-tone relative h-[88svh] min-h-[620px] w-full overflow-hidden bg-anthracite text-foreground">
        {project.video ? (
          <video
            src={project.video}
            poster={project.cover}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <img
            src={project.cover}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-anthracite/45 to-anthracite/70" />
        <div className="absolute inset-0 bg-forest/25 mix-blend-multiply" />

        {/* Topographic Contour Overlay */}
        <TopoContourBackground opacity={0.25} />

        {/* Content Container */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pb-16 pt-32 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="flex items-center justify-between">
            <Link
              to="/projeler"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-primary backdrop-blur-md transition-colors hover:border-offwhite hover:bg-secondary"
            >
              <ArrowLeft size={13} />
              <span>Tüm Projeler</span>
            </Link>

            <div className="hidden sm:block">
              <GraphicScaleBar />
            </div>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
              <span className="rounded-full bg-forest/90 px-3 py-1 font-bold text-primary">
                {project.plateNo}
              </span>
              <span className="rounded-full bg-card/90 px-3 py-1 text-foreground">
                {project.category}
              </span>
              <span>{project.location}</span>
              <span className="h-1 w-1 rounded-full bg-sand/60" />
              <span>{project.year}</span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-[5.5rem]">
              {project.title}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {/* 2. PROJECT OVERVIEW & SPECS */}
      <section className="relative overflow-hidden bg-background pattern-overlay py-20 lg:py-28">
        <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 rounded-full bg-forest/20 blur-3xl" />

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Metadata Sidebar (4 cols) */}
            <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-2xl backdrop-blur-xl lg:col-span-4">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <h2 className="font-display text-xl font-bold text-foreground">Proje Künyesi</h2>
                <span className="font-mono text-xs font-bold text-moss">{project.plateNo}</span>
              </div>

              <div className="mt-6 divide-y divide-white/10">
                {[
                  ["Konum", project.location],
                  ["Yıl", project.year],
                  ["Proje Alanı", project.area],
                  ["Tipoloji", project.category],
                  ["Koordinatlar", project.coordinates],
                  ["Rakım & Ölçek", `${project.elevation} · ${project.drawingScale}`],
                  ["Tasarım Şablonu", project.templateName],
                ].map(([k, v]) => (
                  <div key={k} className="py-3.5 first:pt-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary/70">
                      {k}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">{v}</p>
                  </div>
                ))}

                <div className="pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary/70">
                    Hizmet Kapsamı
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.scope.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Story / Narrative (8 cols) */}
            <div className="space-y-6 lg:col-span-8 lg:pl-6">
              <span className="inline-block rounded-full border border-moss/30 bg-forest/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
                Tasarım Anlatısı
              </span>

              {project.story.map((p, i) => (
                <Reveal key={i} delay={i * 90}>
                  {i === 0 ? (
                    <p className="font-display text-2xl font-medium leading-[1.4] text-primary sm:text-3xl">
                      {p}
                    </p>
                  ) : (
                    <p className="text-base leading-relaxed text-foreground/75">{p}</p>
                  )}
                </Reveal>
              ))}

              {/* Arazi Kesiti Çizimi */}
              <div className="pt-4">
                <ElevationSectionCroquis />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURAL CATALOG PLATE & SPECIFICATIONS SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary to-background py-24 text-foreground lg:py-32">
        {/* Architectural Grid & Topo Watermark */}
        <TopoContourBackground opacity={0.2} />
        <div className="pointer-events-none absolute inset-0 croquis-grid opacity-25" />
        <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-forest/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-terracotta/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
          {/* Section Header */}
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
                <BookOpen size={13} className="text-primary" />
                Mimari Katalog & Şartname Detayı
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Levha, Bitkiler & Malzeme Kartelası
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-primary">
              <span className="rounded-md bg-forest/80 px-3 py-1 font-bold text-primary">
                {project.plateNo}
              </span>
              <span>{project.drawingScale}</span>
              <span className="text-foreground/40">|</span>
              <span>{project.coordinates}</span>
            </div>
          </Reveal>

          {/* Catalog Folio Card */}
          <div className="mt-12 rounded-3xl border border-border bg-card/95 p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-12">
              {/* Left Column: Plant & Material Swatches (7 cols) */}
              <div className="space-y-10 lg:col-span-7">
                {/* Plant Palette */}
                {project.plants && project.plants.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                        Bitkisel Tasarım Paleti
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-moss">
                        {project.plants.length} Karakteristik Tür
                      </span>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {project.plants.map((pl) => (
                        <div
                          key={pl.name}
                          className="group rounded-2xl border border-border bg-card/80 p-4 transition-all hover:border-moss/40 hover:bg-secondary"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-display text-base font-semibold text-foreground group-hover:text-primary">
                              {pl.name}
                            </span>
                            <span className="rounded-full bg-forest/60 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary">
                              {pl.tag}
                            </span>
                          </div>
                          <p className="mt-1 font-serif text-xs italic text-foreground/60">
                            {pl.botanical}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Material Palette */}
                {project.materials && project.materials.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                        Sert Zemin & Malzeme Kartelası
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta">
                        Doğal Dokular
                      </span>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {project.materials.map((mat) => (
                        <div
                          key={mat.name}
                          className="flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-4 transition-all hover:border-sand/40 hover:bg-secondary"
                        >
                          <div
                            className="h-12 w-12 shrink-0 rounded-xl border border-on-image/20 shadow-md"
                            style={{ backgroundColor: mat.color }}
                          />
                          <div>
                            <p className="font-display text-sm font-bold text-foreground">
                              {mat.name}
                            </p>
                            <p className="mt-0.5 text-xs text-foreground/65">{mat.texture}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Matched Design Template (5 cols) */}
              <div className="rounded-2xl border border-forest/50 bg-forest/20 p-6 sm:p-8 lg:col-span-5">
                <div className="flex items-center gap-2">
                  <Compass size={14} className="text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                    Uygulanan Tasarım Şablonu
                  </span>
                </div>

                <h4 className="mt-3 font-display text-2xl font-bold text-foreground">
                  {matchedTemplate?.title || project.templateName}
                </h4>
                <p className="mt-1 font-mono text-xs text-moss">{matchedTemplate?.subtitle}</p>

                <p className="mt-4 text-xs leading-relaxed text-foreground/80 sm:text-sm">
                  {matchedTemplate?.description}
                </p>

                <div className="mt-6 space-y-3 border-t border-border pt-5 text-xs">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary/70">
                      Toprak & Eğim Uyumu:
                    </span>
                    <p className="mt-0.5 text-foreground/85">{matchedTemplate?.climateZone}</p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary/70">
                      Sulama & Su Yönetimi:
                    </span>
                    <p className="mt-0.5 text-foreground/85">{matchedTemplate?.waterNeed}</p>
                  </div>
                </div>

                {matchedTemplate?.features && (
                  <div className="mt-6 border-t border-border pt-5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary/70">
                      Tasarım Prensipleri:
                    </span>
                    <ul className="mt-3 space-y-2">
                    {matchedTemplate.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-foreground/90">
                          <CheckCircle2 size={13} className="shrink-0 text-warm-yellow" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL GALLERY */}
      <section className="relative overflow-hidden bg-background pattern-overlay py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 croquis-grid opacity-25" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-10">
            <span className="inline-block rounded-full border border-moss/30 bg-forest/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
              Fotoğraf Seçkisi & Levha Detayları
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground lg:text-4xl">
              Detaylar ve Atmosfer
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {project.gallery.map((g, i) => {
              const isWide = i === 0;
              return (
                <Reveal
                  key={i}
                  delay={i * 80}
                  className={isWide ? "md:col-span-12" : "md:col-span-6"}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setLightbox(g)}
                    onKeyDown={(e) => e.key === "Enter" && setLightbox(g)}
                    className="group relative block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-border bg-card/80 p-3 backdrop-blur-md transition-all duration-300 hover:border-forest/50 hover:bg-secondary"
                  >
                    <div
                      className={`relative ${isWide ? "aspect-[16/9]" : "aspect-[4/3]"} w-full overflow-hidden rounded-2xl`}
                    >
                      <img
                        src={g}
                        alt={`${project.title} görsel ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-anthracite/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-on-image opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. VERTICAL VIDEO WALKTHROUGH (IF AVAILABLE) */}
      {project.verticalVideo && (
        <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary to-background py-24 lg:py-32">
          <TopoContourBackground opacity={0.2} />

          <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-12 lg:px-10">
            <Reveal className="space-y-4 lg:col-span-6">
              <span className="inline-block rounded-full border border-moss/30 bg-forest/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
                Canlı Deneyim
              </span>
              <h2 className="font-display text-4xl font-bold leading-tight text-foreground lg:text-5xl">
                Bahçede Yürüyüş
              </h2>
              <p className="text-base leading-relaxed text-foreground/75">
                Tamamlanan alandan alınan dikey hareketli kayıt; bitkilerin rüzgârla etkileşimini,
                doğal taş kaplamaların derinliğini ve gün batımındaki ışık yansımasını gösterir.
              </p>
            </Reveal>

            <Reveal delay={120} className="mx-auto w-full max-w-[240px] lg:col-span-6 lg:max-w-[280px]">
              <PhoneMockup project={project} />
            </Reveal>
          </div>
        </section>
      )}

      {/* 6. NEXT PROJECT NAVIGATION & BOTTOM CTA */}
      <section className="border-t border-border bg-gradient-to-r from-secondary/60 to-card">
        <Link
          to="/projeler/$slug"
          params={{ slug: next.slug }}
          className="group mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-16 transition-colors hover:bg-secondary/80 lg:px-10 lg:py-24"
        >
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-terracotta">
              Sıradaki Proje →
            </span>
            <p className="font-display text-3xl font-bold text-foreground transition-colors group-hover:text-primary lg:text-5xl">
              {next.title}
            </p>
            <p className="text-sm text-foreground/60">
              {next.location} · {next.category}
            </p>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-on-image/20 bg-secondary text-foreground shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:border-forest group-hover:bg-forest group-hover:text-primary lg:h-16 lg:w-16">
            <ArrowRight size={22} />
          </div>
        </Link>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-anthracite/95 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Kapat"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-secondary"
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-[90vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </article>
  );
}
