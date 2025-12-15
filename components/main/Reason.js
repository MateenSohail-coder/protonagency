import Image from "next/image";
import React from "react";

const reasons = [
  {
    title: "Precision",
    desc: "Every visual element is intentional. Nothing random.",
    icon: "/precision.png",
  },
  {
    title: "Consistency",
    desc: "A full system you can use everywhere without guessing.",
    icon: "/consistency.png",
  },
  {
    title: "Emotion",
    desc: "Design that makes people feel something immediately.",
    icon: "/emotion.png",
  },
  {
    title: "Speed & Clarity",
    desc: "Fast communication, clear deliverables, no confusion.",
    icon: "/speed.png",
  },
];

export default function Reason() {
  return (
    <section className=" mt-15 md:mt-40">
      {/* Mountains (taller, same #EEFF00 color) */}
      <div className="bg-[#EEFF00]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 260" // taller viewBox
          className="w-full h-[180px] rotate-180"
          preserveAspectRatio="none"
        >
          <polyline
            // increased Y-difference between peaks/valleys for more height
            points="0,260 80,80 160,260 260,40 360,260 460,90 560,260 660,70 760,260 860,110 960,260 1080,40 1200,260 1320,80 1440,260"
            fill="white"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
      </div>

      <section className="bg-[#EEFF00] px-6 pt-10 pb-16">
        <div className="text-4xl  mb-50 text-center">
          Why <b>Proton ?</b>
        </div>

        {/* vertical cards */}
        <div className="w-full flex flex-col items-center gap-20">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-md text-center gap-4  px-6 py-6 "
            >
              <div className="h-30 w-30 relative">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="font-semibold text-xl">{item.title}</div>
              <div className="font-medium text-gray-600 w-50">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
