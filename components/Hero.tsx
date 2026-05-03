"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const actions = [
  {
    label: "Online Consultation",
    href: "https://www.marham.pk/doctors/bahawalpur/general-physician/dr-zulqarnain-haider-khan",
    primary: true,
    external: true
  },
  { label: "Email", href: "mailto:zhyderkhan940@gmail.com", icon: "mail" },
  { label: "YouTube", href: "https://www.youtube.com/@leilamaren", external: true, icon: "youtube" },
  { label: "Facebook", href: "https://www.facebook.com", external: true, icon: "facebook" },
  { label: "LinkedIn", href: "https://www.linkedin.com", external: true, icon: "linkedin" }
];

function ProfileAvatar({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.35rem] bg-slate-100 ${
        compact ? "h-full w-full" : "h-16 w-16 shrink-0 sm:h-[4.25rem] sm:w-[4.25rem]"
      }`}
    >
      <Image
        src="/avatar-dr-zulqarnain.jpeg"
        alt="Dr. Zulqarnain Haider Khan"
        fill
        sizes={compact ? "48px" : "(min-width: 640px) 68px, 64px"}
        className="object-cover object-top"
      />
    </div>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3.75 6.75h16.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V6.75Z" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5.5" width="17" height="13" rx="3" />
      <path d="m10.5 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.5 8.5h2V5.5h-2.4c-2.6 0-4.1 1.5-4.1 4.3v1.7H8v3h2v4.5h3.2v-4.5h2.6l.4-3h-3V10c0-.9.3-1.5 1.3-1.5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M8.2 10.2V16" />
      <path d="M8.2 8.2h.01" />
      <path d="M12 16v-3.4c0-1.4.8-2.4 2-2.4 1.2 0 1.8.8 1.8 2.4V16" />
      <path d="M12 10.2V16" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="section-shell pt-7 sm:pt-8 lg:pt-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[42rem]"
      >
        <div className="flex flex-col gap-4.5">
          <div className="relative w-fit">
            <ProfileAvatar />
          </div>

          <div className="max-w-[34rem]">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-[1.38rem] font-semibold tracking-[-0.04em] text-slate-900 sm:text-[1.8rem]">
                Dr. Zulqarnain Haider Khan
              </h1>
            </div>
            <p className="mt-1.5 text-[0.84rem] font-normal text-slate-500 sm:text-[0.92rem]">
              Doctor • Teacher • Poet
            </p>
            <p className="mt-2.5 max-w-[33rem] text-[0.88rem] leading-6 text-slate-600 sm:text-[0.95rem]">
              Focused on healing, teaching, and writing with the same calm attention to clarity, language, and human experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-0.5">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noreferrer" : undefined}
                aria-label={action.label}
                className={
                  action.primary
                    ? "inline-flex min-w-[7.6rem] items-center justify-center rounded-[0.85rem] bg-[#111111] px-3.5 py-2 text-[0.84rem] font-semibold !text-white shadow-[0_8px_18px_rgba(15,23,42,0.12)] transition duration-200 hover:-translate-y-0.5 hover:bg-black"
                    : "inline-flex h-9 w-9 items-center justify-center rounded-[0.85rem] bg-white text-slate-800 shadow-[0_6px_14px_rgba(15,23,42,0.05)] ring-1 ring-slate-200/80 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
                }
              >
                {action.primary ? (
                  action.label
                ) : action.icon === "mail" ? (
                  <MailIcon />
                ) : action.icon === "facebook" ? (
                  <FacebookIcon />
                ) : action.icon === "linkedin" ? (
                  <LinkedInIcon />
                ) : (
                  <PlayIcon />
                )}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export { ProfileAvatar };
