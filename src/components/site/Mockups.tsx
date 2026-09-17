import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

interface LaptopMockupProps {
  project?: Project;
  src?: string;
  poster?: string;
  className?: string;
}

function MockupMedia({
  videoSrc,
  imagePoster,
  alt,
}: {
  videoSrc: string | undefined;
  imagePoster: string | undefined;
  alt: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    setVideoReady(false);
    setVideoFailed(false);
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    const playAttempt = video.play();
    if (playAttempt) playAttempt.catch(() => setVideoReady(false));
  }, [videoSrc]);

  return (
    <>
      {imagePoster && (
        <img
          src={imagePoster}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
      )}
      {videoSrc && !videoFailed && (
        <video
          ref={videoRef}
          key={videoSrc}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          poster={imagePoster}
          aria-label={`${alt} proje videosu`}
          onCanPlay={() => setVideoReady(true)}
          onPlaying={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105",
            videoReady ? "opacity-100" : "opacity-0",
          )}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </>
  );
}

export function LaptopMockup({ project, src, poster, className }: LaptopMockupProps) {
  const videoSrc = project?.video || src;
  const imagePoster = project?.cover || poster;
  const slug = project?.slug;

  const content = (
    <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-[8px] bg-anthracite">
      <MockupMedia
        videoSrc={videoSrc}
        imagePoster={imagePoster}
        alt={project?.title || "Peyzaj projesi"}
      />

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
            <p className="font-display text-lg font-bold text-on-image drop-shadow-md sm:text-2xl lg:text-3xl">
              {project.title}
            </p>
            <p className="text-xs text-on-image/80 drop-shadow sm:text-sm">
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
    <div className={cn("mx-auto w-[92%] max-w-full select-none sm:w-full", className)}>
      {/* Laptop Lid / Bezel */}
      <div className="relative rounded-t-[20px] border border-device-edge bg-gradient-to-b from-device-highlight to-anthracite p-[10px] pb-3 shadow-device">
        {/* Camera Dot */}
        <div className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-anthracite/60 ring-1 ring-white/10" />

        {slug ? (
          <Link
            to="/projeler/$slug"
            params={{ slug }}
            className="block h-full w-full focus:outline-none"
          >
            {content}
          </Link>
        ) : (
          content
        )}
      </div>

      {/* Laptop Base / Bottom Chasis */}
      <div className="relative mx-auto h-[14px] w-[108%] max-w-none -translate-x-[3.7%] rounded-b-[18px] bg-gradient-to-b from-device-silver via-device-edge to-anthracite shadow-xl sm:w-[114%] sm:-translate-x-[6.1%]">
        {/* Opening Notch / Trackpad Indent */}
        <div className="absolute left-1/2 top-0 h-[4px] w-20 -translate-x-1/2 rounded-b-md bg-anthracite/70" />
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
      <div className="absolute left-1/2 top-3 z-30 flex h-4 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-anthracite/80 px-2 shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
      </div>

      <MockupMedia
        videoSrc={videoSrc}
        imagePoster={imagePoster}
        alt={project?.title || "Peyzaj projesi"}
      />

      {/* Subtle phone screen gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 z-10" />

      {/* Bottom Metadata & Home Indicator */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-4 text-left">
        {project && (
          <div className="mb-2 space-y-1">
            <span className="inline-block rounded-full bg-terracotta/90 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-on-image backdrop-blur-sm">
              {project.category}
            </span>
            <p className="font-display text-sm font-bold text-on-image drop-shadow">
              {project.title}
            </p>
            <p className="text-[11px] text-on-image/80">{project.location}</p>
          </div>
        )}
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-white/40" />
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        "relative w-full max-w-[260px] rounded-[38px] border-[3px] border-device-edge bg-device p-[8px] shadow-device select-none",
        className,
      )}
    >
      {/* Subtle outer metallic rim highlight */}
      <div className="absolute -inset-px rounded-[40px] border border-on-image/15 pointer-events-none z-10" />

      {slug ? (
        <Link
          to="/projeler/$slug"
          params={{ slug }}
          className="block h-full w-full focus:outline-none"
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}
