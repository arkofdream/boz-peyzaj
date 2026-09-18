import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Mail, Phone, Clock, Send, Sparkles, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import {
  BuildingSilhouetteSketch,
  TreeClusterSketch,
} from "@/components/site/ArchitecturalCroquis";
import { TopoContourBackground, GraphicScaleBar } from "@/components/site/ArchitecturalCroquis";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim & Proje Talebi — BOZ PEYZAJ" },
      {
        name: "description",
        content:
          "Yeni peyzaj projeniz, villa bahçeniz veya ticari açık alanınız için BOZ PEYZAJ ekibine ulaşın. İzmir merkezli, tüm Türkiye.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "İletişim — BOZ PEYZAJ" },
      {
        property: "og:description",
        content: "Projenizi konuşmak ve keşif randevusu almak için bize ulaşın.",
      },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full rounded-2xl border border-border bg-card/80 px-4 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-on-image/35 focus:border-moss focus:bg-secondary focus:ring-2 focus:ring-moss/20";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background pattern-overlay pt-32 text-foreground lg:pt-40">
      {/* Vector Background Sketches */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[800px] opacity-15">
        <TreeClusterSketch />
      </div>
      <div className="pointer-events-none absolute top-20 -right-40 w-[600px] opacity-10 rotate-[5deg]">
        <BuildingSilhouetteSketch />
      </div>
      <TopoContourBackground opacity={0.25} />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-forest/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-2/3 h-96 w-96 rounded-full bg-terracotta/15 blur-3xl" />

      {/* Header */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-moss/30 bg-moss/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
            <Sparkles size={12} className="text-primary" />
            İletişim & Danışmanlık
          </span>
          <div className="hidden sm:block">
            <GraphicScaleBar />
          </div>
        </div>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]">
          Arazinizi konuşalım.
        </h1>
        <p className="mt-4 max-w-xl text-base text-foreground/75">
          Konsept tasarımdan anahtar teslim uygulamaya; fikirlerinizi dinlemek ve yerinde rölöve
          yapmak için bizimle iletişime geçin.
        </p>
      </section>

      {/* Main Form & Contact Info */}
      <section className="relative z-10 mx-auto grid max-w-[1400px] gap-16 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
        {/* Contact Details Card (5 cols) */}
        <Reveal className="lg:col-span-5">
          <div className="space-y-8 rounded-3xl border border-border bg-card/80 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
            <h2 className="font-display text-2xl font-bold text-foreground">İletişim Bilgileri</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest/80 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary/60">
                    Merkez Stüdyo
                  </p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">
                    Mustafa Bey Cad. No 12, Alsancak, İzmir
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest/80 text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary/60">
                    E-posta
                  </p>
                  <a
                    href="mailto:info@bozpeyzaj.com"
                    className="mt-1 block text-sm font-medium text-primary transition-colors hover:text-terracotta"
                  >
                    info@bozpeyzaj.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest/80 text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary/60">
                    Telefon & WhatsApp
                  </p>
                  <a
                    href="tel:+905300000000"
                    className="mt-1 block text-sm font-medium text-primary transition-colors hover:text-terracotta"
                  >
                    +90 530 000 00 00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest/80 text-primary">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary/60">
                    Çalışma Saatleri
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    Pazartesi – Cuma: 09:00 – 18:00
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/70 p-4 text-xs leading-relaxed text-foreground/70">
              <span className="font-semibold text-warm-yellow">Yerinde Keşif & Analiz:</span> İzmir,
              Bodrum, Çeşme ve Urla bölgelerindeki projeler için 48 saat içerisinde yerinde rölöve
              ve ön görüşme planlayabiliyoruz.
            </div>
          </div>
        </Reveal>

        {/* Project Inquiry Form (7 cols) */}
        <Reveal className="lg:col-span-7" delay={120}>
          <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
            {sent ? (
              <div className="space-y-4 py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest text-primary">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Talebiniz Kaydedildi
                </h3>
                <p className="mx-auto max-w-md text-sm text-foreground/75">
                  Proje detaylarınızı aldık. Baş peyzaj mimarımız en geç 24 saat içerisinde sizinle
                  iletişime geçecektir.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  toast.success("Proje talebiniz iletildi. 24 saat içinde dönüş yapılacaktır.");
                }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Proje Başlatın
                  </h2>
                  <p className="mt-1 text-xs text-foreground/70">
                    Araziniz veya açık alanınız hakkında kısa bilgi verin, size uygun tasarım
                    kurgusunu başlatalım.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/70"
                    >
                      Ad Soyad *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Ahmet Yılmaz"
                      className={fieldClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/70"
                    >
                      Telefon *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+90 530 000 00 00"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/70"
                    >
                      E-posta *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="ahmet@example.com"
                      className={fieldClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="location"
                      className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/70"
                    >
                      Proje Konumu
                    </label>
                    <input
                      id="location"
                      type="text"
                      placeholder="Örn. Bodrum, Çeşme, Urla"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="type"
                    className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/70"
                  >
                    Proje Tipolojisi
                  </label>
                  <select id="type" className={fieldClass}>
                    <option value="villa" className="bg-card text-foreground">
                      Müstakil Villa / Konut Bahçesi
                    </option>
                    <option value="hotel" className="bg-card text-foreground">
                      Butik Otel / Tatil Köyü Açık Alanı
                    </option>
                    <option value="public" className="bg-card text-foreground">
                      Kamusal Park / Kentsel Tasarım
                    </option>
                    <option value="corporate" className="bg-card text-foreground">
                      Kurumsal Ofis / Çatı Bahçesi
                    </option>
                    <option value="consult" className="bg-card text-foreground">
                      Diğer / Danışmanlık
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="msg"
                    className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/70"
                  >
                    Proje Notları & Beklentiler
                  </label>
                  <textarea
                    id="msg"
                    rows={4}
                    placeholder="Arazinin büyüklüğü, mevcut ağaçlar veya hayal ettiğiniz atmosfer hakkında notlar..."
                    className={fieldClass}
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-terracotta py-4 text-xs font-semibold uppercase tracking-[0.22em] text-on-image shadow-xl transition-all duration-300 hover:bg-terracotta/90 hover:shadow-2xl"
                >
                  <span>Talebi İlet</span>
                  <Send size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 pb-24 lg:px-10 lg:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-8 shadow-2xl backdrop-blur-xl md:p-12">
            <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-moss/30 bg-moss/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
                  <MessageCircle size={12} className="text-primary" />
                  Hızlı İletişim
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Doğrudan WhatsApp'tan Ulaşın
                </h3>
                <p className="max-w-xl text-sm text-foreground/75">
                  Projeniz hakkında hızlı bilgi almak, fotoğraf veya arazi krokisi paylaşmak için WhatsApp hattımızdan bize anında yazabilirsiniz.
                </p>
              </div>
              <a
                href="https://wa.me/905300000000?text=Merhaba%2C%20peyzaj%20projem%20i%C3%A7in%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-forest px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary shadow-xl transition-all duration-300 hover:bg-forest/80 hover:shadow-2xl shrink-0"
              >
                <MessageCircle size={16} />
                <span>WhatsApp ile Yazın</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
