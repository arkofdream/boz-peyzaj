"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { initAudio, playUIHover } from "@/lib/sound";

const BG_COLORS = ["#000000", "#1b211a", "#4a2d1d", "#222a25", "#111211", "#423b35"];
const TEXT_COLORS = ["#ffffff", "#e8e6e1", "#f0e5dd", "#e3e8e4", "#ffffff", "#f5eee9"];

function ProjectContent({
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

  // Text Animation (Fades in from bottom, exits to top)
  const textOpacity = useTransform(smoothProgress, [t1, t2, t3, t4], [0, 1, 1, 0]);
  const textY = useTransform(smoothProgress, [t1, t2, t3, t4], [50, 0, 0, -50]);

  // Phone Screen Animation (Gleec style 3D cylinder flip / slide)
  const screenRotateX = useTransform(smoothProgress, [t1, t2, t3, t4], [-60, 0, 0, 60]);
  const screenY = useTransform(smoothProgress, [t1, t2, t3, t4], ["50%", "0%", "0%", "-50%"]);
  const screenScale = useTransform(smoothProgress, [t1, t2, t3, t4], [0.8, 1, 1, 0.8]);
  const screenOpacity = useTransform(smoothProgress, [t1, t2, t3, t4], [0, 1, 1, 0]);

  return (
    <>
      {/* Left Typography */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 pl-6 pr-6 md:pl-20 md:pr-10 pointer-events-none z-20 flex flex-col justify-center"
      >
        <span className="text-xs md:text-sm font-mono tracking-[0.4em] uppercase mb-6 block opacity-50">
          0{i + 1} // {p.category}
        </span>
        <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-display font-bold leading-[0.9] tracking-tighter mb-8">
          {p.title}
        </h2>
        <p className="text-lg md:text-2xl max-w-lg leading-relaxed opacity-70 mb-10 font-light">
          {p.summary}
        </p>
        <div className="pointer-events-auto">
          <Link
            to="/projeler/$slug"
            params={{ slug: p.slug }}
            onMouseEnter={playUIHover}
            className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
          >
            <span>Projeyi Kekefet</span>
            <span className="flex items-center justify-center w-12 h-12 rounded-full border border-current group-hover:bg-white group-hover:text-black transition-all duration-300">
              <ArrowUpRight size={20} />
            </span>
          </Link>
        </div>
      </motion.div>

      {/* Right Phone Screen (Inside the static mockup) */}
      <motion.div
        style={{
          rotateX: screenRotateX,
          y: screenY,
          scale: screenScale,
          opacity: screenOpacity,
        }}
        className="absolute inset-0 w-full h-full origin-center z-10"
      >
        {p.video ? (
          <video
            src={p.video}
            poster={p.cover}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={p.cover}
            alt={p.title}
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </motion.div>
    </>
  );
}

export function GleecShowcase({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numProjects = projects.length;

  useEffect(() => {
    const handleInteraction = () => {
      initAudio();
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
    window.addEventListener("click", handleInteraction);
    window.addEventListener("scroll", handleInteraction, { passive: true });
    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
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
      className="relative w-full transition-colors duration-700 ease-out"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-between">
        
        {/* Render all project content (Text + Phone Screens) */}
        <div className="absolute inset-0 w-full h-full max-w-[1800px] mx-auto z-10 flex flex-col md:flex-row items-center">
          
          {/* Left space for text (absolute positioned in ProjectContent) */}
          <div className="w-full md:w-1/2 h-full relative" />
          
          {/* Right space for the Giant Phone Mockup */}
          <div className="w-full md:w-1/2 h-[60vh] md:h-screen flex items-center justify-center relative perspective-[1500px]">
            
            {/* The Static Premium iPhone Mockup */}
            <div className="relative w-[300px] h-[620px] md:w-[400px] md:h-[820px] rounded-[3.5rem] border-[16px] border-black bg-black shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden z-20">
              
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 flex items-center justify-between px-3.5 shadow-md border border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#0a0a0a] shadow-[inset_0_0_4px_rgba(255,255,255,0.2)]" />
                <div className="w-3 h-3 rounded-full bg-[#111] shadow-[inset_0_0_2px_rgba(255,255,255,0.4)]" />
              </div>

              {/* Status Bar */}
              <div className="absolute top-0 left-0 w-full h-[50px] z-40 flex items-center justify-between px-8 text-white text-[13px] font-semibold mix-blend-difference pointer-events-none">
                <span className="mt-1 tracking-wider">9:41</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-5 h-3 border-[1.5px] border-white rounded-[4px] p-[1px] flex justify-end">
                    <div className="w-0.5 h-1.5 bg-white absolute -right-[4px] top-1/2 -translate-y-1/2 rounded-r-sm opacity-50" />
                    <div className="w-full h-full bg-white rounded-[1.5px]" />
                  </div>
                </div>
              </div>

              {/* The Screens (Injected into the phone) */}
              <div className="relative w-full h-full bg-[#111] overflow-hidden rounded-[2.5rem]">
                {projects.map((p, i) => (
                  <ProjectContent
                    key={p.slug}
                    p={p}
                    i={i}
                    numProjects={numProjects}
                    smoothProgress={smoothProgress}
                  />
                ))}
              </div>
            </div>
            
          </div>
        </div>

        {/* Subtle decorative grain/vignette overlay for premium Gleec feel */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-0 mix-blend-multiply" />
      </div>
    </motion.section>
  );
}
