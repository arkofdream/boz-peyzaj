import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import type { Project } from "@/lib/projects";

function StoryBackgroundItem({
  i,
  total,
  scrollYProgress,
  imgUrl,
}: {
  i: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  imgUrl: string;
}) {
  const rawStart = (i - 1) / total;
  const rawCurrent = i / total;
  const rawEnd = (i + 1) / total;
  
  const start = Math.max(0, Math.min(1, rawStart));
  const current = Math.max(start, Math.min(1, rawCurrent));
  const end = Math.max(current, Math.min(1, rawEnd));

  const opacity = useTransform(scrollYProgress, [start, current, end], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [current, end], [1, 1.1]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 w-full h-full">
      <motion.img
        src={imgUrl}
        style={{ scale }}
        className="w-full h-full object-cover opacity-60"
        alt="Story background"
      />
      <div className="absolute inset-0 bg-black/40" />
    </motion.div>
  );
}

function StoryContentItem({
  s,
  i,
  total,
  scrollYProgress,
}: {
  s: { title: string; content: string };
  i: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const rawStart = (i - 0.5) / total;
  const rawCurrent = i / total;
  const rawEnd = (i + 0.5) / total;

  const start = Math.max(0, Math.min(1, rawStart));
  const current = Math.max(start, Math.min(1, rawCurrent));
  const end = Math.max(current, Math.min(1, rawEnd));

  const opacity = useTransform(scrollYProgress, [start, current, end], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [start, current, end], [50, 0, -50]);

  return (
    <motion.div style={{ opacity, y }} className="absolute left-0 top-0 w-full">
      <h3 className="font-display text-6xl md:text-[8rem] font-bold tracking-tighter text-white mb-6 md:mb-10 opacity-90 leading-none">
        0{i + 1} — {s.title}
      </h3>
      <p className="max-w-2xl text-lg md:text-2xl text-white/80 font-medium leading-relaxed">
        {s.content}
      </p>
    </motion.div>
  );
}

export function ProjectStory({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Story sections
  const sections = [
    { title: "SITE", content: project.story[0] || "Arazi analizi." },
    { title: "CONCEPT", content: project.story[1] || "Kavramsal yaklaşım." },
    { title: "MATERIAL", content: project.story[2] || "Malzeme seçimi." },
    { title: "PLANTING", content: project.story[3] || "Bitkisel doku." },
    { title: "RESULT", content: "Tamamlanan peyzaj deneyimi." },
  ];

  const total = sections.length;

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white"
      style={{ height: `${total * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        {/* Background Images Crossfade */}
        {sections.map((_, i) => {
          const imgUrl = project.gallery[i] || project.cover;
          return (
            <StoryBackgroundItem
              key={i}
              i={i}
              total={total}
              scrollYProgress={scrollYProgress}
              imgUrl={imgUrl}
            />
          );
        })}

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-8">
            <span className="font-mono tracking-[0.2em] text-[#A66E4E] uppercase text-sm">
              PROJE HİKAYESİ / {project.title}
            </span>
          </div>

          <div className="relative h-[200px] md:h-[300px]">
            {sections.map((s, i) => (
              <StoryContentItem
                key={s.title}
                s={s}
                i={i}
                total={total}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
