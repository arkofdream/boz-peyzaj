import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Compass, Trees, Award } from "lucide-react";
import studioAsset from "@/assets/studio.jpg.asset.json";
import { Reveal } from "@/components/site/Reveal";
import {
  TopoContourBackground,
  MasterplanCroquis,
  GraphicScaleBar,
} from "@/components/site/ArchitecturalCroquis";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "StÃ¼dyo & YaklaÅŸÄ±m â€” TERRA Peyzaj MimarlÄ±ÄŸÄ±" },
      {
        name: "description",
        content:
          "TERRA, Ä°zmir merkezli peyzaj mimarlÄ±ÄŸÄ± stÃ¼dyosudur. Ekip, ekolojik tasarÄ±m yaklaÅŸÄ±mÄ± ve 5 adÄ±mlÄ± Ã§alÄ±ÅŸma sÃ¼reci.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "StÃ¼dyo â€” TERRA Peyzaj MimarlÄ±ÄŸÄ±" },
      {
        property: "og:description",
        content: "18 yÄ±ldÄ±r doÄŸayla mimariyi bir araya getiren baÄŸÄ±msÄ±z peyzaj mimarlÄ±ÄŸÄ± stÃ¼dyosu.",
      },
    ],
  }),
  component: AboutPage,
});

const process = [
  {
    n: "01",
    t: "Arazi OkumasÄ± & Ekolojik Analiz",
    d: "Toprak yapÄ±sÄ±, mikro-iklim, hÃ¢kim rÃ¼zgÃ¢rlar, gÃ¼neÅŸlenme aÃ§Ä±larÄ± ve mevcut aÄŸaÃ§larÄ±n rÃ¶lÃ¶vesi.",
  },
  {
    n: "02",
    t: "Konsept & MekÃ¢nsal Kurgu",
    d: "Ana akslar, sirkÃ¼lasyon ÅŸemasÄ±, su ve gÃ¶lge alanlarÄ±nÄ±n el Ã§izimleri ve 3B hacim Ã§alÄ±ÅŸmalarÄ±.",
  },
  {
    n: "03",
    t: "TasarÄ±m GeliÅŸtirme & DetaylandÄ±rma",
    d: "Kot planlarÄ±, sert zemin kesitleri, detaylÄ± bitkilendirme listesi ve gece aydÄ±nlatma projeleri.",
  },
  {
    n: "04",
    t: "Uygulama & Åantiye Denetimi",
    d: "DoÄŸal taÅŸ seÃ§imi, altyapÄ± drenaj kontrolÃ¼, fidanlÄ±k seÃ§imi ve ÅŸantiye yerinde montaj denetimi.",
  },
  {
    n: "05",
    t: "OlgunlaÅŸma & BakÄ±m YÃ¶netimi",
    d: "Ä°lk Ã¼Ã§ kritik bÃ¼yÃ¼me yÄ±lÄ±nda mevsimlik kontroller, budama reÃ§eteleri ve geliÅŸim raporlamasÄ±.",
  },
];

const pillars = [
  {
    icon: Compass,
    title: "Yerel Odak & TopoÄŸrafya",
    desc: "Her coÄŸrafyanÄ±n kendi jeolojik ve biyolojik dokusuna saygÄ± duyan tasarÄ±m.",
  },
  {
    icon: Trees,
    title: "Ä°klim Direnci & BiyoÃ§eÅŸitlilik",
    desc: "AÅŸÄ±rÄ± sÄ±caklara ve kuraklÄ±ÄŸa dayanÄ±klÄ±, kendini besleyen bitki topluluklarÄ±.",
  },
  {
    icon: Award,
    title: "BÃ¼tÃ¼ncÃ¼l Sorumluluk",
    desc: "Fikir taslaÄŸÄ±ndan 10 yÄ±l sonraki olgun aÄŸaca kadar aynÄ± ekiple yanÄ±nÄ±zdayÄ±z.",
  },
];

