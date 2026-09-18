import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { projects } from "@/lib/projects";
import { videos } from "@/lib/projects";
import { LaptopMockup } from "@/components/site/Mockups";
import { Reveal } from "@/components/site/Reveal";
import { motion } from "framer-motion";

import villaImg from "@/assets/proj-villa.jpg";
import coastalImg from "@/assets/proj-coastal.jpg";
import parkImg from "@/assets/proj-park.jpg";
import hotelImg from "@/assets/proj-hotel.jpg";
import officeImg from "@/assets/proj-office.jpg";
import courtyardImg from "@/assets/proj-courtyard.jpg";
import studioImg from "@/assets/studio.jpg";

export const Route = createFileRoute("/")(
  {
    head: () => ({
      meta: [
        { title: "BOZ PEYZAJ — Peyzaj Mimarlığı & Dış Mekân Tasarımı" },
        {
          name: "description",
          content:
            "BOZ PEYZAJ; villa bahçeleri, ticari alanlar ve özel projeler için profesyonel peyzaj tasarımı, 3D projelendirme ve uygulama hizmetleri sunar.",
        },
      ],
    }),
    component: Home,
  },
);

const services = [
  {
    n: "01",
    title: "Peyzaj Tasarımı",
    desc: "Yaşam alanlarınızı doğayla buluşturan özgün peyzaj projeleri. Arazi analizi, konsept tasarım ve uygulama projelerini tek çatı altında sunuyoruz.",
    image: villaImg,
  },
  {
    n: "02",
    title: "3D Peyzaj Projelendirme",
    desc: "Projelerinizi hayata geçmeden önce üç boyutlu olarak görselleştiriyoruz. Fotorealistik renderlar ile tasarımı önceden deneyimleyin.",
    image: parkImg,
  },
  {
    n: "03",
    title: "Villa Bahçesi Tasarımı",
    desc: "Özel konutlar için kişiye özel bahçe tasarımları. Havuz çevresi, teras düzenlemesi, bitkilendirme ve aydınlatma dahil bütüncül çözümler.",
    image: coastalImg,
  },
  {
    n: "04",
    title: "Ticari Alan Peyzajı",
    desc: "Oteller, rezidanslar ve ofis kampüsleri için profesyonel peyzaj projeleri. Markanızın kimliğini dış mekanlara taşıyoruz.",
    image: hotelImg,
  },
  {
    n: "05",
    title: "Peyzaj Uygulama",
    desc: "Tasarımdan uygulamaya kadar tüm süreçleri yönetiyoruz. Sert zemin, bitkilendirme, sulama ve aydınlatma uygulamaları.",
    image: officeImg,
  },
  {
    n: "06",
    title: "Bakım ve Düzenleme",
    desc: "Mevcut bahçelerinizin bakımı ve yenilenmesi. Mevsimsel bakım programları, budama, gübreleme ve hastalık kontrolü.",
    image: courtyardImg,
  },
];

