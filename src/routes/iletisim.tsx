import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Mail, Phone, Clock, Send, Sparkles, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { TopoContourBackground, GraphicScaleBar } from "@/components/site/ArchitecturalCroquis";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "Ä°letiÅŸim & Proje Talebi â€” TERRA Peyzaj MimarlÄ±ÄŸÄ±" },
      {
        name: "description",
        content:
          "Yeni peyzaj projeniz, villa bahÃ§eniz veya ticari aÃ§Ä±k alanÄ±nÄ±z iÃ§in TERRA stÃ¼dyosuna ulaÅŸÄ±n. Ä°zmir merkezli, tÃ¼m TÃ¼rkiye.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Ä°letiÅŸim â€” TERRA Peyzaj MimarlÄ±ÄŸÄ±" },
      {
        property: "og:description",
        content: "Projenizi konuÅŸmak ve keÅŸif randevusu almak iÃ§in bize ulaÅŸÄ±n.",
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
      <TopoContourBackground opacity={0.25} />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-forest/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-2/3 h-96 w-96 rounded-full bg-terracotta/15 blur-3xl" />

      {/* Header */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-moss/30 bg-moss/20 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-moss">
            <Sparkles size={12} className="text-primary" />
            Ä°letiÅŸim & DanÄ±ÅŸmanlÄ±k
          </span>
          <div className="hidden sm:block">
            <GraphicScaleBar />
          </div>
        </div>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem]">
          Arazinizi konuÅŸalÄ±m.
        </h1>
        <p className="mt-4 max-w-xl text-base text-foreground/75">
          Konsept tasarÄ±mdan anahtar teslim uygulamaya; fikirlerinizi dinlemek ve yerinde rÃ¶lÃ¶ve
          yapmak iÃ§in bizimle iletiÅŸime geÃ§in.
        </p>
      </section>

      {/* Main Form & Contact Info */}
      <section className="relative z-10 mx-auto grid max-w-[1400px] gap-16 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
        {/* Contact Details Card (5 cols) */}
        <Reveal className="lg:col-span-5">
          <div className="space-y-8 rounded-3xl border border-border bg-card/80 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
            <h2 className="font-display text-2xl font-bold text-foreground">StÃ¼dyo Bilgileri</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest/80 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary/60">
                    Merkez StÃ¼dyo
                  </p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">
                    Mustafa Bey Cad. No 12, Alsancak, Ä°zmir
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
                    href="mailto:studio@terrapeyzaj.com"
                    className="mt-1 block text-sm font-medium text-primary transition-colors hover:text-terracotta"
                  >
                    studio@terrapeyzaj.com
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
                    href="tel:+902320000000"
                    className="mt-1 block text-sm font-medium text-primary transition-colors hover:text-terracotta"
                  >
                    +90 232 000 00 00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest/80 text-primary">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary/60">
                    Ã‡alÄ±ÅŸma Saatleri
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    Pazartesi â€“ Cuma: 09:00 â€“ 18:00
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/70 p-4 text-xs leading-relaxed text-foreground/70">
              <span className="font-semibold text-warm-yellow">Yerinde KeÅŸif & Analiz:</span> Ä°zmir,
              Bodrum, Ã‡eÅŸme ve Urla bÃ¶lgelerindeki projeler iÃ§in 48 saat iÃ§erisinde yerinde rÃ¶lÃ¶ve
              ve Ã¶n gÃ¶rÃ¼ÅŸme planlayabiliyoruz.
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
                  Proje detaylarÄ±nÄ±zÄ± aldÄ±k. BaÅŸ peyzaj mimarÄ±mÄ±z en geÃ§ 24 saat iÃ§erisinde sizinle
                  iletiÅŸime geÃ§ecektir.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  toast.success("Proje talebiniz iletildi. 24 saat iÃ§inde dÃ¶nÃ¼ÅŸ yapÄ±lacaktÄ±r.");
                }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Proje BaÅŸlatÄ±n</h2>
                  <p className="mt-1 text-xs text-foreground/70">
                    Araziniz veya aÃ§Ä±k alanÄ±nÄ±z hakkÄ±nda kÄ±sa bilgi verin, size uygun tasarÄ±m
                    kurgusunu baÅŸlatalÄ±m.
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
                      placeholder="Ahmet YÄ±lmaz"
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
                      placeholder="0532 000 00 00"
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
                      placeholder="Ã–rn. Bodrum, Ã‡eÅŸme, Urla"
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
                      MÃ¼stakil Villa / Konut BahÃ§esi
                    </option>
                    <option value="hotel" className="bg-card text-foreground">
                      Butik Otel / Tatil KÃ¶yÃ¼ AÃ§Ä±k AlanÄ±
                    </option>
                    <option value="public" className="bg-card text-foreground">
                      Kamusal Park / Kentsel TasarÄ±m
                    </option>
                    <option value="corporate" className="bg-card text-foreground">
                      Kurumsal Ofis / Ã‡atÄ± BahÃ§esi
                    </option>
                    <option value="consult" className="bg-card text-foreground">
                      DiÄŸer / DanÄ±ÅŸmanlÄ±k
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="msg"
                    className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/70"
                  >
                    Proje NotlarÄ± & Beklentiler
                  </label>
                  <textarea
                    id="msg"
                    rows={4}
                    placeholder="Arazinin bÃ¼yÃ¼klÃ¼ÄŸÃ¼, mevcut aÄŸaÃ§lar veya hayal ettiÄŸiniz atmosfer hakkÄ±nda notlar..."
                    className={fieldClass}
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-terracotta py-4 text-xs font-semibold uppercase tracking-[0.22em] text-on-image shadow-xl transition-all duration-300 hover:bg-terracotta/90 hover:shadow-2xl"
                >
                  <span>Talebi Ä°let</span>
                  <Send size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
