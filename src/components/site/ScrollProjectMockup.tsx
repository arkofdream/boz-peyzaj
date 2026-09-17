import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ScrollProjectMockup({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const numProjects = projects.length;

  return (
    <section ref={containerRef} className="relative bg-[#E8E6E1]" style={{ height: `${numProjects * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center p-4 md:p-8">
        
        {/* Decorative Topo Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M-10,50 Q25,20 50,50 T110,50" stroke="#3E4A3D" strokeWidth="0.5" fill="none" />
          <path d="M-10,60 Q25,30 50,60 T110,60" stroke="#3E4A3D" strokeWidth="0.5" fill="none" />
          <path d="M-10,70 Q25,40 50,70 T110,70" stroke="#3E4A3D" strokeWidth="0.5" fill="none" />
        </svg>

        <div className="relative w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 z-10">
          
          {/* Left: Project Info */}
          <div className="w-full md:w-[40%] flex flex-col relative h-[300px] justify-center pl-4 md:pl-12">
            {projects.map((p, i) => {
              const start = i / numProjects;
              const end = (i + 1) / numProjects;
              
              const opacity = useTransform(smoothProgress, [start - 0.05, start, end - 0.05, end], [0, 1, 1, 0]);
              const y = useTransform(smoothProgress, [start - 0.05, start, end - 0.05, end], [30, 0, 0, -30]);

              return (
                <motion.div 
                  key={p.slug}
                  style={{ opacity, y }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-full pointer-events-none px-4 md:px-0"
                >
                  <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-[#3E4A3D] font-semibold uppercase mb-4 block">
                    0{i + 1} / {p.category}
                  </span>
                  <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-display font-bold leading-[0.9] text-neutral-900 mb-6 tracking-tighter">
                    {p.title}
                  </h2>
                  <p className="text-neutral-700 mb-8 text-sm md:text-lg max-w-md leading-relaxed">
                    {p.summary}
                  </p>
                  <div className="pointer-events-auto">
                    <Link
                      to="/projeler/$slug"
                      params={{ slug: p.slug }}
                      className="group inline-flex items-center gap-3 border-b border-neutral-900 pb-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] hover:text-[#A66E4E] hover:border-[#A66E4E] transition-colors"
                    >
                      <span>Projeyi İncele</span>
                      <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Interactive Presentation Board */}
          <div className="w-full md:w-[55%] h-[50vh] md:h-[80vh] relative perspective-[1200px]">
            <motion.div 
              className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 w-full h-full max-h-[800px] bg-[#F2F0EB] rounded-[1rem] md:rounded-[2rem] p-2 md:p-4 shadow-2xl overflow-hidden border border-white/60"
              style={{
                rotateX: useTransform(smoothProgress, [0, 1], [3, -3]),
                rotateY: useTransform(smoothProgress, [0, 1], [-8, 8]),
                z: useTransform(smoothProgress, [0, 0.5, 1], [0, 30, 0]),
              }}
            >
              <div className="relative w-full h-full rounded-[0.75rem] md:rounded-[1.5rem] overflow-hidden bg-neutral-300">
                {projects.map((p, i) => {
                  const start = i / numProjects;
                  const end = (i + 1) / numProjects;

                  const opacity = useTransform(smoothProgress, [start - 0.05, start, end - 0.05, end], [0, 1, 1, 0]);
                  const scale = useTransform(smoothProgress, [start, end], [1, 1.15]);

                  return (
                    <motion.div
                      key={p.slug}
                      style={{ opacity }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {p.video ? (
                        <motion.video
                          style={{ scale }}
                          src={p.video}
                          poster={p.cover}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <motion.img
                          style={{ scale }}
                          src={p.cover}
                          alt={p.title}
                          className="w-full h-full object-cover"
                          loading={i === 0 ? "eager" : "lazy"}
                        />
                      )}
                      
                      {/* Internal shadow overlay for depth */}
                      <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] pointer-events-none" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
