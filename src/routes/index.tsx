import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { projects } from "@/lib/projects";
import { TopoContourBackground } from "@/components/site/ArchitecturalCroquis";
import { ScrollProjectMockup } from "@/components/site/ScrollProjectMockup";
import { AsymmetricGallery } from "@/components/site/AsymmetricGallery";
import { HoverServices } from "@/components/site/HoverServices";
import { ProjectStory } from "@/components/site/ProjectStory";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TERRA — Peyzaj Mimarlığı & Dış Mekân Tasarımı" },
      {
        name: "description",
        content:
          "TERRA Peyzaj Mimarlığı; villa bahçeleri, otel avluları ve kamusal alanlar için doğayla uyumlu, heykelsi ve yaşayan dış mekânlar tasarlar.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const heroProject = projects[0]!; // Added ! to assert it's defined
  const featuredProjects = projects.slice(0, 6);

  // Quick optimization: preload the hero image to ensure no blank screen
  useEffect(() => {
    if (heroProject && !heroProject.video) {
      const img = new Image();
      img.src = heroProject.cover;
    }
  }, [heroProject]);

  if (!heroProject) return null;

  return (
    <div className="bg-[#E8E6E1] text-[#2C332A] selection:bg-[#A66E4E] selection:text-white">
      {/* 1. HERO — IMMEDIATE RENDER (No loaders) */}
      <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden flex flex-col justify-between">
        {/* Background Asset */}
        <div className="absolute inset-0 pointer-events-none">
          {heroProject.video ? (
            <video
              src={heroProject.video}
              poster={heroProject.cover}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-80"
            />
          ) : (
            <img
              src={heroProject.cover}
              alt="Landscape Hero"
              className="w-full h-full object-cover opacity-80"
              loading="eager" // Important: No lazy load for hero
            />
          )}
          {/* Subtle noise/gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F18]/40 via-transparent to-[#E8E6E1]" />
        </div>

        {/* Topo Overlay - subtle motion */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <TopoContourBackground />
        </div>

        {/* Asymmetric Typography Container */}
        <div className="relative z-10 flex flex-col h-full w-full max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-40">
          <div className="mt-auto">
            <h1 className="font-display font-bold leading-[0.85] tracking-tighter mix-blend-difference text-white">
              <span className="block text-[4rem] md:text-[8rem] lg:text-[12rem] xl:text-[14rem] transform md:-translate-x-4">
                LANDSCAPE
              </span>
              <span className="block text-[3rem] md:text-[6rem] lg:text-[9rem] xl:text-[11rem] text-right text-[#A66E4E] mix-blend-normal transform md:translate-x-8">
                THAT LIVES
              </span>
            </h1>
          </div>

          <div className="absolute bottom-12 left-6 md:left-12 flex items-end justify-between w-full pr-12 md:pr-24">
            <div className="max-w-xs md:max-w-md">
              <p className="text-sm md:text-base font-medium text-neutral-800 mix-blend-overlay">
                Arazinin hafızasını koruyan, iklime uyumlu ve zamanla olgunlaşan deneysel peyzaj
                mimarlığı pratikleri.
              </p>
            </div>
            <div className="hidden md:flex animate-bounce">
              <ArrowDown size={32} className="text-neutral-800 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SCROLL-DRIVEN PROJECT MOCKUP */}
      <ScrollProjectMockup projects={featuredProjects} />

      {/* 3. ASYMMETRIC PROJECT GALLERY */}
      <AsymmetricGallery projects={projects} />

      {/* 4. IMMERSIVE SERVICES */}
      <HoverServices />

      {/* 5. FULLSCREEN PROJECT STORY */}
      {/* Pick a specific detailed project for the story section */}
      <ProjectStory project={projects[0]!} />

      {/* 6. CONTACT / FOOTER */}
      <section className="relative py-32 bg-[#E8E6E1]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-5xl md:text-[8rem] font-bold text-[#2C332A] tracking-tighter mb-12">
            LET'S TALK
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 font-mono text-sm tracking-widest text-neutral-600 uppercase">
            <a href="mailto:hello@terra.com" className="hover:text-[#A66E4E] transition-colors">
              hello@terra.com
            </a>
            <span className="hidden md:block w-2 h-2 rounded-full bg-[#A66E4E]" />
            <a href="tel:+905550000000" className="hover:text-[#A66E4E] transition-colors">
              +90 555 000 00 00
            </a>
            <span className="hidden md:block w-2 h-2 rounded-full bg-[#A66E4E]" />
            <span>ISTANBUL, TR</span>
          </div>
        </div>
      </section>
    </div>
  );
}
