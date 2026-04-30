import SectionReveal from "@/components/SectionReveal";

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  accent: string;
};

const experience: ExperienceItem[] = [
  {
    period: "2023 - Present",
    role: "Physician and educator",
    company: "Private Practice",
    description:
      "Leading patient care, mentoring young clinicians, and shaping a calmer approach to communication in medicine.",
    accent: "bg-emerald-400"
  },
  {
    period: "2020 - 2023",
    role: "Lecturer in ethics and communication",
    company: "Medical Faculty",
    description:
      "Designed seminars and teaching sessions focused on listening, language, ethics, and human-centered care.",
    accent: "bg-sky-400"
  },
  {
    period: "2018 - Present",
    role: "Poet and YouTube creator",
    company: "Independent",
    description:
      "Publishing poems and producing reflective video essays on medicine, culture, teaching, and ordinary life.",
    accent: "bg-violet-400"
  },
  {
    period: "2016 - 2018",
    role: "Resident physician",
    company: "University Hospital",
    description:
      "Built early clinical experience across hospital care, case-based learning, and collaborative medical practice.",
    accent: "bg-amber-400"
  }
];

function CompanyBadge({ accent }: { accent: string }) {
  return (
    <span
      className={`inline-flex h-8 w-8 items-center justify-center rounded-[0.8rem] ${accent} text-xs font-semibold text-white shadow-sm`}
    >
      ●
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-shell section-spacing pt-2 sm:pt-4">
      <SectionReveal className="py-2">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Experience</p>
          <h2 className="section-title max-w-2xl">A body of work shaped across medicine, teaching, and creative practice.</h2>
        </div>

        <div className="mt-12">
          <div className="hidden grid-cols-1 gap-5 border-b border-slate-200/80 pb-4 md:grid md:grid-cols-[200px_1fr] md:gap-12">
            <p className="text-[0.78rem] font-medium uppercase tracking-[0.08em] text-slate-400">Period</p>
            <p className="pl-0 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-slate-400 md:pl-6">Summary</p>
          </div>

          <div>
            {experience.map((item, index) => (
              <div
                key={`${item.role}-${item.company}`}
                className={`grid grid-cols-1 gap-4 py-6 md:grid-cols-[200px_1fr] md:gap-12 md:py-8 ${
                  index !== experience.length - 1 ? "border-b border-slate-200/70" : ""
                }`}
              >
                <div>
                  <p className="text-[0.92rem] font-normal text-slate-500 sm:text-[0.98rem]">{item.period}</p>
                </div>

                <div className="max-w-2xl md:pl-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-[0.95rem] font-medium tracking-[-0.015em] text-slate-900 sm:text-[1rem]">
                      {item.role}
                    </p>
                    <span className="text-[0.95rem] font-medium tracking-[-0.015em] text-slate-900">at</span>
                    <div className="inline-flex items-center gap-3">
                      <CompanyBadge accent={item.accent} />
                      <span className="text-[0.95rem] font-medium tracking-[-0.015em] text-slate-900 sm:text-[1rem]">
                        {item.company}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2.5 max-w-xl text-[0.88rem] leading-6 text-slate-500 sm:text-[0.92rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
