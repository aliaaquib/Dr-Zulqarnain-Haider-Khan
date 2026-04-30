"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "@/components/SectionReveal";

type BoardItem = {
  id: string;
  type: "photo" | "video" | "note" | "emoji";
  emoji?: string;
  src?: string;
  alt?: string;
  width: string;
  height: string;
  top: string;
  left: string;
  rotate: number;
  zIndex: number;
};

const boardItems: BoardItem[] = [
  {
    id: "group-photo",
    type: "photo",
    src: "https://picsum.photos/seed/teaching-circle/900/700",
    alt: "Group gathering",
    width: "w-[8rem] sm:w-[9.5rem] lg:w-[11.5rem]",
    height: "h-[7rem] sm:h-[8.25rem] lg:h-[9.5rem]",
    top: "7%",
    left: "10%",
    rotate: -6,
    zIndex: 3
  },
  {
    id: "mini-video",
    type: "video",
    src: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    alt: "Video thumbnail",
    width: "w-[6rem] sm:w-[7rem] lg:w-[8rem]",
    height: "h-[6rem] sm:h-[7rem] lg:h-[8rem]",
    top: "9%",
    left: "42%",
    rotate: 2,
    zIndex: 4
  },
  {
    id: "friends-photo",
    type: "photo",
    src: "https://picsum.photos/seed/friends-conference/900/700",
    alt: "Friends and colleagues",
    width: "w-[7.5rem] sm:w-[9rem] lg:w-[10.5rem]",
    height: "h-[6.5rem] sm:h-[7.75rem] lg:h-[9rem]",
    top: "6%",
    left: "69%",
    rotate: -4,
    zIndex: 3
  },
  {
    id: "notebook-photo",
    type: "photo",
    src: "https://picsum.photos/seed/notebook-desk/800/900",
    alt: "Notebook and desk",
    width: "w-[5.75rem] sm:w-[6.75rem] lg:w-[7.75rem]",
    height: "h-[6.75rem] sm:h-[7.75rem] lg:h-[9rem]",
    top: "20%",
    left: "59%",
    rotate: 6,
    zIndex: 2
  },
  {
    id: "bike-photo",
    type: "photo",
    src: "https://picsum.photos/seed/road-ride/1200/900",
    alt: "Motorcycle ride",
    width: "w-[8.75rem] sm:w-[10.5rem] lg:w-[13rem]",
    height: "h-[7.25rem] sm:h-[8.75rem] lg:h-[10.5rem]",
    top: "43%",
    left: "36%",
    rotate: -6,
    zIndex: 5
  },
  {
    id: "classroom-video",
    type: "video",
    src: "https://i.ytimg.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
    alt: "Classroom video thumbnail",
    width: "w-[5.75rem] sm:w-[6.75rem] lg:w-[8rem]",
    height: "h-[5.75rem] sm:h-[6.75rem] lg:h-[8rem]",
    top: "39%",
    left: "66%",
    rotate: -3,
    zIndex: 3
  },
  {
    id: "podcast-card",
    type: "video",
    src: "https://i.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg",
    alt: "Podcast video thumbnail",
    width: "w-[6rem] sm:w-[7.25rem] lg:w-[8.75rem]",
    height: "h-[7rem] sm:h-[8.25rem] lg:h-[9.75rem]",
    top: "35%",
    left: "6%",
    rotate: 7,
    zIndex: 2
  },
  {
    id: "reading-photo",
    type: "photo",
    src: "https://picsum.photos/seed/reading-window/900/1100",
    alt: "Reading by a window",
    width: "w-[6rem] sm:w-[7rem] lg:w-[8.5rem]",
    height: "h-[7.5rem] sm:h-[8.75rem] lg:h-[10.5rem]",
    top: "49%",
    left: "18%",
    rotate: -7,
    zIndex: 3
  },
  {
    id: "family-photo",
    type: "photo",
    src: "https://picsum.photos/seed/family-moment/900/1200",
    alt: "Family gathering",
    width: "w-[7.5rem] sm:w-[9rem] lg:w-[10.5rem]",
    height: "h-[8.75rem] sm:h-[10rem] lg:h-[11.5rem]",
    top: "63%",
    left: "9%",
    rotate: -4,
    zIndex: 2
  },
  {
    id: "travel-video",
    type: "video",
    src: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    alt: "Travel video thumbnail",
    width: "w-[5.5rem] sm:w-[6.5rem] lg:w-[7.5rem]",
    height: "h-[6.5rem] sm:h-[7.5rem] lg:h-[8.5rem]",
    top: "72%",
    left: "57%",
    rotate: 5,
    zIndex: 2
  },
  {
    id: "city-card",
    type: "video",
    src: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    alt: "City video thumbnail",
    width: "w-[6.25rem] sm:w-[7.75rem] lg:w-[9rem]",
    height: "h-[7.25rem] sm:h-[8.75rem] lg:h-[10rem]",
    top: "60%",
    left: "73%",
    rotate: 4,
    zIndex: 2
  },
  {
    id: "portrait-photo",
    type: "photo",
    src: "https://picsum.photos/seed/portrait-soft/700/900",
    alt: "Portrait moment",
    width: "w-[5.25rem] sm:w-[6.25rem] lg:w-[7.25rem]",
    height: "h-[6.25rem] sm:h-[7.25rem] lg:h-[8.5rem]",
    top: "74%",
    left: "84%",
    rotate: -5,
    zIndex: 2
  },
  {
    id: "emoji-flower",
    type: "emoji",
    emoji: "✿",
    width: "w-10",
    height: "h-10",
    top: "38%",
    left: "29%",
    rotate: -8,
    zIndex: 7
  },
  {
    id: "emoji-balloons",
    type: "emoji",
    emoji: "🎈",
    width: "w-10",
    height: "h-10",
    top: "52%",
    left: "86%",
    rotate: -2,
    zIndex: 7
  },
  {
    id: "emoji-bike",
    type: "emoji",
    emoji: "🏍️",
    width: "w-10",
    height: "h-10",
    top: "57%",
    left: "24%",
    rotate: 0,
    zIndex: 7
  }
];

