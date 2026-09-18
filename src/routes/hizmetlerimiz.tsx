import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import parkImg from "@/assets/proj-park.jpg";
import hotelImg from "@/assets/proj-hotel.jpg";
import officeImg from "@/assets/proj-office.jpg";
import villaImg from "@/assets/proj-villa.jpg";
import courtyardImg from "@/assets/proj-courtyard.jpg";
import coastalImg from "@/assets/proj-coastal.jpg";
import { Reveal } from "@/components/site/Reveal";
import { TopoContourBackground } from "@/components/site/ArchitecturalCroquis";

export const Route = createFileRoute("/hizmetlerimiz")({
  head: () => ({
    meta: [
      { title: "Hizmetlerimiz — BOZ PEYZAJ" },
      {
        name: "description",
        content:
          "Peyzaj tasarımı, 3D görselleştirme, villa bahçesi tasarımı, ticari alan peyzajı ve daha fazlası.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Peyzaj Tasarımı",
    desc: "Yaşam alanlarınızı doğayla buluşturan özgün peyzaj projeleri. Arazi analizi, konsept tasarım ve uygulama projelerini tek çatı altında sunuyoruz.",
    img: parkImg,
  },
  {
    n: "02",
    title: "3D Peyzaj Projelendirme",
    desc: "Projelerinizi hayata geçmeden önce üç boyutlu olarak görselleştiriyoruz. Fotorealistik renderlar ile tasarımı önceden deneyimleyin.",
    img: coastalImg,
  },
  {
    n: "03",
    title: "Villa Bahçesi Tasarımı",
    desc: "Özel konutlar için kişiye özel bahçe tasarımları. Havuz çevresi, teras düzenlemesi, bitkilendirme ve aydınlatma dahil bütüncül çözümler.",
    img: villaImg,
  },
  {
    n: "04",
    title: "Ticari Alan Peyzajı",
    desc: "Oteller, rezidanslar, AVM'ler ve ofis kampüsleri için profesyonel peyzaj projeleri. Markanızın kimliğini dış mekanlara taşıyoruz.",
    img: hotelImg,
  },
  {
    n: "05",
    title: "Peyzaj Uygulama",
    desc: "Tasarımdan uygulamaya kadar tüm süreçleri yönetiyoruz. Sert zemin, bitkilendirme, sulama ve aydınlatma uygulamaları.",
    img: officeImg,
  },
  {
    n: "06",
    title: "Bakım ve Düzenleme",
    desc: "Mevcut bahçelerinizin bakımı ve yenilenmesi. Mevsimsel bakım programları, budama, gübreleme ve hastalık kontrolü.",
    img: courtyardImg,
  },
];

function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background pattern-overlay pt-32 text-foreground lg:pt-40">
      <TopoContourBackground opacity={0.15} />
      
      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <span className="inline-block rounded-full border border-moss/30 bg-moss/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
          Hizmetlerimiz
        </span>
        <h1 className="mt-6 max-w-5xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
          Doğayı merkeze alan bütüncül çözümler.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-foreground/80">
          Projelendirmeden uygulamaya kadar, dış mekan yaşam alanlarınız için profesyonel peyzaj hizmetleri sunuyoruz.
        </p>
      </section>

      {/* Services List */}
      <section className="relative z-10 mx-auto mt-20 max-w-[1400px] px-6 pb-24 lg:px-10 lg:mt-32">
        <div className="flex flex-col gap-12 border-t border-border/50 pt-12">
          {services.map((item, i) => (
            <Reveal key={item.n} delay={i * 40}>
              <div className="group grid gap-8 py-10 transition-colors md:grid-cols-12 md:items-start border-b border-border/30 last:border-0 hover:bg-card/40 rounded-3xl p-6 md:p-8">
                <div className="md:col-span-1">
                  <span className="font-mono text-xl font-bold tracking-[0.1em] text-terracotta">
                    {item.n}
                  </span>
                </div>
                <div className="md:col-span-5 flex flex-col justify-center h-full">
                  <h3 className="font-display text-3xl font-bold text-foreground mb-4 transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-foreground/75 mb-6 md:mb-0 max-w-md">
                    {item.desc}
                  </p>
                </div>
                <div className="md:col-span-6">
                  {item.img && (
                    <div className="overflow-hidden rounded-2xl shadow-xl border border-border/50">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-secondary via-background to-secondary py-24 text-foreground lg:py-32">
        <TopoContourBackground opacity={0.25} />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center lg:px-10">
          <Reveal className="mx-auto max-w-3xl space-y-6">
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Projeniz için bir adım atın.
            </h2>
            <div className="pt-8">
              <Link
                to="/iletisim"
                className="group inline-flex items-center gap-3 rounded-full bg-terracotta px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-on-image shadow-xl transition-all duration-300 hover:bg-terracotta/90"
              >
                <span>Hizmet Talebi Oluşturun</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
