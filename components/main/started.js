import Link from "next/link";
import React from "react";

export default function Started() {
  const options = [
    { des: "Strong identity across all platforms" },
    { des: "Recognizable from day one" },
    { des: "Clear messaging and tone" },
  ];

  return (
    <section className="px-6 py-16 space-y-10 flex flex-col gap-20">
      <h1 className="text-5xl text-center">Branding that just works...</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {options.map((item, index) => (
          <div
            key={index}
            className="p-10 w-60 flex items-center justify-center h-55 border-1  text-center text-xl rounded-full bg-[#EEFF00] text-black font-medium"
          >
            {item.des}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-20">
        <h2 className="text-4xl font-bold text-center">
          Ready to build your brand?
        </h2>
        <Link
          href="/Contact"
          className="bg-black px-10 py-3 text-[#EEFF00] rounded-2xl font-bold inline-block"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
