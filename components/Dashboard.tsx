"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ProfileAvatar } from "@/components/Hero";
import { poems } from "@/components/poems";
import SectionReveal from "@/components/SectionReveal";

const poetryIcons = ["📜", "🖋", "✨", "🌙", "🍃"] as const;

type BentoCardProps = {
  title?: string;
  eyebrow?: string;
  className?: string;
  children: React.ReactNode;
  hideHeader?: boolean;
};

function BentoCard({ title, eyebrow, className = "", children, hideHeader = false }: BentoCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={`soft-card rounded-[1.5rem] p-4 sm:p-5 ${className}`}
    >
      {!hideHeader && (eyebrow || title) && (
        <div className="mb-4">
          {eyebrow ? <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-slate-400">{eyebrow}</p> : null}
          {title ? <h3 className="mt-2 text-base font-semibold tracking-[-0.02em] text-slate-900">{title}</h3> : null}
        </div>
      )}
      {children}
    </motion.article>
  );
}

function getPoemBodyClass(poem: string) {
  if (poem.length > 125) {
    return "line-clamp-5 text-[0.78rem] leading-[1.15rem]";
  }

  if (poem.length > 105) {
    return "line-clamp-5 text-[0.78rem] leading-[1.15rem]";
  }

  return "line-clamp-4 text-[0.8rem] leading-[1.15rem]";
}

function CardLines() {
  return (
    <div className="flex flex-col gap-1">
      <span className="h-[2px] w-5 rounded-full bg-slate-400/70" />
      <span className="h-[2px] w-3.5 rounded-full bg-slate-400/55" />
      <span className="h-[2px] w-2 rounded-full bg-slate-400/45" />
    </div>
  );
}

function CardIcon({ icon }: { icon: string }) {
  return (
    <div className="flex items-center justify-center text-[1.7rem] leading-none drop-shadow-[0_7px_10px_rgba(15,23,42,0.14)]">
      {icon}
    </div>
  );
}

function SpotifyLogo() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1ED760]">
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-black" fill="currentColor" aria-hidden="true">
        <path d="M16.94 15.2a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.57-1.16a.75.75 0 0 1-.33-1.46c4.6-1.04 8.53-.59 11.68 1.34.35.21.46.67.25 1.03Z" />
        <path d="M18.41 11.93a.94.94 0 0 1-1.29.31c-3.22-1.98-8.14-2.55-11.95-1.38a.94.94 0 1 1-.55-1.8c4.35-1.33 9.77-.69 13.49 1.59.44.28.58.86.3 1.28Z" />
        <path d="M18.53 8.53C14.68 6.24 8.32 6.03 4.65 7.14a1.12 1.12 0 0 1-.65-2.14c4.22-1.28 11.25-1.03 15.68 1.6a1.12 1.12 0 1 1-1.15 1.93Z" />
      </svg>
    </div>
  );
}

function MusicBars() {
  return (
    <div className="flex items-center gap-1">
      <span className="h-5 w-1 rounded-full bg-slate-200" />
      <span className="h-5 w-1 rounded-full bg-slate-200" />
      <span className="h-5 w-1 rounded-full bg-slate-200" />
    </div>
  );
}

function IndiaFlag() {
  return (
    <div className="overflow-hidden rounded-[0.2rem] shadow-sm ring-1 ring-slate-200/80">
      <div className="h-[0.3rem] w-6 bg-[#FF671F]" />
      <div className="flex h-[0.3rem] w-6 items-center justify-center bg-white">
        <div className="h-[0.22rem] w-[0.22rem] rounded-full ring-[0.6px] ring-[#1D4ED8]" />
      </div>
      <div className="h-[0.3rem] w-6 bg-[#046A38]" />
    </div>
  );
}

function GlobeArrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-300" fill="currentColor" aria-hidden="true">
      <path d="M20.76 4.82a1 1 0 0 0-1.15-.2l-14 6.04a1 1 0 0 0 .08 1.88l5.3 1.85 1.85 5.3a1 1 0 0 0 1.88.08l6.04-14a1 1 0 0 0 0-.95Z" />
    </svg>
  );
}

