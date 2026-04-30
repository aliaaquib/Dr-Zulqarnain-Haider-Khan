import SectionReveal from "@/components/SectionReveal";

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

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M16.8 7.6h.01" />
    </svg>
  );
}

function SignatureMark() {
  return (
    <svg viewBox="0 0 420 150" className="h-auto w-[15rem] sm:w-[18rem] lg:w-[21rem]" fill="none">
      <path
        d="M35 103c17-54 38-80 50-80 7 0 10 11 10 31 0 21-3 47-3 73 0-48 13-73 33-73 11 0 17 8 19 24 2 13 1 33 1 49 0-31 7-48 23-48 12 0 18 15 18 32 0 7-1 12-2 18 0-20 5-35 15-35 12 0 17 21 17 37 0 11-4 20-12 20-9 0-12-13-12-24 0-10 4-20 10-20 8 0 12 12 12 22 0 16-6 29-19 29-10 0-19-10-21-31 0 17 0 33 10 33 9 0 13-18 13-33 0-24 8-42 23-42 11 0 18 9 18 20 0 17-16 27-24 34 12-1 25 0 41 0"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const socials = [
  { label: "Email", href: "mailto:hello@leilamaren.com", icon: MailIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: LinkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com", icon: InstagramIcon }
];

export default function Footer() {
  return (
    <footer className="section-shell pb-10 pt-12 sm:pb-14 sm:pt-16">
      <SectionReveal className="flex flex-col items-center text-center">
        <div className="text-slate-900">
          <SignatureMark />
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
