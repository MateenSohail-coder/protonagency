import React from "react";

export default function ContactProcess() {
  const steps = [
    {
      number: 1,
      title: "Contact Us",
      text: "Fill out a short form and share what you need help with.",
    },
    {
      number: 2,
      title: "Schedule a Meeting",
      text: "We talk through your goals, audience, and competitive landscape.",
    },
    {
      number: 3,
      title: "Begin the Branding Process",
      text: "We start building your brand universe and identity system.",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-start px-6  bg-white">
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-mono mb-10">
          Build Your Brand with Proton
        </h1>

        {/* Steps */}
        <div className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start gap-4">
              {/* Left: circle + vertical line */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center text-2xl w-16 h-16 rounded-full bg-[#EEFF00] border border-black font-semibold">
                  {step.number}
                </div>

                {/* line only between items, not after last */}
                {index !== steps.length - 1 && (
                  <div className="w-px h-10 bg-black mt-1" />
                )}
              </div>

              {/* Right: text */}
              <div className="space-y-1">
                <b className="text-sm md:text-base ">{step.title}</b>
                <p className="text-sm md:text-base text-gray-700">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