function Home() {
  const heroProject = projects[0]!;
  const featuredProjects = projects.slice(0, 6);

  return (
    <div className="w-full bg-background">
      {/* ═══════════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen w-full overflow-hidden bg-anthracite">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${villaImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-anthracite via-anthracite/95 to-anthracite/70" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }} />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col items-center justify-center gap-12 px-6 pt-24 pb-16 lg:flex-row lg:gap-16 lg:px-10 lg:pt-0 lg:pb-0">
          {/* LEFT: Text Content */}
          <div className="w-full text-center lg:w-[45%] lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-olive">
                Peyzaj Mimarlığı & Dış Mekân Tasarımı
              </span>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Doğayı ve Mimariyi{" "}
                <span className="text-olive">Buluşturuyoruz</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60 lg:text-lg mx-auto lg:mx-0">
                Profesyonel peyzaj tasarımı ile yaşam alanlarınızı doğayla bütünleşik, sürdürülebilir ve estetik mekanlara dönüştürüyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                to="/projeler"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-anthracite transition-all hover:bg-olive hover:text-white"
              >
                <span>Projeleri İncele</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/iletisim"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all hover:bg-white/15"
              >
                <span>Teklif Al</span>
                <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Laptop Mockup with Video */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[55%] flex justify-center"
          >
            <div className="w-full max-w-[700px]">
              <LaptopMockup
                src={videos.villa}
                poster={heroProject.cover}
                project={heroProject}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. HİZMETLERİMİZ SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-olive">
                  Hizmetlerimiz
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Uzmanlık Alanlarımız
                </h2>
              </div>
              <Link
                to="/hizmetlerimiz"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 transition-colors hover:text-forest"
              >
                <span>Tümünü Gör</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <Link
                  to="/hizmetlerimiz"
                  className="group block overflow-hidden rounded-2xl border border-border/50 bg-white transition-all duration-500 hover:border-olive/30 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-display text-xs font-bold text-forest backdrop-blur-sm">
                      {s.n}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-forest">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {s.desc}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. PROJELER SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-secondary/50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-olive">
                  Portfolyo
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Seçkin Projelerimiz
                </h2>
              </div>
              <Link
                to="/projeler"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 transition-colors hover:text-forest"
              >
                <span>Tüm Projeleri Gör</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          {/* Editorial Grid */}
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8">
            {featuredProjects.map((p, i) => {
              const colSpan =
                i === 0 ? "md:col-span-8" :
                i === 1 ? "md:col-span-4" :
                i === 2 ? "md:col-span-4" :
                i === 3 ? "md:col-span-8" :
                i === 4 ? "md:col-span-6" :
                "md:col-span-6";

              const aspectClass =
                i === 0 ? "aspect-[16/10]" :
                i === 1 ? "aspect-[4/5]" :
                i === 2 ? "aspect-[4/5]" :
                i === 3 ? "aspect-[16/10]" :
                "aspect-[16/11]";

              return (
                <Reveal key={p.slug} delay={i * 70} className={colSpan}>
                  <Link
                    to="/projeler/$slug"
                    params={{ slug: p.slug }}
                    className="group relative block overflow-hidden rounded-2xl"
                  >
                    <div className={`relative ${aspectClass} w-full overflow-hidden bg-anthracite`}>
                      <img
                        src={p.cover}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                      {/* Content overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                        <span className="inline-block rounded-full bg-olive/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                          {p.category}
                        </span>
                        <h3 className="mt-3 font-display text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-sm text-white/70">
                          {p.location} · {p.area}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/80 transition-colors group-hover:text-olive">
                          <span>Projeyi İncele</span>
                          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. HAKKIMIZDA SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left: Image */}
            <Reveal>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={studioImg}
                  alt="BOZ PEYZAJ stüdyo"
                  loading="lazy"
                  className="h-[400px] w-full object-cover transition-transform duration-1000 hover:scale-105 lg:h-[550px]"
                />
              </div>
            </Reveal>

            {/* Right: Text */}
            <Reveal delay={100}>
              <div className="space-y-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-olive">
                  Hakkımızda
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Peyzajı Bir Sanat Olarak Yorumluyoruz
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  BOZ PEYZAJ olarak, her projede doğanın eşsiz güzelliğini modern mimari ile harmanlıyoruz. Deneyimli ekibimiz ile villa bahçelerinden ticari alanlara, 3D projelendirmeden anahtar teslim uygulamaya kadar geniş bir yelpazede hizmet sunuyoruz.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Müşterilerimizin yaşam tarzına uygun, sürdürülebilir ve estetik dış mekan çözümleri üretmek temel prensiplerimiz arasındadır. Her projeyi özgün bir yaklaşımla ele alıyor, detaylara verdiğimiz önemle fark yaratıyoruz.
                </p>

                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div>
                    <p className="font-display text-3xl font-bold text-forest">150+</p>
                    <p className="mt-1 text-xs text-muted-foreground">Tamamlanan Proje</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-forest">15+</p>
                    <p className="mt-1 text-xs text-muted-foreground">Yıllık Deneyim</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-forest">%100</p>
                    <p className="mt-1 text-xs text-muted-foreground">Müşteri Memnuniyeti</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/hakkimizda"
                    className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-forest/90"
                  >
                    <span>Daha Fazla Bilgi</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. CTA SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-forest py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${parkImg})` }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Hayalinizdeki Dış Mekanı Birlikte Tasarlayalım
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-white/70">
              Profesyonel peyzaj ekibimiz ile projenizi konuşmak ve ücretsiz keşif randevusu almak için bize ulaşın.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/iletisim"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-forest transition-all hover:bg-olive hover:text-white"
              >
                <span>Ücretsiz Teklif Al</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+905300000000"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10"
              >
                <span>+90 530 000 00 00</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