function DottedGlobe() {
  return (
    <div className="relative h-[10.4rem] w-[10.4rem] rounded-full bg-[radial-gradient(circle_at_40%_34%,#2b2b2b_0%,#1d1d1d_40%,#141414_72%,#0b0b0b_100%)] shadow-[0_24px_40px_rgba(15,23,42,0.28)]">
      <div className="absolute inset-[11%] rounded-full opacity-95 [background-image:radial-gradient(circle,rgba(255,255,255,0.92)_0.9px,transparent_1px)] [background-size:6px_6px]" />
      <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_65%_65%,transparent_0%,transparent_55%,rgba(0,0,0,0.82)_76%)]" />
      <div className="absolute left-[18%] top-[20%] h-[34%] w-[44%] rounded-[48%_52%_46%_54%] bg-black" />
      <div className="absolute right-[23%] top-[28%] h-[18%] w-[14%] rounded-[50%_50%_46%_54%] bg-black" />
      <div className="absolute left-[46%] top-[42%] h-[16%] w-[12%] rounded-[48%_52%_42%_58%] bg-black" />
      <div className="absolute inset-x-[7%] bottom-0 h-[16%] rounded-b-full bg-black/35 blur-xl" />
    </div>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function KyrgyzstanFlag() {
  return (
    <div className="overflow-hidden rounded-[0.2rem] shadow-sm ring-1 ring-slate-200/80">
      <div className="flex h-4 w-6 items-center justify-center bg-[#E11D48]">
        <div className="h-2.5 w-2.5 rounded-full border border-[#FDE68A]">
          <div className="relative h-full w-full">
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#FDE68A]" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#FDE68A]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const dayIndex = useMemo(() => {
    const start = new Date("2026-01-01T00:00:00Z");
    const now = new Date();
    return Math.abs(Math.floor((now.getTime() - start.getTime()) / 86400000)) % poems.length;
  }, []);
  const [poemOffset, setPoemOffset] = useState(0);
  const [isPoemHovered, setIsPoemHovered] = useState(false);
  const activePoem = poems[(dayIndex + poemOffset) % poems.length];
  const activeIcon = poetryIcons[(dayIndex + poemOffset) % poetryIcons.length];
  const hoverPreviewPoem = poems[(dayIndex + poemOffset + 1) % poems.length];
  const displayedPoem = isPoemHovered ? hoverPreviewPoem : activePoem;
  const displayedIcon = isPoemHovered
    ? poetryIcons[(dayIndex + poemOffset + 1) % poetryIcons.length]
    : activeIcon;

  return (
    <section id="dashboard" className="section-shell section-spacing">
      <SectionReveal>
        <div className="grid gap-3 md:grid-cols-2 md:gap-3.5 xl:pl-8 xl:grid-cols-[repeat(3,minmax(0,15.5rem))] xl:justify-start">
          <BentoCard hideHeader className="aspect-square min-h-[7.75rem] w-full overflow-hidden p-3 sm:min-h-[9.5rem] sm:p-4 xl:col-span-1">
            <button
              type="button"
              onClick={() => setPoemOffset((current) => (current + 1) % poems.length)}
              onMouseEnter={() => setIsPoemHovered(true)}
              onMouseLeave={() => setIsPoemHovered(false)}
              className="relative flex h-full w-full items-end overflow-hidden text-left"
              aria-label="Change displayed poem"
            >
              <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                <CardLines />
              </div>
              <div className="absolute left-3 top-[calc(50%-2.15rem)] -translate-y-1/2 sm:left-4 sm:top-[calc(50%-2.8rem)]">
                <CardIcon icon={displayedIcon} />
              </div>
              <div className="absolute right-3 top-3 h-6 w-6 overflow-hidden rounded-full sm:right-4 sm:top-4 sm:h-7 sm:w-7">
                <ProfileAvatar compact />
              </div>
              <p className={`mb-6 max-w-[70%] break-words text-slate-600 sm:mb-8 sm:max-w-[68%] ${getPoemBodyClass(displayedPoem.body)}`}>
                {displayedPoem.body}
              </p>
            </button>
          </BentoCard>

          <BentoCard hideHeader className="h-[9.25rem] overflow-hidden p-0 sm:min-h-[9.5rem] sm:h-auto xl:col-span-2">
            <div className="h-full overflow-hidden rounded-[1.2rem] bg-slate-100 sm:rounded-[1.35rem]">
              <div className="h-full sm:min-h-[9.5rem]">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/CxEI3fFL1NM?rel=0"
                  title="Featured YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </BentoCard>

          <BentoCard hideHeader className="aspect-square min-h-[7.75rem] w-full overflow-hidden p-3 sm:min-h-[9.5rem] sm:p-4">
            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open song on Spotify"
              className="flex h-full flex-col"
            >
              <div className="flex items-start justify-between">
                <SpotifyLogo />
                <MusicBars />
              </div>
              <div className="mt-12 lg:mt-4">
                <p className="text-[0.8rem] font-normal leading-4.5 text-slate-500 sm:text-[0.88rem] sm:leading-5">Farida Khanum</p>
                <p className="mt-0.5 text-[0.88rem] font-medium leading-5 text-slate-900 sm:text-[0.94rem] sm:leading-6">Aaj Jaane Ki Zid Na Karo</p>
              </div>
              <div className="mt-auto flex items-end justify-center overflow-hidden pt-0">
                <div className="relative translate-y-[28%] h-[9.2rem] w-[9.2rem] rounded-full bg-[radial-gradient(circle_at_50%_38%,#d7d0c4_0%,#c4bba8_35%,#a8a08e_62%,#8f8779_100%)] shadow-[0_10px_24px_rgba(15,23,42,0.08)] sm:h-[11.5rem] sm:w-[11.5rem]">
                  <div className="absolute inset-x-[11%] top-[18%] h-[52%] rotate-[-14deg] rounded-[0.7rem] bg-[linear-gradient(145deg,rgba(214,220,228,0.95),rgba(164,175,191,0.8))]" />
                  <div className="absolute right-[18%] top-[10%] h-[58%] w-[4px] rotate-[8deg] rounded-full bg-white/50" />
                  <div className="absolute right-[33%] top-[8%] h-[62%] w-[3px] rotate-[8deg] rounded-full bg-white/45" />
                  <div className="absolute inset-x-[36%] bottom-[2%] h-[30%] rounded-t-full border-[8px] border-white/80" />
                  <div className="absolute inset-x-[44%] bottom-[10%] h-[14%] rounded-full bg-white/95" />
                </div>
              </div>
            </a>
          </BentoCard>

          <BentoCard hideHeader className="aspect-square min-h-[7.75rem] w-full overflow-hidden p-0 sm:min-h-[9.5rem]">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-white p-3 sm:p-4">
              <div className="flex items-start justify-between lg:-mt-1.5">
                <div>
                  <LocationIcon />
                </div>
                <div>
                  <KyrgyzstanFlag />
                </div>
              </div>
              <div className="mt-6 rounded-[0.8rem] bg-[linear-gradient(180deg,#f8fafc,#f1f5f9)] p-2 sm:mt-7 sm:rounded-[0.9rem] sm:p-2.5">
                <div className="relative h-[3.7rem] overflow-hidden rounded-[0.75rem] bg-white/65 sm:h-[4.8rem] sm:rounded-[0.85rem]">
                  <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] [background-size:1.65rem_1.65rem]" />
                  <div className="absolute left-[10%] top-[22%] h-[2px] w-[38%] rotate-[11deg] rounded-full bg-slate-300/85" />
                  <div className="absolute left-[28%] top-[16%] h-[2px] w-[44%] -rotate-[16deg] rounded-full bg-slate-300/85" />
                  <div className="absolute left-[18%] top-[51%] h-[2px] w-[56%] rotate-[-6deg] rounded-full bg-slate-300/90" />
                  <div className="absolute left-[54%] top-[31%] h-[26%] w-[18%] rounded-[58%_42%_60%_40%] border border-dashed border-slate-300/85" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 shadow-[0_8px_16px_rgba(15,23,42,0.14)]">
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                    <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300/70" />
                  </div>
                </div>
              </div>
              <div className="mt-auto flex flex-1 items-center">
                <div>
                <p className="text-[0.8rem] font-medium leading-4.5 text-slate-900/75 sm:text-[0.88rem]">Bishkek, Kyrgyzstan</p>
                <p className="mt-0.5 text-[0.72rem] leading-4 text-slate-900/60 sm:mt-1 sm:text-[0.78rem] sm:leading-4.5">22° Clear</p>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard hideHeader className="hidden aspect-square min-h-[7.75rem] w-full p-3 sm:block sm:min-h-[9.5rem] sm:p-4">
            <div className="flex h-full items-center">
              <p className="text-[0.78rem] leading-4.5 text-slate-600 sm:text-[0.84rem] sm:leading-[1.35rem]">
                Clinical work shaped by trust, precision, and the belief that good care is as much about listening as it
                is about diagnosis.
              </p>
            </div>
          </BentoCard>
        </div>
      </SectionReveal>
    </section>
  );
}
