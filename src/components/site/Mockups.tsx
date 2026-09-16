import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

interface LaptopMockupProps {
  project?: Project;
  src?: string;
  poster?: string;
  className?: string;
}

export function LaptopMockup({ project, src, poster, className }: LaptopMockupProps) {
  const videoSrc = project?.video || src;
  const imagePoster = project?.cover || poster;
  const slug = project?.slug;

  const content = (
    <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-[8px] bg-anthracite">
      {/* Video or Image */}
      {videoSrc ? (
        <video
          key={videoSrc}
          src={videoSrc}
          poster={imagePoster}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
      ) : (
        <img
          src={imagePoster}
          alt={project?.title || ""}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          loading="lazy"
        />
      )}

      {/* Screen Glare & Lighting Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent z-10" />
      <div className="pointer-events-none absolute -inset-full rotate-45 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-10" />

      {/* Project Metadata Overlay inside screen */}
      {project && (
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between p-4 sm:p-6 lg:p-7">
          <div className="space-y-1 text-left">
            <span className="inline-block rounded-full bg-forest/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-sand backdrop-blur-md">
              {project.category} · {project.year}
            </span>
            <p className="font-display text-lg font-bold text-white drop-shadow-md sm:text-2xl lg:text-3xl">
              {project.title}
            </p>
            <p className="text-xs text-white/80 drop-shadow sm:text-sm">
              {project.location} · {project.area}
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-offwhite/90 text-anthracite shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11">
            <ArrowUpRight size={18} />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className={cn("w-full select-none", className)}>
      {/* Laptop Lid / Bezel */}
      <div className="relative rounded-t-[20px] border border-white/20 bg-gradient-to-b from-[#2d322f] to-[#171a18] p-[10px] pb-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
        {/* Camera Dot */}
        <div className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-black/60 ring-1 ring-white/10" />

        {slug ? (
          <Link to="/projeler/$slug" params={{ slug }} className="block h-full w-full focus:outline-none">
            {content}
          </Link>
        ) : (
          content
        )}
      </div>

      {/* Laptop Base / Bottom Chasis */}
      <div className="relative mx-auto h-[14px] w-[114%] max-w-none -translate-x-[6.1%] rounded-b-[18px] bg-gradient-to-b from-[#8f9691] via-[#4d5350] to-[#252a27] shadow-xl">
        {/* Opening Notch / Trackpad Indent */}
        <div className="absolute left-1/2 top-0 h-[4px] w-20 -translate-x-1/2 rounded-b-md bg-[#171a18]/70" />
      </div>
    </div>
  );
}

interface PhoneMockupProps {
  project?: Project;
  src?: string;
  poster?: string;
  className?: string;
}

export function PhoneMockup({ project, src, poster, className }: PhoneMockupProps) {
  const videoSrc = project?.verticalVideo || project?.video || src;
  const imagePoster = project?.cover || poster;
  const slug = project?.slug;

  const content = (
    <div className="group relative aspect-[9/19.5] w-full overflow-hidden rounded-[30px] bg-anthracite">
      {/* Dynamic Island / Speaker */}
      <div className="absolute left-1/2 top-3 z-30 flex h-4 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-black/80 px-2 shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
      </div>

      {/* Media Content */}
      {videoSrc ? (
        <video
          key={videoSrc}
          src={videoSrc}
          poster={imagePoster}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
      ) : (
        <img
          src={imagePoster}
          alt={project?.title || ""}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          loading="lazy"
        />
      )}

      {/* Subtle phone screen gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 z-10" />

      {/* Bottom Metadata & Home Indicator */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-4 text-left">
        {project && (
          <div className="mb-2 space-y-1">
            <span className="inline-block rounded-full bg-terracotta/90 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              {project.category}
            </span>
            <p className="font-display text-sm font-bold text-white drop-shadow">{project.title}</p>
            <p className="text-[11px] text-white/80">{project.location}</p>
          </div>
        )}
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-white/40" />
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        "relative rounded-[38px] border-[3px] border-[#3e4441] bg-gradient-to-b from-[#2a2f2c] via-[#1a1d1b] to-[#121413] p-[8px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] select-none",
        className,
      )}
    >
      {/* Subtle outer metallic rim highlight */}
      <div className="absolute -inset-px rounded-[40px] border border-white/15 pointer-events-none z-10" />

      {slug ? (
        <Link to="/projeler/$slug" params={{ slug }} className="block h-full w-full focus:outline-none">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}
