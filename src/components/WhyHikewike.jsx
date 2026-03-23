import React from "react";
import { UserCheck, Flag, UserCog, BarChart2, HandMetal } from "lucide-react";
import { rgba } from "framer-motion";

const reasons = [
  {
    icon: "/1TsYn8t17L3k342Yuh.mp4",
    title: "Solo but solid.",
    desc: (
      <>
        Ladies, you’re good to go. No waiting on anyone. Just book, pack, and
        wander freely with total peace of mind.
      </>
    ),
  },
  {
    icon: "/z39u85k44eF2Ud39Q8.mp4",
    title: "We’re your green signal.",
    desc: "From handpicked stays to safe rides and pro guides, we keep things smooth, secure and totally stress-free.",
  },
  {
    icon: "/jZ88oggY5324FZ9Y5b.mp4",
    title: "Our Captains = Vibe Gurus.",
    desc: "More than leaders, they’re your adventure buddies, energy boosters and all-round good-vibes crew.",
  },
  {
    icon: "/5e2MW0k74a1bDhRRJI.mp4",
    title: "No unwanted extras.",
    desc: "Forget shady fees and middlemen. Book direct, pay fair and get all the help you need with no surprises.",
  },
  {
    icon: "/bQ3R749e3owiVu4Y4k.mp4",
    title: "Good vibes only.",
    desc: "We match age groups and energy levels so your journey feels right, sounds right and vibes just right.",
  },
];

export default function ReasonsToTravel() {
  return (
    <section className="relative bg-[#050021] font-parkinsans pb-16  pt-12 ">
      <div className="   py-8  relative z-10">
        {/* ==== THE CHIP IS PLACED HERE ==== */}
        <div className="text-center">
          <span
            className=" 
      backdrop-blur-xl
      shadow-lg
      rounded-full
      px-5 py-2
      inline-block
      mb-3
    "
            style={{
              background: "rgba(255,255,255,0.10)",
            }}
          >
            <h1 className="text-white">We are the best ✌️</h1>
          </span>
        </div>

        {/* ==== CHIP ENDS HERE ==== */}

        <h2 className="text-[30px]   text-white font-bold text-center mb-10">
          Why We’re Your Ultimate Travel Buddy
        </h2>
        {/* Flex parent, flex-wrap for responsive wrapping */}
        <div className="flex flex-wrap gap-5 md:px-0 px-3 justify-center">
          {/* Top row (3 cards) */}
          <div className="w-full flex flex-col md:flex-row gap-5 justify-center">
            <ReasonCard {...reasons[0]} />
            <ReasonCard {...reasons[1]} />
            <ReasonCard {...reasons[2]} />
          </div>
          {/* Bottom row (2 cards) -- centered, align as in screenshot */}
          <div className="w-full flex flex-col md:flex-row gap-5 justify-center">
            <ReasonCard {...reasons[3]} />
            <ReasonCard {...reasons[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ icon, title, desc }) {
  return (
    <div className="flex-shrink-0 bg-white font-parkinsans rounded-2xl shadow-sm md:p-7 p-3 py-4 justify-center flex items-start gap-4 w-full md:w-[360px] xl:w-[410px]">
      <div className="shrink-0 grid place-items-center rounded-xl w-32 h-32">
        <video
          src={icon}
          className="md:w-32 md:h-32  object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
      <div className="grid place-items-start">
        <h3 className="font-bold text-md md:text-lg font-parkinsans md:leading-6 mb-1">
          {title}
        </h3>
        <p className="text-gray-700 text-[13px] leading-snug">{desc}</p>
      </div>
    </div>
  );
}
