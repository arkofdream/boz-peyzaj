import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Compass, Trees, Award } from "lucide-react";
import studioImg from "@/assets/studio.jpg";
import { Reveal } from "@/components/site/Reveal";
import {
  TopoContourBackground,
  MasterplanCroquis,
  GraphicScaleBar,
} from "@/components/site/ArchitecturalCroquis";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Stüdyo & Yaklaşım — TERRA Peyzaj Mimarlığı" },
      {
        name: "description",
        content:
          "TERRA, İzmir merkezli peyzaj mimarlığı stüdyosudur. Ekip, ekolojik tasarım yaklaşımı ve 5 adımlı çalışma süreci.",
      },
      { property: "og:title", content: "Stüdyo — TERRA Peyzaj Mimarlığı" },
      {
        property: "og:description",
        content: "18 yıldır doğayla mimariyi bir araya getiren bağımsız peyzaj mimarlığı stüdyosu.",
      },
    ],
  }),
  component: AboutPage,
});

const process = [
  {
    n: "01",
    t: "Arazi Okuması & Ekolojik Analiz",
    d: "Toprak yapısı, mikro-iklim, hâkim rüzgârlar, güneşlenme açıları ve mevcut ağaçların rölövesi.",
  },
  {
    n: "02",
    t: "Konsept & Mekânsal Kurgu",
    d: "Ana akslar, sirkülasyon şeması, su ve gölge alanlarının el çizimleri ve 3B hacim çalışmaları.",
  },
  {
    n: "03",
    t: "Tasarım Geliştirme & Detaylandırma",
    d: "Kot planları, sert zemin kesitleri, detaylı bitkilendirme listesi ve gece aydınlatma projeleri.",
  },
  {
    n: "04",
    t: "Uygulama & Şantiye Denetimi",
    d: "Doğal taş seçimi, altyapı drenaj kontrolü, fidanlık seçimi ve şantiye yerinde montaj denetimi.",
  },
  {
    n: "05",
    t: "Olgunlaşma & Bakım Yönetimi",
    d: "İlk üç kritik büyüme yılında mevsimlik kontroller, budama reçeteleri ve gelişim raporlaması.",
  },
];

const pillars = [
  {
    icon: Compass,
    title: "Yerel Odak & Topoğrafya",
    desc: "Her coğrafyanın kendi jeolojik ve biyolojik dokusuna saygı duyan tasarım.",
  },
  {
    icon: Trees,
    title: "İklim Direnci & Biyoçeşitlilik",
    desc: "Aşırı sıcaklara ve kuraklığa dayanıklı, kendini besleyen bitki toplulukları.",
  },
  {
    icon: Award,
    title: "Bütüncül Sorumluluk",
    desc: "Fikir taslağından 10 yıl sonraki olgun ağaca kadar aynı ekiple yanınızdayız.",
  },
];

function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d120f] pt-32 text-offwhite lg:pt-40">
      <TopoContourBackground opacity={0.25} />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-forest/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-2/3 h-96 w-96 rounded-full bg-terracotta/15 blur-3xl" />

      {/* Header */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-moss/30 bg-moss/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
            <Sparkles size={12} className="text-sand" />
            Stüdyo & Felsefe
          </span>
          <div className="hidden sm:block">
            <GraphicScaleBar />
          </div>
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-offwhite sm:text-6xl lg:text-[4.8rem]">
          Peyzajı bir dekorasyon değil, zamanla büyüyen bir organizma olarak görüyoruz.
        </h1>
      </section>

      {/* Studio Showcase Hero Image */}
      <section className="relative z-10 mx-auto mt-14 max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
            <img
              src={studioImg}
              alt="TERRA peyzaj mimarlığı stüdyosu çalışma ortamı"
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
          <h2 className="font-display text-3xl font-bold text-offwhite lg:text-4xl">
            Doğa ve mimarinin kesişiminde 18 yıl.
          </h2>
        </Reveal>

        <Reveal className="space-y-6 lg:col-span-7" delay={100}>
          <p className="font-display text-2xl font-medium leading-[1.4] text-sand sm:text-3xl">
            2008 yılında kurulan TERRA; peyzaj mimarları, ziraat mühendisleri, botanik danışmanları
            ve saha yöneticilerinden oluşan on kişilik multidisipliner bir tasarım stüdyosudur.
          </p>
          <p className="text-base leading-relaxed text-offwhite/75">
            Ege ve Akdeniz havzasının kendine has iklimsel zorlukları ve benzersiz güzellikleri
            bizim laboratuvarımız oldu. Projelerimizde su sarfiyatını azaltan, rüzgârı serinleten ve
            yapay kimyasal ilaçlamaya gerek duymayan ekosistemler tasarlıyoruz.
          </p>
          <p className="text-base leading-relaxed text-offwhite/75">
            Ahşap, doğal taş ve yerel mermer gibi malzemeleri işlenmemiş halleriyle seviyor;
            doğallığı kusursuz geometrilerle dengeliyoruz.
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
      <section className="relative z-10 bg-gradient-to-b from-[#0d120f] via-[#121f17] to-[#0d120f] py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-3">
            {pillars.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 80}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-md transition-all hover:border-moss/40 hover:bg-white/[0.08]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest/80 text-sand shadow-inner">
                    <item.icon size={24} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-offwhite">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-offwhite/70">{item.desc}</p>
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
            Süreç
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-offwhite lg:text-5xl">
            Tasarım Nasıl İlerler?
          </h2>
        </div>

        <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
          {process.map((item, i) => (
            <Reveal key={item.n} delay={i * 60}>
              <div className="group grid gap-4 py-8 transition-colors hover:bg-white/[0.04] md:grid-cols-12 md:items-baseline">
                <span className="font-mono text-sm font-bold tracking-[0.25em] text-terracotta md:col-span-2">
                  {item.n}
                </span>
                <h3 className="font-display text-2xl font-bold text-offwhite transition-colors group-hover:text-sand md:col-span-4">
                  {item.t}
                </h3>
                <p className="text-sm leading-relaxed text-offwhite/70 md:col-span-6">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0d1e15] via-[#183c2b] to-[#0e1b14] py-24 text-offwhite lg:py-32">
        <TopoContourBackground opacity={0.25} />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center lg:px-10">
          <Reveal className="mx-auto max-w-3xl space-y-6">
            <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-sand backdrop-blur-md">
              Stüdyo Ziyareti
            </span>
            <h2 className="font-display text-4xl font-bold text-offwhite sm:text-5xl lg:text-6xl">
              Projelerinizi çizim masasında konuşalım.
            </h2>
            <p className="mx-auto max-w-xl text-base text-offwhite/80">
              Alsancak stüdyomuzda malzeme örneklerini inceleyebilir, arazinizin fotoğrafları
              üzerinden konsept eskizler çıkartabiliriz.
            </p>
            <div className="pt-4">
              <Link
                to="/iletisim"
                className="group inline-flex items-center gap-3 rounded-full bg-terracotta px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-xl transition-all duration-300 hover:bg-terracotta/90"
              >
                <span>Randevu Alın</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
