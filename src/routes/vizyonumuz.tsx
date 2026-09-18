import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Sparkles, Target } from "lucide-react";
import villaImg from "@/assets/proj-villa.jpg";
import { Reveal } from "@/components/site/Reveal";
import { TopoContourBackground } from "@/components/site/ArchitecturalCroquis";

export const Route = createFileRoute("/vizyonumuz")({
  head: () => ({
    meta: [
      { title: "Vizyonumuz — BOZ PEYZAJ" },
      {
        name: "description",
        content:
          "BOZ PEYZAJ'ın vizyonu doğanın ve modern mimarinin harmonisini her projede yaşatmaktır.",
      },
    ],
  }),
  component: VisionPage,
});

const pillars = [
  {
    icon: Leaf,
    title: "Sürdürülebilir Tasarım",
    desc: "Her projede ekolojik dengeyi gözeten, doğal kaynakları koruyan tasarım anlayışı.",
  },
  {
    icon: Sparkles,
    title: "Yenilikçi Yaklaşım",
    desc: "Modern teknoloji ve geleneksel peyzaj bilgisini birleştiren özgün çözümler.",
  },
  {
    icon: Target,
    title: "Mükemmellik Arayışı",
    desc: "Detaylarda saklı kaliteyi her projenin DNA'sına işlemek.",
  },
];

function VisionPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background pattern-overlay pt-32 text-foreground lg:pt-40">
      <TopoContourBackground opacity={0.15} />
      
      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <span className="inline-block rounded-full border border-moss/30 bg-moss/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
          Vizyonumuz
        </span>
        <h1 className="mt-6 max-w-5xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
          Doğanın ve modern mimarinin kusursuz harmonisi.
        </h1>
      </section>

      {/* Vision Statement */}
      <section className="relative z-10 mx-auto mt-20 max-w-[1400px] px-6 lg:px-10 lg:mt-32">
        <Reveal>
          <p className="max-w-4xl font-display text-2xl font-medium leading-[1.4] text-primary sm:text-3xl lg:text-4xl">
            BOZ PEYZAJ'ın vizyonu doğanın ve modern mimarinin harmonisini her projede yaşatmaktır. Peyzaj tasarımını bir sanat dalı olarak ele alarak, yaşam alanlarını doğayla bütünleşik, sürdürülebilir ve estetik mekanlara dönüştürmeyi hedefliyoruz.
          </p>
        </Reveal>
      </section>

      {/* Image */}
      <section className="relative z-10 mx-auto mt-24 max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
            <img
              src={villaImg}
              alt="BOZ PEYZAJ Vizyon"
              loading="lazy"
              className="h-[60vh] w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </Reveal>
      </section>

      {/* Pillars */}
      <section className="relative z-10 bg-gradient-to-b from-background via-secondary to-background py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-8 sm:grid-cols-3">
            {pillars.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 80}>
                <div className="h-full rounded-3xl border border-border bg-card/80 p-10 shadow-2xl backdrop-blur-md transition-all hover:border-moss/40 hover:bg-secondary">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/80 text-primary shadow-inner">
                    <item.icon size={28} />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-foreground/70">{item.desc}</p>
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
              Hayalinizdeki alanı tasarlayalım.
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
