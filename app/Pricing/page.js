import Footer from "@/components/Services/Footer";
import Navbar from "@/components/Services/Navbar";
import Process from "@/components/Services/Process";
import Link from "next/link";
import React from "react";

export default function Pricing() {
  const pricing = [
    {
      title: "Starter Identity",
      des: "For early-stage projects that need a clean, professional brand. Includes:",
      features: [
        "Primary logo",
        "Color palette",
        "Typography selection",
        "Basic mockups",
        "Light brand guide",
      ],
      bt: "Launch with confidence.",
    },
    {
      title: "Full Brand System",
      des: "The complete foundation for a scalable brand. Includes:",
      features: [
        "Full logo suite (primary, secondary, symbol)",
        "Advanced color systems",
        "Typography hierarchy",
        "Brand universe & visual direction",
        "Tone of voice fundamentals",
        "15–20 premium mockups",
        "Full brand guidelines",
      ],
      bt: "Build a system that can grow with you.",
    },
    {
      title: "Proton Premium",
      des: "Your brand, fully realized and ready to dominate. Includes:",
      features: [
        "Everything in Full Brand System",
        "Comprehensive messaging & communication framework",
        "Social media identity kit",
        "Product/packaging mockups",
        "Pitch deck templates",
        "Launch visuals",
        "Long-term support & revisions",
      ],
      bt: "A top-tier identity ready for marketing, launch, and growth.",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="px-6 py-16">
        {/* top heading + description, left aligned */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl mb-3 font-mono">Pricing</h1>
          <p className="text-base md:text-lg text-gray-600">
            Clear packages. Transparent deliverables. No hidden complexity.
          </p>
        </div>

        {/* pricing cards – one per row */}
        <div className="flex flex-col gap-10">
          {pricing.map((item, index) => (
            <div
              key={index}
              className="bg-[#EEFF00] p-8 shadow-xl hover:shadow-2xl flex flex-col gap-4 rounded-0 "
            >
              <h2 className="text-xl md:text-2xl font-semibold">
                {item.title}
              </h2>
              <p className="text-sm md:text-base text-gray-700">{item.des}</p>

              <ul className="mt-2 space-y-2 text-sm md:text-base text-gray-900">
                {item.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              <button className="mt-4 self-start rounded-full border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition">
                {item.bt}
              </button>
            </div>
          ))}
        </div>
      </section>
      <Process />
      <div className="w-full p-20 flex flex-col items-center gap-20 md:mt-20">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Ready To Build Your Brand ?
        </h1>
        <Link
          href="/Contact"
          className="bg-black px-10 py-3 text-[#EEFF00] rounded-2xl font-bold inline-block"
        >
          Get Started
        </Link>
      </div>
      <Footer />
    </>
  );
}
