import Image from "next/image";
import React from "react";

export default function () {
  const services = [
    {
      title: "Logo Design",
      description:
        "Distinct marks built to scale across screens, packaging, and print.",
    },
    {
      title: "Brand Identity Systems",
      description:
        "Color palettes, typography, spacing systems, iconography, and guidelines that keep your brand consistent everywhere.",
    },
    {
      title: "Brand Universe & Visual Direction",
      description:
        "Moodboards, style direction, and storytelling that define how your brand feels and communicates.",
    },
    {
      title: "Tone of Voice & Messaging",
      description:
        "Clear, consistent language for websites, ads, social posts, and internal communication.",
    },
    {
      title: "Mockups & Brand Kits",
      description:
        "Realistic product mockups, social templates, and ready-to-use assets.",
    },
  ];
  return (
    <section className="md:mt-40 mt-20 px-10 flex flex-col gap-30">
      <div className="flex flex-col  gap-2">
        <h1 className="text-4xl font-semibold">What We Do</h1>
        <p className="font-medium text-xl text-gray-500">
          Complete Branding, Done Right
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#EEFF00] flex flex-col md:flex-row items-start md:items-center gap-4 p-6 md:p-8 rounded-0 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Text Content */}
            <div className="flex flex-col gap-2">
              <div className="title font-bold text-xl md:text-2xl text-gray-900">
                ⬩ {service.title}
              </div>
              <div className="des font-medium text-gray-600 text-sm md:text-base">
                {service.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
