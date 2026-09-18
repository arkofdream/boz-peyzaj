import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { initAudio, playUITick, playUIHover } from "@/lib/sound";

const BG_COLORS = ["#E8E6E1", "#2C332A", "#B85D36", "#1F2321", "#4A5D4E", "#D9C5B2"];
const TEXT_COLORS = ["#1F2321", "#E8E6E1", "#E8E6E1", "#E8E6E1", "#E8E6E1", "#1F2321"];

function PhoneScreenProject({
  p,
  i,
  numProjects,
  smoothProgress,
}: {
  p: Project;
  i: number;
  numProjects: number;
  smoothProgress: MotionValue<number>;
}) {
  const baseStart = i / numProjects;
  const baseEnd = (i + 1) / numProjects;

  const rawT1 = baseStart - 0.05;
  const rawT2 = baseStart;
  const rawT3 = baseEnd - 0.05;
  const rawT4 = baseEnd;

  const t1 = Math.max(0, Math.min(1, rawT1));
  const t2 = Math.max(t1, Math.min(1, rawT2));
  const t3 = Math.max(t2, Math.min(1, rawT3));
  const t4 = Math.max(t3, Math.min(1, rawT4));

  // Gleec style 3D cylinder flip: "yukarıdan aşağı dönerek"
  const rotateX = useTransform(smoothProgress, [t1, t2, t3, t4], [-90, 0, 0, 90]);
  const y = useTransform(smoothProgress, [t1, t2, t3, t4], ["100%", "0%", "0%", "-100%"]);
  const opacity = useTransform(smoothProgress, [t1, t2, t3, t4], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{ rotateX, y, opacity }}
      className="absolute inset-0 w-full h-full bg-neutral-900 origin-center"
    >
      {p.video ? (
        <video
          src={p.video}
          poster={p.cover}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
        />
      ) : (
        <img
          src={p.cover}
          alt={p.title}
          className="w-full h-full object-cover opacity-80"
          loading={i === 0 ? "eager" : "lazy"}
        />
      )}

      {/* Screen Inner UI overlay */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
        <span className="text-[10px] font-mono tracking-widest uppercase opacity-70 mb-2 block">
          {p.category}
        </span>
        <h3 className="font-display text-2xl font-bold leading-none mb-4">{p.title}</h3>
        <Link
          to="/projeler/$slug"
          params={{ slug: p.slug }}
          onMouseEnter={playUIHover}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:scale-110 transition-transform"
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}

function ProjectTextItem({
  p,
  i,
  numProjects,
  smoothProgress,
}: {
  p: Project;
  i: number;
  numProjects: number;
  smoothProgress: MotionValue<number>;
}) {
  const baseStart = i / numProjects;
  const baseEnd = (i + 1) / numProjects;

  const rawT1 = baseStart - 0.05;
  const rawT2 = baseStart;
  const rawT3 = baseEnd - 0.05;
  const rawT4 = baseEnd;

  const t1 = Math.max(0, Math.min(1, rawT1));
  const t2 = Math.max(t1, Math.min(1, rawT2));
  const t3 = Math.max(t2, Math.min(1, rawT3));
  const t4 = Math.max(t3, Math.min(1, rawT4));

  const opacity = useTransform(smoothProgress, [t1, t2, t3, t4], [0, 1, 1, 0]);
  const y = useTransform(smoothProgress, [t1, t2, t3, t4], [40, 0, 0, -40]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute left-0 top-1/2 -translate-y-1/2 w-full pointer-events-none px-6 md:px-0"
    >
      <span className="text-sm md:text-base font-mono tracking-[0.3em] font-semibold uppercase mb-6 block opacity-60">
        0{i + 1} / SEÇKİN PROJE
      </span>
      <h2 className="text-6xl md:text-[7rem] lg:text-[8rem] font-display font-bold leading-[0.85] mb-8 tracking-tighter">
        {p.title}
      </h2>
      <p className="mb-10 text-base md:text-xl max-w-md leading-relaxed opacity-80">
        {p.summary}
      </p>
      <div className="pointer-events-auto">
        <Link
          to="/projeler/$slug"
          params={{ slug: p.slug }}
          onMouseEnter={playUIHover}
          className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
        >
          <span>PROJEYİ İNCELE</span>
          <span className="flex items-center justify-center w-10 h-10 rounded-full border border-current group-hover:bg-current group-hover:text-black transition-colors">
            <ArrowUpRight size={18} />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export function ScrollProjectMockup({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      initAudio();
      window.removeEventListener("scroll", handleScroll);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const numProjects = projects.length;

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest * numProjects), numProjects - 1);
    if (index !== activeIndex) {
      setActiveIndex(index);
      playUITick();
    }
  });

  const colorPoints = projects.map((_, i) => i / Math.max(1, numProjects - 1));
  const bgColors = BG_COLORS.slice(0, numProjects);
  const textColors = TEXT_COLORS.slice(0, numProjects);

  const backgroundColor = useTransform(smoothProgress, colorPoints, bgColors);
  const color = useTransform(smoothProgress, colorPoints, textColors);

  return (
    <motion.section
      ref={containerRef}
      style={{ height: `${numProjects * 100}vh`, backgroundColor, color }}
      className="relative transition-colors duration-500"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="relative w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 z-10 h-full">
          
          <div className="w-full md:w-1/2 flex flex-col relative h-[500px] justify-center pl-0 md:pl-12 order-2 md:order-1">
            {projects.map((p, i) => (
              <ProjectTextItem
                key={p.slug}
                p={p}
                i={i}
                numProjects={numProjects}
                smoothProgress={smoothProgress}
              />
            ))}
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center h-[50vh] md:h-screen relative perspective-[1200px] order-1 md:order-2">
            <motion.div
              style={{
                y: useTransform(smoothProgress, [0, 1], [10, -10]),
              }}
              className="relative w-[280px] h-[580px] md:w-[360px] md:h-[740px] rounded-[3rem] border-[14px] border-black bg-black shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[32px] bg-black rounded-full z-50 flex items-center justify-between px-3 shadow-md border border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a] shadow-[inset_0_0_4px_rgba(255,255,255,0.2)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#111] shadow-[inset_0_0_2px_rgba(255,255,255,0.4)]" />
              </div>

              <div className="absolute top-0 left-0 w-full h-[44px] z-40 flex items-center justify-between px-7 text-white text-[12px] font-semibold mix-blend-difference pointer-events-none">
                <span className="mt-1 tracking-wider">9:41</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-4 h-2.5 border-[1.5px] border-white rounded-[4px] p-[1px] flex justify-end">
                    <div className="w-0.5 h-1 bg-white absolute -right-[3px] top-1/2 -translate-y-1/2 rounded-r-sm opacity-50" />
                    <div className="w-full h-full bg-white rounded-[1.5px]" />
                  </div>
                </div>
              </div>

              <div className="relative w-full h-full bg-black overflow-hidden rounded-[2.2rem]">
                {projects.map((p, i) => (
                  <PhoneScreenProject
                    key={p.slug}
                    p={p}
                    i={i}
                    numProjects={numProjects}
                    smoothProgress={smoothProgress}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