function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background pattern-overlay pt-32 text-foreground lg:pt-40">
      <TopoContourBackground opacity={0.25} />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-forest/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-2/3 h-96 w-96 rounded-full bg-terracotta/15 blur-3xl" />

      {/* Header */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-moss/30 bg-moss/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
            <Sparkles size={12} className="text-primary" />
            StÃ¼dyo & Felsefe
          </span>
          <div className="hidden sm:block">
            <GraphicScaleBar />
          </div>
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.8rem]">
          PeyzajÄ± bir dekorasyon deÄŸil, zamanla bÃ¼yÃ¼yen bir organizma olarak gÃ¶rÃ¼yoruz.
        </h1>
      </section>

      {/* Studio Showcase Hero Image */}
      <section className="relative z-10 mx-auto mt-14 max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
            <img
              src={studioAsset.url}
              alt="TERRA peyzaj mimarlÄ±ÄŸÄ± stÃ¼dyosu Ã§alÄ±ÅŸma ortamÄ±"
              loading="lazy"
              className="h-[55vh] min-h-[420px] w-full object-cover transition-transform duration-1000 hover:scale-105 lg:h-[72vh]"
            />
          </div>
        </Reveal>
      </section>

      {/* Philosophy & Narrative */}
      <section className="relative z-10 mx-auto grid max-w-[1400px] gap-14 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32">
        <Reveal className="space-y-4 lg:col-span-5">
          <span className="inline-block rounded-full border border-moss/30 bg-forest/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
            Kimiz?
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            DoÄŸa ve mimarinin kesiÅŸiminde 18 yÄ±l.
          </h2>
        </Reveal>

        <Reveal className="space-y-6 lg:col-span-7" delay={100}>
          <p className="font-display text-2xl font-medium leading-[1.4] text-primary sm:text-3xl">
            2008 yÄ±lÄ±nda kurulan TERRA; peyzaj mimarlarÄ±, ziraat mÃ¼hendisleri, botanik danÄ±ÅŸmanlarÄ±
            ve saha yÃ¶neticilerinden oluÅŸan on kiÅŸilik multidisipliner bir tasarÄ±m stÃ¼dyosudur.
          </p>
          <p className="text-base leading-relaxed text-foreground/75">
            Ege ve Akdeniz havzasÄ±nÄ±n kendine has iklimsel zorluklarÄ± ve benzersiz gÃ¼zellikleri
            bizim laboratuvarÄ±mÄ±z oldu. Projelerimizde su sarfiyatÄ±nÄ± azaltan, rÃ¼zgÃ¢rÄ± serinleten ve
            yapay kimyasal ilaÃ§lamaya gerek duymayan ekosistemler tasarlÄ±yoruz.
          </p>
          <p className="text-base leading-relaxed text-foreground/75">
            AhÅŸap, doÄŸal taÅŸ ve yerel mermer gibi malzemeleri iÅŸlenmemiÅŸ halleriyle seviyor;
            doÄŸallÄ±ÄŸÄ± kusursuz geometrilerle dengeliyoruz.
          </p>
        </Reveal>
      </section>

      {/* Embedded Masterplan Croquis Showcase */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 pb-20 lg:px-10">
        <Reveal>
          <MasterplanCroquis />
        </Reveal>
      </section>

      {/* 3 Pillars */}
      <section className="relative z-10 bg-gradient-to-b from-background via-secondary to-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-3">
            {pillars.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 80}>
                <div className="h-full rounded-3xl border border-border bg-card/80 p-8 shadow-2xl backdrop-blur-md transition-all hover:border-moss/40 hover:bg-secondary">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/80 text-primary shadow-inner">
                    <item.icon size={24} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-moss/30 bg-forest/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
            SÃ¼reÃ§
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            TasarÄ±m NasÄ±l Ä°lerler?
          </h2>
        </div>

        <div className="mt-14 divide-y divide-white/10 border-t border-border">
          {process.map((item, i) => (
            <Reveal key={item.n} delay={i * 60}>
              <div className="group grid gap-4 py-8 transition-colors hover:bg-card/80 md:grid-cols-12 md:items-baseline">
                <span className="font-mono text-sm font-bold tracking-[0.25em] text-terracotta md:col-span-2">
                  {item.n}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground transition-colors group-hover:text-primary md:col-span-4">
                  {item.t}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/70 md:col-span-6">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-secondary via-background to-secondary py-24 text-foreground lg:py-32">
        <TopoContourBackground opacity={0.25} />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center lg:px-10">
          <Reveal className="mx-auto max-w-3xl space-y-6">
            <span className="inline-block rounded-full bg-secondary px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-primary backdrop-blur-md">
              StÃ¼dyo Ziyareti
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Projelerinizi Ã§izim masasÄ±nda konuÅŸalÄ±m.
            </h2>
            <p className="mx-auto max-w-xl text-base text-foreground/80">
              Alsancak stÃ¼dyomuzda malzeme Ã¶rneklerini inceleyebilir, arazinizin fotoÄŸraflarÄ±
              Ã¼zerinden konsept eskizler Ã§Ä±kartabiliriz.
            </p>
            <div className="pt-4">
              <Link
                to="/iletisim"
                className="group inline-flex items-center gap-3 rounded-full bg-terracotta px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-on-image shadow-xl transition-all duration-300 hover:bg-terracotta/90"
              >
                <span>Randevu AlÄ±n</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
