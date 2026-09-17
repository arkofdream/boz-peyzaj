import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    n: "01",
    t: "PEYZAJ TASARIMI",
    d: "Topoğrafya analizinden uygulama çizimlerine kadar araziyle bütünleşen mekânsal kurgu.",
    image: "/images/bg-landscape-design.jpg", // We will map these to existing assets or dummy ones
  },
  {
    n: "02",
    t: "MİMARİ PEYZAJ",
    d: "Yansıma havuzları, taş kanallar ve mikro-klima oluşturan sessiz su yüzeyleri.",
    image: "/images/bg-architectural.jpg",
  },
  {
    n: "03",
    t: "UYGULAMA",
    d: "Şantiye denetimi, taş ve sert zemin işçiliği ile sertifikalı fidan temini kontrolü.",
    image: "/images/bg-implementation.jpg",
  },
  {
    n: "04",
    t: "BAKIM YÖNETİMİ",
    d: "İlk üç yıl boyunca mevsimlik budama, toprak besleme ve gelişim takibi.",
    image: "/images/bg-maintenance.jpg",
  },
];

export function HoverServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 md:py-48 bg-[#1A1F18] text-[#E8E6E1] overflow-hidden">
      {/* Background Images Overlay */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            key={hoveredIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* If actual images don't exist, we can use gradient or dummy images. For this example, we use a generic abstract gradient based on index as fallback */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${services[hoveredIndex]?.image})`,
                backgroundColor: hoveredIndex % 2 === 0 ? "#2C332A" : "#3B4D45", // fallback
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <h2 className="text-sm font-mono tracking-[0.3em] uppercase mb-16 text-[#A66E4E]">
          Uzmanlık Alanlarımız
        </h2>

        <div className="flex flex-col border-t border-white/20">
          {services.map((s, i) => (
            <div
              key={s.n}
              className="group relative border-b border-white/20 py-8 md:py-12 cursor-pointer transition-colors hover:bg-white/5"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 md:px-8">
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="font-mono text-xl md:text-2xl text-white/40 group-hover:text-[#A66E4E] transition-colors">
                    {s.n}
                  </span>
                  <h3 className="font-display text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                    {s.t}
                  </h3>
                </div>

                <div className="md:max-w-xs overflow-hidden h-0 md:h-auto opacity-0 md:opacity-100 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white/70 text-sm md:text-base leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {s.d}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