function Tape() {
  return (
    <div className="absolute left-1/2 top-0 h-7 w-16 -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] rounded-[0.2rem] bg-slate-900/12 backdrop-blur-sm" />
  );
}

function MediaArt({ src, alt }: { src?: string; alt?: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1rem] bg-slate-100">
      <img src={src} alt={alt ?? ""} className="h-full w-full object-cover" />
    </div>
  );
}

function BoardCard({ item }: { item: BoardItem }) {
  if (item.type === "emoji") {
    return (
      <div className="flex h-full w-full items-center justify-center text-[1.8rem] sm:text-[2rem]">
        {item.emoji}
      </div>
    );
  }

  const media = <MediaArt src={item.src} alt={item.alt} />;

  return (
    <div className="relative h-full w-full rounded-[1.25rem] bg-white p-3 shadow-[0_18px_36px_rgba(15,23,42,0.09)]">
      <Tape />
      <div className="h-full overflow-hidden rounded-[1rem]">{media}</div>
      {item.type === "video" ? (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/88 text-sm text-slate-900 shadow-sm">
            ▶
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function About() {
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="about" className="section-shell section-spacing">
      <SectionReveal className="py-2">
        <div>
          <p className="eyebrow mb-5">About</p>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:gap-16">
            <div className="max-w-[42rem]">
              <p className="text-[0.96rem] leading-7 text-slate-600 sm:text-[1.02rem]">
                I’m drawn to the kind of work that asks for both rigor and tenderness. Medicine, teaching, and poetry
                all invite me to stay close to people, language, and the questions that don’t always have immediate
                answers.
              </p>
            </div>

            <div className="max-w-[30rem]">
              <p className="pt-1 text-[0.96rem] leading-7 text-slate-600 sm:text-[1.02rem]">
                Outside of that, I collect small moments that help me reset: long conversations, travel, notebooks,
                road scenes, and the fragments of life that make a demanding week feel personal again.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div
            ref={constraintsRef}
            className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,#FFFFFF,#F8FAFC)] shadow-[0_16px_44px_rgba(15,23,42,0.05)]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_center,rgba(148,163,184,0.12)_0,rgba(148,163,184,0.12)_8px,transparent_8px)] [background-size:88px_88px]" />
            <div className="relative min-h-[24rem] px-3 py-4 sm:min-h-[29rem] sm:px-4 sm:py-4 lg:min-h-[35rem]">
              {boardItems.map((item) => (
                <motion.div
                  key={item.id}
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0.08}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileDrag={{ scale: 1.03, rotate: item.rotate + 1, zIndex: 20 }}
                  transition={{ duration: 0.18 }}
                  className={`absolute ${item.width} ${item.height} cursor-grab active:cursor-grabbing`}
                  style={{
                    top: item.top,
                    left: item.left,
                    rotate: `${item.rotate}deg`,
                    zIndex: item.zIndex
                  }}
                >
                  <BoardCard item={item} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium tracking-[0.08em] text-slate-400 sm:text-sm">
            <span className="text-base">✣</span>
            TRY MOVING THINGS
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
