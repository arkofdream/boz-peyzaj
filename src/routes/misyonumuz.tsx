import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, ShieldCheck, TreePine, Clock } from "lucide-react";
import coastalImg from "@/assets/proj-coastal.jpg";
import { Reveal } from "@/components/site/Reveal";
import { TopoContourBackground } from "@/components/site/ArchitecturalCroquis";

export const Route = createFileRoute("/misyonumuz")({
  head: () => ({
    meta: [
      { title: "Misyonumuz — BOZ PEYZAJ" },
      {
        name: "description",
        content:
          "BOZ PEYZAJ olarak misyonumuz, müşterilerimizin hayallerindeki dış mekan yaşam alanlarını profesyonel tasarım ve uygulamayla gerçeğe dönüştürmektir.",
      },
    ],
  }),
  component: MissionPage,
});

const values = [
  {
    icon: Users,
    title: "Müşteri Odaklılık",
    desc: "Her projeyi müşterimizin yaşam tarzına özel tasarlıyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "Kalite Güvencesi",
    desc: "A'dan Z'ye her aşamada en yüksek kalite standartlarını uyguluyoruz.",
  },
  {
    icon: TreePine,
    title: "Doğaya Saygı",
    desc: "Tasarımlarımızda ekolojik dengeyi ve biyoçeşitliliği ön planda tutuyoruz.",
  },
  {
    icon: Clock,
    title: "Zamanında Teslim",
    desc: "Projelerimizi belirlenen süre içinde eksiksiz teslim ediyoruz.",
  },
];

function MissionPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background pattern-overlay pt-32 text-foreground lg:pt-40">
      <TopoContourBackground opacity={0.15} />
      
      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <span className="inline-block rounded-full border border-moss/30 bg-moss/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
          Misyonumuz
        </span>
        <h1 className="mt-6 max-w-5xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
          Hayallerinizi gerçeğe dönüştürme taahhüdü.
        </h1>
      </section>

      {/* Mission Statement */}
      <section className="relative z-10 mx-auto mt-20 max-w-[1400px] px-6 lg:px-10 lg:mt-32">
        <Reveal>
          <p className="max-w-4xl font-display text-2xl font-medium leading-[1.4] text-primary sm:text-3xl lg:text-4xl">
            BOZ PEYZAJ olarak misyonumuz, müşterilerimizin hayallerindeki dış mekan yaşam alanlarını profesyonel tasarım ve uygulamayla gerçeğe dönüştürmektir. Her projede doğaya saygılı, işlevsel ve görsel açıdan etkileyici mekanlar yaratmayı taahhüt ediyoruz.
          </p>
        </Reveal>
      </section>

      {/* Image */}
      <section className="relative z-10 mx-auto mt-24 max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
            <img
              src={coastalImg}
              alt="BOZ PEYZAJ Misyon"
              loading="lazy"
              className="h-[50vh] w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="relative z-10 bg-gradient-to-b from-background via-secondary to-background py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 60}>
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-secondary via-background to-secondary py-24 text-foreground lg:py-32">
        <TopoContourBackground opacity={0.25} />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center lg:px-10">
          <Reveal className="mx-auto max-w-3xl space-y-6">
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Projeleriniz için bizimle tanışın.
            </h2>
            <div className="pt-8">
              <Link
                to="/iletisim"
                className="group inline-flex items-center gap-3 rounded-full bg-terracotta px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-on-image shadow-xl transition-all duration-300 hover:bg-terracotta/90"
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
