import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/projects";

export function AsymmetricGallery({ projects }: { projects: Project[] }) {
  // Take a slice of projects to display in the gallery
  const galleryProjects = projects.slice(0, 5);

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[#F9F8F6]">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-[#2C332A] leading-[0.9]">
            SEÇKİN<br />
            <span className="text-[#A66E4E]">PROJELER</span>
          </h2>
          <p className="max-w-sm text-neutral-600 font-medium">
            Arazi hafızasına saygılı, zamansız ve mekâna özgü peyzaj tasarımlarından oluşan koleksiyonumuz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {galleryProjects.map((p, i) => {
            // Determine column spans to create an asymmetric layout
            let colSpan = "md:col-span-12";
            let height = "h-[400px] md:h-[600px]";
            
            if (i % 5 === 0) {
              colSpan = "md:col-span-7";
              height = "h-[450px] md:h-[700px]";
            } else if (i % 5 === 1) {
              colSpan = "md:col-span-5";
              height = "h-[400px] md:h-[500px] md:mt-24";
            } else if (i % 5 === 2) {
              colSpan = "md:col-span-4";
              height = "h-[350px] md:h-[450px]";
            } else if (i % 5 === 3) {
              colSpan = "md:col-span-8";
              height = "h-[400px] md:h-[650px] md:-mt-16";
            } else if (i % 5 === 4) {
              colSpan = "md:col-span-12";
              height = "h-[500px] md:h-[800px]";
            }

            return (
              <Link
                key={p.slug}
                to="/projeler/$slug"
                params={{ slug: p.slug }}
                className={`group relative overflow-hidden block ${colSpan} ${height}`}
              >
                <div className="w-full h-full overflow-hidden bg-neutral-200">
                  <motion.img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-white/80 font-mono text-sm tracking-widest uppercase mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {p.category}
                  </span>
                  <h3 className="text-white font-display text-3xl md:text-5xl font-bold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    {p.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
