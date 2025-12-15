import Navbar from "@/components/Services/Navbar";
import Process from "@/components/Services/Process";
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
    },
    {
      title: "Premium Identity",
      des: "For brands ready to invest in a complete, scalable visual system. Includes:",
      features: [
        "Primary + secondary logos",
        "Extended color system",
        "Typography system",
        "Advanced mockups",
        "Full brand guidelines",
        "Social media kit",
        "Presentation templates",
        "Icon set",
        "Usage do's and don'ts",
      ],
    },
    {
      title: "Growth Identity",
      des: "For teams that need a strong base identity plus room to evolve.",
      features: [
        "Primary + secondary logos",
        "Extended color system",
        "Typography system",
        "Core mockups",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <section className="px-6 py-16">
        {/* top heading + description, left aligned */}
        <div className="max-w-3xl mb-10">
          <h1 className="text-4xl md:text-6xl  mb-3 font-mono">Pricing</h1>
          <p className="text-base md:text-lg text-gray-600">
            Clear packages. Transparent deliverables. No hidden complexity.
          </p>
        </div>

        {/* pricing cards – one per row */}
        <div className="flex flex-col gap-30">
          {pricing.map((item, index) => (
            <div
              key={index}
              className="rounded-0 bg-[#EEFF00] p-8 shadow-sm flex flex-col gap-4"
            >
              <h2 className="text-xl md:text-2xl font-semibold">
                {item.title}
              </h2>
              <p className="text-sm md:text-base text-gray-600">{item.des}</p>

              <ul className="mt-2 space-y-2 text-sm md:text-base text-gray-800">
                {item.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              <button className="mt-4 self-start rounded-full border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition">
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </section>
      <Process />
    </>
  );
}
