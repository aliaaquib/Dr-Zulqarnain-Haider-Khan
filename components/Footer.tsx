import SectionReveal from "@/components/SectionReveal";
import Image from "next/image";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3.75 6.75h16.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V6.75Z" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M8.2 10.2V16" />
      <path d="M8.2 8.2h.01" />
      <path d="M12 16v-3.4c0-1.4.8-2.4 2-2.4 1.2 0 1.8.8 1.8 2.4V16" />
      <path d="M12 10.2V16" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
    </svg>
  );
}

const socials = [
  { label: "Email", href: "mailto:zhyderkhan940@gmail.com", icon: MailIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: LinkedInIcon },
  {
    label: "Online Consultation",
    href: "https://www.marham.pk/doctors/bahawalpur/general-physician/dr-zulqarnain-haider-khan",
    icon: ExternalLinkIcon
  }
];

export default function Footer() {
  return (
    <footer className="section-shell pb-10 pt-12 sm:pb-14 sm:pt-16">
      <SectionReveal className="flex flex-col items-center text-center">
        <div className="relative h-[12rem] w-[12rem] sm:h-[13.5rem] sm:w-[13.5rem]">
          <Image
            src="/footer-logo.png"
            alt="Medical logo"
            fill
            sizes="(min-width: 640px) 216px, 192px"
            className="object-contain"
          />
        </div>

        <div className="mt-10 flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={social.label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] bg-white text-slate-800 shadow-[0_8px_18px_rgba(15,23,42,0.07)] ring-1 ring-slate-200/80 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <p className="mt-20 text-[0.96rem] text-slate-500 sm:text-[1.05rem]">© 2026 · Dr. Zulqarnain Haider Khan</p>
      </SectionReveal>
    </footer>
  );
}
