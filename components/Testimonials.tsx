"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";

const testimonials = [
  {
    name: "Dr. Samir Hale",
    role: "Medical Director",
    text: "Dr. Zulqarnain brings a rare combination of clinical precision and human clarity. His presence changes the tone of a room."
  },
  {
    name: "Mina Farouk",
    role: "Former student",
    text: "She teaches difficult ideas with calm confidence. You leave feeling more capable, not more intimidated."
  },
  {
    name: "Elena Ward",
    role: "Editor",
    text: "Her writing is thoughtful, exact, and deeply composed. Even the simplest lines stay with you."
  },
  {
    name: "Nadia Karim",
    role: "Program Lead",
    text: "She carries depth lightly. The work always feels serious, but never heavy-handed."
  },
  {
    name: "Farah Din",
    role: "Research collaborator",
    text: "Dr. Zulqarnain has a way of making complex conversations feel calm, exact, and unexpectedly generous."
  },
  {
    name: "Omar Yusuf",
    role: "Workshop host",
    text: "Her sessions stay with people because they feel precise without ever losing warmth."
  }
];

function TestimonialStrip({
  items,
  direction
}: {
  items: typeof testimonials;
  direction: "left" | "right";
}) {
  const looped = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max gap-10"
        animate={{ x: direction === "left" ? ["0%", "-25%"] : ["-25%", "0%"] }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      >
        {looped.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="w-[17rem] shrink-0 pb-3 text-left sm:w-[19rem] lg:w-[21rem]"
          >
            <p className="text-[0.86rem] leading-6 text-slate-600">{item.text}</p>
            <div className="mt-3 flex items-center gap-2 text-[0.78rem] text-slate-400">
              <span className="font-medium text-slate-700">{item.name}</span>
              <span>•</span>
              <span>{item.role}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-shell section-spacing pt-2 sm:pt-4">
      <SectionReveal>
        <div className="mb-8">
          <p className="eyebrow mb-4">Testimonials</p>
          <h2 className="section-title max-w-2xl">A few kind words from people who have learned, worked, and created alongside me.</h2>
        </div>

        <div className="space-y-8">
          <TestimonialStrip items={testimonials.slice(0, 2)} direction="left" />
          <TestimonialStrip items={testimonials.slice(2)} direction="right" />
          <TestimonialStrip items={testimonials.slice(4)} direction="left" />
        </div>
      </SectionReveal>
    </section>
  );
}
