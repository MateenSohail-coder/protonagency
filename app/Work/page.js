import Footer from "@/components/Services/Footer";
import Navbar from "@/components/Services/Navbar";
import Image from "next/image";
import React from "react";

export default function Work() {
  const work = [
    {
      pic: "/alpha.jpg",
      name: "Brand Alpha",
      des: "A bold visual system for a modern SaaS product.",
    },
    {
      pic: "/studio.avif",
      name: "Studio Beta",
      des: "Minimal, expressive identity for a creative studio.",
    },
    {
      pic: "/gamma.avif",
      name: "Retail Gamma",
      des: "Warm, structured branding for a lifestyle retail brand.",
    },
    {
      pic: "/delta.avif",
      name: "Project Delta",
      des: "Clean, structured identity for a tech-focused brand.",
    },
  ];

  const testimonials = [
    {
      pic: "/avatar.avif",
      name: "Alex Johnson · Founder at Brand Alpha",
      des: "Proton delivered a brand that feels clear, confident, and ready to scale.",
    },
    {
      pic: "/avatar.avif",
      name: "Maria Lopez · Creative Director at Studio Beta",
      des: "The identity system gave our team clarity and a strong visual language.",
    },
    {
      pic: "/avatar.avif",
      name: "Jordan Kim · Head of Marketing at Retail Gamma",
      des: "Our new identity made launches smoother and communication more cohesive.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="px-6 py-16 md:px-12 lg:px-24 space-y-20">
        {/* Our Work */}
        <div className="space-y-10">
          <header className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
              Our Work
            </h1>
            <p className="max-w-2xl text-sm md:text-base text-gray-600">
              A selection of recent identities crafted for teams that value
              clarity, consistency, and bold visual systems.
            </p>
          </header>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 justify-items-center">
            {work.map((item, index) => (
              <article
                key={index}
                className="w-full max-w-sm flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xl">
                  <Image
                    src={item.pic}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.des}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-10">
          <header className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Feedback
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Testimonials
            </h2>
            <p className="max-w-2xl text-sm md:text-base text-gray-600">
              Teams that work with Proton value long-term clarity and a brand
              system that scales with their ambitions.
            </p>
          </header>

          <div className="flex flex-col gap-6">
            {testimonials.map((item, index) => (
              <figure
                key={index}
                className="flex items-start gap-4 rounded-0 bg-[#EEFF00] border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* small pic on side */}
                <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-full flex-shrink-0 border border-black/10">
                  <Image
                    src={item.pic}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* text block: description on top, name below */}
                <div className="flex flex-col gap-2">
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                    “{item.des}”
                  </p>
                  <figcaption className="text-xs md:text-sm font-semibold text-gray-900">
                    {item.name}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
